import type { Link, Node, NodeName, NodesMetadata, Tag } from "../types/nodes";
import { containsAll, overlaps } from "./general";

export type Lookup<T = any, K = unknown> = (object: K) => string | T[];
export type MatchMode = 'any' | 'all' | number;
export type MatchSettings<T = string> = {
  matchOn: T[],
  matchMode?: MatchMode,
}

export const match = <T = string, K = unknown>(matchSettings: MatchSettings<T>, object: K, lookup: Lookup<T, K>) => {
  const toTest = lookup(object);
  let match = false;

  if(typeof toTest === 'string') {
    const testString = (value: any) => toTest.toLowerCase().includes((value as string).toLowerCase());
    switch(matchSettings.matchMode ?? 'any') {
      case 'any': {
        return matchSettings.matchOn.some(testString);
      }
      case 'all': {
        return matchSettings.matchOn.every(testString);
      }
      default: {
        let count = 0;
        matchSettings.matchOn.forEach(value => {
          if(testString(value)) {
            count++;
          }
        });

        return count === matchSettings.matchMode;
      }
    }
  }

  switch(matchSettings.matchMode ?? 'any') {
    case 'any': {
      match = overlaps(toTest, matchSettings.matchOn);
    } break;
    case 'all': {
      match = containsAll(toTest, matchSettings.matchOn);
    } break;
    default: {
      let matches = 0;
      toTest.forEach(element => {
        if((matchSettings.matchOn as T[]).includes(element)) {
          matches++;
        }
      });
      if(matches === matchSettings.matchMode) {
        match = true;
      }
    }
  }

  return match;
}

export type NodeMatcher<T = any> = {
  settings: MatchSettings<T>,
  lookup: Lookup<T, Node>,

}

export const filterSearchNodes = (nodes: NodesMetadata['nodes'], matchers: NodeMatcher<any>[], matchMode?: Omit<MatchMode, number>): NodeName[] => {
  if(matchers.length === 0) return Object.keys(nodes) as NodeName[];

  const test = (nodeMatcher: NodeMatcher<any>, node: Node) => match(nodeMatcher.settings, node, nodeMatcher.lookup);
  return (
    Object.entries(nodes) as [NodeName, Node][]
  ).filter(([, node]) => {
    if((matchMode ?? 'any') === 'any') {
      return matchers.some(nodeMatcher => (
        test(nodeMatcher, node)
      ));
    } else {
      return matchers.every(nodeMatcher => (
        test(nodeMatcher, node)
      ));
    }
  }).map(([name]) => name);
}

export const standardFilterSearchNodes = (
  nodes: NodesMetadata['nodes'],
  tagFilter: MatchSettings<Tag> | undefined = undefined,
  linkFilter: MatchSettings<NodeName> | undefined = undefined,
  titleSearch: MatchSettings<string> | undefined = undefined,
  descriptionSearch: MatchSettings<string> | undefined = undefined,
  matchMode: Omit<MatchMode, number> = 'all'
) => {
  const addMatcher = <T = any>(matchers: NodeMatcher[], settings: MatchSettings<T> | undefined, lookup: Lookup<T, Node>) => {
    if(!settings) return;
    matchers.push({
      settings,
      lookup
    });
  };


  const matchers: NodeMatcher[] = [];
  addMatcher(matchers, tagFilter, node => node.tags as unknown as Tag[]);
  addMatcher(matchers, linkFilter, node => node.links.map((link: Link) => link.to));

  if(titleSearch && descriptionSearch) {
    const combinedConfig: MatchSettings<string> = {
      matchOn: [...titleSearch.matchOn, ...descriptionSearch.matchOn],
      matchMode: 'any'
    };

    addMatcher(matchers, combinedConfig, node => (node.title + " " + node.description) as unknown as string);
  } else {
    addMatcher(matchers, titleSearch, node => node.title as unknown as string);
    addMatcher(matchers, descriptionSearch, node => node.description as unknown as string);
  }

  const matchedNodes = filterSearchNodes(nodes, matchers, matchMode);

  return matchedNodes;
}