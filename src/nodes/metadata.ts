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
      },
      {
        "from": "about",
        "to": "node-graph",
        "kind": "tangent",
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
        "to": "branches-and-connections",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "cringe-core",
        "kind": "tangent",
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
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "manifesto",
        "to": "node-graph",
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
    "alien-skies": [
      {
        "from": "alien-skies",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "alien-skies",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "super-cell": [
      {
        "from": "super-cell",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "moss-structure": [
      {
        "from": "moss-structure",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "moss-structure",
        "to": "foliage-grids",
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
        "to": "rhizome",
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
    "nest": [
      {
        "from": "nest",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
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
        "to": "rhizome",
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
    "swamp-mass": [
      {
        "from": "swamp-mass",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "jolt-gate": [
      {
        "from": "jolt-gate",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "swamp-mass",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "jolt-gate",
        "to": "rhizome",
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
    "immerse": [
      {
        "from": "immerse",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
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
        "to": "substrates",
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
    "domain-warping": [
      {
        "from": "domain-warping",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "domain-warping",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "substrates": [
      {
        "from": "substrates",
        "to": "alien-skies",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "block-dissolve",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "living-hobbling-goo",
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
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrates",
        "to": "substrate-catalogue",
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
    "block-dissolve": [
      {
        "from": "block-dissolve",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "block-dissolve",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "block-dissolve",
        "to": "rhizome",
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
    "rhizome": [
      {
        "from": "rhizome",
        "to": "block-dissolve",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "glow-tree",
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
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "rhizome",
        "to": "substrates",
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
    "branches-and-connections": [
      {
        "from": "branches-and-connections",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "branches-and-connections",
        "to": "links",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "branches-and-connections",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "branches-and-connections",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "branches-and-connections",
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "mappings": [
      {
        "from": "mappings",
        "to": "branches-and-connections",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "mappings",
        "to": "raw-making",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "links": [
      {
        "from": "links",
        "to": "branches-and-connections",
        "kind": "tangent",
        "strength": 0.5
      },
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
      },
      {
        "from": "links",
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "breath-crunch": [
      {
        "from": "breath-crunch",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "breath-crunch",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "breath-crunch",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "breath-crunch",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "breath-crunch",
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "living-hobbling-goo": [
      {
        "from": "living-hobbling-goo",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "substrate-catalogue",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "journal-artifacts": [
      {
        "from": "journal-artifacts",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "journal-artifacts",
        "to": "raw-making",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "journal-artifacts",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "journal-artifacts",
        "to": "branches-and-connections",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "journal-artifacts",
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "hyper": [
      {
        "from": "hyper",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "virtual-distance",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "hyper",
        "to": "node-graph",
        "kind": "consumed",
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
    "less-flat": [
      {
        "from": "less-flat",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "cringe-core",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "digital-gardening",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "less-flat",
        "to": "raw-making",
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
      },
      {
        "from": "chaos-growth",
        "to": "glow-tree",
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
        "kind": "next",
        "strength": 0.5
      },
      {
        "from": "city-pond",
        "to": "waft",
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
        "to": "foliage-fragments",
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
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "fragfuse",
        "to": "places-and-things",
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
    "cliffscapes": [
      {
        "from": "cliffscapes",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cliffscapes",
        "to": "glow-tree",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cliffscapes",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cliffscapes",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "formations": [
      {
        "from": "formations",
        "to": "cliffscapes",
        "kind": "tangent",
        "strength": 0.5
      },
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
      },
      {
        "from": "formations",
        "to": "glow-tree",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "glow-tree": [
      {
        "from": "glow-tree",
        "to": "cliffscapes",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "cringe-core": [
      {
        "from": "cringe-core",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cringe-core",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cringe-core",
        "to": "raw-making",
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
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "digital-biophilia",
        "to": "mappings",
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
      },
      {
        "from": "digital-gardening",
        "to": "mappings",
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
        "to": "foliage-fragments",
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
    "foliage-fragments": [
      {
        "from": "foliage-fragments",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "fluid-feedback",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "foliage-grids": [
      {
        "from": "foliage-grids",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "cliffscapes",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "neon-moss",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "moss-structure",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "domain-warping",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "neon-moss": [
      {
        "from": "neon-moss",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "neon-moss",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "neon-moss",
        "to": "glow-tree",
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
    "virtual-distance": [
      {
        "from": "virtual-distance",
        "to": "hyper",
        "kind": "tangent",
        "strength": 0.5
      },
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
      },
      {
        "from": "intro",
        "to": "latest",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "raw-making": [
      {
        "from": "raw-making",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "raw-making",
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "raw-making",
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "raw-making",
        "to": "less-flat",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "raw-making",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "raw-making",
        "to": "cringe-core",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "latest": [
      {
        "from": "latest",
        "to": "intro",
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
    "remnant-mappings": [
      {
        "from": "remnant-mappings",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "cliffscapes",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "making-comfort": [
      {
        "from": "making-comfort",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "making-comfort",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "making-comfort",
        "to": "raw-making",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "making-comfort",
        "to": "waft",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "making-comfort",
        "to": "places-and-things",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "waft": [
      {
        "from": "waft",
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "waft",
        "to": "summer-static",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "waft",
        "to": "city-pond",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "waft",
        "to": "places-and-things",
        "kind": "previous",
        "strength": 0.5
      }
    ],
    "places-and-things": [
      {
        "from": "places-and-things",
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "places-and-things",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "places-and-things",
        "to": "summer-static",
        "kind": "previous",
        "strength": 0.5
      },
      {
        "from": "places-and-things",
        "to": "waft",
        "kind": "next",
        "strength": 0.5
      }
    ],
    "maps-of-the-web": [
      {
        "from": "maps-of-the-web",
        "to": "mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "maps-of-the-web",
        "to": "branches-and-connections",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "maps-of-the-web",
        "to": "node-graph",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "maps-of-the-web",
        "to": "raw-making",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "maps-of-the-web",
        "to": "links",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "maps-of-the-web",
        "to": "manifesto",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "node-graph": [
      {
        "from": "node-graph",
        "to": "maps-of-the-web",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "node-graph",
        "to": "hyper",
        "kind": "consumes",
        "strength": 0.5
      },
      {
        "from": "node-graph",
        "to": "about",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "node-graph",
        "to": "manifesto",
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
    "summer-static": [
      {
        "from": "summer-static",
        "to": "places-and-things",
        "kind": "next",
        "strength": 0.5
      },
      {
        "from": "summer-static",
        "to": "digital-biophilia",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "summer-static",
        "to": "city-pond",
        "kind": "previous",
        "strength": 0.5
      },
      {
        "from": "summer-static",
        "to": "waft",
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
    "substrate-catalogue": [
      {
        "from": "substrate-catalogue",
        "to": "substrates",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "substrate-catalogue",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      }
    ]
  },
  "tags": {
    "art": {
      "weight": 1,
      "count": 42
    },
    "generative": {
      "weight": 0.9047619047619048,
      "count": 38
    },
    "live": {
      "weight": 0.6666666666666666,
      "count": 28
    },
    "domain-warping": {
      "weight": 0.4523809523809524,
      "count": 19
    },
    "organic": {
      "weight": 0.3333333333333333,
      "count": 14
    },
    "noise": {
      "weight": 0.30952380952380953,
      "count": 13
    },
    "project": {
      "weight": 0.30952380952380953,
      "count": 13
    },
    "thoughts": {
      "weight": 0.2857142857142857,
      "count": 12
    },
    "substrate": {
      "weight": 0.2857142857142857,
      "count": 12
    },
    "biophilia": {
      "weight": 0.2857142857142857,
      "count": 12
    },
    "photography": {
      "weight": 0.2619047619047619,
      "count": 11
    },
    "geometry": {
      "weight": 0.23809523809523808,
      "count": 10
    },
    "feedback": {
      "weight": 0.21428571428571427,
      "count": 9
    },
    "fragments": {
      "weight": 0.19047619047619047,
      "count": 8
    },
    "internet": {
      "weight": 0.16666666666666666,
      "count": 7
    },
    "webart": {
      "weight": 0.16666666666666666,
      "count": 7
    },
    "interactive": {
      "weight": 0.16666666666666666,
      "count": 7
    },
    "css": {
      "weight": 0.16666666666666666,
      "count": 7
    },
    "mappings": {
      "weight": 0.14285714285714285,
      "count": 6
    },
    "info": {
      "weight": 0.11904761904761904,
      "count": 5
    },
    "exploration": {
      "weight": 0.11904761904761904,
      "count": 5
    },
    "writing": {
      "weight": 0.09523809523809523,
      "count": 4
    },
    "chrome": {
      "weight": 0.09523809523809523,
      "count": 4
    },
    "glitch": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "rhizome": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "space-colonization": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "hyper": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "fuse": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "words": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "utility": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "memes": {
      "weight": 0.07142857142857142,
      "count": 3
    },
    "instancing": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "mind": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "Deleuze": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "dithering": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "external": {
      "weight": 0.047619047619047616,
      "count": 2
    },
    "octree": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "contact": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "communication": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "particles": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "cringe": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "texture": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "depth": {
      "weight": 0.023809523809523808,
      "count": 1
    },
    "flowfield": {
      "weight": 0.023809523809523808,
      "count": 1
    }
  },
  "nodes": {
    "maps-of-the-web": {
      "tags": [
        "thoughts",
        "internet",
        "mappings",
        "exploration",
        "writing"
      ],
      "links": [
        {
          "from": "maps-of-the-web",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "maps-of-the-web",
          "to": "branches-and-connections",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "maps-of-the-web",
          "to": "node-graph",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "maps-of-the-web",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "maps-of-the-web",
          "to": "links",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "maps-of-the-web",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 27 Apr 2023 17:31:40 GMT",
      "updatedAt": "2023-04-30T10:03:08.834Z",
      "inline": false,
      "title": "Maps of The Web",
      "description": "Making maps of webs: thoughts on note-taking, the Internet, browser plugins, websites.",
      "image": "/nodes/maps-of-the-web.preview.jpg"
    },
    "node-graph": {
      "tags": [
        "mappings",
        "exploration",
        "info",
        "utility"
      ],
      "links": [
        {
          "from": "node-graph",
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "node-graph",
          "to": "hyper",
          "kind": "consumes",
          "strength": 0.5
        },
        {
          "from": "node-graph",
          "to": "about",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "node-graph",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 18 Mar 2023 18:53:13 GMT",
      "updatedAt": "2023-04-22T20:34:36.939Z",
      "inline": false,
      "title": "Node Graph",
      "description": "A graph view of all the nodes on this page. A simple visualization, using D3, for showing clusters and connections. WARNING: May perform poorly on non-desktop devices.",
      "image": "/nodes/node-graph.preview.jpg"
    },
    "making-comfort": {
      "tags": [
        "art",
        "project",
        "thoughts",
        "photography",
        "webart"
      ],
      "links": [
        {
          "from": "making-comfort",
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "making-comfort",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "making-comfort",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "making-comfort",
          "to": "waft",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "making-comfort",
          "to": "places-and-things",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 06 Mar 2023 18:47:11 GMT",
      "updatedAt": "2023-03-22T21:48:48.258Z",
      "inline": false,
      "asDocument": true,
      "title": "Making Comfort",
      "description": "Short poetic image project. Some photos, some notes, some movement. Aesthetic test mixed with journaling.",
      "image": "/nodes/making-comfort.preview.jpg"
    },
    "breath-crunch": {
      "tags": [
        "art",
        "generative",
        "live",
        "substrate",
        "feedback",
        "webart"
      ],
      "links": [
        {
          "from": "breath-crunch",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "breath-crunch",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "breath-crunch",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "breath-crunch",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "breath-crunch",
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 23 Feb 2023 19:15:44 GMT",
      "updatedAt": "2023-02-23T19:39:23.299Z",
      "inline": false,
      "asDocument": true,
      "title": "Breath Crunch",
      "description": "A breathing exercise. Doctors don't want you to breathe like this. Playing with ritual and stupid mindfulness.",
      "image": "/nodes/breath-crunch.preview.jpg"
    },
    "substrate-catalogue": {
      "tags": [
        "art",
        "generative",
        "project",
        "substrate",
        "words"
      ],
      "links": [
        {
          "from": "substrate-catalogue",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrate-catalogue",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 05 Feb 2023 14:40:22 GMT",
      "updatedAt": "2023-02-05T13:59:50.315Z",
      "inline": false,
      "title": "Substrate Catalogue",
      "description": "A catalogue of substrate shaders with stream-of-consciousness descriptions.",
      "image": "/nodes/substrate-catalogue.preview.jpg"
    },
    "journal-artifacts": {
      "tags": [
        "art",
        "generative",
        "project",
        "thoughts",
        "feedback",
        "css"
      ],
      "links": [
        {
          "from": "journal-artifacts",
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "journal-artifacts",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "journal-artifacts",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "journal-artifacts",
          "to": "branches-and-connections",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "journal-artifacts",
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 21 Jan 2023 16:42:22 GMT",
      "updatedAt": "2023-04-18T19:45:23.795Z",
      "inline": false,
      "title": "Journal Artifacts",
      "description": "A small project based on (poetic) journal artifacts. An abstract source of memory prompts.",
      "image": "/nodes/journal-artifacts.preview.png"
    },
    "raw-making": {
      "tags": [
        "art",
        "thoughts",
        "fragments",
        "exploration",
        "cringe"
      ],
      "links": [
        {
          "from": "raw-making",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "raw-making",
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "raw-making",
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "raw-making",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "raw-making",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "raw-making",
          "to": "cringe-core",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Fri, 06 Jan 2023 09:30:05 GMT",
      "updatedAt": "2023-01-06T12:50:05.101Z",
      "inline": true,
      "title": "Raw Making",
      "description": "Thoughts about hurry sickness, productivity and raw creation.",
      "image": ""
    },
    "waft": {
      "tags": [
        "project",
        "photography"
      ],
      "links": [
        {
          "from": "waft",
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "waft",
          "to": "summer-static",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "waft",
          "to": "city-pond",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "waft",
          "to": "places-and-things",
          "kind": "previous",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 27 Dec 2022 09:42:22 GMT",
      "updatedAt": "2023-01-03T19:27:49.242Z",
      "inline": false,
      "asDocument": true,
      "title": "Waft",
      "description": "Pictures from winter. Experimenting with (slightly) more aggressive editing and a dramatic flash.",
      "image": "/nodes/waft.preview.jpg"
    },
    "living-hobbling-goo": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "noise",
        "substrate",
        "biophilia",
        "webart",
        "fuse"
      ],
      "links": [
        {
          "from": "living-hobbling-goo",
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "substrate-catalogue",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Fri, 23 Dec 2022 10:06:41 GMT",
      "updatedAt": "2023-02-23T19:26:26.752Z",
      "inline": false,
      "asDocument": true,
      "title": "Living Hobbling Goo",
      "description": "Some jumbled words and an experiment with documentation/presentation/design. Things are moving and living without aim.",
      "image": "/nodes/living-hobbling-goo.preview.jpg"
    },
    "branches-and-connections": {
      "tags": [
        "thoughts",
        "fragments",
        "internet",
        "mappings"
      ],
      "links": [
        {
          "from": "branches-and-connections",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "branches-and-connections",
          "to": "links",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "branches-and-connections",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "branches-and-connections",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "branches-and-connections",
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 22 Nov 2022 15:40:27 GMT",
      "updatedAt": "2023-03-22T21:48:48.254Z",
      "inline": true,
      "title": "Branches and connections",
      "description": "My thoughts and practice around sharing links, the small internet, and the internet of platforms.",
      "image": ""
    },
    "places-and-things": {
      "tags": [
        "project",
        "photography"
      ],
      "links": [
        {
          "from": "places-and-things",
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "places-and-things",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "places-and-things",
          "to": "summer-static",
          "kind": "previous",
          "strength": 0.5
        },
        {
          "from": "places-and-things",
          "to": "waft",
          "kind": "next",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 31 Oct 2022 18:03:25 GMT",
      "updatedAt": "2023-01-03T19:23:24.360Z",
      "inline": false,
      "title": "Places and things",
      "description": "Another series of photographs. Another slice of time, another tone. Just a collection.",
      "image": "/nodes/places-and-things.preview.jpg",
      "asDocument": true
    },
    "mappings": {
      "tags": [
        "art",
        "thoughts",
        "fragments",
        "mappings",
        "Deleuze"
      ],
      "links": [
        {
          "from": "mappings",
          "to": "branches-and-connections",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "mappings",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 16 Oct 2022 10:16:11 GMT",
      "updatedAt": "2023-04-27T20:58:05.127Z",
      "inline": true,
      "title": "Mappings",
      "description": "Some thoughts about art and map-making as a creative tool.",
      "image": ""
    },
    "remnant-mappings": {
      "tags": [
        "art",
        "generative",
        "live",
        "feedback",
        "mappings",
        "rhizome"
      ],
      "links": [
        {
          "from": "remnant-mappings",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "cliffscapes",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 15 Oct 2022 13:51:33 GMT",
      "updatedAt": "2022-12-05T17:43:13.665Z",
      "inline": false,
      "title": "Remnant Mappings",
      "description": "Strange maps of strange objects. Maybe rocks? Or scraps found in the dirt? Playing with slow and imperfect revelations.",
      "image": "/nodes/remnant-mappings.preview.jpg"
    },
    "foliage-fragments": {
      "tags": [
        "art",
        "generative",
        "live",
        "organic",
        "biophilia",
        "photography",
        "feedback",
        "mappings"
      ],
      "links": [
        {
          "from": "foliage-fragments",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "fluid-feedback",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 02 Oct 2022 12:20:41 GMT",
      "updatedAt": "2023-03-22T21:48:48.256Z",
      "inline": false,
      "title": "Foliage Fragments",
      "description": "Image fragments extracted using cellular automata, flickering in a feedback loop. Another take on foliage. WARNING: contains flashing images.",
      "image": "/nodes/foliage-fragments.preview.jpg"
    },
    "foliage-grids": {
      "tags": [
        "art",
        "generative",
        "live",
        "organic",
        "substrate",
        "biophilia",
        "photography",
        "geometry"
      ],
      "links": [
        {
          "from": "foliage-grids",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "cliffscapes",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 26 Sep 2022 21:46:38 GMT",
      "updatedAt": "2022-12-05T17:43:13.658Z",
      "inline": false,
      "title": "Foliage Grids",
      "description": "Dynamic pixelation and image displacement grids. A small study with various foliage details. Combining generative techniques and photography.",
      "image": "/nodes/foliage-grids.preview.jpg"
    },
    "cliffscapes": {
      "tags": [
        "art",
        "generative",
        "live",
        "photography",
        "geometry",
        "interactive",
        "glitch",
        "instancing",
        "octree"
      ],
      "links": [
        {
          "from": "cliffscapes",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cliffscapes",
          "to": "glow-tree",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cliffscapes",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cliffscapes",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 14 Sep 2022 18:30:05 GMT",
      "updatedAt": "2022-12-05T17:43:13.653Z",
      "inline": false,
      "title": "Cliffscapes",
      "description": "Continuation of formations and glow-tree sketches: a landscape and calm skies. A tree structure controls the form of the cliffscape.",
      "image": "/nodes/cliffscapes.preview.jpg"
    },
    "alien-skies": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "organic",
        "noise",
        "substrate"
      ],
      "links": [
        {
          "from": "alien-skies",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "domain-warping",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "alien-skies",
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 10 Sep 2022 14:34:05 GMT",
      "updatedAt": "2023-03-18T23:00:18.019Z",
      "inline": false,
      "title": "Alien Skies",
      "description": "Strange perspective distortion for alien skies. A test for a larger composition.",
      "image": "/nodes/alien-skies.preview.jpg"
    },
    "cringe-core": {
      "tags": [
        "thoughts",
        "fragments",
        "internet"
      ],
      "links": [
        {
          "from": "cringe-core",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cringe-core",
          "to": "less-flat",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cringe-core",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 07 Sep 2022 21:12:23 GMT",
      "updatedAt": "2022-12-05T17:43:13.654Z",
      "inline": true,
      "title": "Cringe Core",
      "description": "Short thoughts about cringe.",
      "image": ""
    },
    "glow-tree": {
      "tags": [
        "art",
        "generative",
        "live",
        "geometry",
        "space-colonization"
      ],
      "links": [
        {
          "from": "glow-tree",
          "to": "cliffscapes",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "neon-moss",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 07 Sep 2022 17:29:53 GMT",
      "updatedAt": "2022-12-05T17:43:13.658Z",
      "inline": false,
      "title": "Glow Tree",
      "description": "Simple tree structure and octree visualization. Mixing organic algorithms and less organic data structures.",
      "image": "/nodes/glow-tree.preview.jpg",
      "hideOverflow": true
    },
    "virtual-distance": {
      "tags": [
        "webart",
        "css"
      ],
      "links": [
        {
          "from": "virtual-distance",
          "to": "hyper",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2022-12-05T17:43:13.668Z",
      "inline": false,
      "title": "Virtual Distance",
      "description": "A css experiment with endless banner scrolling and exaggerated shadows.",
      "image": "/nodes/virtual-distance.preview.jpg"
    },
    "summer-static": {
      "tags": [
        "project",
        "biophilia",
        "photography"
      ],
      "links": [
        {
          "from": "summer-static",
          "to": "places-and-things",
          "kind": "next",
          "strength": 0.5
        },
        {
          "from": "summer-static",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "summer-static",
          "to": "city-pond",
          "kind": "previous",
          "strength": 0.5
        },
        {
          "from": "summer-static",
          "to": "waft",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 27 Aug 2022 17:33:51 GMT",
      "updatedAt": "2023-01-03T19:23:24.361Z",
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
          "to": "cliffscapes",
          "kind": "tangent",
          "strength": 0.5
        },
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
        },
        {
          "from": "formations",
          "to": "glow-tree",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 25 Aug 2022 09:25:46 GMT",
      "updatedAt": "2022-12-05T17:43:13.658Z",
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
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "neon-moss",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "neon-moss",
          "to": "glow-tree",
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
      "updatedAt": "2022-12-05T17:43:13.664Z",
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
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "digital-biophilia",
          "to": "mappings",
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
      "updatedAt": "2022-12-05T17:43:13.654Z",
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
        "substrate",
        "biophilia"
      ],
      "links": [
        {
          "from": "super-cell",
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2023-03-22T21:48:48.261Z",
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
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "block-dissolve",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "living-hobbling-goo",
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
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "substrates",
          "to": "substrate-catalogue",
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
      "updatedAt": "2022-12-05T17:43:13.667Z",
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
        "organic",
        "noise",
        "substrate",
        "biophilia"
      ],
      "links": [
        {
          "from": "moss-structure",
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "moss-structure",
          "to": "foliage-grids",
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
          "to": "rhizome",
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
      "updatedAt": "2023-03-22T21:48:48.259Z",
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
      "links": [
        {
          "from": "nest",
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
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
          "to": "rhizome",
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
      "updatedAt": "2023-03-22T21:48:48.260Z",
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
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "swamp-mass",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "jolt-gate",
          "to": "rhizome",
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
      "updatedAt": "2023-03-22T21:48:48.257Z",
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
        "substrate",
        "biophilia"
      ],
      "links": [
        {
          "from": "swamp-mass",
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2023-03-18T23:01:57.591Z",
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
      "updatedAt": "2022-12-05T17:43:13.662Z",
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
        },
        {
          "from": "digital-gardening",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 25 Jul 2022 19:48:20 GMT",
      "updatedAt": "2023-03-22T21:48:48.255Z",
      "inline": true,
      "title": "Digital Gardening",
      "description": "Some thoughts about digital and generative gardening.",
      "image": ""
    },
    "city-pond": {
      "tags": [
        "organic",
        "project",
        "biophilia",
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
          "kind": "next",
          "strength": 0.5
        },
        {
          "from": "city-pond",
          "to": "waft",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 21 Jul 2022 20:37:19 GMT",
      "updatedAt": "2022-12-12T16:33:59.194Z",
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
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "cringe-core",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "digital-gardening",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "manifesto",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "less-flat",
          "to": "raw-making",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 18 Jul 2022 21:48:39 GMT",
      "updatedAt": "2023-01-06T12:38:11.506Z",
      "inline": true,
      "title": "Less Flat",
      "description": "Thoughts about artistic creation as self-exploration.",
      "image": ""
    },
    "intro": {
      "tags": [
        "fragments",
        "info",
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
        },
        {
          "from": "intro",
          "to": "latest",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 16 Jul 2022 09:54:45 GMT",
      "updatedAt": "2023-04-15T17:36:25.747Z",
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
      "updatedAt": "2022-12-05T17:43:13.657Z",
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
      "links": [
        {
          "from": "latest",
          "to": "intro",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 28 Jun 2022 07:07:14 GMT",
      "updatedAt": "2023-03-22T21:48:48.258Z",
      "inline": true,
      "title": "Latest",
      "description": "Displays the most recently created and most recently updated nodes. Just a utility.",
      "image": ""
    },
    "chaos-growth": {
      "tags": [
        "art",
        "generative",
        "project",
        "noise",
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
        },
        {
          "from": "chaos-growth",
          "to": "glow-tree",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 22 Jun 2022 21:26:31 GMT",
      "updatedAt": "2022-12-12T16:33:59.194Z",
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
        "project",
        "noise"
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
      "updatedAt": "2022-12-12T16:33:59.197Z",
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
        "project",
        "noise",
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
      "updatedAt": "2022-12-12T16:33:59.197Z",
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
        "fuse",
        "memes"
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
      "updatedAt": "2022-12-12T16:33:59.198Z",
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
          "to": "foliage-fragments",
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
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "fragfuse",
          "to": "places-and-things",
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
      "updatedAt": "2022-12-12T16:33:59.195Z",
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
          "to": "branches-and-connections",
          "kind": "tangent",
          "strength": 0.5
        },
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
        },
        {
          "from": "links",
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "2023-04-13T15:26:38.893Z",
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
      "updatedAt": "2022-12-05T17:43:13.664Z"
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
      "updatedAt": "2022-12-05T17:43:13.653Z"
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
        },
        {
          "from": "about",
          "to": "node-graph",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 18 May 2022 15:40:27 GMT",
      "inline": false,
      "title": "About",
      "description": "What is this project? What does this space contain? Why? Who am I? Do you care?",
      "image": "/nodes/about.preview.jpg",
      "updatedAt": "2023-04-18T19:45:23.795Z"
    },
    "hyper": {
      "tags": [
        "art",
        "photography",
        "css",
        "words",
        "hyper"
      ],
      "links": [
        {
          "from": "hyper",
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "virtual-distance",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "hyper",
          "to": "node-graph",
          "kind": "consumed",
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
      "updatedAt": "2023-04-11T20:36:54.074Z"
    },
    "manifesto": {
      "tags": [
        "thoughts",
        "internet",
        "info"
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
          "to": "branches-and-connections",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "cringe-core",
          "kind": "tangent",
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
          "to": "maps-of-the-web",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "manifesto",
          "to": "node-graph",
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
      "updatedAt": "2022-12-05T17:43:13.662Z"
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
          "to": "substrates",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "block-dissolve",
          "to": "rhizome",
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
      "updatedAt": "2023-03-22T21:48:48.254Z",
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
        "glitch",
        "dithering",
        "blue-noise"
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
      "updatedAt": "2022-12-05T17:43:13.662Z",
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
      "updatedAt": "2022-12-05T17:43:13.664Z",
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
      "updatedAt": "2022-12-05T17:43:13.666Z",
      "inline": false,
      "title": "Skew Bulbs",
      "description": "Trigonometric functions, noise, and normal map generation. The surface is rendered as a evolving metallic material.",
      "image": "/nodes/skew-bulbs.preview.jpg"
    },
    "slices": {
      "tags": [
        "art",
        "photography",
        "css",
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
      "updatedAt": "2022-12-05T17:43:13.666Z",
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
          "to": "block-dissolve",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "glow-tree",
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
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "moss-structure",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "rhizome",
          "to": "substrates",
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
      "updatedAt": "2023-03-22T21:48:48.261Z",
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
          "to": "foliage-fragments",
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
      "updatedAt": "2022-12-05T17:43:13.657Z",
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
        "feedback",
        "interactive"
      ],
      "links": [
        {
          "from": "immerse",
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
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
          "to": "substrates",
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
      "updatedAt": "2023-03-22T21:48:48.257Z",
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
      "updatedAt": "2023-03-18T23:00:19.907Z",
      "inline": false,
      "title": "Alien Patterns",
      "description": "On combining modified noise and domain warping to produce alien patterns",
      "image": "/img/posts/alien-patterns/banner.jpg",
      "asDocument": true,
      "wrapperProps": {
        "showHeader": true
      }
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
      "updatedAt": "2022-12-05T17:43:13.663Z",
      "inline": false,
      "title": "Characteristics of Modified Noise",
      "description": "A few of my common methods for modifying standard noise functions.",
      "image": "/img/posts/modified-noise/banner.jpg",
      "asDocument": true,
      "wrapperProps": {
        "showHeader": true
      }
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
          "to": "alien-skies",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "domain-warping",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2022-12-05T17:43:13.655Z",
      "inline": false,
      "title": "My Take on Domain Warping",
      "description": "How I've used domain warping to achieve strange generative effects.",
      "image": "/img/posts/domain-warping/banner.jpg",
      "asDocument": true,
      "wrapperProps": {
        "showHeader": true
      }
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
      "updatedAt": "2022-12-05T17:43:13.657Z",
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
        "instancing",
        "mind"
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
      "updatedAt": "2022-12-05T17:43:13.665Z",
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
      "updatedAt": "2022-12-05T17:43:13.669Z",
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
      "updatedAt": "2022-12-05T17:43:13.667Z",
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
      "updatedAt": "2022-12-05T17:43:13.667Z",
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
      "updatedAt": "2022-12-05T17:43:13.666Z",
      "inline": false,
      "title": "Retro Core",
      "description": "Experiments with texture and confused depth. 3D shapes turned flat using transparency and disabled depth testing.",
      "image": "/nodes/retro-core.preview.jpg"
    }
  },
  "latestNode": "maps-of-the-web",
  "mostRecentlyUpdatedNode": "mappings"
} as const;