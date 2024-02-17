import { client } from "../../../libs/httpClient/sanity.lib";
import { loadAbort } from "../../../utils/loadAbort.util";
const categoriesQuery = '*[_type == "categories"]';
export const findCategoryService = () => {
  const controller = loadAbort();
  return {
    id: "findCategoryService",
    call: client.fetch(
      categoriesQuery,
      {},
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
findCategoryService();
