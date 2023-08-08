import { images } from "../../../constants";
import { CATEGORIES } from "../models";
class Work {
  constructor({ title, description, projectLink, codeLink, imageUrl, tags }) {
    this.title = title;
    this.description = description;
    this.projectLink = projectLink;
    this.codeLink = codeLink;
    this.tags = tags;
    this.imageUrl = imageUrl;
  }
}
class Tag {
  constructor({ name }) {
    this.name = name;
  }
}
const createTag = ({ name }) => new Tag({ name }).name;
const createWork = ({
  title,
  description,
  tags,
  projectLink,
  codeLink,
  imageUrl,
}) => new Work({ title, description, projectLink, codeLink, imageUrl, tags });
export const data = [
  createWork({
    title: "Backend Node JS",
    description: "Basic api with Node js",
    projectLink: "",
    codeLink: "",
    tags: [CATEGORIES.EXPRESS],
    imageUrl: images.about03,
  }),
  createWork({
    title: "React app",
    description: "Basic React app",
    projectLink: "",
    codeLink: "",
    tags: [CATEGORIES.REACT],
    imageUrl: images.about01,
  }),
];
