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