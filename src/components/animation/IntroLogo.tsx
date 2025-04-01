import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface IntroLogoProps {
  onComplete: () => void;
}

const IntroLogo = ({ onComplete }: IntroLogoProps) => {
  useEffect(() => {
    // Complete the animation after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <motion.div
            className="w-36 h-36 rounded-full border-4 border-[rgb(56,132,255)]" // Increased size from w-28 h-28 to w-36 h-36
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <span className="text-3xl font-bold text-[rgb(56,132,255)]">Ariful</span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          The Brand Identity Designer
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-1 bg-[rgb(56,132,255)] rounded-full"
        />

        <motion.button
          className="mt-8 text-white/60 text-sm hover:text-white transition-colors"
          onClick={onComplete}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
        </motion.button>
      </div>
    </motion.div>
  );
};

export default IntroLogo;
