import { imageAdapter } from "../../../adapters/image.adapter";

export const aboutDataAdapter = (data) => {
  const adaptData = data;
  const response = adaptData.map((certificate) => ({
    title: certificate?.title,
    description: certificate?.description,
    imgUrl: certificate.imageUrl
      ? imageAdapter(certificate.imageUrl).auto("format").url()
      : "",
  }));
  return response;
};
