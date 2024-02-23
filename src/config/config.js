const env = import.meta.env;
export const config = {
  libs: {
    sanity: {
      projectId: env.VITE_SANITY_PROJECT_ID,
      dataset: env.VITE_SANITY_DATASET,
      useCdn: true, // set to `false` to bypass the edge cache
      apiVersion: env.VITE_SANITY_API_VERSION,
    },
  },
};
