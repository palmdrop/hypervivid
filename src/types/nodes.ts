export type LinkKind 
  = 'consumes'
  | 'consumed'
  | 'tangent';

export type Link = {
  from?: string,
  to: string,
  kind: LinkKind,
  strength: number
};

export type NodeContext 
  = 'single' 
  | 'multiple' 
  | 'multiple-primary' 
  | 'multiple-secondary';

export type NodeMetadata = {
  tags: string[],
  links: Link[],
  inline: boolean,

  title?: string,
  description?: string,
  image?: string,

  // rest?: Record<string, any>
} & Record<string, any>; 