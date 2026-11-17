type AtlasPhoto = {
  src: string;
  source: string;
  artist: string;
  license: string;
  licenseUrl: string | null;
};

export const globeImageSource =
  "https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/base-topography-bathymetry/";

// Wikimedia Commons originals are resized and stored locally as WebP.
export const atlasPhotos: Partial<Record<string, AtlasPhoto>> = {
  london: {
    src: "/global/places/london.webp",
    source: "https://commons.wikimedia.org/wiki/File:London_Skyline_(125508655).jpeg",
    artist: "Ilya Grigorik",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  montreux: {
    src: "/global/places/montreux.webp",
    source:
      "https://commons.wikimedia.org/wiki/File:Montreux_(Svizzera)_Panoramica_del_centro_della_citt%C3%A0_dal_lago.jpg",
    artist: "Vaghestelledellorsa, Paolo Steffan",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  "sao-paulo": {
    src: "/global/places/sao-paulo.webp",
    source: "https://commons.wikimedia.org/wiki/File:Marginal_Pinheiros_e_Jockey_Club.jpg",
    artist: "Agent010",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  tokyo: {
    src: "/global/places/tokyo.webp",
    source: "https://commons.wikimedia.org/wiki/File:Skyscrapers_of_Shinjuku_2009_January.jpg",
    artist: "Morio",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  thailand: {
    src: "/global/places/thailand.webp",
    source: "https://commons.wikimedia.org/wiki/File:4Y1A1159_Bangkok_(33536795515).jpg",
    artist: "Ninara from Helsinki, Finland",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
  },
  "los-angeles": {
    src: "/global/places/los-angeles.webp",
    source: "https://commons.wikimedia.org/wiki/File:Los_Angeles_-_Skyline.jpg",
    artist: "Jon Sullivan",
    license: "Public domain",
    licenseUrl: null,
  },
  paris: {
    src: "/global/places/paris.webp",
    source:
      "https://commons.wikimedia.org/wiki/File:La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_ao%C3%BBt_2014_(2).jpg",
    artist: "Yann Caradec from Paris, France",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
  },
  sydney: {
    src: "/global/places/sydney.webp",
    source:
      "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_and_Harbour_Bridge_Dusk_(2)_2019-06-21.jpg",
    artist: "Benh LIEU SONG (Flickr)",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  dubai: {
    src: "/global/places/dubai.webp",
    source: "https://commons.wikimedia.org/wiki/File:The_view_of_Dubai_Creek.jpg",
    artist: "Phil6007",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  canada: {
    src: "/global/places/canada.webp",
    source: "https://commons.wikimedia.org/wiki/File:Moraine_Lake_17092005.jpg",
    artist: "Gorgo",
    license: "Public domain",
    licenseUrl: null,
  },
  japan: {
    src: "/global/places/japan.webp",
    source:
      "https://commons.wikimedia.org/wiki/File:View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
    artist: "Suicasmo",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  switzerland: {
    src: "/global/places/switzerland.webp",
    source: "https://commons.wikimedia.org/wiki/File:Vierwaldstaettersee.jpg",
    artist: "Ttrainer",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  },
};
