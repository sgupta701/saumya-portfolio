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

    .to(letters, {
      opacity: 1,
      duration: 0,
      stagger: 0.15,
      ease: "none"
    })

    .to({}, { duration: 0.8 }) 

    .to(textContainerRef.current, {
      opacity: 0,
      duration: 0.5
    })
    
    .to([leftPanelRef.current, rightPanelRef.current], {
      width: "0%",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0
    })
    
    .set(containerRef.current, { display: "none" });

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

      <div 
        ref={leftPanelRef}
        className="w-1/2 h-full bg-black relative z-10 border-r border-dashed border-zinc-800 overflow-hidden"
      >
      
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>

        <div className="absolute top-10 left-10 text-zinc-600 text-4xl font-thin">+</div>
        <div className="absolute bottom-20 left-10 text-zinc-700 text-xs tracking-[0.2em]">
            // SYSTEM_INIT...
        </div>
        
        <div className="absolute top-1/3 left-[-50px] w-[300px] h-px border-b border-dashed border-zinc-700 rotate-45"></div>
      </div>

      <div 
        ref={rightPanelRef}
        className="w-1/2 h-full bg-black relative z-10 border-l border-dashed border-zinc-800 overflow-hidden"
      >

        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>

        <div className="absolute bottom-10 right-10 text-zinc-600 text-4xl font-thin">+</div>
        
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-dashed border-zinc-800 rounded-full animate-spin-slow opacity-50"></div>
        
        <div className="absolute bottom-20 right-10 text-right">
            <div className="text-zinc-700 text-xs tracking-[0.2em] mb-1">LOADING_ASSETS</div>
            <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-zinc-500 w-1/2 animate-pulse"></div>
            </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none"
      >
        <h1 
          ref={textContainerRef}
          className="text-6xl md:text-9xl font-bold text-white flex items-center mix-blend-difference"
        >
          <span className="typing-letter opacity-0">h</span>
          <span className="typing-letter opacity-0">e</span>
          <span className="typing-letter opacity-0">l</span>
          <span className="typing-letter opacity-0">l</span>
          <span className="typing-letter opacity-0">o</span>
          <span className="typing-letter opacity-0">.</span>
          
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