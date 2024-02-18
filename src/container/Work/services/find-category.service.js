import { client } from "../../../libs/httpClient/sanity.lib";
import { findCategoriesAdapter } from "../adapters/find-categories.adapter";
const categoriesQuery = '*[_type == "categories"]';
export const findCategoryService = async ({ signal }) => {
  const categories = await client.fetch(
    categoriesQuery,
    {},
    {
      signal,
    }
  );
  return findCategoriesAdapter(categories);
};
