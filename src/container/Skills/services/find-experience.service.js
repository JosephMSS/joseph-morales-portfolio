import { client } from "../../../libs/httpClient/sanity.lib";
import { experienceAdapter } from "../adapters";
const FIND_ALL_EXPERIENCE_QUERY =
  '*[_type == "experiences"] | order(from desc)';
export const findExperienceService = async ({ signal }) => {
  const experiences = await client.fetch(
    FIND_ALL_EXPERIENCE_QUERY,
    {},
    {
      signal,
    }
  );
  return experienceAdapter(experiences);
};
