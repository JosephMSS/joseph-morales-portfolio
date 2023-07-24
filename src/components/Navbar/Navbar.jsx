import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";
import { NAVIGATION_ITEMS_LIST } from "../../models";

export const Navbar = () => {
  const navItems = NAVIGATION_ITEMS_LIST;
  const [toggle, setToggle] = useState(false);
  const enableToggle = () => setToggle(true);
  const disableToggle = () => setToggle(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navItems.map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={enableToggle} />
        {toggle && (
          <motion.div
            whileInView={{
              x: [300, 0],
            }}
            transition={{
              duration: 0.05,
              ease: "easeOut",
            }}
          >
            <HiX onClick={disableToggle} />
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={disableToggle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
