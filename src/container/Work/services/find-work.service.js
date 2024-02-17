import { client } from "../../../libs/httpClient/sanity.lib";
import { loadAbort } from "../../../utils/loadAbort.util";
import { workDataAdapter } from "../adapters";
const projectsQuery = '*[_type == "projects"]{..., "tags": tags[]->{name}}';
export const findWorkService = () => {
  const controller = loadAbort();
  return {
    id: "findWorkService",
    call: client.fetch(
      projectsQuery,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
export const findWorkServiceByReactQuery = async ({ signal }) => {
  const works = await client.fetch(projectsQuery, {}, { signal });
  return workDataAdapter(works);
};