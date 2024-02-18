import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper/AppWrap.wrapper";
import { NAVIGATION_ITEMS } from "../../models";
import { useQuery } from "react-query";
import { findProfilesService } from "./services/find-profiles.service";
import { INITIAL_PROFILE } from "./data/initial.data";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const {
    data: profile,
  } = useQuery({
    queryFn: ({ signal }) => {
      return findProfilesService({ signal });
    },
    initialData: INITIAL_PROFILE,
    queryKey: ["profiles"],
  });
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>{profile.greetingIcon}</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{profile.greeting}</p>
              <h1 className="head-text">{profile.name}</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            {profile.mainPositions.map((position, index) => {
              return (
                <p className="p-text" key={index}>
                  {position}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={profile.profileImage} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {profile.mainTechnologies.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
const HeaderWithWrap = AppWrap({
  Component: Header,
  idName: NAVIGATION_ITEMS.HOME,
});

export default HeaderWithWrap;
