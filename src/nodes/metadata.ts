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
      }
    ],
    "contact": [
      {
        "from": "contact",
        "to": "about",
        "kind": "consumed",
        "strength": 0.5
      }
    ],
    "moons": [
      {
        "from": "moons",
        "to": "about",
        "kind": "consumed",
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
        "to": "links",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "rhizome",
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
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "domain-warping": [
      {
        "from": "domain-warping",
        "to": "modified-noise",
        "kind": "next",
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
      }
    ],
    "hyper": [
      {
        "from": "hyper",
        "to": "rehash-transform",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "rhizome": [
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
      }
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
    "noise-construct": [
      {
        "from": "noise-construct",
        "to": "medusa-network",
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
      }
    ],
    "slices": []
  },
  "tags": {
    "generative": {
      "weight": 1,
      "count": 16
    },
    "art": {
      "weight": 0.875,
      "count": 14
    },
    "domain-warping": {
      "weight": 0.6875,
      "count": 11
    },
    "geometry": {
      "weight": 0.3125,
      "count": 5
    },
    "feedback": {
      "weight": 0.25,
      "count": 4
    },
    "organic": {
      "weight": 0.25,
      "count": 4
    },
    "writing": {
      "weight": 0.1875,
      "count": 3
    },
    "noise": {
      "weight": 0.1875,
      "count": 3
    },
    "internet": {
      "weight": 0.1875,
      "count": 3
    },
    "chrome": {
      "weight": 0.1875,
      "count": 3
    },
    "info": {
      "weight": 0.125,
      "count": 2
    },
    "glitch": {
      "weight": 0.125,
      "count": 2
    },
    "mind": {
      "weight": 0.125,
      "count": 2
    },
    "external": {
      "weight": 0.125,
      "count": 2
    },
    "dithering": {
      "weight": 0.125,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.125,
      "count": 2
    },
    "css": {
      "weight": 0.125,
      "count": 2
    },
    "thoughts": {
      "weight": 0.0625,
      "count": 1
    },
    "contact": {
      "weight": 0.0625,
      "count": 1
    },
    "communication": {
      "weight": 0.0625,
      "count": 1
    },
    "particles": {
      "weight": 0.0625,
      "count": 1
    },
    "words": {
      "weight": 0.0625,
      "count": 1
    },
    "interactive": {
      "weight": 0.0625,
      "count": 1
    },
    "webart": {
      "weight": 0.0625,
      "count": 1
    },
    "instancing": {
      "weight": 0.0625,
      "count": 1
    },
    "memes": {
      "weight": 0.0625,
      "count": 1
    },
    "texture": {
      "weight": 0.0625,
      "count": 1
    },
    "depth": {
      "weight": 0.0625,
      "count": 1
    },
    "Deleuze": {
      "weight": 0.0625,
      "count": 1
    },
    "space-colonization": {
      "weight": 0.0625,
      "count": 1
    },
    "photography": {
      "weight": 0.0625,
      "count": 1
    }
  },
  "nodes": {
    "links": {
      "tags": [
        "internet",
        "external"
      ],
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "links",
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
      "description": "",
      "image": "",
      "updatedAt": "Mon, 13 Jun 2022 16:22:08 GMT"
    },
    "contact": {
      "tags": [
        "contact",
        "communication"
      ],
      "createdAt": "Thu, 26 May 2022 12:34:15 GMT",
      "inline": false,
      "title": "contact",
      "description": "A form for sending me an email. Nothing more.",
      "image": "",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT"
    },
    "about": {
      "tags": [
        "info",
        "thoughts"
      ],
      "createdAt": "Wed, 18 May 2022 15:40:27 GMT",
      "inline": false,
      "title": "about",
      "description": "What is this project? What does this space contain? Why? Who am I? Do you care?",
      "image": "/img/connections/connections1.jpg",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT"
    },
    "hyper": {
      "tags": [
        "words"
      ],
      "createdAt": "Sun, 15 May 2022 10:20:22 GMT",
      "inline": false,
      "title": "hyper",
      "description": "Hyperwords, meaningless or hyperclear. Maybe everything is amplified. Maybe this node is meaningless. At least it's slightly fun.",
      "image": "/nodes/hyper.preview.jpg",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT"
    },
    "manifesto": {
      "tags": [
        "internet",
        "info"
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifesto",
      "description": "Site philosophy, some approaches and ideas about internet interaction, softer futures, and digital creation.",
      "image": "/img/combined/mirror2.jpg",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT"
    },
    "block-dissolve": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "feedback",
        "organic",
        "glitch"
      ],
      "createdAt": "4 May 2022 11:45:09 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Block Dissolve",
      "description": "Combining two different feedback passes with complex domain warping. Producing organically, dissolving substrate blocks. Builds on previous techniques.",
      "image": "/img/pieces/block-dissolve.jpg"
    },
    "medusa-network": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "dithering",
        "blue-noise",
        "glitch"
      ],
      "createdAt": "27 Mar 2022 11:45:09 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Medusa Network",
      "description": "Dithering, living rows and grids, jellyfish, glitchy and organic. An expansion on the Noise Construct experiment.",
      "image": "/img/pieces/medusa-network.jpg"
    },
    "noise-construct": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "dithering",
        "blue-noise"
      ],
      "createdAt": "25 Mar 2022 11:45:09 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Noise Construct",
      "description": "Intense dithering and domain warping patterns. Digital static mixed with underlying organic structures.",
      "image": "/img/pieces/noise-construct.jpg"
    },
    "skew-bulbs": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "chrome"
      ],
      "createdAt": "14 Mar 2022 10:23:19 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Skew Bulbs",
      "description": "Trigonometric functions, noise, and normal map generation. The surface is rendered as a evolving metallic material.",
      "image": "/img/pieces/skew-bulbs.jpg"
    },
    "slices": {
      "tags": [
        "art",
        "css",
        "external",
        "photography"
      ],
      "createdAt": "02 Mar 2022 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Slices",
      "description": "Experiment with 3D CSS rendering, photography, and digital spaces. Located externally; will be opened in an iframe.",
      "image": "/img/pieces/slices.jpg"
    },
    "rhizome": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "feedback",
        "organic",
        "Deleuze",
        "space-colonization"
      ],
      "createdAt": "20 Feb 2022 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Rhizome",
      "description": "All references to Deleuze become a bit of a meme. But the underlying structure of this piece is rhizomatic nonetheless. Substrate and space colonization experiment.",
      "image": "/img/pieces/rhizome.jpg"
    },
    "substrate": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "feedback",
        "organic"
      ],
      "createdAt": "13 Feb 2022 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Substrate",
      "description": "More feedback experiments. Domain warping with a feedback component. Refresh the page: there's some variations.",
      "image": "/img/pieces/substrate.jpg"
    },
    "immerse": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "geometry",
        "feedback",
        "organic",
        "interactive"
      ],
      "createdAt": "27 Jan 2022 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Immerse",
      "description": "Organic substrate and floating 3D shapes. Play with feedback, breathing and interactivity.",
      "image": "/img/pieces/immerse.jpg"
    },
    "alien-patterns": {
      "tags": [
        "generative",
        "domain-warping",
        "writing",
        "noise"
      ],
      "createdAt": "Thu, 13 Jan 2022 19:55:50 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Alien Patterns",
      "description": "On combining modified noise and domain warping to produce alien patterns",
      "image": "/img/posts/alien-patterns/banner.jpg"
    },
    "modified-noise": {
      "tags": [
        "generative",
        "writing",
        "noise"
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
        "generative",
        "art",
        "mind",
        "particles"
      ],
      "createdAt": "26 Dec 2021 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Flat Clouds",
      "description": "Soft particles, shader builders, generative geometry distortion. Feeling void of thoughts, flat, but sometimes creased. An undeveloped idea.",
      "image": "/img/pieces/flat-clouds.jpg"
    },
    "rehash-transform": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "internet",
        "mind",
        "instancing",
        "memes"
      ],
      "createdAt": "23 Dec 2021 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Rehash Transform",
      "description": "Instancing experiment, custom shader builder, and the mind of the internet. Conceptual visualization of a creation/derviation loop. A web mind, I guess.",
      "image": "/img/pieces/rehash-transform.jpg"
    },
    "virtual-imprint": {
      "tags": [
        "generative",
        "art",
        "domain-warping",
        "geometry"
      ],
      "createdAt": "14 Nov 2021 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Virtual Imprint",
      "description": "Complex domain warping patterns, warped geometries, strange reflections with environment map generated in real-time. GPU intensive.",
      "image": "/img/pieces/virtual-imprint.jpg"
    },
    "solar-landscape": {
      "tags": [
        "generative",
        "art",
        "geometry",
        "chrome"
      ],
      "createdAt": "15 Oct 2021 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Solar Landscape",
      "description": "An extension of solar chrome. Playing around with instancing and composition. I do not recommend opening this on a mobile device.",
      "image": "/img/pieces/solar-landscape-1.jpg"
    },
    "solar-chrome": {
      "tags": [
        "generative",
        "art",
        "geometry",
        "chrome"
      ],
      "createdAt": "13 Oct 2021 09:49:08 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Solar Chrome",
      "description": "Chrome, so hip and cool. Modern, punk even. Here's some chrome and generative geometries.",
      "image": "/img/pieces/solar-chrome.jpg"
    },
    "retro-core": {
      "tags": [
        "generative",
        "art",
        "geometry",
        "texture",
        "depth"
      ],
      "createdAt": "15 Sep 2021 15:24:28 GMT",
      "updatedAt": "Mon, 13 Jun 2022 05:19:26 GMT",
      "inline": false,
      "title": "Retro Core",
      "description": "Experiments with texture and confused depth. 3D shapes turned flat using transparency and disabled depth testing.",
      "image": "/img/pieces/retro-core.jpg"
    }
  }
} as const;