import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { NAVIGATION_ITEMS } from "../../models";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { workDataAdapter } from "./adapters";
import { CATEGORIES, CATEGORY_LIST } from "./models";
import { fetchWorkData } from "./services";
const Work = () => {
  const HIDE_ANIMATE_CARD = { y: 100, opacity: 0 };
  const SHOW_ANIMATE_CARD = { y: 0, opacity: 1 };
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.ALL);
  const [animateCard, setAnimateCard] = useState(SHOW_ANIMATE_CARD);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const filterCategories = ({ category }) => {
    if (category == CATEGORIES.ALL) return works;
    return works.filter((work) => {
      return work.tags.includes(category);
    });
  };
  const getWorkData = async () => {
    const response = await fetchWorkData();
    const adaptedData = workDataAdapter(response);
    setWorks(adaptedData);
    setFilterWork(adaptedData);
  };
  useEffect(() => {
    getWorkData();
  }, []);
  const handleWorkFilter = ({ category }) => {
    setActiveFilter(category);
    setAnimateCard(HIDE_ANIMATE_CARD);
    setTimeout(() => {
      const filteredCategories = filterCategories({ category });
      setFilterWork(filteredCategories);
      setAnimateCard(SHOW_ANIMATE_CARD);
    }, 300);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {CATEGORY_LIST.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              handleWorkFilter({ category });
            }}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === category ? "item-active" : ""
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};
const WorkWithWrap = AppWrap({
  Component: MotionWrap(Work, "app__works"),
  idName: NAVIGATION_ITEMS.WORK,
  classNames: "app__primarybg",
});
export default WorkWithWrap;
