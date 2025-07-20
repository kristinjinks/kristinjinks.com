import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all posts, filtering out posts whose filenames start with _
 */
export async function getFilteredPosts() {
  const posts = await getCollection('posts')
  return posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
  const posts = await getFilteredPosts()
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Get all publications, filtering out publications whose filenames start with _
 */
export async function getFilteredPublications() {
  const publications = await getCollection('publications')
  return publications.filter((publication: CollectionEntry<'publications'>) => !publication.id.startsWith('_'))
}

/**
 * Get all publications sorted by publication date, filtering out publications whose filenames start with _
 */
export async function getSortedFilteredPublications() {
  const publications = await getFilteredPublications()
  return publications.sort(
    (a: CollectionEntry<'publications'>, b: CollectionEntry<'publications'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}
