/*src/components/Project.jsx*/

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import rightarrow from '../assets/right-arrow.png';
import guitar from '../assets/guitar.png';
import exercise from '../assets/exercise.png';
import dotteddown from '../assets/dotted-down.png';

import neuraworkflow from '../assets/neuraworkflow.png';
import displayneura from '../assets/displayneura.png';
import displayarclens from '../assets/displayarclens.png';
import arclensworkflow from '../assets/arclensworkflow.png';
import displayglyphio from '../assets/displayglyphio.png';

import displayvertaai from '../assets/displayvertaai.png';
import vertaaiworkflow from '../assets/vertaaiworkflow.png';
import displayrealtimechatbot from '../assets/displayrealtimechatbot.png';

import displayportfolio from '../assets/displayportfolio.png';

const Doodle = ({ src, x, y, rotate = 0, scale = 1, opacity = 0.5, width = "100px", innerRef }) => (
  <img 
    ref={innerRef}
    src={src} 
    className="absolute pointer-events-none select-none z-0 animate-float"
    style={{ 
      left: x, 
      top: y, 
      width: width,
      transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
      opacity: opacity,
      filter: 'grayscale(100%)' 
    }}
    alt="doodle"
  />
);

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isNeuraWorkflowOpen, setIsNeuraWorkflowOpen] = useState(false);
  const [isArcLensWorkflowOpen, setIsArcLensWorkflowOpen] = useState(false);
  const [isGlyphIOWorkflowOpen, setIsGlyphIOWorkflowOpen] = useState(false);
  const [isVertaAIWorkflowOpen, setIsVertaAIWorkflowOpen] = useState(false);
  const [isRealTimeChatbotWorkflowOpen, setIsRealTimeChatbotWorkflowOpen] = useState(false);

  useEffect(() => {

    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        // (Total Screens - 1) * 100

        xPercent: -100, 
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: 4000, 
          scrub: 0.2,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden font-mono text-black bg-white">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[600vw] flex flex-row relative">

          {/* scr 1 */}
          <div className="w-screen h-full flex-shrink-0 justify-start pt-45 bg-white bg-grid-subtle overflow-hidden border-r-2 border-black relative px-12 md:px-24">           
            <Doodle src={rightarrow} x="91%" y="7%" rotate={10} width="90px" scale={1} />
            <Doodle src={guitar} x="0%" y="19%" rotate={10} width="100px" scale={1} />
            <Doodle src={exercise} x="93%" y="80%" rotate={10} width="100px" scale={1} />

            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-medium leading-tight">
                HELLO, <br />
                I'M <span className="text-gray-600 font-bold">SAUMYA GUPTA...</span>
              </h2>
            </div><br/>

            <div className="max-w-3xl mb-16">
              <p className="text-xl md:text-2xl font-medium leading-relaxed uppercase">
                Translating theoretical architectures into functional code. Here is the documentation of my core builds and <span className="text-gray-600 font-bold"> Projects.</span>
              </p>
            </div>

            <div className="absolute bottom-50 left-12 md:left-24 right-12 flex items-center border-t border-black pt-6 w-[85%]">
              <span className="text-sm md:text-base font-bold text-gray-600 uppercase tracking-wide mr-4">
                LET'S CODE-DIVE! 
              </span>

              <div className="flex-grow h-[1px] bg-gray-600 relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">
                </span>
              </div>
            </div>

            <div className="absolute top-[20%] right-[3%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1.7vw] font-black tracking-tighter text-gray-400 opacity-78 leading-[0.8]">
                EXPLORE SELECTED PROJECTS
              </h2>
            </div>
          </div>

          {/* scr 2 */}
          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
            
            <div className="w-5xl h-[70vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
              
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">
                    01 // ARTIFICIAL_INTELLIGENCE
                  </span>
                  <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
                    NEURA
                  </h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [COMPLETED]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-zinc-100 font-bold leading-tight mb-8 uppercase italic">
                    A Chat-to-Action Multi-Intent <br /> Task Execution System. 
                  </p>
                  <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">
                    Instead of writing individual commands, one can simply chat in plain English assigning multiple tasks, all at once, and 
                    Neura intelligently understands, splits, classifies, and executes each tasks.
                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase text-left">
                      [ TECH_STACK ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">dependencies_list.sh</p>
                      <ul className="text-xs font-mono space-y-2 text-zinc-100">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Python, FastAPI</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Hugging Face Transformers</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> React / Tailwind</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Mistral via Ollama, DistilBERT, T5 Small</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> MySQL</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase">
                      [ DISPLAY ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={displayneura} alt="Project Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase">NEURA Interface</div>
                    </div>
                  </div>

                  <div className="relative group/img">
                    <button 
                      onClick={() => setIsNeuraWorkflowOpen(true)}
                      className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                    >
                      [ WORKFLOW ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={neuraworkflow} alt="Neura Workflow" className="w-full h-auto grayscale" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase italic">Click to expand</div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/sgupta701/NEURA-does-it-all" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                  >
                    [ GITHUB ]
                  </a>
                  
                  <a 
                    href="https://drive.google.com/file/d/1mzPQOPYF5IL---vYUT2jTTcbbNxpysNk/view?usp=drive_link" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                  >
                    [ WATCH_DEMO ]
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-90 uppercase tracking-tighter">
                01
              </span>
            </div>
          </div>

          {/* scr 3 - ARCLENS*/}
          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
            
            <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
          
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">02 // FULL STACK + ML</span>
                  <h3 className="text-6xl md:text-8xl font-black tracking-tighter">ArcLens</h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [ONGOING]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2026</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-black font-bold leading-tight mb-8 uppercase italic">
                    Unified Document Intelligence <br /> & Routing System. 
                  </p>
                  <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">
                    It is a doc intelligence system that uses OCR and deep learning to extract, classify, summarize and route documents automatically to relevant departments, improving efficiency and accuracy in handling large volumes of paperwork.
                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase text-left">[ TECH_STACK ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">model_configs.yaml</p>
                      <ul className="text-xs font-mono space-y-2 text-white">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> React</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Tesseract OCR</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> RAG</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Hugging Face  Transformers, BART</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> MySQL</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ DISPLAY ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-black opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <img src={displayarclens} alt="ArcLens Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-black text-white text-[10px] font-black p-1 text-center uppercase">ArcLens Interface</div>
                    </div>
                  </div>

                  <div className="relative group/img">
                    <button onClick={() => setIsArcLensWorkflowOpen(true)} className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ WORKFLOW ]</button>
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-black opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <img src={arclensworkflow} alt="ArcLens Flow" className="w-full h-auto grayscale" />
                      <div className="bg-black text-white text-[10px] font-black p-1 text-center uppercase italic">Click to expand</div>
                    </div>
                  </div>

                  <a href="https://github.com/sgupta701/ArcLens" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ GITHUB ]</a>
                  <a href="https://drive.google.com/file/d/1y6T78GDRmGdHwwRTndqJREB1cs8ot-yH/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ RESEARCH PAPER ]</a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-50 uppercase tracking-tighter">
                02
              </span>
            </div>
          </div>

            

          {/* scr 4 - glyphio */}
          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
            
            <div className="w-5xl h-[70vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
              
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">
                    03 // AI/ML 
                  </span>
                  <h3 className="text-6xl md:text-8xl font-black tracking-tighter">
                    GlyphIO
                  </h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [COMPLETED]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-zinc-100 font-bold leading-tight mb-8 uppercase italic">
                    American Sign Language [ASL] based Gesture Controller & Chat System 
                  </p>
                  <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">
                    a real-time gesture-based input system that converts ASL alphabets (A–Z) directly into text, enabling
seamless chatting and text entry across any application - demonstrated with game AmongUs. 
                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase text-left">
                      [ TECH_STACK ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">dependencies_list.sh</p>
                      <ul className="text-xs font-mono space-y-2 text-zinc-100">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Python</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> OpenCV, MediaPipe</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> PyAutoGUI</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> MLPClassifier</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Joblib</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase">
                      [ DISPLAY ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={displayglyphio} alt="Project Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase">Demonstrated with game AmongUs</div>
                    </div>
                  </div>

                  <div className="relative group/img">
                    <button 
                      onClick={() => setIsGlyphIOWorkflowOpen(true)}
                      className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                    >
                      [ WORKFLOW ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={guitar} alt="Project Preview" className="w-full h-auto grayscale" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase italic">Click to expand</div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/sgupta701/GlyphIO_amongus_hand_control" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                  >
                    [ GITHUB ]
                  </a>
                  
                  <a 
                    href="https://drive.google.com/file/d/1bmtziFTv5xO55f2PWZqiANCXQOacrbyv/view?usp=drive_link" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                  >
                    [ WATCH_DEMO ]
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-90 uppercase tracking-tighter">
                03
              </span>
            </div>
          </div>

          {/* scr 5 - VertaAI*/}
          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
            
            <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
              
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">04 // ML + Frontend </span>
                  <h3 className="text-6xl md:text-8xl font-black tracking-tighter">VertaAI</h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [COMPELTED]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-black font-bold leading-tight mb-8 uppercase italic">
                    A Multi Language Translator
                  </p>
                  <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">
                    full-stack AI-powered web app for real-time multilingual text translation using Hugging Face’s MBART transformer model.                   </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase text-left">[ TECH_STACK ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">model_configs.yaml</p>
                      <ul className="text-xs font-mono space-y-2 text-white">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Python</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Streamlit</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> BART-large</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Render, Vercel</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Hugging Face Transformers</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ DISPLAY ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-black opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <img src={displayvertaai} alt="VertaAI Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-black text-white text-[10px] font-black p-1 text-center uppercase">VertaAI Interface</div>
                    </div>
                  </div>

                  <div className="relative group/img">
                    <button onClick={() => setIsVertaAIWorkflowOpen(true)} className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ WORKFLOW ]</button>
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-black opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <img src={vertaaiworkflow} alt="VertaAI Flow" className="w-full h-auto grayscale" />
                      <div className="bg-black text-white text-[10px] font-black p-1 text-center uppercase italic">Click to expand</div>
                    </div>
                  </div>

                  <a href="https://github.com/sgupta701/Verta-AI" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ GITHUB ]</a>
                  <a href="https://drive.google.com/file/d/1MSSlnKq5SAocXPTalaukXjLYlJ92JEoT/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ WATCH DEMO ]</a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-50 uppercase tracking-tighter">
                04
              </span>
            </div>
          </div>

          {/* scr 6 - real tiem chat app using .net */}

          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
            
            <div className="w-5xl h-[80vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
              
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">
                    05 // .NET
                  </span>
                  <h3 className="text-6xl md:text-8xl font-black tracking-tighter">
                    Real Time Chat App using .net
                  </h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [COMPLETED]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2025</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-zinc-100 font-bold leading-tight mb-8 uppercase italic">
                    ChatApp - A Real-Time Chat System (TCP + WPF GUI)
                  </p>
                  <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">
                    A lightweight chat system supporting multiple users connecting to the same server and exchanging messages 
                    instantly; including a TCP server, client, login authentication and a WPF-based GUI for user interaction.
                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase text-left">
                      [ TECH_STACK ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">dependencies_list.sh</p>
                      <ul className="text-xs font-mono space-y-2 text-zinc-100">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> C#</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> .NET</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> WPF</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> TCP Sockets</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> SQL Server</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase">
                      [ DISPLAY ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={displayrealtimechatbot} alt="Project Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase">system_preview.jpg</div>
                    </div>
                  </div>

                  <div className="relative group/img">
                    <button 
                      onClick={() => setIsRealTimeChatbotWorkflowOpen(true)}
                      className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                    >
                      [ WORKFLOW ]
                    </button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-zinc-100 opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                      <img src={guitar} alt="Project Preview" className="w-full h-auto grayscale" />
                      <div className="bg-zinc-100 text-black text-[10px] font-black p-1 text-center uppercase italic">Click to expand</div>
                    </div>
                  </div>

                  <a 
                    href="https://github.com/sgupta701/Real-Time-Chatapp-using-.NET" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold tracking-widest uppercase"
                  >
                    [ GITHUB ]
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-90 uppercase tracking-tighter">
                05
              </span>
            </div>
          </div>

          {/* scr 7 - Portfolio*/}
          <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
            
            <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
              
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>

              <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                <div>
                  <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">06 // React </span>
                  <h3 className="text-6xl md:text-8xl font-black tracking-tighter">My Portfolio</h3>
                </div>
                <div className="text-right hidden md:block font-mono">
                  <p className="text-zinc-500 text-xs tracking-widest">STATUS: [DEPLOYED]</p>
                  <p className="text-zinc-500 text-xs tracking-widest">YEAR: 2026</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-grow">
                  <p className="text-2xl md:text-3xl text-black font-bold leading-tight mb-8 uppercase italic">
                    Personal Portfolio & Project Archive.
                  </p>
                  <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">
                    The very project you are looking at right now. I have designed with a focus on a clean frontend, 
                    but also a brutalist aesthetic. It serves as a hub for my work and a live demonstration of my skills.                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">

                  <div className="relative group/tech">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase text-left">[ TECH_STACK ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <p className="text-zinc-500 font-mono text-[10px] mb-3 border-b border-zinc-800 pb-2 uppercase tracking-tighter">model_configs.yaml</p>
                      <ul className="text-xs font-mono space-y-2 text-white">
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> React</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> GSAP</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Tailwind CSS</li>
                        <li className="flex items-center gap-2"><span className="text-zinc-600">&gt;</span> Netlify</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative group/img">
                    <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ DISPLAY ]</button>
                    
                    <div className="absolute bottom-full left-0 mb-6 w-56 h-auto border-2 border-black opacity-0 scale-90 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-300 pointer-events-none z-50 shadow-2xl">
                      <img src={displayportfolio} alt="Portfolio Preview" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                      <div className="bg-black text-white text-[10px] font-black p-1 text-center uppercase">My Portfolio</div>
                    </div>
                  </div>

                  <a href="https://github.com/sgupta701/saumya-portfolio" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black hover:border-black transition-all text-xl font-bold tracking-widest uppercase">[ GITHUB ]</a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 pointer-events-none select-none z-0">
              <span className="text-[11vw] font-black text-zinc-900 leading-none opacity-50 uppercase tracking-tighter">
                06
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* neura workflow */}
      {isNeuraWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out" onClick={() => setIsNeuraWorkflowOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-full border-2 border-zinc-700 bg-zinc-900 p-2 shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()} >
            <button onClick={() => setIsNeuraWorkflowOpen(false)}className="absolute -top-12 right-0 text-white font-mono hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]">
              <img src={neuraworkflow} alt="Neura Detailed Workflow" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="mt-4 border-t border-zinc-800 pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-500 uppercase">
              <span>Neura_Pipeline_Dataflow.png</span>
              <span>Resolution: 4K_Vector</span>
            </div>
          </div>
        </div>
      )}

      {/* ArcLens Workflow */}
      {isArcLensWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out" onClick={() => setIsArcLensWorkflowOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-full border-2 border-black bg-white p-2 shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsArcLensWorkflowOpen(false)} className="absolute -top-12 right-0 text-white font-mono hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]">
              <img src={arclensworkflow} alt="ArcLens Detailed Workflow" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="mt-4 border-t border-zinc-200 pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-400 uppercase">
              <span>Arclens Workflow</span>
            </div>
          </div>
        </div>
      )}

      {/* GlyphIO Workflow */}
      {isGlyphIOWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out" onClick={() => setIsArcLensFlowOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-full border-2 border-black bg-white p-2 shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsGlyphIOWorkflowOpen(false)} className="absolute -top-12 right-0 text-white font-mono hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]">
              <img src={exercise} alt="GlyphIO Detailed Workflow" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="mt-4 border-t border-zinc-200 pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-400 uppercase">
              <span>GlyphIO_Pipeline_Dataflow.png</span>
              <span>Layer: Inference_Routing</span>
            </div>
          </div>
        </div>
      )}

      {/* VertaAI Workflow */}
      {isVertaAIWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out" onClick={() => setIsArcLensFlowOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-full border-2 border-black bg-white p-2 shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsVertaAIWorkflowOpen(false)} className="absolute -top-12 right-0 text-white font-mono hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]">
              <img src={vertaaiworkflow} alt="VertaAI Detailed Workflow" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="mt-4 border-t border-zinc-200 pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-400 uppercase">
              <span>VertaAI_Pipeline_Dataflow.png</span>
              <span>Layer: Inference_Routing</span>
            </div>
          </div>
        </div>
      )}

      {/* Real Time Chat App Workflow */}
      {isRealTimeChatbotWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out" onClick={() => setIsArcLensFlowOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-full border-2 border-black bg-white p-2 shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsRealTimeChatbotWorkflowOpen(false)} className="absolute -top-12 right-0 text-white font-mono hover:text-zinc-400 transition-colors uppercase tracking-widest text-sm">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]">
              <img src={exercise} alt="VertaAI Detailed Workflow" className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="mt-4 border-t border-zinc-200 pt-2 flex justify-between items-center font-mono text-[10px] text-zinc-400 uppercase">
              <span>VertaAI_Pipeline_Dataflow.png</span>
              <span>Layer: Inference_Routing</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;