import React from "react";
import { motion } from "framer-motion";

function Faculty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Sorry!! No College Faculty Details Available right now
    </motion.div>
  );
}

export default Faculty;
