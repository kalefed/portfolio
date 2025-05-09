"use client";

import { motion } from "motion/react";

export default function FadeInAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
