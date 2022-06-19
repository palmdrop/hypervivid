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
    "fragfuse": [
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
      },
      {
        "from": "rhizome",
        "to": "webfuse",
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
      },
      {
        "from": "rehash-transform",
        "to": "webfuse",
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
    "slices": [],
    "webfuse": [
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
    ]
  },
  "tags": {
    "art": {
      "weight": 1,
      "count": 17
    },
    "generative": {
      "weight": 0.9411764705882353,
      "count": 16
    },
    "domain-warping": {
      "weight": 0.6470588235294118,
      "count": 11
    },
    "geometry": {
      "weight": 0.29411764705882354,
      "count": 5
    },
    "feedback": {
      "weight": 0.23529411764705882,
      "count": 4
    },
    "organic": {
      "weight": 0.23529411764705882,
      "count": 4
    },
    "internet": {
      "weight": 0.23529411764705882,
      "count": 4
    },
    "writing": {
      "weight": 0.17647058823529413,
      "count": 3
    },
    "noise": {
      "weight": 0.17647058823529413,
      "count": 3
    },
    "photography": {
      "weight": 0.17647058823529413,
      "count": 3
    },
    "hyper": {
      "weight": 0.17647058823529413,
      "count": 3
    },
    "chrome": {
      "weight": 0.17647058823529413,
      "count": 3
    },
    "info": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "glitch": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "mind": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "project": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "fuse": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "external": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "dithering": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "css": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "memes": {
      "weight": 0.11764705882352941,
      "count": 2
    },
    "thoughts": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "contact": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "communication": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "particles": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "words": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "interactive": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "webart": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "instancing": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "texture": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "depth": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "Deleuze": {
      "weight": 0.058823529411764705,
      "count": 1
    },
    "space-colonization": {
      "weight": 0.058823529411764705,
      "count": 1
    }
  },
  "nodes": {
    "webfuse": {
      "tags": [
        "art",
        "internet",
        "hyper",
        "project",
        "fuse",
        "memes"
      ],
      "createdAt": "Sat, 18 Jun 2022 12:07:12 GMT",
      "updatedAt": "Sun, 19 Jun 2022 08:05:15 GMT",
      "inline": false,
      "title": "Web Fuse",
      "description": "Building on previous pixel mixing techniques, but with internet images as subject. Hypermemes, why not?",
      "image": "/img/webfuse/gif2.gif",
      "asDocument": true
    },
    "fragfuse": {
      "tags": [
        "art",
        "photography",
        "hyper",
        "project",
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
        "external"
      ],
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "Sun, 19 Jun 2022 08:05:48 GMT",
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
      "image": "/img/connections/connections1.jpg",
      "updatedAt": "Sun, 19 Jun 2022 08:06:04 GMT"
    },
    "hyper": {
      "tags": [
        "art",
        "hyper",
        "photography",
        "words"
      ],
      "createdAt": "Sun, 15 May 2022 10:20:22 GMT",
      "inline": false,
      "title": "Hyper",
      "description": "Hyperwords, meaningless or hyperclear. Maybe everything is amplified. Maybe this node is meaningless. At least it's somewhat fun.",
      "image": "/nodes/hyper.preview.jpg",
      "updatedAt": "Sat, 18 Jun 2022 22:06:20 GMT"
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "photography",
        "css",
        "external"
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
        "domain-warping",
        "internet",
        "memes",
        "mind",
        "instancing"
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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
        "art",
        "generative",
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