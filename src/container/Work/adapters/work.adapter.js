import { imageAdapter } from "../../../adapters/image.adapter";

export const workDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => {
    const project = {
      name: data.title,
      description: data.description,
      tags: data?.tags.map((category) => category.name),
      projectLink: data?.projectLink || "",
      codeLink: data?.codeLink || "",
      imgUrl: data.imgUrl ? imageAdapter(data.imgUrl).auto("format").url() : "",
      hasProjectLink: !!data?.projectLink,
      hasCodeLink: !!data?.codeLink,
      inProgress: data?.inProgress || false,
    };
    return project;
  });
  console.log("🚀 ~ workDataAdapter ~ response:", response);
  return response;
};
