import type { Tag } from "../../types/nodes";

export async function load({ url }) {
  const searchPhrase: string = url.searchParams.get('search') ?? "";
  const tags = (
    url.searchParams.has('tags') 
      ? url.searchParams.get('tags').split(',')
      : []
  ) as Tag[];

  return {
    searchPhrase,
    tags
  }
}
