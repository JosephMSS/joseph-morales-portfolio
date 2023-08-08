export const workDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => ({
    name: data.title,
    description: data.description,
    tags: data?.tags,
    projectLink: data?.projectLink,
    codeLink: data?.codeLink,
    imgUrl: data?.imageUrl,
  }));
  return response;
};
