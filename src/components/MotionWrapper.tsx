import { motion } from "framer-motion";
import React from "react";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  key?: "enabled" | "disabled";
}

const MotionWrapper: React.FC<MotionProps> = ({ children, className, key }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0
    },
  };

  const pageTransition = {
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
