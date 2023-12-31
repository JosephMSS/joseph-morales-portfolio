import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "./Skills.scss";
import { fetchSkillsData, fetchExperienceData } from "./services";
import { skillDataAdapter, experienceDataAdapter } from "./adapters";
import { AppWrap, MotionWrap } from "../../wrapper";
import { NAVIGATION_ITEMS } from "../../models";
export const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const getSkillsData = async () => {
    const response = await fetchSkillsData();
    const adaptedData = skillDataAdapter(response);
    setSkills(adaptedData);
  };
  const getExperienceData = async () => {
    const response = await fetchExperienceData();
    const adaptedData = experienceDataAdapter(response);
    setExperiences(adaptedData);
  };
  useEffect(() => {
    getSkillsData();
    getExperienceData();
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      content={work.desc}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

const SkillsWithWrap = AppWrap({
  Component: MotionWrap(Skills, "app__skills"),
  idName: NAVIGATION_ITEMS.SKILLS,
  classNames: "app__whitebg",
});
export default SkillsWithWrap;
