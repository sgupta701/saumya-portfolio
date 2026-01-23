import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw", 
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000", 
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden font-mono text-black bg-white">
      {/* TRIGGER DIV */}
      <div ref={triggerRef}>
        
        {/* MOVING CONTAINER */}
        <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">
          
          {/* ---------------- SCREEN 1: INTRO (Exact Replica) ---------------- */}
          <div className="w-screen h-full flex flex-col justify-center bg-white border-r-2 border-black relative px-12 md:px-24">
            
            {/* MAIN HEADING */}
            <div className="mb-12">
              <h2 className="text-6xl md:text-8xl font-medium leading-tight">
                HELLO, <br />
                I'M <span className="text-neon-green font-bold">SAUMYA GUPTA</span>
              </h2>
            </div>

            {/* SUMMARY SECTION */}
            <div className="max-w-3xl mb-16">
              <p className="text-xl md:text-2xl font-medium leading-relaxed uppercase">
                A DEDICATED CSE STUDENT AND FULL STACK DEVELOPER WITH A PASSION FOR BUILDING SCALABLE AI SYSTEMS AND INTUITIVE DIGITAL EXPERIENCES.
              </p>
            </div>

            {/* BOTTOM CALL TO ACTION (Absolute positioning to stick to bottom) */}
            <div className="absolute bottom-20 left-12 md:left-24 right-12 flex items-center border-t border-black pt-6 w-[85%]">
              <span className="text-sm md:text-base font-bold uppercase tracking-wide mr-4">
                LET'S CODE-DIVE! EXPLORE SELECTED PROJECTS.
              </span>
              {/* Long Arrow */}
              <div className="flex-grow h-[1px] bg-black relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">
                  &rarr;
                </span>
              </div>
            </div>

          </div>

          {/* ---------------- SCREEN 2: NEURA PROJECT ---------------- */}
          <div className="w-screen h-full flex justify-center items-center bg-black text-white border-r-2 border-black relative p-10">
            <div className="max-w-5xl w-full border border-neon-green p-10 relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-neon-green"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-neon-green"></div>

              <div className="flex justify-between items-end mb-10 border-b border-gray-800 pb-6">
                <div>
                   <span className="text-neon-green font-mono text-sm mb-2 block">01 / ARTIFICIAL INTELLIGENCE</span>
                   <h3 className="text-6xl md:text-8xl font-bold uppercase">NEURA</h3>
                </div>
                <div className="text-right hidden md:block">
                   <p className="text-gray-400 text-sm">STATUS: COMPLETED</p>
                   <p className="text-gray-400 text-sm">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  A Chat-to-Action Multi-Task Execution System. Neura automates complex digital workflows using natural language processing, turning simple text commands into executed code.
                </p>
                <div className="flex flex-col gap-4 justify-end items-start">
                  <button className="text-neon-green border-b border-neon-green pb-1 hover:text-white hover:border-white transition-all text-xl">
                    VIEW GITHUB REPO &nearr;
                  </button>
                  <button className="text-white border-b border-white pb-1 hover:text-neon-green hover:border-neon-green transition-all text-xl">
                    WATCH DEMO &nearr;
                  </button>
                </div>
              </div>
            </div>
            {/* Background Number */}
            <span className="absolute bottom-0 right-0 text-[15rem] font-black text-gray-900 opacity-50 leading-none pointer-events-none -z-10">01</span>
          </div>

          {/* ---------------- SCREEN 3: ARCLENS PROJECT ---------------- */}
          <div className="w-screen h-full flex justify-center items-center bg-white text-black border-r-2 border-black p-10 relative">
             <div className="max-w-5xl w-full border-2 border-black p-10 bg-gray-50 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
              
              <div className="flex justify-between items-end mb-10 border-b-2 border-black pb-6">
                <div>
                   <span className="text-gray-500 font-mono text-sm mb-2 block">02 / MACHINE LEARNING</span>
                   <h3 className="text-6xl md:text-8xl font-black uppercase">ARCLENS</h3>
                </div>
                 <div className="text-right hidden md:block">
                   <p className="font-bold text-sm">STATUS: DEPLOYED</p>
                   <p className="font-bold text-sm">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  Unified Document Intelligence & Routing System. ArcLens uses custom OCR and classification models to automatically sort and route enterprise data with 98% accuracy.
                </p>
                <div className="flex flex-col gap-4 justify-end items-start">
                  <button className="bg-black text-white px-8 py-4 text-lg font-bold hover:bg-neon-green hover:text-black transition-all">
                    VIEW CASE STUDY
                  </button>
                </div>
              </div>
            </div>
             {/* Background Number */}
            <span className="absolute bottom-0 right-0 text-[15rem] font-black text-gray-100 leading-none pointer-events-none -z-10">02</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;