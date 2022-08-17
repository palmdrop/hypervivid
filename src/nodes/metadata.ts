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
        "to": "substrate",
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
        "to": "substrate",
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
      },
      {
        "from": "substrate",
        "to": "swamp-mass",
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
        "to": "substrate",
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
    "digital-gardening": [
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
        "to": "substrate",
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
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "swamp-mass": [
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
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "swamp-mass",
        "to": "substrate",
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
    "moss-structure": [
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
        "to": "substrate",
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
        "to": "substrate",
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
    "virtual-imprint": [
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
    ]
  },
  "tags": {
    "art": {
      "weight": 1,
      "count": 25
    },
    "generative": {
      "weight": 0.96,
      "count": 24
    },
    "live": {
      "weight": 0.68,
      "count": 17
    },
    "domain-warping": {
      "weight": 0.64,
      "count": 16
    },
    "noise": {
      "weight": 0.4,
      "count": 10
    },
    "organic": {
      "weight": 0.32,
      "count": 8
    },
    "project": {
      "weight": 0.24,
      "count": 6
    },
    "interactive": {
      "weight": 0.24,
      "count": 6
    },
    "substrate": {
      "weight": 0.2,
      "count": 5
    },
    "biophilia": {
      "weight": 0.2,
      "count": 5
    },
    "css": {
      "weight": 0.2,
      "count": 5
    },
    "geometry": {
      "weight": 0.2,
      "count": 5
    },
    "info": {
      "weight": 0.16,
      "count": 4
    },
    "thoughts": {
      "weight": 0.16,
      "count": 4
    },
    "feedback": {
      "weight": 0.16,
      "count": 4
    },
    "photography": {
      "weight": 0.16,
      "count": 4
    },
    "internet": {
      "weight": 0.16,
      "count": 4
    },
    "chrome": {
      "weight": 0.16,
      "count": 4
    },
    "writing": {
      "weight": 0.12,
      "count": 3
    },
    "fragments": {
      "weight": 0.12,
      "count": 3
    },
    "webart": {
      "weight": 0.12,
      "count": 3
    },
    "hyper": {
      "weight": 0.12,
      "count": 3
    },
    "memes": {
      "weight": 0.12,
      "count": 3
    },
    "glitch": {
      "weight": 0.08,
      "count": 2
    },
    "space-colonization": {
      "weight": 0.08,
      "count": 2
    },
    "mind": {
      "weight": 0.08,
      "count": 2
    },
    "fuse": {
      "weight": 0.08,
      "count": 2
    },
    "utility": {
      "weight": 0.08,
      "count": 2
    },
    "exploration": {
      "weight": 0.08,
      "count": 2
    },
    "dithering": {
      "weight": 0.08,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.08,
      "count": 2
    },
    "rhizome": {
      "weight": 0.04,
      "count": 1
    },
    "contact": {
      "weight": 0.04,
      "count": 1
    },
    "communication": {
      "weight": 0.04,
      "count": 1
    },
    "particles": {
      "weight": 0.04,
      "count": 1
    },
    "words": {
      "weight": 0.04,
      "count": 1
    },
    "instancing": {
      "weight": 0.04,
      "count": 1
    },
    "texture": {
      "weight": 0.04,
      "count": 1
    },
    "depth": {
      "weight": 0.04,
      "count": 1
    },
    "Deleuze": {
      "weight": 0.04,
      "count": 1
    },
    "external": {
      "weight": 0.04,
      "count": 1
    },
    "flowfield": {
      "weight": 0.04,
      "count": 1
    }
  },
  "nodes": {
    "moss-structure": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "noise",
        "substrate",
        "biophilia"
      ],
      "createdAt": "Tue, 16 Aug 2022 23:11:46 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:34:27 GMT",
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
        "substrate",
        "biophilia"
      ],
      "createdAt": "Mon, 15 Aug 2022 19:52:55 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:34:35 GMT",
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
      "createdAt": "Sat, 13 Aug 2022 09:33:13 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:34:08 GMT",
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
        "noise",
        "organic",
        "substrate",
        "biophilia"
      ],
      "createdAt": "Wed, 10 Aug 2022 09:20:52 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:34:48 GMT",
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
      "createdAt": "Sat, 30 Jul 2022 09:06:40 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:30:39 GMT",
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
      "createdAt": "Mon, 25 Jul 2022 19:48:20 GMT",
      "updatedAt": "Fri, 29 Jul 2022 14:50:04 GMT",
      "inline": true,
      "title": "Digital Gardening",
      "description": "",
      "image": ""
    },
    "city-pond": {
      "tags": [
        "organic",
        "project",
        "biophilia",
        "photography"
      ],
      "createdAt": "Thu, 21 Jul 2022 20:37:19 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:28:31 GMT",
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
      "createdAt": "Mon, 18 Jul 2022 21:48:39 GMT",
      "updatedAt": "Tue, 19 Jul 2022 16:28:05 GMT",
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
      "createdAt": "Sat, 16 Jul 2022 09:54:45 GMT",
      "updatedAt": "Tue, 19 Jul 2022 16:28:05 GMT",
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
      "createdAt": "Thu, 30 Jun 2022 18:01:04 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:30:31 GMT",
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
      "createdAt": "Tue, 28 Jun 2022 07:07:14 GMT",
      "updatedAt": "Sat, 16 Jul 2022 11:42:32 GMT",
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
        "space-colonization",
        "rhizome"
      ],
      "createdAt": "Sun, 22 Jun 2022 21:26:31 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:27:46 GMT",
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
        "noise",
        "organic",
        "project"
      ],
      "createdAt": "Sun, 19 Jun 2022 21:26:31 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:31:25 GMT",
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
        "noise",
        "organic",
        "project",
        "memes",
        "flowfield"
      ],
      "createdAt": "Sun, 19 Jun 2022 10:25:11 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:35:38 GMT",
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
      "createdAt": "Sat, 18 Jun 2022 12:07:12 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:32:50 GMT",
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
      "createdAt": "Thu, 16 Jun 2022 19:50:43 GMT",
      "updatedAt": "Sat, 18 Jun 2022 11:00:46 GMT",
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
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "Tue, 28 Jun 2022 14:47:38 GMT",
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
      "createdAt": "Thu, 26 May 2022 14:41:23 GMT",
      "inline": true,
      "title": "moons",
      "description": "Simple CSS test.",
      "image": "",
      "updatedAt": "Mon, 13 Jun 2022 19:12:02 GMT"
    },
    "contact": {
      "tags": [
        "contact",
        "communication"
      ],
      "createdAt": "Thu, 26 May 2022 12:34:15 GMT",
      "inline": false,
      "title": "Contact",
      "description": "A form for sending me an email. Nothing more.",
      "image": "",
      "updatedAt": "Sun, 19 Jun 2022 08:05:56 GMT"
    },
    "about": {
      "tags": [
        "info",
        "thoughts"
      ],
      "createdAt": "Wed, 18 May 2022 15:40:27 GMT",
      "inline": false,
      "title": "About",
      "description": "What is this project? What does this space contain? Why? Who am I? Do you care?",
      "image": "/nodes/about.preview.jpg",
      "updatedAt": "Wed, 17 Aug 2022 10:28:58 GMT"
    },
    "hyper": {
      "tags": [
        "art",
        "css",
        "photography",
        "hyper",
        "words"
      ],
      "createdAt": "Sun, 15 May 2022 10:20:22 GMT",
      "inline": false,
      "title": "Hyper",
      "description": "Hyperwords, meaningless or hyperclear. Maybe everything is amplified. Maybe this node is meaningless. At least it's somewhat fun.",
      "image": "/nodes/hyper.preview.jpg",
      "updatedAt": "Sun, 10 Jul 2022 12:53:26 GMT"
    },
    "manifesto": {
      "tags": [
        "info",
        "internet",
        "thoughts"
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifesto",
      "description": "Site philosophy, some approaches and ideas about internet interaction, softer futures, and digital creation.",
      "image": "/img/combined/mirror2.jpg",
      "updatedAt": "Sat, 16 Jul 2022 12:02:49 GMT"
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
      "createdAt": "4 May 2022 11:45:09 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:45:16 GMT",
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
      "createdAt": "27 Mar 2022 11:45:09 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:45:48 GMT",
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
      "createdAt": "25 Mar 2022 11:45:09 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:03 GMT",
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
      "createdAt": "14 Mar 2022 10:23:19 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:35 GMT",
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
      "createdAt": "02 Mar 2022 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:39 GMT",
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
        "Deleuze"
      ],
      "createdAt": "20 Feb 2022 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:30 GMT",
      "inline": false,
      "title": "Rhizome",
      "description": "All references to Deleuze become a bit of a meme. But the underlying structure of this piece is rhizomatic nonetheless. Substrate and space colonization experiment.",
      "image": "/nodes/rhizome.preview.jpg"
    },
    "substrate": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "feedback"
      ],
      "createdAt": "13 Feb 2022 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:47:01 GMT",
      "inline": false,
      "title": "Substrate",
      "description": "More feedback experiments. Domain warping with a feedback component. Refresh the page: there's some variations.",
      "image": "/nodes/substrate.preview.jpg"
    },
    "immerse": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "interactive",
        "geometry",
        "feedback"
      ],
      "createdAt": "27 Jan 2022 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:45:22 GMT",
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
      "createdAt": "Thu, 13 Jan 2022 19:55:50 GMT",
      "updatedAt": "Mon, 15 Aug 2022 20:51:11 GMT",
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
      "createdAt": "Wed, 12 Jan 2022 21:50:06 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
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
      "createdAt": "Mon, 10 Jan 2022 18:52:37 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
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
      "createdAt": "26 Dec 2021 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:45:08 GMT",
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
      "createdAt": "23 Dec 2021 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:15 GMT",
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
        "interactive",
        "geometry",
        "chrome"
      ],
      "createdAt": "14 Nov 2021 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:47:10 GMT",
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
        "interactive",
        "geometry",
        "chrome"
      ],
      "createdAt": "15 Oct 2021 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:56 GMT",
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
        "interactive",
        "geometry",
        "chrome"
      ],
      "createdAt": "13 Oct 2021 09:49:08 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:48 GMT",
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
        "interactive",
        "geometry",
        "texture",
        "depth"
      ],
      "createdAt": "15 Sep 2021 15:24:28 GMT",
      "updatedAt": "Wed, 17 Aug 2022 10:46:23 GMT",
      "inline": false,
      "title": "Retro Core",
      "description": "Experiments with texture and confused depth. 3D shapes turned flat using transparency and disabled depth testing.",
      "image": "/nodes/retro-core.preview.jpg"
    }
  },
  "latestNode": "moss-structure",
  "mostRecentlyUpdatedNode": "virtual-imprint"
} as const;