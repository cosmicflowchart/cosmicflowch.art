import { error, redirect } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const load = async ({ params }) => {

  const response = await fetch(`${STRAPI_API_URL}/api/projects?filters[sku][$eqi]=${params.sku}&populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`
    }
  });

  const project = await response.json();

  if (project.data.length > 0) {
    if (!params.slug || project.data[0].slug !== params.slug) {
      redirect(302, `/projects/${project.data[0].sku.toLowerCase()}/${project.data[0].slug}`);
    }
    return {
      project: project.data[0]
    };
  } else {
    error(404, 'Project not found');
  }
}
