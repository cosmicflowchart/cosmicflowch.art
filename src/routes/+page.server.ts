import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async () => {

  const homepageResponse = await fetch(`${STRAPI_API_URL}/api/homepage?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`
    }
  });
  const homepage = await homepageResponse.json();


  const footerResponse = await fetch(`${STRAPI_API_URL}/api/footer?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`
    }
  });
  const footer = await footerResponse.json();

  return {
    footer: footer.data,
    homepage: homepage.data
  };
}
