import { imageAdapter } from "../../../adapters/image.adapter";

export const profileAdapter = (data) => {
  const profile = {
    greeting: data.greeting,
    name: data.name,
    greetingIcon: data.greetingIcon,
    mainPositions: data.mainPositions,
    mainTechnologies: data.mainTechnologies.map((technology) =>
      imageAdapter(technology).format("webp").url()
    ),
    profileImage: imageAdapter(data.profileImage).format("webp").url(),
  };
  return profile;
};
