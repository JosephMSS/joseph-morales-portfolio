export const aboutDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => ({
    title: data.title,
    description: data.description,
    imgUrl: data.imgURL,
  }));
  return response;
};
