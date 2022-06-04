export default {
  "links": {
    "N1": [
      {
        "from": "N1",
        "to": "N2",
        "kind": "consumes",
        "strength": 0.5
      },
      {
        "from": "N1",
        "to": "N3",
        "kind": "tangent",
        "strength": 0.3
      }
    ],
    "N2": [
      {
        "from": "N2",
        "to": "N1",
        "kind": "consumed",
        "strength": 0.5
      }
    ],
    "N3": [
      {
        "from": "N3",
        "to": "N1",
        "kind": "tangent",
        "strength": 0.3
      }
    ],
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
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "hyper": [],
    "info": [
      {
        "from": "info",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "nodewithareallylongname": [],
    "scroll": []
  },
  "tags": {
    "tech": {
      "weight": 1,
      "count": 3
    },
    "thoughts": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "internet": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "info": {
      "weight": 0.6666666666666666,
      "count": 2
    },
    "art": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "blue": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "writing": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "generative": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "web": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "literature": {
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
    "nodewithareallylongname": {
      "tags": [],
      "createdAt": "Sat, 21 May 2022 14:00:34 GMT",
      "inline": false,
      "title": "nodewithareallylongname",
      "description": "",
      "image": "",
      "updatedAt": "Sat, 21 May 2022 14:00:34 GMT"
    },
    "N2": {
      "tags": [
        "tech",
        "thoughts",
        "internet",
        "generative"
      ],
      "createdAt": "2022-05-21",
      "updatedAt": "Thu, 12 May 2022 21:51:19 GMT"
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
    "scroll": {
      "tags": [],
      "createdAt": "Fri, 06 May 2022 21:18:48 GMT",
      "inline": false,
      "title": "scroll",
      "description": "Infinite (?) scrolling test",
      "image": "",
      "updatedAt": "Thu, 19 May 2022 00:14:23 GMT"
    },
    "N1": {
      "inline": false,
      "tags": [
        "tech",
        "art",
        "blue",
        "writing"
      ],
      "createdAt": "2022-04-29",
      "title": "N1",
      "updatedAt": "Thu, 12 May 2022 18:51:17 GMT"
    },
    "N3": {
      "inline": true,
      "tags": [
        "tech",
        "web",
        "literature"
      ],
      "createdAt": "2022-04-22",
      "title": "N3",
      "updatedAt": "Mon, 30 May 2022 20:18:00 GMT"
    }
  }
} as const;