import { GOATCOUNTER_SCRIPT_URL, GOATCOUNTER_WEBSITE_URL } from '$env/static/private';

export const load = async () => {
  return {
    goatCounter: {
      scriptUrl: GOATCOUNTER_SCRIPT_URL,
      websiteUrl: GOATCOUNTER_WEBSITE_URL
    }
  };
};
