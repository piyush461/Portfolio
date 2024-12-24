import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  // Using useSpring to smoothly animate the scroll progress.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 100,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="progress-bar z-30"
      style={{
        scaleX: scaleX,
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        height: 3,
        background: '#06B6D4',
        transformOrigin: '0%',
        zIndex:999,
      }}
    />
  );
};

export default ScrollAnimation;
