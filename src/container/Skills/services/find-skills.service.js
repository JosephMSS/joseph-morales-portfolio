import { client } from "../../../libs/httpClient/sanity.lib";
import { skillDataAdapter } from "../adapters";
const FIND_ALL_SKILLS_QUERY = '*[_type == "skills"] ';
export const findSkillsService = async ({ signal }) => {
  const skills = await client.fetch(
    FIND_ALL_SKILLS_QUERY,
    {},
    {
      signal,
    }
  );
  return skillDataAdapter(skills);
};
