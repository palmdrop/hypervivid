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
      },
      {
        "from": "N2",
        "to": "N3",
        "kind": "consumes",
        "strength": 0.5
      }
    ],
    "N3": [
      {
        "from": "N3",
        "to": "N1",
        "kind": "tangent",
        "strength": 0.3
      },
      {
        "from": "N3",
        "to": "N2",
        "kind": "consumed",
        "strength": 0.5
      }
    ],
    "about": [
      {
        "from": "about",
        "to": "contact",
        "kind": "references",
        "strength": 0.5
      },
      {
        "from": "about",
        "to": "manifest",
        "kind": "references",
        "strength": 0.5
      },
      {
        "from": "about",
        "to": "credits",
        "kind": "references",
        "strength": 0.5
      }
    ],
    "contact": [
      {
        "from": "contact",
        "to": "about",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "manifest": [
      {
        "from": "manifest",
        "to": "about",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifest",
        "to": "info",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "credits": [
      {
        "from": "credits",
        "to": "about",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "hyper": [],
    "info": [
      {
        "from": "info",
        "to": "manifest",
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
    "info": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "words": {
      "weight": 0.3333333333333333,
      "count": 1
    },
    "about": {
      "weight": 0.3333333333333333,
      "count": 1
    }
  },
  "nodes": {
    "nodewithareallylongname": {
      "tags": [],
      "createdAt": "Sat, 21 May 2022 14:00:34 GMT",
      "inline": false,
      "title": "nodewithareallylongname",
      "description": "",
      "image": ""
    },
    "N2": {
      "tags": [
        "tech",
        "thoughts",
        "internet",
        "generative"
      ],
      "createdAt": "2022-05-21"
    },
    "about": {
      "tags": [
        "thoughts",
        "info"
      ],
      "createdAt": "Wed, 18 May 2022 15:40:27 GMT",
      "inline": false,
      "title": "about",
      "description": "What is this project?",
      "image": ""
    },
    "hyper": {
      "tags": [
        "words"
      ],
      "createdAt": "Sun, 15 May 2022 10:20:22 GMT",
      "inline": false,
      "title": "hyper",
      "description": "Hyperwords, meaningless or hyperclear. This is a pointless thing. Let's all become very aware of the *veryness* of today. There's no support for emphasis.",
      "image": "/nodes/hyper.preview.jpg"
    },
    "manifest": {
      "tags": [
        "internet",
        "about"
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifest",
      "description": "The ideas behind this page, thoughts about the internet, etc",
      "image": "/img/combined/mirror2.jpg"
    },
    "scroll": {
      "tags": [],
      "createdAt": "Fri, 06 May 2022 21:18:48 GMT",
      "inline": false,
      "title": "scroll",
      "description": "Infinite (?) scrolling test",
      "image": ""
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
      "title": "N1"
    },
    "N3": {
      "inline": true,
      "tags": [
        "tech",
        "web",
        "literature"
      ],
      "createdAt": "2022-04-22"
    }
  }
} as const;