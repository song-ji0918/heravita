import { useCallback, useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Globe2, MapPin, Map as MapIcon, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GLOBAL_LAYER_IDS, type GlobalLayerId } from "@/original/pages/Global/assets";
import {
  ATLAS_COPY,
  ATLAS_DEFAULT_PLACE,
  ATLAS_LAYERS,
  ATLAS_PLACES,
  ATLAS_VIEWS,
  REGION_POINTS,
  atlasPlaceCount,
  atlasText,
  mapPosition,
  type AtlasPlace,
  type AtlasPoint,
  type AtlasRegion,
  type AtlasView,
} from "./atlas-data";
import AtlasGlobe from "./AtlasGlobe";
import AtlasPhotography from "./AtlasPhotography";
import { atlasPhotos, globeImageSource } from "./atlas-photos";
import "./global-atlas.css";

type Project = (point: AtlasPoint) => { x: number; y: number } | null;

gsap.registerPlugin(useGSAP, Flip);

const BASE_IMAGE_POSITIONS: Record<string, string> = {
  phuket: "56% 55%",
  milan: "54% 50%",
  sedona: "43% 50%",
};
const atlasPlaceNames = new Map(
  Object.values(ATLAS_PLACES)
    .flat()
    .map((place) => [place.id, place.name]),
);

function MapSurface({ view, children }: { view: AtlasView; children?: ReactNode }) {
  const [west, east, south, north] = ATLAS_VIEWS[view].bounds;
  const [worldWest, worldEast, worldSouth, worldNorth] = ATLAS_VIEWS.world.bounds;
  const width = east - west;
  const height = north - south;
  return (
    <div className="hv-atlas-map" dir="ltr" style={{ aspectRatio: width / height }}>
      <img
        className="hv-atlas-map__land"
        src="/global/atlas-land.webp"
        alt=""
        draggable={false}
        style={{
          left: `${((worldWest - west) / width) * 100}%`,
          top: `${((north - worldNorth) / height) * 100}%`,
          width: `${((worldEast - worldWest) / width) * 100}%`,
          height: `${((worldNorth - worldSouth) / height) * 100}%`,
        }}
      />
      {children}
    </div>
  );
}

