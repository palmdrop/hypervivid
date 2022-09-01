export default {
  "links": {
    "about": [
      {
        "from": "about",
        "to": "contact",
        "kind": "consumes",
        "strength": 0.5
      },
      {
        "from": "about",
        "to": "moons",
        "kind": "consumes",
        "strength": 0.5
      },
      {
        "from": "about",
        "to": "manifesto",
        "kind": "references",
        "strength": 0.5
      },
      {
        "from": "about",
        "to": "intro",
        "kind": "references",
        "strength": 0.5
      }
    ],
    "contact": [
      {
        "from": "contact",
        "to": "about",
        "kind": "consumed",
        "strength": 0.5
      },
      {
        "from": "contact",
        "to": "intro",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "moons": [
      {
        "from": "moons",
        "to": "about",
        "kind": "consumed",
        "strength": 0.5
      },
      {
        "from": "moons",
        "to": "ethereal-bits",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moons",
        "to": "virtual-distance",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "manifesto": [
      {
        "from": "manifesto",
        "to": "about",
        "kind": "references",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "intro",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "links",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "alien-patterns": [
      {
        "from": "alien-patterns",
        "to": "modified-noise",
        "kind": "previous",
        "strength": 0.5
      },
      {
        "from": "alien-patterns",
        "to": "objects",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-patterns",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "modified-noise": [
      {
        "from": "modified-noise",
        "to": "alien-patterns",
        "kind": "next",
        "strength": 0.5
      },
      {
        "from": "modified-noise",
        "to": "domain-warping",
        "kind": "previous",
        "strength": 0.5
      }
    ],
    "block-dissolve": [
      {
        "from": "block-dissolve",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "block-dissolve",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "immerse": [
      {
        "from": "immerse",
        "to": "block-dissolve",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "fluid-feedback",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "objects",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "immerse",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "substrate": [
      {
        "from": "substrate",
        "to": "block-dissolve",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "chaos-growth": [
      {
        "from": "chaos-growth",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "chaos-growth",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "chaos-growth",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "webfuse": [
      {
        "from": "webfuse",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "rehash-transform",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "webfuse",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "rhizome": [
      {
        "from": "rhizome",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "weave": [
      {
        "from": "weave",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "weave",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "weave",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "weave",
        "to": "rehash-transform",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "weave",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "city-pond": [
      {
        "from": "city-pond",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "city-pond",
        "to": "summer-static",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "fragfuse": [
      {
        "from": "fragfuse",
        "to": "city-pond",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "fragfuse",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "fragfuse",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "digital-biophilia": [
      {
        "from": "digital-biophilia",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "summer-static",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "digital-gardening": [
      {
        "from": "digital-gardening",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-gardening",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-gardening",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-gardening",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "moss-structure": [
      {
        "from": "moss-structure",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "swamp-mass": [
      {
        "from": "swamp-mass",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "less-flat": [
      {
        "from": "less-flat",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "domain-warping": [
      {
        "from": "domain-warping",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "modified-noise",
        "kind": "next",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "ethereal-bits": [
      {
        "from": "ethereal-bits",
        "to": "slices",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "ethereal-bits",
        "to": "moons",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "ethereal-bits",
        "to": "markup-dada",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "ethereal-bits",
        "to": "virtual-distance",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "slices": [
      {
        "from": "slices",
        "to": "ethereal-bits",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "slices",
        "to": "markup-dada",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "flat-clouds": [
      {
        "from": "flat-clouds",
        "to": "solar-landscape",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "solar-landscape": [
      {
        "from": "solar-landscape",
        "to": "flat-clouds",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "solar-landscape",
        "to": "solar-chrome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "solar-landscape",
        "to": "virtual-imprint",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "fluid-feedback": [
      {
        "from": "fluid-feedback",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "fluid-feedback",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "formations": [
      {
        "from": "formations",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "block-dissolve",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "fluid-feedback",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "virtual-imprint",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "neon-moss": [
      {
        "from": "neon-moss",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "neon-moss",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "neon-moss",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "neon-moss",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "virtual-imprint": [
      {
        "from": "virtual-imprint",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "virtual-imprint",
        "to": "retro-core",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "virtual-imprint",
        "to": "solar-chrome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "virtual-imprint",
        "to": "solar-landscape",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "hyper": [
      {
        "from": "hyper",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "rehash-transform",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "intro": [
      {
        "from": "intro",
        "to": "about",
        "kind": "references",
        "strength": 0.5
      },
      {
        "from": "intro",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "intro",
        "to": "contact",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "": [
      {
        "from": "",
        "to": "intro",
        "kind": "references",
        "strength": 0.5
      }
    ],
    "jolt-gate": [
      {
        "from": "jolt-gate",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "substrates": [
      {
        "from": "substrates",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "alien-patterns",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "latest": [],
    "links": [
      {
        "from": "links",
        "to": "rehash-transform",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "links",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "rehash-transform": [
      {
        "from": "rehash-transform",
        "to": "links",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rehash-transform",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rehash-transform",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rehash-transform",
        "to": "webfuse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "markup-dada": [
      {
        "from": "markup-dada",
        "to": "ethereal-bits",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "markup-dada",
        "to": "slices",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "markup-dada",
        "to": "virtual-distance",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "medusa-network": [
      {
        "from": "medusa-network",
        "to": "noise-construct",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "medusa-network",
        "to": "skew-bulbs",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "nest": [
      {
        "from": "nest",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "nest",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "noise-construct": [
      {
        "from": "noise-construct",
        "to": "medusa-network",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "objects": [
      {
        "from": "objects",
        "to": "alien-patterns",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "objects",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "retro-core": [
      {
        "from": "retro-core",
        "to": "virtual-imprint",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "skew-bulbs": [
      {
        "from": "skew-bulbs",
        "to": "solar-chrome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "skew-bulbs",
        "to": "medusa-network",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "solar-chrome": [
      {
        "from": "solar-chrome",
        "to": "skew-bulbs",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "solar-chrome",
        "to": "solar-landscape",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "solar-chrome",
        "to": "virtual-imprint",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "summer-static": [
      {
        "from": "summer-static",
        "to": "city-pond",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "summer-static",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "super-cell": [
      {
        "from": "super-cell",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "super-cell",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "feedback": [
      {
        "from": "feedback",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "virtual-distance": [
      {
        "from": "virtual-distance",
        "to": "markup-dada",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "virtual-distance",
        "to": "ethereal-bits",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "virtual-distance",
        "to": "moons",
        "kind": "tangent",
        "strength": 0.5
      }
    ]
  },
  "tags": {
    "art": {
      "weight": 1,
      "count": 29
    },
    "generative": {
      "weight": 0.9655172413793104,
      "count": 28
    },
    "live": {
      "weight": 0.6896551724137931,
      "count": 20
    },
    "domain-warping": {
      "weight": 0.5862068965517241,
      "count": 17
    },
    "noise": {
      "weight": 0.3793103448275862,
      "count": 11
    },
    "organic": {
      "weight": 0.3793103448275862,
      "count": 11
    },
    "biophilia": {
      "weight": 0.3103448275862069,
      "count": 9
    },
    "project": {
      "weight": 0.27586206896551724,
      "count": 8
    },
    "substrate": {
      "weight": 0.2413793103448276,
      "count": 7
    },
    "geometry": {
      "weight": 0.2413793103448276,
      "count": 7
    },
    "css": {
      "weight": 0.20689655172413793,
      "count": 6
    },
    "interactive": {
      "weight": 0.20689655172413793,
      "count": 6
    },
    "thoughts": {
      "weight": 0.1724137931034483,
      "count": 5
    },
    "feedback": {
      "weight": 0.1724137931034483,
      "count": 5
    },
    "photography": {
      "weight": 0.1724137931034483,
      "count": 5
    },
    "info": {
      "weight": 0.13793103448275862,
      "count": 4
    },
    "fragments": {
      "weight": 0.13793103448275862,
      "count": 4
    },
    "webart": {
      "weight": 0.13793103448275862,
      "count": 4
    },
    "internet": {
      "weight": 0.13793103448275862,
      "count": 4
    },
    "chrome": {
      "weight": 0.13793103448275862,
      "count": 4
    },
    "writing": {
      "weight": 0.10344827586206896,
      "count": 3
    },
    "hyper": {
      "weight": 0.10344827586206896,
      "count": 3
    },
    "memes": {
      "weight": 0.10344827586206896,
      "count": 3
    },
    "glitch": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "rhizome": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "space-colonization": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "mind": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "fuse": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "words": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "utility": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "exploration": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "dithering": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "external": {
      "weight": 0.06896551724137931,
      "count": 2
    },
    "contact": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "communication": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "particles": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "instancing": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "texture": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "depth": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "Deleuze": {
      "weight": 0.034482758620689655,
      "count": 1
    },
    "flowfield": {
      "weight": 0.034482758620689655,
      "count": 1
    }
  },
  "nodes": {
    "virtual-distance": {
      "tags": [
        "css",
        "webart"
      ],
      "links": [
        {
          "from": "virtual-distance",
          "to": "markup-dada",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "virtual-distance",
          "to": "ethereal-bits",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "virtual-distance",
          "to": "moons",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 01 Sep 2022 11:19:20 GMT",
      "updatedAt": "2022-09-01T16:07:58.181Z",
      "inline": false,
      "title": "Virtual Distance",
      "description": "A css experiment with endless banner scrolling and exaggerated shadows.",
      "image": "/nodes/virtual-distance.preview.jpg"
    },
    "summer-static": {
      "tags": [
        "biophilia",
        "project",
        "photography"
      ],
      "links": [
        {
          "from": "summer-static",
          "to": "city-pond",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "summer-static",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 27 Aug 2022 17:33:51 GMT",
      "updatedAt": "2022-09-01T11:09:05.283Z",
      "inline": false,
      "title": "Summer Static",
      "description": "A couple of photographs from this summer. Nothing special. Just trying to capture that sweet endless summer vibe.",
      "image": "/nodes/summer-static.preview.jpg",
      "asDocument": true
    },
    "formations": {
      "tags": [
        "art",
        "generative",
        "live",
        "geometry",
        "feedback"
      ],
      "links": [
        {
          "from": "formations",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "block-dissolve",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "fluid-feedback",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "virtual-imprint",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 25 Aug 2022 09:25:46 GMT",
      "updatedAt": "2022-08-25T10:33:21.750Z",
      "inline": false,
      "title": "Formations",
      "description": "Generative rock-like formations and a background feedback effect. Doing some tests with natural-looking structures in synthetic environments.",
      "image": "/nodes/formations.preview.jpg",
      "hideOverflow": true
    },
    "neon-moss": {
      "tags": [
        "art",
        "generative",
        "live",
        "organic",
        "biophilia",
        "geometry"
      ],
      "links": [
        {
          "from": "neon-moss",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "neon-moss",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "neon-moss",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "neon-moss",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 22 Aug 2022 07:24:16 GMT",
      "updatedAt": "2022-08-25T09:55:29.882Z",
      "inline": false,
      "title": "Neon Moss",
      "description": "A generative system for creating plant-like geometry, rendered in a neon glow. One of my first proper biophilic studies.",
      "image": "/nodes/neon-moss.preview.jpg",
      "hideOverflow": true
    },
    "digital-biophilia": {
      "tags": [
        "art",
        "generative",
        "biophilia",
        "thoughts",
        "fragments"
      ],
      "links": [
        {
          "from": "digital-biophilia",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "summer-static",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 21 Aug 2022 15:54:46 GMT",
      "updatedAt": "2022-08-22T12:08:42.939Z",
      "inline": true,
      "title": "Digital Biophilia",
      "description": "Some thoughts on the biophilia hypothesis and digital spaces.",
      "image": ""
    },
    "super-cell": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "noise",
        "biophilia",
        "substrate"
      ],
      "links": [
        {
          "from": "super-cell",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "super-cell",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Fri, 19 Aug 2022 17:08:31 GMT",
      "updatedAt": "2022-08-27T14:43:38.182Z",
      "inline": false,
      "title": "Super Cell",
      "description": "Warping lines in multiple layers makes for a strange, morphing life-form.",
      "image": "/nodes/super-cell.preview.jpg"
    },
    "substrates": {
      "tags": [
        "project",
        "substrate",
        "words",
        "external"
      ],
      "links": [
        {
          "from": "substrates",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "alien-patterns",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 17 Aug 2022 19:38:50 GMT",
      "updatedAt": "2022-08-19T10:23:21.098Z",
      "inline": false,
      "title": "Substrates",
      "description": "A text about a node-based visual programming application developed for the web, used as the core tool of a lot of my recent generative art.",
      "image": "/nodes/substrates.preview.jpg"
    },
    "moss-structure": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "noise",
        "organic",
        "biophilia",
        "substrate"
      ],
      "links": [
        {
          "from": "moss-structure",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 16 Aug 2022 23:11:46 GMT",
      "updatedAt": "2022-08-18T17:13:34.382Z",
      "inline": false,
      "title": "Moss Structure",
      "description": "More bio-studies. Shader systems used to create moss-like structures. Obsessed with the color green.",
      "image": "/nodes/moss-structure.preview.jpg"
    },
    "nest": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "noise",
        "biophilia",
        "substrate"
      ],
      "links": [
        {
          "from": "nest",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "nest",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 15 Aug 2022 19:52:55 GMT",
      "updatedAt": "2022-08-18T17:13:41.296Z",
      "inline": false,
      "title": "Nest",
      "description": "Another shader and another simple shape to localize certain parts of the effect. Maybe a nest of small underwater creatures.",
      "image": "/nodes/nest.preview.jpg"
    },
    "jolt-gate": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "noise",
        "substrate"
      ],
      "links": [
        {
          "from": "jolt-gate",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 13 Aug 2022 09:33:13 GMT",
      "updatedAt": "2022-08-18T17:13:50.079Z",
      "inline": false,
      "title": "Jolt Gate",
      "description": "Building structures submerged in complex domain warping shaders. Introducing simple shapes into these effects can drastically alter the effect.",
      "image": "/nodes/jolt-gate.preview.jpg"
    },
    "swamp-mass": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "noise",
        "biophilia",
        "substrate"
      ],
      "links": [
        {
          "from": "swamp-mass",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "swamp-mass",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 10 Aug 2022 09:20:52 GMT",
      "updatedAt": "2022-08-27T14:43:47.205Z",
      "inline": false,
      "title": "Swamp Mass",
      "description": "Using noise and domain warping as to as an analogue for biological systems. Sophisticated shaders can produce mesmerizing biological effects.",
      "image": "/nodes/swamp-mass.preview.jpg"
    },
    "markup-dada": {
      "tags": [
        "art",
        "css",
        "webart"
      ],
      "links": [
        {
          "from": "markup-dada",
          "to": "ethereal-bits",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "markup-dada",
          "to": "slices",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "markup-dada",
          "to": "virtual-distance",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 30 Jul 2022 09:06:40 GMT",
      "updatedAt": "2022-08-17T10:30:39.858Z",
      "inline": false,
      "title": "Markup Dada",
      "description": "Simple HTML/CSS/JS test for creating animated patterns using the DOM.",
      "image": "/nodes/markup-dada.preview.jpg"
    },
    "digital-gardening": {
      "tags": [
        "biophilia",
        "thoughts",
        "fragments"
      ],
      "links": [
        {
          "from": "digital-gardening",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-gardening",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-gardening",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-gardening",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 25 Jul 2022 19:48:20 GMT",
      "updatedAt": "2022-07-29T14:50:04.107Z",
      "inline": true,
      "title": "Digital Gardening",
      "description": "",
      "image": ""
    },
    "city-pond": {
      "tags": [
        "organic",
        "biophilia",
        "project",
        "photography"
      ],
      "links": [
        {
          "from": "city-pond",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "city-pond",
          "to": "summer-static",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 21 Jul 2022 20:37:19 GMT",
      "updatedAt": "2022-08-27T20:08:27.013Z",
      "inline": false,
      "title": "City Pond",
      "description": "Photos taken by and around a small pond located in the city where I live.",
      "image": "/nodes/city-pond.preview.jpg",
      "asDocument": true
    },
    "less-flat": {
      "tags": [
        "thoughts",
        "fragments",
        "exploration"
      ],
      "links": [
        {
          "from": "less-flat",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 18 Jul 2022 21:48:39 GMT",
      "updatedAt": "2022-07-19T16:30:29.848Z",
      "inline": true,
      "title": "Less Flat",
      "description": "",
      "image": ""
    },
    "intro": {
      "tags": [
        "info",
        "fragments",
        "utility"
      ],
      "links": [
        {
          "from": "intro",
          "to": "about",
          "kind": "references",
          "strength": 0.5
        },
        {
          "from": "intro",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "intro",
          "to": "contact",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 16 Jul 2022 09:54:45 GMT",
      "updatedAt": "2022-08-15T21:00:10.960Z",
      "inline": true,
      "title": "Intro",
      "description": "A short site description.",
      "image": ""
    },
    "ethereal-bits": {
      "tags": [
        "css",
        "webart"
      ],
      "links": [
        {
          "from": "ethereal-bits",
          "to": "slices",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "ethereal-bits",
          "to": "moons",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "ethereal-bits",
          "to": "markup-dada",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "ethereal-bits",
          "to": "virtual-distance",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 30 Jun 2022 18:01:04 GMT",
      "updatedAt": "2022-08-17T10:30:31.588Z",
      "inline": false,
      "title": "Ethereal Bits",
      "description": "A node for simple html/css/svg aesthetics and experiments. Exploring how native web tools can be used to create unexpected effects.",
      "image": "/nodes/ethereal-bits.preview.jpg"
    },
    "latest": {
      "tags": [
        "info",
        "utility"
      ],
      "links": [],
      "createdAt": "Tue, 28 Jun 2022 07:07:14 GMT",
      "updatedAt": "2022-07-19T16:28:05.014Z",
      "inline": true,
      "title": "Latest",
      "description": "Displays the most recently created and most recently updated nodes. Just a utility.",
      "image": ""
    },
    "chaos-growth": {
      "tags": [
        "art",
        "generative",
        "noise",
        "project",
        "rhizome",
        "space-colonization"
      ],
      "links": [
        {
          "from": "chaos-growth",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "chaos-growth",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "chaos-growth",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 22 Jun 2022 21:26:31 GMT",
      "updatedAt": "2022-08-17T10:27:46.324Z",
      "inline": false,
      "title": "Chaos Growth",
      "description": "Accidental chaotic growth that ocurred when playing around with space-colonization algorithms. The branches never quite reach their goals.",
      "image": "/nodes/chaos-growth.preview.jpg",
      "asDocument": true
    },
    "objects": {
      "tags": [
        "art",
        "generative",
        "domain-warping",
        "organic",
        "noise",
        "project"
      ],
      "links": [
        {
          "from": "objects",
          "to": "alien-patterns",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "objects",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 19 Jun 2022 21:26:31 GMT",
      "updatedAt": "2022-08-17T10:31:25.444Z",
      "inline": false,
      "title": "Objects",
      "description": "Localized domain warping \"objects\". I enjoyed playing with possible looks for abstract floating entities. These things just are.",
      "image": "/nodes/objects.preview.jpg",
      "asDocument": true
    },
    "weave": {
      "tags": [
        "art",
        "generative",
        "organic",
        "noise",
        "project",
        "memes",
        "flowfield"
      ],
      "links": [
        {
          "from": "weave",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "weave",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "weave",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "weave",
          "to": "rehash-transform",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "weave",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 19 Jun 2022 10:25:11 GMT",
      "updatedAt": "2022-08-17T10:35:38.879Z",
      "inline": false,
      "title": "Weave",
      "description": "A combination of generative techniques: flowfields, plant-like growth algorithms, and noise.",
      "image": "/nodes/weave.preview.jpg",
      "asDocument": true
    },
    "webfuse": {
      "tags": [
        "art",
        "generative",
        "project",
        "internet",
        "hyper",
        "memes",
        "fuse"
      ],
      "links": [
        {
          "from": "webfuse",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "rehash-transform",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "webfuse",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 18 Jun 2022 12:07:12 GMT",
      "updatedAt": "2022-08-17T10:32:50.785Z",
      "inline": false,
      "title": "Web Fuse",
      "description": "Building on previous pixel mixing techniques, but with internet images as subject. Hypermemes, why not?",
      "image": "/img/webfuse/gif2.gif",
      "asDocument": true
    },
    "fragfuse": {
      "tags": [
        "art",
        "project",
        "photography",
        "hyper",
        "fuse"
      ],
      "links": [
        {
          "from": "fragfuse",
          "to": "city-pond",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "fragfuse",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "fragfuse",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 16 Jun 2022 19:50:43 GMT",
      "updatedAt": "2022-07-16T19:53:02.825Z",
      "inline": false,
      "title": "Frag Fuse",
      "description": "Photo fragments, warped and mixed to produce eerie textures and patterns.",
      "image": "/img/combined/hare.jpg",
      "asDocument": true
    },
    "links": {
      "tags": [
        "internet",
        "exploration"
      ],
      "links": [
        {
          "from": "links",
          "to": "rehash-transform",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "links",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "2022-09-01T11:17:55.751Z",
      "inline": false,
      "title": "Links",
      "description": "Hyperlinks to other nodes on the web. Things I've encountered and found interesting. A curated set of bookmarks.",
      "image": ""
    },
    "moons": {
      "tags": [
        "css",
        "webart"
      ],
      "links": [
        {
          "from": "moons",
          "to": "about",
          "kind": "consumed",
          "strength": 0.5
        },
        {
          "from": "moons",
          "to": "ethereal-bits",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moons",
          "to": "virtual-distance",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 26 May 2022 14:41:23 GMT",
      "inline": true,
      "title": "moons",
      "description": "Simple CSS test.",
      "image": "",
      "updatedAt": "2022-06-15T18:07:48.450Z"
    },
    "contact": {
      "tags": [
        "contact",
        "communication"
      ],
      "links": [
        {
          "from": "contact",
          "to": "about",
          "kind": "consumed",
          "strength": 0.5
        },
        {
          "from": "contact",
          "to": "intro",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 26 May 2022 12:34:15 GMT",
      "inline": false,
      "title": "Contact",
      "description": "A form for sending me an email. Nothing more.",
      "image": "",
      "updatedAt": "2022-08-15T08:50:41.322Z"
    },
    "about": {
      "tags": [
        "thoughts",
        "info"
      ],
      "links": [
        {
          "from": "about",
          "to": "contact",
          "kind": "consumes",
          "strength": 0.5
        },
        {
          "from": "about",
          "to": "moons",
          "kind": "consumes",
          "strength": 0.5
        },
        {
          "from": "about",
          "to": "manifesto",
          "kind": "references",
          "strength": 0.5
        },
        {
          "from": "about",
          "to": "intro",
          "kind": "references",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 18 May 2022 15:40:27 GMT",
      "inline": false,
      "title": "About",
      "description": "What is this project? What does this space contain? Why? Who am I? Do you care?",
      "image": "/nodes/about.preview.jpg",
      "updatedAt": "2022-08-19T10:10:43.054Z"
    },
    "hyper": {
      "tags": [
        "art",
        "css",
        "photography",
        "hyper",
        "words"
      ],
      "links": [
        {
          "from": "hyper",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "rehash-transform",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 15 May 2022 10:20:22 GMT",
      "inline": false,
      "title": "Hyper",
      "description": "Hyperwords, meaningless or hyperclear. Maybe everything is amplified. Maybe this node is meaningless. At least it's somewhat fun.",
      "image": "/nodes/hyper.preview.jpg",
      "updatedAt": "2022-08-27T14:52:11.013Z"
    },
    "manifesto": {
      "tags": [
        "thoughts",
        "info",
        "internet"
      ],
      "links": [
        {
          "from": "manifesto",
          "to": "about",
          "kind": "references",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "intro",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "links",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifesto",
      "description": "Site philosophy, some approaches and ideas about internet interaction, softer futures, and digital creation.",
      "image": "/img/combined/mirror2.jpg",
      "updatedAt": "2022-07-16T12:02:49.856Z"
    },
    "block-dissolve": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "feedback",
        "glitch"
      ],
      "links": [
        {
          "from": "block-dissolve",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "block-dissolve",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "4 May 2022 11:45:09 GMT",
      "updatedAt": "2022-08-17T10:45:16.372Z",
      "inline": false,
      "title": "Block Dissolve",
      "description": "Combining two different feedback passes with complex domain warping. Producing organically, dissolving substrate blocks. Builds on previous techniques.",
      "image": "/nodes/block-dissolve.preview.jpg"
    },
    "medusa-network": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "dithering",
        "blue-noise",
        "glitch"
      ],
      "links": [
        {
          "from": "medusa-network",
          "to": "noise-construct",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "medusa-network",
          "to": "skew-bulbs",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "27 Mar 2022 11:45:09 GMT",
      "updatedAt": "2022-08-17T10:45:48.392Z",
      "inline": false,
      "title": "Medusa Network",
      "description": "Dithering, living rows and grids, jellyfish, glitchy and organic. An expansion on the Noise Construct experiment.",
      "image": "/nodes/medusa-network.preview.jpg"
    },
    "noise-construct": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "dithering",
        "blue-noise"
      ],
      "links": [
        {
          "from": "noise-construct",
          "to": "medusa-network",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "25 Mar 2022 11:45:09 GMT",
      "updatedAt": "2022-08-17T10:46:03.619Z",
      "inline": false,
      "title": "Noise Construct",
      "description": "Intense dithering and domain warping patterns. Digital static mixed with underlying organic structures.",
      "image": "/nodes/noise-construct.preview.jpg"
    },
    "skew-bulbs": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "chrome"
      ],
      "links": [
        {
          "from": "skew-bulbs",
          "to": "solar-chrome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "skew-bulbs",
          "to": "medusa-network",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "14 Mar 2022 10:23:19 GMT",
      "updatedAt": "2022-08-17T10:46:35.592Z",
      "inline": false,
      "title": "Skew Bulbs",
      "description": "Trigonometric functions, noise, and normal map generation. The surface is rendered as a evolving metallic material.",
      "image": "/nodes/skew-bulbs.preview.jpg"
    },
    "slices": {
      "tags": [
        "art",
        "css",
        "photography",
        "external"
      ],
      "links": [
        {
          "from": "slices",
          "to": "ethereal-bits",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "slices",
          "to": "markup-dada",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "02 Mar 2022 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:46:39.405Z",
      "inline": false,
      "title": "Slices",
      "description": "Experiment with 3D CSS rendering, photography, and digital spaces. Located externally; will be opened in an iframe.",
      "image": "/nodes/slices.preview.jpg"
    },
    "rhizome": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "feedback",
        "space-colonization",
        "rhizome",
        "Deleuze"
      ],
      "links": [
        {
          "from": "rhizome",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "20 Feb 2022 09:49:08 GMT",
      "updatedAt": "2022-08-21T17:47:39.116Z",
      "inline": false,
      "title": "Rhizome",
      "description": "All references to Deleuze become a bit of a meme. But the underlying structure of this piece is rhizomatic nonetheless. Substrate and space colonization experiment.",
      "image": "/nodes/rhizome.preview.jpg"
    },
    "fluid-feedback": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "feedback"
      ],
      "links": [
        {
          "from": "fluid-feedback",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "fluid-feedback",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "13 Feb 2022 09:49:08 GMT",
      "updatedAt": "2022-08-17T19:50:44.581Z",
      "inline": false,
      "title": "Fluid Feedback",
      "description": "More feedback experiments. Domain warping with a feedback component. Refresh the page: there's some variations.",
      "image": "/nodes/fluid-feedback.preview.jpg"
    },
    "immerse": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "geometry",
        "interactive",
        "feedback"
      ],
      "links": [
        {
          "from": "immerse",
          "to": "block-dissolve",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "fluid-feedback",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "objects",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "immerse",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "27 Jan 2022 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:45:22.952Z",
      "inline": false,
      "title": "Immerse",
      "description": "Organic substrate and floating 3D shapes. Play with feedback, breathing and interactivity.",
      "image": "/nodes/immerse.preview.jpg"
    },
    "alien-patterns": {
      "tags": [
        "generative",
        "domain-warping",
        "noise",
        "substrate",
        "writing"
      ],
      "links": [
        {
          "from": "alien-patterns",
          "to": "modified-noise",
          "kind": "previous",
          "strength": 0.5
        },
        {
          "from": "alien-patterns",
          "to": "objects",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-patterns",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 13 Jan 2022 19:55:50 GMT",
      "updatedAt": "2022-08-17T19:40:41.685Z",
      "inline": false,
      "title": "Alien Patterns",
      "description": "On combining modified noise and domain warping to produce alien patterns",
      "image": "/img/posts/alien-patterns/banner.jpg"
    },
    "modified-noise": {
      "tags": [
        "generative",
        "noise",
        "writing"
      ],
      "links": [
        {
          "from": "modified-noise",
          "to": "alien-patterns",
          "kind": "next",
          "strength": 0.5
        },
        {
          "from": "modified-noise",
          "to": "domain-warping",
          "kind": "previous",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 12 Jan 2022 21:50:06 GMT",
      "updatedAt": "2022-06-13T05:19:26.774Z",
      "inline": false,
      "title": "Characteristics of Modified Noise",
      "description": "A few of my common methods for modifying standard noise functions.",
      "image": "/img/posts/modified-noise/banner.jpg"
    },
    "domain-warping": {
      "tags": [
        "generative",
        "domain-warping",
        "noise",
        "writing"
      ],
      "links": [
        {
          "from": "domain-warping",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "modified-noise",
          "kind": "next",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 10 Jan 2022 18:52:37 GMT",
      "updatedAt": "2022-06-13T05:19:26.764Z",
      "inline": false,
      "title": "My Take on Domain Warping",
      "description": "How I've used domain warping to achieve strange generative effects.",
      "image": "/img/posts/domain-warping/banner.jpg"
    },
    "flat-clouds": {
      "tags": [
        "art",
        "generative",
        "live",
        "interactive",
        "mind",
        "particles"
      ],
      "links": [
        {
          "from": "flat-clouds",
          "to": "solar-landscape",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "26 Dec 2021 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:45:08.002Z",
      "inline": false,
      "title": "Flat Clouds",
      "description": "Soft particles, shader builders, generative geometry distortion. Feeling void of thoughts, flat, but sometimes creased. An undeveloped idea.",
      "image": "/nodes/flat-clouds.preview.jpg"
    },
    "rehash-transform": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "internet",
        "memes",
        "mind",
        "instancing"
      ],
      "links": [
        {
          "from": "rehash-transform",
          "to": "links",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rehash-transform",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rehash-transform",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rehash-transform",
          "to": "webfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "23 Dec 2021 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:46:15.159Z",
      "inline": false,
      "title": "Rehash Transform",
      "description": "Instancing experiment, custom shader builder, and the mind of the internet. Conceptual visualization of a creation/derviation loop. A web mind, I guess.",
      "image": "/nodes/rehash-transform.preview.jpg"
    },
    "virtual-imprint": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "geometry",
        "interactive",
        "chrome"
      ],
      "links": [
        {
          "from": "virtual-imprint",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "virtual-imprint",
          "to": "retro-core",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "virtual-imprint",
          "to": "solar-chrome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "virtual-imprint",
          "to": "solar-landscape",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "14 Nov 2021 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:47:10.479Z",
      "inline": false,
      "title": "Virtual Imprint",
      "description": "Complex domain warping patterns, warped geometries, strange reflections with environment map generated in real-time. GPU intensive.",
      "image": "/nodes/virtual-imprint.preview.jpg"
    },
    "solar-landscape": {
      "tags": [
        "art",
        "generative",
        "live",
        "geometry",
        "interactive",
        "chrome"
      ],
      "links": [
        {
          "from": "solar-landscape",
          "to": "flat-clouds",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "solar-landscape",
          "to": "solar-chrome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "solar-landscape",
          "to": "virtual-imprint",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "15 Oct 2021 09:49:08 GMT",
      "updatedAt": "2022-08-27T14:49:47.174Z",
      "inline": false,
      "title": "Solar Landscape",
      "description": "An extension of solar chrome. Playing around with instancing and composition. I do not recommend opening this on a mobile device.",
      "image": "/nodes/solar-landscape.preview.jpg"
    },
    "solar-chrome": {
      "tags": [
        "art",
        "generative",
        "live",
        "geometry",
        "interactive",
        "chrome"
      ],
      "links": [
        {
          "from": "solar-chrome",
          "to": "skew-bulbs",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "solar-chrome",
          "to": "solar-landscape",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "solar-chrome",
          "to": "virtual-imprint",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "13 Oct 2021 09:49:08 GMT",
      "updatedAt": "2022-08-17T10:46:48.099Z",
      "inline": false,
      "title": "Solar Chrome",
      "description": "Chrome, so hip and cool. Modern, punk even. Here's some chrome and generative geometries.",
      "image": "/nodes/solar-chrome.preview.jpg"
    },
    "retro-core": {
      "tags": [
        "art",
        "generative",
        "live",
        "geometry",
        "interactive",
        "texture",
        "depth"
      ],
      "links": [
        {
          "from": "retro-core",
          "to": "virtual-imprint",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "15 Sep 2021 15:24:28 GMT",
      "updatedAt": "2022-08-30T17:52:12.811Z",
      "inline": false,
      "title": "Retro Core",
      "description": "Experiments with texture and confused depth. 3D shapes turned flat using transparency and disabled depth testing.",
      "image": "/nodes/retro-core.preview.jpg"
    }
  },
  "latestNode": "virtual-distance",
  "mostRecentlyUpdatedNode": "links"
} as const;