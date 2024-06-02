import { motion } from "framer-motion";
import React from "react";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
}

const MotionWrapper: React.FC<MotionProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
