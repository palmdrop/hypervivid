import type metadata from '../nodes/metadata';

export type NodeName = keyof typeof metadata['nodes'];
export type LinkKind = NonNullable<
  (typeof metadata['links'])[NodeName][number]
>['kind'];

export type Tag = typeof metadata['nodes'][NodeName]['tags'][number];

export type Link = {
  from?: string, // TODO: use "NodeName"
  to: string,
  kind: LinkKind,
  strength: number
};

export type NodeMode 
  = 'link'
  | 'preview'
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
} & Record<string, any>; 

export type NodeContext = {
  name: NodeName,
  metadata: NodeMetadata,
  mode: NodeMode
}