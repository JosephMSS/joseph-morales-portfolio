import { motion } from "framer-motion";

export const LinkWithIcon = ({ IconComponent, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <motion.div
        whileInView={{ scale: [0, 1] }}
        whileHover={{ scale: [1, 0.9] }}
        transition={{ duration: 0.25 }}
        className="app__flex"
      >
        <IconComponent />
      </motion.div>
    </a>
  );
};
