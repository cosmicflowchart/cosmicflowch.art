import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ url }) => {
  const page = url.searchParams.get('page') || 1;
  const pageSize = url.searchParams.get('pageSize') || 12;

  const response = await fetch(
    `${STRAPI_API_URL}/api/patterns`
    + `?pagination[page]=${page}`
    + `&pagination[pageSize]=${pageSize}`
    + `&sort=title`
    + `&populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`
      }
    }
  );

  const patterns = await response.json();
  return {
    patterns: patterns.data,
    meta: patterns.meta
  };
}
