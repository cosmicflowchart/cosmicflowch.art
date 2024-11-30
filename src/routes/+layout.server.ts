import { UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from '$env/static/private';

export const load = async () => {
  return {
    umami: {
      scriptUrl: UMAMI_SCRIPT_URL,
      websiteId: UMAMI_WEBSITE_ID
    }
  };
};
