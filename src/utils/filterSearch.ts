import type { Node, NodeName, NodesMetadata } from "../types/nodes";
import { containsAll, overlaps } from "./general";

export type Lookup<T = any, K = unknown> = (object: K) => T[];
export type MatchMode = 'any' | 'all' | number;
export type MatchSettings<T = string> = {
  matchOn: T[],
  matchMode?: MatchMode
}

export const match = <T = string, K = unknown>(matchSettings: MatchSettings<T>, object: K, lookup: Lookup<T, K>) => {
  const toTest = lookup(object);
  let match = false;
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
        if(matchSettings.matchOn.includes(element)) {
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
  lookup: Lookup<T, Node>
}

export const filterSearchNodes = (nodesMetadata: NodesMetadata, matchers: NodeMatcher<any>[], matchMode?: Omit<MatchMode, number>): NodeName[] => {
  const test = (nodeMatcher: NodeMatcher<any>, node: Node) => match(nodeMatcher.settings, node, nodeMatcher.lookup);
  return (
    Object.entries(nodesMetadata.nodes) as [NodeName, Node][]
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