import { client } from "../../../libs/httpClient/sanity.lib";
import { data } from "../data";
const query = '*[_type == "categories"]';
export const fetchWorkData = async () => {
  const res = await client.fetch(query);
  console.log("🚀 ~ fetchWorkData ~ res:", res)
  return data;
};
