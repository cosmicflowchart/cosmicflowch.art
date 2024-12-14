import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async () => {

  const response = await fetch(`${STRAPI_API_URL}/api/footer?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`
    }
  });

  const footer = await response.json();

  return {
    footer: footer.data
  };
}
