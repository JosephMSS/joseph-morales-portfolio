import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { NAVIGATION_ITEMS } from "../../models";
import { MotionWrap } from "../../wrapper";
import { AppWrap } from "../../wrapper/AppWrap.wrapper";
import "./About.scss";
import { findCertificatesService } from "./services";

export const About = () => {
  const { data: aboutData } = useQuery({
    queryKey: ["about"],
    queryFn: ({ signal }) => {
      return findCertificatesService({ signal });
    },
    initialData: [],
  });

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
