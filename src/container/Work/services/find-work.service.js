import { client } from "../../../libs/httpClient/sanity.lib";
import { workDataAdapter } from "../adapters";

const projectsQuery = '*[_type == "projects"]{..., "tags": tags[]->{name}}';
export const findWorkService = async ({ signal }) => {
  const works = await client.fetch(projectsQuery, {}, { signal });
  return workDataAdapter(works);
};
