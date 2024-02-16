import { client } from "../../../libs/httpClient/sanity.lib";
import { loadAbort } from "../../../utils/loadAbort.util";
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
