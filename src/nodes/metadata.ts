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
    "domain-warping": [
      {
        "from": "domain-warping",
        "to": "modified-noise",
        "kind": "next",
        "strength": 0.5
      }
    ],
    "hyper": [],
    "links": [],
    "info": [
      {
        "from": "info",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ]
  },
  "tags": {
    "generative": {
      "weight": 1,
      "count": 3
    },
    "art": {
      "weight": 1,
      "count": 3
    },
    "writing": {
      "weight": 1,
      "count": 3
    },
    "noise": {
      "weight": 1,
      "count": 3
    },
    "info": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "domain-warping": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "internet": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "thoughts": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "contact": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "communication": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "words": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "external": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "css": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "webart": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "notanalbeads": {
      "weight": 0.3333333333333333,
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
      "updatedAt": "Mon, 06 Jun 2022 11:13:23 GMT",
      "inline": false,
      "title": "links",
      "description": "Hyperlinks to other nodes on the web. Things I've encountered and found interesting. A curated set of bookmarks.",
      "image": ""
    },
    "moons": {
      "tags": [
        "css",
        "webart",
        "notanalbeads"
      ],
      "createdAt": "Thu, 26 May 2022 14:41:23 GMT",
      "inline": true,
      "title": "moons",
      "description": "",
      "image": "",
      "updatedAt": "Sat, 04 Jun 2022 20:44:17 GMT"
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
      "updatedAt": "Sat, 28 May 2022 15:57:13 GMT"
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
      "updatedAt": "Sat, 28 May 2022 15:54:31 GMT"
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
      "updatedAt": "Sat, 28 May 2022 15:56:02 GMT"
    },
    "manifesto": {
      "tags": [
        "info",
        "internet"
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifesto",
      "description": "Site philosophy, some approaches and ideas about internet interaction, softer futures, and digital creation.",
      "image": "/img/combined/mirror2.jpg",
      "updatedAt": "Sat, 04 Jun 2022 20:44:17 GMT"
    },
    "alien-patterns": {
      "tags": [
        "generative",
        "art",
        "writing",
        "noise",
        "domain-warping"
      ],
      "createdAt": "Thu, 13 Jan 2022 19:55:50 GMT",
      "updatedAt": "Thu, 09 Jun 2022 20:07:03 GMT",
      "inline": false,
      "title": "Alien Patterns",
      "description": "On combining modified noise and domain warping to produce alien patterns",
      "image": "/img/posts/alien-patterns/banner.jpg"
    },
    "modified-noise": {
      "tags": [
        "generative",
        "art",
        "writing",
        "noise"
      ],
      "createdAt": "Wed, 12 Jan 2022 21:50:06 GMT",
      "updatedAt": "Thu, 09 Jun 2022 20:50:49 GMT",
      "inline": false,
      "title": "Characteristics of Modified Noise",
      "description": "A few of my common methods for modifying standard noise functions.",
      "image": "/img/posts/modified-noise/banner.jpg"
    },
    "domain-warping": {
      "tags": [
        "generative",
        "art",
        "noise",
        "writing",
        "domain-warping"
      ],
      "createdAt": "Mon, 10 Jan 2022 18:52:37 GMT",
      "updatedAt": "Thu, 09 Jun 2022 10:35:52 GMT",
      "inline": false,
      "title": "My Take on Domain Warping",
      "description": "How I've used domain warping to achieve strange generative effects.",
      "image": "/img/posts/domain-warping/banner.jpg"
    }
  }
} as const;