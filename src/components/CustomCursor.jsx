/*src/components/CustomCursor.jsx*/

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // 1. Move the cursor based on mouse position
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, 
        ease: "power2.out"
      });
    };

    // 2. Add listener
    window.addEventListener('mousemove', onMouseMove);

    // 3. Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default CustomCursor;