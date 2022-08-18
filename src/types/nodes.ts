import type metadata from '../nodes/metadata';

export type NodeName = keyof typeof metadata['nodes'];
export type LinkKind = NonNullable<
  (typeof metadata['links'])[NodeName][number]
>['kind'];

export type Tag = keyof typeof metadata.tags;

export type Link = {
  from?: string, // TODO: use "NodeName"
  to: string,
  kind: LinkKind,
  strength: number
};

export type Node = typeof metadata.nodes[NodeName];

export type NodeMode 
  = 'link'
  | 'preview'
  | 'preview-force'
  | 'inline'
  | 'main'
  | 'only';

export type NodeMetadata = {
  tags: Tag[],
  links: Link[],

  createdAt: string,
  updatedAt: string,

  inline?: boolean,

  title?: string,
  description?: string,
  image?: string,

  asDocument?: boolean,
} & Record<string, any>; 

export type NodesMetadata = typeof metadata;

export type NodeContext = {
  name: NodeName,
  metadata: NodeMetadata,
  mode: NodeMode,
}