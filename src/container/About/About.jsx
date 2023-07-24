import { images } from "../../constants/images";
import "./About.scss";
import { motion } from "framer-motion";
export const About = () => {
  const aboutList = [
    {
      title: "Web development",
      description: "I am a good web developer",
      imgURL: images.about01,
    },
    {
      title: "Backend",
      description: "I am a good Backend developer",
      imgURL: images.about03,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {aboutList.map((about, index) => {
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
              <img src={about.imgURL} alt={about.title} />
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
