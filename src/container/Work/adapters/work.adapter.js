import { imageAdapter } from "../../../adapters/image.adapter";

export const workDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => ({
    name: data.title,
    description: data.description,
    tags: data?.tags.map((category) => category.name),
    projectLink: data?.projectLink || null,
    codeLink: data?.codeLink || null,
    imgUrl: data.imgUrl ? imageAdapter(data.imgUrl).auto("format").url() : "",
  }));
  return response;
};
