import { CATEGORIES } from "../models";

export const findCategoriesAdapter = (categories) => {
  if (!Array.isArray(categories)) return [];
  const categoriesData = categories.map((category) => category.name);
  categoriesData.push(CATEGORIES.ALL);
  return categoriesData.sort();
};
