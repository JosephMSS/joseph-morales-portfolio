import imageUrlBuilder from "@sanity/image-url";
import { client } from "../libs/httpClient/sanity.lib";
const builder = imageUrlBuilder(client);

export function imageAdapter(url) {
  const adapter = builder.image(url);
  return adapter;
}
