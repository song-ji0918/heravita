import type { AtlasPoint } from "./atlas-data";

export type GlobeSize = { width: number; height: number };

const radians = Math.PI / 180;
export const globeRadius = ({ width, height }: GlobeSize) => Math.min(width, height) * 0.43;

export function projectGlobe(point: AtlasPoint, center: AtlasPoint, size: GlobeSize) {
  if (!size.width || !size.height) return null;
  const longitude = (point[0] - center[0]) * radians;
  const latitude = point[1] * radians;
  const tilt = center[1] * radians;
  const east = Math.cos(latitude) * Math.sin(longitude);
  const north =
    Math.cos(tilt) * Math.sin(latitude) - Math.sin(tilt) * Math.cos(latitude) * Math.cos(longitude);
  const depth =
    Math.sin(tilt) * Math.sin(latitude) + Math.cos(tilt) * Math.cos(latitude) * Math.cos(longitude);
  if (depth < 0.16) return null;
  const radius = globeRadius(size);
  return {
    x: 50 + ((east * radius) / size.width) * 100,
    y: 50 - ((north * radius) / size.height) * 100,
  };
}

const VERTEX = `
  attribute vec2 position;
  void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;
const FRAGMENT = `
  precision highp float;
  uniform vec2 viewport;
  uniform vec2 center;
  uniform float radius;
  uniform sampler2D earth;
  const float pi = 3.141592653589793;
  void main() {
    vec2 screen = (gl_FragCoord.xy - viewport * 0.5) / radius;
    float distanceToCenter = length(screen);
    if (distanceToCenter >= 1.095) discard;
    vec3 sun = normalize(vec3(-0.56, 0.54, 0.83));
    vec3 sky = vec3(0.38, 0.68, 0.93);
    float litRim = smoothstep(-0.8, 0.9, dot(screen / max(distanceToCenter, 0.001), normalize(sun.xy)));
    float haze = 1.0 - smoothstep(1.0, 1.095, distanceToCenter);
    float glow = pow(haze, 2.6) * mix(0.13, 0.48, litRim);
    if (distanceToCenter >= 1.0) {
      gl_FragColor = vec4(sky, glow);
      return;
    }
    float edge = 1.0 - smoothstep(1.0 - 1.25 / radius, 1.0, distanceToCenter);
    float depth = sqrt(max(0.0, 1.0 - dot(screen, screen)));
    float sl = sin(center.x), cl = cos(center.x);
    float sp = sin(center.y), cp = cos(center.y);
    vec3 east = vec3(-sl, cl, 0.0);
    vec3 north = vec3(-sp * cl, -sp * sl, cp);
    vec3 forward = vec3(cp * cl, cp * sl, sp);
    vec3 point = east * screen.x + north * screen.y + forward * depth;
    float longitude = atan(point.y, point.x);
    float latitude = asin(clamp(point.z, -1.0, 1.0));
    // Blue Marble is an equirectangular image from the north pole to the south pole.
    vec2 uv = vec2(longitude / (2.0 * pi) + 0.5, 0.5 - latitude / pi);
    vec3 color = texture2D(earth, uv).rgb;
    vec3 normal = vec3(screen, depth);
    float light = dot(normal, sun);
    color *= mix(0.43, 1.09, smoothstep(-0.36, 0.9, light));
    float air = pow(1.0 - depth, 4.6) * mix(0.17, 0.65, litRim);
    color = mix(color, sky, air);
    float opacity = edge + (1.0 - edge) * glow;
    gl_FragColor = vec4(mix(sky, color, edge / opacity), opacity);
  }
`;

export function createGlobeRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    premultipliedAlpha: false,
    powerPreference: "low-power",
  });
  if (!gl) return null;

  const program = gl.createProgram();
  const vertex = gl.createShader(gl.VERTEX_SHADER);
  const fragment = gl.createShader(gl.FRAGMENT_SHADER);
  const buffer = gl.createBuffer();
  const texture = gl.createTexture();
  const dispose = () => {
    gl.deleteTexture(texture);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
  };
  if (!program || !vertex || !fragment || !buffer || !texture) {
    dispose();
    return null;
  }
  gl.shaderSource(vertex, VERTEX);
  gl.compileShader(vertex);
  gl.shaderSource(fragment, FRAGMENT);
  gl.compileShader(fragment);
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    dispose();
    return null;
  }

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const viewport = gl.getUniformLocation(program, "viewport");
  const center = gl.getUniformLocation(program, "center");
  const radius = gl.getUniformLocation(program, "radius");
  return {
    load(image: HTMLImageElement) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      return gl.getError() === gl.NO_ERROR;
    },
    draw(size: GlobeSize, point: AtlasPoint) {
      if (!size.width || !size.height) return;
      const ratio = Math.min(window.devicePixelRatio, 1.75);
      const width = Math.max(1, Math.round(size.width * ratio));
      const height = Math.max(1, Math.round(size.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
      gl.uniform2f(viewport, width, height);
      gl.uniform2f(center, point[0] * radians, point[1] * radians);
      gl.uniform1f(radius, globeRadius(size) * ratio);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    dispose,
  };
}
