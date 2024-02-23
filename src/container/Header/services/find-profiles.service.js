import { client } from "../../../libs/httpClient/sanity.lib";
import { profileAdapter } from "../adapters/profile.adapter";

const projectsQuery = '*[_type == "profiles"]';
export const findProfilesService = async ({ signal }) => {
  const profiles = await client.fetch(projectsQuery, {}, { signal });
  return profileAdapter(profiles[0]);
};
