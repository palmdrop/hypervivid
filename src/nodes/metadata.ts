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
    "aggregate-forms": [
      {
        "from": "aggregate-forms",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "fragfuse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-forms",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "formations": [
      {
        "from": "formations",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "formations",
        "to": "cliffscapes",
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
    "foliage-fragments": [
      {
        "from": "foliage-fragments",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-fragments",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
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
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "remnant-mappings": [
      {
        "from": "remnant-mappings",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "remnant-mappings",
        "to": "living-hobbling-goo",
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
    "living-hobbling-goo": [
      {
        "from": "living-hobbling-goo",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "breath-crunch",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-hobbling-goo",
        "to": "evergreen-broth",
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
    "foliage-grids": [
      {
        "from": "foliage-grids",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "foliage-grids",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "fragfuse": [
      {
        "from": "fragfuse",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "fragfuse",
        "to": "aggregate-topology",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "aggregate-topology": [
      {
        "from": "aggregate-topology",
        "to": "aggregate-forms",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "formations",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "foliage-fragments",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "remnant-mappings",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "foliage-grids",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "aggregate-topology",
        "to": "fragfuse",
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
        "to": "cathedral-nodes",
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
        "to": "cathedral-nodes",
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
        "to": "cathedral-nodes",
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
        "to": "liquid-cathedral",
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
        "to": "liquid-cathedral",
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
        "to": "making-comfort",
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
        "to": "making-comfort",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "journal-artifacts",
        "to": "process-diary-1",
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
    "cathedral-nodes": [
      {
        "from": "cathedral-nodes",
        "to": "liquid-cathedral",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cathedral-nodes",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cathedral-nodes",
        "to": "fluid-feedback",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cathedral-nodes",
        "to": "nest",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "cathedral-nodes",
        "to": "super-cell",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "liquid-cathedral": [
      {
        "from": "liquid-cathedral",
        "to": "cathedral-nodes",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "liquid-cathedral",
        "to": "jolt-gate",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "liquid-cathedral",
        "to": "immerse",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "liquid-cathedral",
        "to": "fluid-feedback",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "liquid-cathedral",
        "to": "solar-chrome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "liquid-cathedral",
        "to": "solar-landscape",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "fluid-feedback": [
      {
        "from": "fluid-feedback",
        "to": "cathedral-nodes",
        "kind": "tangent",
        "strength": 0.5
      },
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
      },
      {
        "from": "fluid-feedback",
        "to": "liquid-cathedral",
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
        "to": "living-drone-commission",
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
        "to": "rhizome",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "chaos-growth",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "living-drone-commission",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "glow-tree",
        "to": "process-diary-1",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "digital-biophilia": [
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
        "to": "process-diary-1",
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
        "to": "evergreen-broth",
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
    "evergreen-broth": [
      {
        "from": "evergreen-broth",
        "to": "virtual-distance",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "evergreen-broth",
        "to": "living-hobbling-goo",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "evergreen-broth",
        "to": "substrate-catalogue",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "evergreen-broth",
        "to": "ethereal-bits",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "virtual-distance": [
      {
        "from": "virtual-distance",
        "to": "evergreen-broth",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "substrate-catalogue": [
      {
        "from": "substrate-catalogue",
        "to": "evergreen-broth",
        "kind": "tangent",
        "strength": 0.5
      },
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
        "to": "liquid-cathedral",
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
    "intro": [
      {
        "from": "intro",
        "to": "about",
        "kind": "references",
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
    "latest": [
      {
        "from": "latest",
        "to": "intro",
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
    "solar-chrome": [
      {
        "from": "solar-chrome",
        "to": "liquid-cathedral",
        "kind": "tangent",
        "strength": 0.5
      },
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
    "living-drone-commission": [
      {
        "from": "living-drone-commission",
        "to": "glow-tree",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-drone-commission",
        "to": "weave",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "living-drone-commission",
        "to": "process-diary-1",
        "kind": "tangent",
        "strength": 0.5
      }
    ],
    "process-diary-1": [
      {
        "from": "process-diary-1",
        "to": "living-drone-commission",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "process-diary-1",
        "to": "journal-artifacts",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "process-diary-1",
        "to": "glow-tree",
        "kind": "tangent",
        "strength": 0.5
      },
      {
        "from": "process-diary-1",
        "to": "digital-biophilia",
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
    "node-graph": [
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
    ]
  },
  "tags": {
    "art": {
      "weight": 1,
      "count": 44
    },
    "generative": {
      "weight": 1,
      "count": 44
    },
    "live": {
      "weight": 0.75,
      "count": 33
    },
    "domain-warping": {
      "weight": 0.4772727272727273,
      "count": 21
    },
    "project": {
      "weight": 0.3409090909090909,
      "count": 15
    },
    "biophilia": {
      "weight": 0.3181818181818182,
      "count": 14
    },
    "substrate": {
      "weight": 0.3181818181818182,
      "count": 14
    },
    "organic": {
      "weight": 0.3181818181818182,
      "count": 14
    },
    "feedback": {
      "weight": 0.29545454545454547,
      "count": 13
    },
    "noise": {
      "weight": 0.29545454545454547,
      "count": 13
    },
    "photography": {
      "weight": 0.25,
      "count": 11
    },
    "geometry": {
      "weight": 0.20454545454545456,
      "count": 9
    },
    "webart": {
      "weight": 0.18181818181818182,
      "count": 8
    },
    "interactive": {
      "weight": 0.18181818181818182,
      "count": 8
    },
    "css": {
      "weight": 0.18181818181818182,
      "count": 8
    },
    "chrome": {
      "weight": 0.13636363636363635,
      "count": 6
    },
    "thoughts": {
      "weight": 0.11363636363636363,
      "count": 5
    },
    "mappings": {
      "weight": 0.11363636363636363,
      "count": 5
    },
    "fuse": {
      "weight": 0.11363636363636363,
      "count": 5
    },
    "space-colonization": {
      "weight": 0.11363636363636363,
      "count": 5
    },
    "info": {
      "weight": 0.09090909090909091,
      "count": 4
    },
    "writing": {
      "weight": 0.09090909090909091,
      "count": 4
    },
    "internet": {
      "weight": 0.09090909090909091,
      "count": 4
    },
    "external": {
      "weight": 0.09090909090909091,
      "count": 4
    },
    "glitch": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "rhizome": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "hyper": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "words": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "utility": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "exploration": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "memes": {
      "weight": 0.06818181818181818,
      "count": 3
    },
    "instancing": {
      "weight": 0.045454545454545456,
      "count": 2
    },
    "fragments": {
      "weight": 0.045454545454545456,
      "count": 2
    },
    "mind": {
      "weight": 0.045454545454545456,
      "count": 2
    },
    "dithering": {
      "weight": 0.045454545454545456,
      "count": 2
    },
    "blue-noise": {
      "weight": 0.045454545454545456,
      "count": 2
    },
    "octree": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "contact": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "communication": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "particles": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "collaboration": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "process": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "texture": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "depth": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "Deleuze": {
      "weight": 0.022727272727272728,
      "count": 1
    },
    "flowfield": {
      "weight": 0.022727272727272728,
      "count": 1
    }
  },
  "nodes": {
    "cathedral-nodes": {
      "tags": [
        "generative",
        "live",
        "domain-warping",
        "substrate",
        "feedback",
        "chrome"
      ],
      "links": [
        {
          "from": "cathedral-nodes",
          "to": "liquid-cathedral",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cathedral-nodes",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cathedral-nodes",
          "to": "fluid-feedback",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cathedral-nodes",
          "to": "nest",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "cathedral-nodes",
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 03 Jul 2024 20:36:51 GMT",
      "updatedAt": "2024-07-03T21:10:43.494Z",
      "inline": false,
      "title": "Cathedral Nodes",
      "description": "A variation on the Liquid Cathedral, a continuation, with added noise.",
      "image": "/nodes/cathedral-nodes.preview.png"
    },
    "liquid-cathedral": {
      "tags": [
        "generative",
        "live",
        "domain-warping",
        "substrate",
        "feedback",
        "chrome"
      ],
      "links": [
        {
          "from": "liquid-cathedral",
          "to": "cathedral-nodes",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "liquid-cathedral",
          "to": "jolt-gate",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "liquid-cathedral",
          "to": "immerse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "liquid-cathedral",
          "to": "fluid-feedback",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "liquid-cathedral",
          "to": "solar-chrome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "liquid-cathedral",
          "to": "solar-landscape",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 18 Apr 2024 16:08:23 GMT",
      "updatedAt": "2024-04-19T14:34:08.112Z",
      "inline": false,
      "title": "Liquid Cathedral",
      "description": "Metallic feedback experiment, hallucinated structures, noisy grids.",
      "image": "/nodes/liquid-cathedral.preview.jpg"
    },
    "evergreen-broth": {
      "tags": [
        "art",
        "generative",
        "live",
        "project",
        "webart",
        "css",
        "internet",
        "writing",
        "external"
      ],
      "links": [
        {
          "from": "evergreen-broth",
          "to": "virtual-distance",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "evergreen-broth",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "evergreen-broth",
          "to": "substrate-catalogue",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "evergreen-broth",
          "to": "ethereal-bits",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Mon, 12 Feb 2024 18:32:16 GMT",
      "updatedAt": "2026-01-15T13:08:42.292Z",
      "inline": false,
      "title": "Evergreen Broth",
      "description": "Evergreen web art project with narrative elements.",
      "image": "/nodes/evergreen-broth.preview.png"
    },
    "living-drone-commission": {
      "tags": [
        "generative",
        "art",
        "live",
        "project",
        "biophilia",
        "organic",
        "interactive",
        "space-colonization",
        "external",
        "collaboration"
      ],
      "links": [
        {
          "from": "living-drone-commission",
          "to": "glow-tree",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-drone-commission",
          "to": "weave",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-drone-commission",
          "to": "process-diary-1",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 04 Jan 2024 14:24:03 GMT",
      "updatedAt": "2024-01-04T15:22:04.714Z",
      "inline": false,
      "title": "Living Drone (commision)",
      "description": "A generative art project made for the lovely people at fveld.",
      "image": "/nodes/living-drone-commission.preview.jpg"
    },
    "process-diary-1": {
      "tags": [
        "art",
        "generative",
        "biophilia",
        "thoughts",
        "space-colonization",
        "exploration",
        "process"
      ],
      "links": [
        {
          "from": "process-diary-1",
          "to": "living-drone-commission",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "process-diary-1",
          "to": "journal-artifacts",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "process-diary-1",
          "to": "glow-tree",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "process-diary-1",
          "to": "digital-biophilia",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 22 Jul 2023 11:55:40 GMT",
      "updatedAt": "2026-01-15T17:32:40.796Z",
      "inline": false,
      "title": "Process Diary",
      "description": "Short process update with some samples and thoughts about generative art.",
      "image": "/nodes/process-diary-1.preview.png"
    },
    "aggregate-topology": {
      "tags": [
        "art",
        "generative",
        "live",
        "biophilia",
        "feedback",
        "mappings",
        "fuse"
      ],
      "links": [
        {
          "from": "aggregate-topology",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-topology",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 24 May 2023 20:04:27 GMT",
      "updatedAt": "2026-01-16T07:48:37.290Z",
      "inline": false,
      "hideOverflow": true,
      "title": "Aggregate Topology",
      "description": "A variation on the Aggregate Forms node. Vertex displacement viewed top-down, emphasizing the color and topology changes. WARNING: not phone friendly.",
      "image": "/nodes/aggregate-topology.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "aggregate-forms": {
      "tags": [
        "art",
        "generative",
        "live",
        "biophilia",
        "feedback",
        "mappings",
        "fuse"
      ],
      "links": [
        {
          "from": "aggregate-forms",
          "to": "formations",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "foliage-fragments",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "living-hobbling-goo",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "foliage-grids",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "fragfuse",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "aggregate-forms",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 07 May 2023 14:08:27 GMT",
      "updatedAt": "2026-01-16T07:57:54.304Z",
      "inline": false,
      "hideOverflow": true,
      "title": "Aggregate Forms",
      "description": "Experiments with vertex displacement, substrate shaders, and feedback. A continuation of Remnant Mappings and Foliage Grids. WARNING: not phone friendly.",
      "image": "/nodes/aggregate-forms.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "node-graph": {
      "tags": [
        "mappings",
        "info",
        "exploration",
        "utility"
      ],
      "links": [
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
        }
      ],
      "createdAt": "Sat, 18 Mar 2023 18:53:13 GMT",
      "updatedAt": "2026-01-16T08:00:00.570Z",
      "inline": false,
      "title": "Node Graph",
      "description": "A graph view of all the nodes on this page. A simple visualization, using D3, for showing clusters and connections. WARNING: May perform poorly on non-desktop devices.",
      "image": "/nodes/node-graph.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "making-comfort": {
      "tags": [
        "art",
        "project",
        "photography",
        "webart",
        "thoughts"
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
      "updatedAt": "2026-01-16T08:12:12.558Z",
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
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Thu, 23 Feb 2023 19:15:44 GMT",
      "updatedAt": "2026-01-16T08:14:12.898Z",
      "inline": false,
      "asDocument": true,
      "title": "Breath Crunch",
      "description": "A breathing exercise. Doctors don't want you to breathe like this.",
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
          "to": "evergreen-broth",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2024-01-04T14:21:54.238Z",
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
        "feedback",
        "css",
        "thoughts"
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
          "to": "making-comfort",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "journal-artifacts",
          "to": "process-diary-1",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sat, 21 Jan 2023 16:42:22 GMT",
      "updatedAt": "2026-01-16T08:20:19.419Z",
      "inline": false,
      "title": "Journal Artifacts",
      "description": "A small project based on (poetic) journal artifacts. Vague memory prompts.",
      "image": "/nodes/journal-artifacts.preview.png"
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
      "updatedAt": "2024-01-04T14:21:54.239Z",
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
        "substrate",
        "biophilia",
        "noise",
        "webart",
        "fuse"
      ],
      "links": [
        {
          "from": "living-hobbling-goo",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "breath-crunch",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "living-hobbling-goo",
          "to": "evergreen-broth",
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
      "updatedAt": "2026-01-16T08:22:20.930Z",
      "inline": false,
      "asDocument": true,
      "title": "Living Hobbling Goo",
      "description": "Jumbled words and an experiment with documentation/presentation/design.",
      "image": "/nodes/living-hobbling-goo.preview.jpg"
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
      "updatedAt": "2026-01-16T08:23:21.817Z",
      "inline": false,
      "title": "Places and things",
      "description": "Another series of photographs. Another slice of time.",
      "image": "/nodes/places-and-things.preview.jpg",
      "asDocument": true
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
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "remnant-mappings",
          "to": "living-hobbling-goo",
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
      "updatedAt": "2026-01-16T08:24:30.235Z",
      "inline": false,
      "hideOverflow": true,
      "title": "Remnant Mappings",
      "description": "Strange maps of strange objects. Maybe rocks? Scraps found in the dirt?",
      "image": "/nodes/remnant-mappings.preview.jpg"
    },
    "foliage-fragments": {
      "tags": [
        "art",
        "generative",
        "live",
        "organic",
        "biophilia",
        "feedback",
        "photography",
        "mappings"
      ],
      "links": [
        {
          "from": "foliage-fragments",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-fragments",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
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
          "to": "remnant-mappings",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Sun, 02 Oct 2022 12:20:41 GMT",
      "updatedAt": "2026-01-16T08:25:12.470Z",
      "inline": false,
      "title": "Foliage Fragments",
      "description": "Image fragments extracted using cellular automata, flickering in a feedback loop. Another take on foliage. WARNING: contains flashing images.",
      "image": "/nodes/foliage-fragments.preview.jpg",
      "warningPrompt": "WARNING: This node contains flashing images."
    },
    "foliage-grids": {
      "tags": [
        "art",
        "generative",
        "live",
        "substrate",
        "organic",
        "biophilia",
        "photography",
        "geometry"
      ],
      "links": [
        {
          "from": "foliage-grids",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "foliage-grids",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2026-01-16T08:45:42.500Z",
      "inline": false,
      "title": "Foliage Grids",
      "description": "Dynamic pixelation and image displacement grids. A small study combining generative techniques and photography.",
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
      "updatedAt": "2026-01-16T08:26:48.316Z",
      "inline": false,
      "title": "Cliffscapes",
      "description": "Continuation of formations and glow-tree sketches: a landscape and calm skies. A tree structure controls the form of the cliffscape.",
      "image": "/nodes/cliffscapes.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "alien-skies": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "substrate",
        "organic",
        "noise"
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
      "updatedAt": "2024-01-04T14:21:54.224Z",
      "inline": false,
      "title": "Alien Skies",
      "description": "Strange perspective distortion for alien skies. A test for a larger composition.",
      "image": "/nodes/alien-skies.preview.jpg"
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
          "to": "rhizome",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "chaos-growth",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "living-drone-commission",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "glow-tree",
          "to": "process-diary-1",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Wed, 07 Sep 2022 17:29:53 GMT",
      "updatedAt": "2024-01-04T14:21:54.229Z",
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
          "to": "evergreen-broth",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2026-01-15T13:08:42.294Z",
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
      "updatedAt": "2026-01-16T08:28:18.953Z",
      "inline": false,
      "title": "Summer Static",
      "description": "A couple of photographs from this summer. Just that endless summer vibe.",
      "image": "/nodes/summer-static.preview.jpg",
      "asDocument": true
    },
    "formations": {
      "tags": [
        "art",
        "generative",
        "live",
        "feedback",
        "geometry"
      ],
      "links": [
        {
          "from": "formations",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "formations",
          "to": "cliffscapes",
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
      "updatedAt": "2024-01-04T14:21:54.229Z",
      "inline": false,
      "title": "Formations",
      "description": "Generative rock-like formations and a background feedback effect. Doing some tests with natural-looking structures in synthetic environments.",
      "image": "/nodes/formations.preview.jpg",
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
          "to": "process-diary-1",
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
      "updatedAt": "2026-01-16T08:32:23.252Z",
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
        "substrate",
        "organic",
        "biophilia",
        "noise"
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
          "to": "cathedral-nodes",
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
      "updatedAt": "2024-01-04T14:21:54.239Z",
      "inline": false,
      "title": "Super Cell",
      "description": "Warping lines in multiple layers makes for a strange, morphing life-form.",
      "image": "/nodes/super-cell.preview.jpg"
    },
    "substrates": {
      "tags": [
        "project",
        "substrate",
        "external",
        "words"
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
      "updatedAt": "2026-01-16T08:35:46.602Z",
      "inline": false,
      "title": "Substrates",
      "description": "About my node-based visual programming application developed for the web.",
      "image": "/nodes/substrates.preview.jpg"
    },
    "moss-structure": {
      "tags": [
        "art",
        "generative",
        "live",
        "domain-warping",
        "substrate",
        "biophilia",
        "organic",
        "noise"
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
          "to": "super-cell",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "Tue, 16 Aug 2022 23:11:46 GMT",
      "updatedAt": "2024-01-04T14:21:54.234Z",
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
        "substrate",
        "biophilia",
        "noise"
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
          "to": "cathedral-nodes",
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
      "updatedAt": "2024-01-04T14:21:54.234Z",
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
        "substrate",
        "noise"
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
          "to": "cathedral-nodes",
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
          "to": "liquid-cathedral",
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
      "updatedAt": "2024-01-04T14:21:54.230Z",
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
        "substrate",
        "organic",
        "biophilia",
        "noise"
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
      "updatedAt": "2024-01-04T14:21:54.239Z",
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
      "updatedAt": "2024-01-04T14:21:54.233Z",
      "inline": false,
      "title": "Markup Dada",
      "description": "Simple HTML/CSS/JS test for creating animated patterns using the DOM.",
      "image": "/nodes/markup-dada.preview.jpg"
    },
    "city-pond": {
      "tags": [
        "project",
        "organic",
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
      "updatedAt": "2024-01-04T14:21:54.225Z",
      "inline": false,
      "title": "City Pond",
      "description": "Photos taken by and around a small pond located in the city where I live.",
      "image": "/nodes/city-pond.preview.jpg",
      "asDocument": true
    },
    "intro": {
      "tags": [
        "info",
        "utility",
        "fragments"
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
      "updatedAt": "2026-01-16T08:37:46.290Z",
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
          "to": "evergreen-broth",
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
      "updatedAt": "2024-01-04T14:21:54.228Z",
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
      "updatedAt": "2024-01-04T14:21:54.231Z",
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
        "space-colonization",
        "rhizome"
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
      "updatedAt": "2024-01-04T14:21:54.225Z",
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
        "project",
        "organic",
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
      "updatedAt": "2026-01-16T08:38:21.188Z",
      "inline": false,
      "title": "Objects",
      "description": "Localized domain warping \"objects\". I enjoyed playing with possible looks for abstract floating entities.",
      "image": "/nodes/objects.preview.jpg",
      "asDocument": true
    },
    "weave": {
      "tags": [
        "art",
        "generative",
        "project",
        "organic",
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
          "to": "living-drone-commission",
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
      "updatedAt": "2024-01-04T14:21:54.239Z",
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
        "fuse",
        "internet",
        "hyper",
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
        }
      ],
      "createdAt": "Sat, 18 Jun 2022 12:07:12 GMT",
      "updatedAt": "2024-01-04T14:21:54.240Z",
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
        "fuse",
        "hyper"
      ],
      "links": [
        {
          "from": "fragfuse",
          "to": "aggregate-forms",
          "kind": "tangent",
          "strength": 0.5
        },
        {
          "from": "fragfuse",
          "to": "aggregate-topology",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2024-01-04T14:21:54.229Z",
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
        }
      ],
      "createdAt": "Sat, 04 Jun 2022 22:32:18 GMT",
      "updatedAt": "2026-01-16T08:45:42.490Z",
      "inline": false,
      "title": "Links",
      "description": "Hyperlinks to other nodes on the web. A curated set of bookmarks.",
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
      "updatedAt": "2024-01-04T14:21:54.234Z"
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
      "description": "A form for sending me an email.",
      "image": "",
      "updatedAt": "2026-01-16T08:39:37.364Z"
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
      "description": "What is this project? What does this space contain? Why? Who am I?",
      "image": "/nodes/about.preview.jpg",
      "updatedAt": "2026-01-16T08:48:07.382Z"
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
      "description": "HYPER HYPER HYPER HYPER HYPER HYPER",
      "image": "/nodes/hyper.preview.jpg",
      "updatedAt": "2026-01-16T08:40:45.030Z"
    },
    "block-dissolve": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.225Z",
      "inline": false,
      "title": "Block Dissolve",
      "description": "Combining two different feedback passes with complex domain warping. Producing organically, dissolving substrate blocks. Builds on previous techniques.",
      "image": "/nodes/block-dissolve.preview.jpg"
    },
    "medusa-network": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.233Z",
      "inline": false,
      "title": "Medusa Network",
      "description": "Dithering, living rows and grids, jellyfish, glitchy and organic. An expansion on the Noise Construct experiment.",
      "image": "/nodes/medusa-network.preview.jpg"
    },
    "noise-construct": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.235Z",
      "inline": false,
      "title": "Noise Construct",
      "description": "Intense dithering and domain warping patterns. Digital static mixed with underlying organic structures.",
      "image": "/nodes/noise-construct.preview.jpg"
    },
    "skew-bulbs": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.237Z",
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
      "updatedAt": "2024-01-04T14:21:54.237Z",
      "inline": false,
      "title": "Slices",
      "description": "Experiment with 3D CSS rendering, photography, and digital spaces. Located externally; will be opened in an iframe.",
      "image": "/nodes/slices.preview.jpg"
    },
    "rhizome": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2026-01-16T08:42:08.279Z",
      "inline": false,
      "title": "Rhizome",
      "description": "Substrate and space colonization experiment.",
      "image": "/nodes/rhizome.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. A LOT. Only suitable for quite powerful devices."
    },
    "fluid-feedback": {
      "tags": [
        "generative",
        "art",
        "live",
        "domain-warping",
        "organic",
        "feedback"
      ],
      "links": [
        {
          "from": "fluid-feedback",
          "to": "cathedral-nodes",
          "kind": "tangent",
          "strength": 0.5
        },
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
        },
        {
          "from": "fluid-feedback",
          "to": "liquid-cathedral",
          "kind": "tangent",
          "strength": 0.5
        }
      ],
      "createdAt": "13 Feb 2022 09:49:08 GMT",
      "updatedAt": "2024-01-04T14:21:54.229Z",
      "inline": false,
      "title": "Fluid Feedback",
      "description": "More feedback experiments. Domain warping with a feedback component. Refresh the page: there's some variations.",
      "image": "/nodes/fluid-feedback.preview.jpg"
    },
    "immerse": {
      "tags": [
        "generative",
        "art",
        "live",
        "domain-warping",
        "organic",
        "feedback",
        "geometry",
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
          "to": "liquid-cathedral",
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
      "updatedAt": "2026-01-16T08:42:49.917Z",
      "inline": false,
      "title": "Immerse",
      "description": "Organic substrate and floating 3D shapes. Play with feedback, breathing and interactivity.",
      "image": "/nodes/immerse.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "alien-patterns": {
      "tags": [
        "generative",
        "domain-warping",
        "substrate",
        "noise",
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
      "updatedAt": "2024-01-04T14:21:54.224Z",
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
      "updatedAt": "2024-01-04T14:21:54.233Z",
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
      "updatedAt": "2024-01-04T14:21:54.227Z",
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
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.228Z",
      "inline": false,
      "title": "Flat Clouds",
      "description": "Soft particles, shader builders, generative geometry distortion. Feeling void of thoughts, flat, but sometimes creased. An undeveloped idea.",
      "image": "/nodes/flat-clouds.preview.jpg"
    },
    "rehash-transform": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2026-01-16T08:43:55.610Z",
      "inline": false,
      "title": "Rehash Transform",
      "description": "Instancing experiment, custom shader builder.",
      "image": "/nodes/rehash-transform.preview.jpg"
    },
    "virtual-imprint": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2026-01-16T08:45:42.490Z",
      "inline": false,
      "title": "Virtual Imprint",
      "description": "Complex domain warping patterns, warped geometries, strange reflections with environment map generated in real-time. GPU intensive.",
      "image": "/nodes/virtual-imprint.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "solar-landscape": {
      "tags": [
        "generative",
        "art",
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
          "to": "liquid-cathedral",
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
      "updatedAt": "2026-01-16T08:45:42.490Z",
      "inline": false,
      "title": "Solar Landscape",
      "description": "An extension of solar chrome. Playing around with instancing and composition. I do not recommend opening this on a mobile device.",
      "image": "/nodes/solar-landscape.preview.jpg",
      "warningPrompt": "WARNING: This node requires a lot of GPU/CPU resources. It is not recommended for mobile devices."
    },
    "solar-chrome": {
      "tags": [
        "generative",
        "art",
        "live",
        "geometry",
        "interactive",
        "chrome"
      ],
      "links": [
        {
          "from": "solar-chrome",
          "to": "liquid-cathedral",
          "kind": "tangent",
          "strength": 0.5
        },
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
      "updatedAt": "2026-01-16T08:45:39.809Z",
      "inline": false,
      "title": "Solar Chrome",
      "description": "Chrome texture, chrome fashion, very punk very cool.",
      "image": "/nodes/solar-chrome.preview.jpg"
    },
    "retro-core": {
      "tags": [
        "generative",
        "art",
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
      "updatedAt": "2024-01-04T14:21:54.237Z",
      "inline": false,
      "title": "Retro Core",
      "description": "Experiments with texture and confused depth. 3D shapes turned flat using transparency and disabled depth testing.",
      "image": "/nodes/retro-core.preview.jpg"
    }
  },
  "latestNode": "cathedral-nodes",
  "mostRecentlyUpdatedNode": "about"
} as const;