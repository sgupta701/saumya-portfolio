/*src/components/Preloader.jsx*/

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const letters = textContainerRef.current.querySelectorAll('.typing-letter');

    tl
    // 1. TYPING ANIMATION
    .to(letters, {
      opacity: 1,
      duration: 0,
      stagger: 0.15,
      ease: "none"
    })
    
    // 2. PAUSE
    .to({}, { duration: 0.8 }) 
    
    // 3. FADE OUT TEXT
    .to(textContainerRef.current, {
      opacity: 0,
      duration: 0.5
    })
    
    // 4. SPLIT CURTAINS
    .to([leftPanelRef.current, rightPanelRef.current], {
      width: "0%",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0
    })
    
    // 5. REMOVE COMPONENT
    .set(containerRef.current, { display: "none" });

    // BLINKING CURSOR
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "steps(1)"
    });

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] flex font-mono"
    >
      
      {/* LEFT CURTAIN (Removed border-r) */}
      <div 
        ref={leftPanelRef}
        className="w-1/2 h-full bg-black relative z-10"
      ></div>

      {/* RIGHT CURTAIN */}
      <div 
        ref={rightPanelRef}
        className="w-1/2 h-full bg-black relative z-10"
      ></div>

      {/* TEXT LAYER */}
      <div 
        className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none"
      >
        <h1 
          ref={textContainerRef}
          className="text-6xl md:text-9xl font-bold text-white flex items-center"
        >
          {/* Letters start invisible */}
          <span className="typing-letter opacity-0">h</span>
          <span className="typing-letter opacity-0">e</span>
          <span className="typing-letter opacity-0">l</span>
          <span className="typing-letter opacity-0">l</span>
          <span className="typing-letter opacity-0">o</span>
          {/* Removed text-neon-green, now it's just white */}
          <span className="typing-letter opacity-0">.</span>
          
          {/* CURSOR: Removed text-neon-green */}
          <span 
            ref={cursorRef} 
            className="text-white ml-2 md:ml-4 -mt-2 md:-mt-4"
          >_</span>
        </h1>
      </div>

    </div>
  );
};

export default Preloader;