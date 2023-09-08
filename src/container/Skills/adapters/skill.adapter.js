export const skillDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => ({
    name: data.name,
    bgColor: data?.bgColor,
    icon: data.icon,
  }));
  return response;
};
