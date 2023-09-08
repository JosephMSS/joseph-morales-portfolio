import { images } from "../../../constants";
class Skills {
  constructor({ name, bgColor, icon }) {
    this.name = name;
    this.bgColor = bgColor;
    this.icon = icon;
  }
}
const createSkill = ({ name, bgColor, icon }) =>
  new Skills({ name, bgColor, icon });
export const data = [
  createSkill({ name: "Node JS", bgColor: "", icon: images.node }),
  createSkill({ name: "React JS", bgColor: "", icon: images.react }),
  createSkill({ name: "Redux", bgColor: "", icon: images.redux }),
  createSkill({ name: "JS", bgColor: "", icon: images.javascript }),
];
