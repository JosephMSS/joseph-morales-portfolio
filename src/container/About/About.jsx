import { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAboutData } from "./services";
import { aboutDataAdapter } from "./adapters/about.adapter";
import { AppWrap } from "../../wrapper/AppWrap.wrapper";
import { NAVIGATION_ITEMS } from "../../models";
import { MotionWrap } from "../../wrapper";

export const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const getAboutData = async () => {
    const response = await fetchAboutData();
    const adaptedData = aboutDataAdapter(response);
    setAboutData(adaptedData);
  };
  useEffect(() => {
    getAboutData();
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Educational Journey:
        <span> Certificates</span> <br />
        and<span> Achievements</span>
      </h2>

      <div className="app__profiles">
        {aboutData.length &&
          aboutData.map((about, index) => {
            return (
              <motion.div
                whileInView={{
                  opacity: 1,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__profile-item"
                key={`${about.title}-${index}`}
              >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            );
          })}
      </div>
    </>
  );
};
const AboutWithWrap = AppWrap({
  Component: MotionWrap(About, "app__about"),
  idName: NAVIGATION_ITEMS.ABOUT,
  classNames: "app__whitebg",
});
export default AboutWithWrap;
