import { imageAdapter } from "../../../adapters/image.adapter";

imageAdapter
export const skillDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((data) => ({
    name: data.name,
    bgColor: data?.bgColor,
    icon: imageAdapter(data.icon).auto("format").url() 
  }));
  return response;
};
