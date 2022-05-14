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
    "info": [
      {
        "from": "info",
        "to": "manifest",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "manifest": [
      {
        "from": "manifest",
        "to": "info",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
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
    "about": {
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
    "personal": {
      "weight": 0.3333333333333333,
      "count": 1
    }
  },
  "nodes": {
    "N2": {
      "tags": [
        "tech",
        "thoughts",
        "internet",
        "generative"
      ],
      "createdAt": "2022-05-21"
    },
    "manifest": {
      "tags": [
        "about",
        "internet"
      ],
      "createdAt": "Tue, 10 May 2022 20:11:26 GMT",
      "inline": false,
      "title": "manifest",
      "description": "The ideas behind this page, thoughts about the internet, etc",
      "image": ""
    },
    "scroll": {
      "tags": [],
      "createdAt": "Fri, 06 May 2022 21:18:48 GMT",
      "inline": false,
      "title": "scroll",
      "description": "",
      "image": ""
    },
    "info": {
      "tags": [
        "about",
        "thoughts",
        "personal"
      ],
      "createdAt": "Fri, 06 May 2022 20:48:42 GMT",
      "inline": false,
      "title": "info",
      "description": "",
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