export default function GlobalAtlas() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "zh";
  const text = (copy: Parameters<typeof atlasText>[0]) => atlasText(copy, language);
  const [layer, setLayer] = useState<GlobalLayerId>("bases");
  const [view, setView] = useState<AtlasView>("world");
  const [placeId, setPlaceId] = useState(ATLAS_DEFAULT_PLACE.bases);
  const [worldMode, setWorldMode] = useState<"globe" | "flat">("flat");
  const [globeAvailable, setGlobeAvailable] = useState(true);
  const handleGlobeUnavailable = useCallback(() => setGlobeAvailable(false), []);
  const tabs = useRef<HTMLDivElement>(null);
  const tabLine = useRef<HTMLSpanElement>(null);
  const previousTabLine = useRef<ReturnType<typeof Flip.getState> | null>(null);
  const placeTitle = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!previousTabLine.current) return;
      Flip.from(previousTabLine.current, { duration: 0.2, ease: "power2.out", scale: true });
      previousTabLine.current = null;
    },
    { scope: tabs, dependencies: [layer], revertOnUpdate: true },
  );

  const places = ATLAS_PLACES[layer];
  const regions = [...new Set(places.map((place) => place.region))];
  const visiblePlaces = view === "world" ? places : places.filter((place) => place.region === view);
  const selected = visiblePlaces.find((place) => place.id === placeId) ?? visiblePlaces[0];
  const clustered = view === "world" && (layer === "hospitals" || layer === "resources");
  const globeMode = globeAvailable && worldMode === "globe";
  const showGlobe = view === "world" && globeMode;
  const viewName = text(ATLAS_VIEWS[view].name);
  const photo = atlasPhotos[selected.id];
  const image = selected.image
    ? { src: selected.image, position: BASE_IMAGE_POSITIONS[selected.id] }
    : photo && { src: photo.src, isAreaPhoto: true };
  const isPhuket = selected.id === "phuket";
  const placeName = text(selected.name);
  const institutionLayer = layer === "hospitals" || layer === "resources";
  const entryLabels = institutionLayer
    ? selected.entries.map((entry) => t(`globalPage.markers.${entry}`))
    : [];
  const [entryName, entryCountry] = entryLabels.length === 1 ? entryLabels[0].split(" · ") : [];
  const entryLocation = [
    placeName,
    entryCountry && entryCountry !== placeName ? entryCountry : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const regionName = text(ATLAS_VIEWS[selected.region].name);
  const detailName = isPhuket ? text(ATLAS_COPY.phuketTitle) : (entryName ?? placeName);
  const detailLocation = isPhuket
    ? text(ATLAS_COPY.phuketLocation)
    : entryName
      ? entryLocation
      : regionName;
  const entryCount = (items: readonly AtlasPlace[]) =>
    items.reduce((count, place) => count + place.entries.length, 0);
  const countLabel = (count: number) => new Intl.NumberFormat(language).format(count);
  const changeLayer = (nextLayer: GlobalLayerId) => {
    if (nextLayer === layer) return;
    if (tabLine.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      previousTabLine.current = Flip.getState(tabLine.current);
    }
    setLayer(nextLayer);
    setView("world");
    setPlaceId(ATLAS_DEFAULT_PLACE[nextLayer]);
  };
  const changeView = (nextView: AtlasView) => {
    setView(nextView);
    if (nextView !== "world" && selected.region !== nextView) {
      const firstPlace = places.find((place) => place.region === nextView);
      if (firstPlace) setPlaceId(firstPlace.id);
    }
  };
  const selectPlace = (place: AtlasPlace) => {
    setPlaceId(place.id);
  };

  const locationMarker = (place: AtlasPlace, project: Project) => {
    const position = project(place.point);
    if (!position) return null;
    const { x, y } = position;
    const active = place.id === selected.id;
    return (
      <button
        key={place.id}
        type="button"
        className="hv-atlas-pin"
        data-place={place.id}
        data-label-left={place.labelLeft || x > 70 || undefined}
        aria-label={text(place.name)}
        aria-pressed={active}
        style={{ left: `${x}%`, top: `${y}%` }}
        onClick={() => selectPlace(place)}
      >
        <span className="hv-atlas-pin__dot" />
        <span className="hv-atlas-pin__label" dir="auto">
          {text(place.name)}
        </span>
      </button>
    );
  };
  const regionMarker = (region: AtlasRegion, project: Project) => {
    const position = project(REGION_POINTS[region]);
    if (!position) return null;
    const { x, y } = position;
    const name = text(ATLAS_VIEWS[region].name);
    return (
      <button
        key={region}
        type="button"
        className="hv-atlas-pin hv-atlas-pin--region"
        data-region={region}
        data-label-left={x > 70 || undefined}
        aria-label={name}
        style={{ left: `${x}%`, top: `${y}%` }}
        onClick={() => changeView(region)}
      >
        <span className="hv-atlas-pin__dot">
          {countLabel(entryCount(places.filter((place) => place.region === region)))}
        </span>
        <span className="hv-atlas-pin__label" dir="auto">
          {name}
        </span>
      </button>
    );
  };

  const markers = (project: Project) =>
    clustered
      ? [
          ...regions
            .filter((region) => region !== selected.region)
            .map((region) => regionMarker(region, project)),
          locationMarker(selected, project),
        ]
      : visiblePlaces.map((place) => locationMarker(place, project));

  return (
    <section
      className="hv-atlas"
      dir={i18n.dir(language)}
      data-header-theme="light"
      data-atlas-layer={layer}
    >
      <div className="hv-atlas__wrap">
        <div className="hv-atlas__intro">
          <h1>{text(ATLAS_COPY.title)}</h1>
          <p>{text(ATLAS_COPY.intro)}</p>
        </div>

        <div
          className="hv-atlas__tabs"
          role="group"
          aria-label={text(ATLAS_COPY.categories)}
          ref={tabs}
        >
          {GLOBAL_LAYER_IDS.map((item) => (
            <button
              key={item}
              type="button"
              style={{ gridArea: item }}
              data-layer={item}
              aria-pressed={layer === item}
              onClick={() => changeLayer(item)}
            >
              {text(ATLAS_LAYERS[item])}
            </button>
          ))}
          <span
            className="hv-atlas__tab-line"
            ref={tabLine}
            aria-hidden="true"
            style={{ gridArea: layer }}
          />
        </div>

        <div className="hv-atlas__map-heading">
          <div
            className="hv-atlas__region-filter"
            role="group"
            aria-label={text(ATLAS_COPY.regions)}
          >
            <button
              type="button"
              aria-pressed={view === "world"}
              onClick={() => changeView("world")}
            >
              {text(ATLAS_VIEWS.world.name)}
            </button>
            {regions.map((region) => (
              <button
                type="button"
                key={region}
                data-region-filter={region}
                aria-pressed={view === region}
                onClick={() => changeView(region)}
              >
                {text(ATLAS_VIEWS[region].name)}
              </button>
            ))}
          </div>
          {view === "world" && globeAvailable && (
            <button
              type="button"
              className="hv-atlas__world-button"
              onClick={() => setWorldMode(showGlobe ? "flat" : "globe")}
            >
              {showGlobe ? (
                <MapIcon aria-hidden="true" size={16} strokeWidth={1.5} />
              ) : (
                <Globe2 aria-hidden="true" size={16} strokeWidth={1.5} />
              )}
              {text(showGlobe ? ATLAS_COPY.flat : ATLAS_COPY.globe)}
            </button>
          )}
        </div>
        <div className="hv-atlas__grid">
          <div className="hv-atlas__maps" data-atlas-view={view} role="group" aria-label={viewName}>
            {showGlobe ? (
              <AtlasGlobe
                focus={selected.point}
                label={text(ATLAS_COPY.globe)}
                instructions={text(ATLAS_COPY.rotate)}
                resetLabel={text(ATLAS_COPY.recenter)}
                pauseLabel={text(ATLAS_COPY.pauseSpin)}
                playLabel={text(ATLAS_COPY.playSpin)}
                onUnavailable={handleGlobeUnavailable}
              >
                {markers}
              </AtlasGlobe>
            ) : (
              <MapSurface view={view}>{markers((point) => mapPosition(point, view))}</MapSurface>
            )}
          </div>

          <aside className="hv-atlas__details" aria-label={text(ATLAS_COPY.places)}>
            <div className="hv-atlas__selection" data-selected-place={selected.id}>
              <div className="hv-atlas__selection-copy" aria-live="polite">
                <div className="hv-atlas__card-meta">
                  <p className="hv-atlas__eyebrow">{detailLocation}</p>
                  {layer === "future" && (
                    <span className="hv-atlas__planned">{text(ATLAS_COPY.planned)}</span>
                  )}
                </div>
                <h2 ref={placeTitle}>{detailName}</h2>
                {isPhuket && <p className="hv-atlas__summary">{text(ATLAS_COPY.phuketSummary)}</p>}
                {layer === "future" && (
                  <p className="hv-atlas__summary">{text(ATLAS_COPY.opening)}</p>
                )}
                {entryLabels.length > 1 && (
                  <ul className="hv-atlas__entries">
                    {entryLabels.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                )}
                {selected.link && (
                  <Link className="hv-atlas__link" to={selected.link}>
                    {text(isPhuket ? ATLAS_COPY.explore : ATLAS_COPY.regionLink)}
                    <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.65} />
                  </Link>
                )}
              </div>
              {image && (
                <AtlasPhotography
                  image={image}
                  caption={text(ATLAS_COPY.areaPhoto)}
                  title={placeTitle}
                />
              )}
            </div>
          </aside>
          <div className="hv-atlas__results">
            <div className="hv-atlas__results-heading">
              <h2>{viewName}</h2>
              <p>{atlasPlaceCount(visiblePlaces.length, language)}</p>
            </div>
            <ul className="hv-atlas__place-list">
              {visiblePlaces.map((place) => (
                <li key={place.id}>
                  <button
                    type="button"
                    data-list-place={place.id}
                    aria-pressed={place.id === selected.id}
                    onClick={() => selectPlace(place)}
                  >
                    <MapPin aria-hidden="true" size={16} strokeWidth={1.7} />
                    <span>{text(place.name)}</span>
                    {view === "world" && (
                      <span className="hv-atlas__place-region">
                        {text(ATLAS_VIEWS[place.region].name)}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <details className="hv-atlas__image-sources">
          <summary>{text(ATLAS_COPY.imageSources)}</summary>
          <ul>
            <li>
              <a href={globeImageSource} target="_blank" rel="noreferrer">
                NASA Blue Marble
              </a>
            </li>
            {Object.entries(atlasPhotos).map(([id, credit]) => {
              const name = atlasPlaceNames.get(id);
              if (!credit || !name) return null;
              return (
                <li key={id}>
                  {text(name)} ·{" "}
                  <a href={credit.source} target="_blank" rel="noreferrer">
                    {credit.artist}
                  </a>
                  {" · "}
                  {credit.licenseUrl ? (
                    <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                      {credit.license}
                    </a>
                  ) : (
                    credit.license
                  )}
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </section>
  );
}
