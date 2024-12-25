import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedTitle = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateTitle = async () => {
      while (true) {
        await controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 5000));
        await controls.start({
          x: "100%",
          opacity: 0,
          transition: { duration: 0.5, ease: "easeIn" }
        });
        controls.set({ x: "-100%" });
      }
    };

    animateTitle();
  }, [controls]);

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={controls}
      className="fixed top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center"
    >
      <h1 className="text-6xl font-bold text-white" style={{ fontFamily: 'Abril Fatface', letterSpacing: '0.05em' }}>
        PRINCE
        <br />
        JERRY
      </h1>
    </motion.div>
  );
};

export default AnimatedTitle;