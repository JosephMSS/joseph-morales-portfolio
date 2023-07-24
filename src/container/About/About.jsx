import { useState } from "react";
import { images } from "../../constants/images";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchAboutData } from "./services";
import { aboutDataAdapter } from "./adapters/about.adapter";
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
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {aboutData.length && aboutData.map((about, index) => {
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
