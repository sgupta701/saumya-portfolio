import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import rightarrow from '../assets/right-arrow.png';
import guitar from '../assets/guitar.png';
import run from '../assets/run.png';
import magnifyingglass from '../assets/magnifying-glass.png';
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
import displayphoneportfolio from '../assets/displayphoneportfolio.png';

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

  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileStack, setActiveMobileStack] = useState(null); // To track which project stack is clicked on mobile

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const ctx = gsap.context(() => {
      // gsap if not mobile
      if (!isMobile) {
        gsap.fromTo(
          sectionRef.current,
          { x: 0 },
          {
            x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "+=15000", 
              scrub: 1, 
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", checkMobile);
    }; 
  }, [isMobile]);

  // mobile project
  const MobileProjectCard = ({ num, title, subtitle, desc, stack, displayImg, github, demo, workflow, workflowSetter, dark = false }) => (
    <div className={`w-full py-16 px-6 border-b-2 border-black flex flex-col ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <span className={`font-mono text-xs mb-2 tracking-widest uppercase ${dark ? 'text-zinc-500' : 'text-zinc-500'}`}>
        {num} // {subtitle}
      </span>
      <h3 className="text-5xl font-black tracking-tighter mb-6">{title}</h3>
      <p className="text-xl font-bold uppercase italic mb-4 leading-tight">{desc.short}</p>
      <p className={`font-mono text-sm leading-relaxed mb-8 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{desc.long}</p>
      
      <div className="flex flex-wrap gap-4 mt-4">
       
        <button 
          onClick={() => setActiveMobileStack(activeMobileStack === title ? null : title)}
          className={`border-b-2 font-bold uppercase tracking-widest text-sm pb-1 ${dark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-600'}`}
        >
          [ {activeMobileStack === title ? 'CLOSE_TECH' : 'TECH_STACK'} ]
        </button>
        
        <button 
          onClick={() => workflowSetter(true)}
          className={`border-b-2 font-bold uppercase tracking-widest text-sm pb-1 ${dark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-600'}`}
        >
          [ WORKFLOW ]
        </button>

        {github && <a href={github} target="_blank" rel="noreferrer" className={`border-b-2 font-bold uppercase tracking-widest text-sm pb-1 ${dark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-600'}`}>[ GITHUB ]</a>}
        {demo && <a href={demo} target="_blank" rel="noreferrer" className={`border-b-2 font-bold uppercase tracking-widest text-sm pb-1 ${dark ? 'border-zinc-700 text-zinc-400' : 'border-zinc-200 text-zinc-600'}`}>[ DEMO ]</a>}
      </div>

      {/* display stack*/}
      {activeMobileStack === title && (
        <div className={`mt-6 p-4 border-2 animate-fadeIn ${dark ? 'bg-zinc-900 border-white' : 'bg-black text-white border-black'}`}>
          <ul className="font-mono text-xs space-y-2">
            {stack.map((item, i) => <li key={i}><span className="opacity-50">&gt;</span> {item}</li>)}
          </ul>
        </div>
      )}

      {/* static display */}
      <div className="mt-10 border-2 border-black">
        <img src={displayImg} className="w-full grayscale" alt="preview" />
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden font-mono text-black bg-white">
      {isMobile ? (
        /* responsiveness - mobile*/
        <div className="flex flex-col w-full">
          <div className="h-screen flex flex-col justify-center px-8 bg-white bg-grid-subtle border-b-2 border-black">
            <h2 className="text-5xl font-medium leading-tight mb-6">HELLO, <br /> I'M <span className="text-gray-600 font-bold">SAUMYA GUPTA...</span></h2>
            <p className="text-lg font-medium leading-relaxed uppercase">I Enjoy Translating theoretical architectures into functional code. Documentation of my <span className="text-gray-600 font-bold">Projects.</span></p>
            <div className="mt-12 border-t border-black pt-4 font-bold text-xs uppercase opacity-50">Scroll to explore</div>
          </div>

          <MobileProjectCard 
            num="01" title="NEURA" subtitle="ARTIFICIAL_INTELLIGENCE" dark={true}
            displayImg={displayneura} github="https://github.com/sgupta701/NEURA-does-it-all" demo="https://drive.google.com/file/d/1mzPQOPYF5IL---vYUT2jTTcbbNxpysNk/view?usp=drive_link"
            workflowSetter={setIsNeuraWorkflowOpen}
            desc={{short: "A Chat-to-Action Multi-Intent Task Execution System.", long: "Instead of writing individual commands, one can simply chat in plain English assigning multiple tasks. Neura intelligently understands and executes each task."}}
            stack={["Python, FastAPI", "Hugging Face Transformers", "React / Tailwind", "Mistral, DistilBERT", "MySQL"]}
          />

          <MobileProjectCard 
            num="02" title="ArcLens" subtitle="FULL STACK + ML" dark={false}
            displayImg={displayarclens} github="https://github.com/sgupta701/ArcLens"
            workflowSetter={setIsArcLensWorkflowOpen}
            desc={{short: "Unified Document Intelligence & Routing System.", long: "It is a doc intelligence system that uses OCR and deep learning to extract, classify, summarize and route documents automatically to relevant departments, improving efficiency and accuracy in handling large volumes of paperwork."}}
            stack={["React", "Tesseract OCR", "RAG", "BART", "MySQL"]}
          />

          <MobileProjectCard 
            num="03" title="GlyphIO" subtitle="AI/ML" dark={true}
            displayImg={displayglyphio} github="https://github.com/sgupta701/GlyphIO_amongus_hand_control"
            /* workflowSetter={setIsGlyphIOWorkflowOpen} */
            desc={{short: "American Sign Language based Gesture Controller.", long: "a real-time gesture-based input system that converts ASL alphabets (A–Z) directly into text, enabling seamless chatting and text entry across any application - demonstrated with game AmongUs. "}}
            stack={["Python", "OpenCV, MediaPipe", "PyAutoGUI", "MLPClassifier"]}
          />

          <MobileProjectCard 
            num="04" title="VertaAI" subtitle="ML + FRONTEND" dark={false}
            displayImg={displayvertaai} github="https://github.com/sgupta701/Verta-AI"
            workflowSetter={setIsVertaAIWorkflowOpen}
            desc={{short: "A Multi Language Translator", long: "full-stack AI-powered web app for real-time multilingual text translation using Hugging Face’s MBART transformer model.."}}
            stack={["Python", "Streamlit", "BART-large", "Hugging Face"]}
          />

          <MobileProjectCard 
            num="05" title="Thread - A Real time Chatapp" subtitle=".NET" dark={true}
            displayImg={displayrealtimechatbot} github="https://github.com/sgupta701/Real-Time-Chatapp-using-.NET"
            /* workflowSetter={setIsRealTimeChatbotWorkflowOpen} */
            desc={{short: "Real-Time Chat System using .NET (TCP + WPF)", long: "A lightweight chat system supporting multiple users connecting to the same server and exchanging messages instantly; including a TCP server, client, login authentication and a WPF-based GUI for user interaction."}}
            stack={["C#", ".NET", "WPF", "TCP Sockets", "SQL Server"]}
          />

          <MobileProjectCard 
            num="06" title="My Portfolio" subtitle="React" dark={false}
            displayImg={displayphoneportfolio} github="https://github.com/sgupta701/saumya-portfolio"
            /* workflowSetter={setIsRealTimeChatbotWorkflowOpen} */
            desc={{short: "Personal Portfolio and Project Archive", long: "the very project you are currently exploring.. made it with a focus on reponsiveness and a clean frontend.. Built using React, Tailwind CSS, and GSAP for smooth animations and interactions."}}
            stack={["React", "Tailwind CSS", "GSAP", "JavaScript"]}
          />
        </div>
      ) : (
        /* desktop */
        <div ref={triggerRef}>
          <div ref={sectionRef} className="h-screen w-[600vw] flex flex-row relative">

            {/* scr 1 */}
            <div className="w-screen h-full flex-shrink-0 justify-start pt-42 bg-white bg-grid-subtle overflow-hidden border-r-2 border-black relative px-12 md:px-24">           
              <Doodle src={rightarrow} x="91%" y="7%" rotate={10} width="90px" scale={1} />
              <Doodle src={guitar} x="0%" y="16%" rotate={10} width="110px" scale={1} />
              <Doodle src={run} x="90%" y="78%" rotate={10} width="125px" scale={1} />
              <Doodle src={magnifyingglass} x="71%" y="14%" rotate={10} width="170px" scale={1} opacity={0.3} />

              <div className="mb-6">
                <h2 className="text-5xl md:text-6xl font-medium leading-tight">
                  HELLO, <br />
                  I'M <span className="text-gray-600 font-bold">SAUMYA GUPTA...</span>
                </h2>
              </div><br/>

              <div className="max-w-3xl mb-16">
                <p className="text-xl md:text-2xl font-medium leading-relaxed uppercase">
                  I Enjoy Translating theoretical architectures into functional code. Here is the documentation of my core builds and <span className="text-gray-600 font-bold"> Projects.</span>
                </p>
              </div>

              <div className="absolute bottom-50 left-12 md:left-24 right-12 flex items-center border-t border-black pt-6 w-[85%]">
                <span className="text-sm md:text-base font-bold text-gray-600 uppercase tracking-wide mr-4">
                  LET'S CODE-DIVE! 
                </span>
                <div className="flex-grow h-[1px] bg-gray-600 relative"></div>
              </div>

              <div className="absolute top-[20%] right-[3%] pointer-events-none select-none z-0 text-left overflow-hidden">
                <h2 className="text-[1.7vw] font-black tracking-tighter text-gray-500 opacity-87 leading-[0.8]">
                  EXPLORE SELECTED PROJECTS
                </h2>
              </div>
            </div>

            {/* scr 2 - NEURA */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
              <div className="w-5xl h-[70vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">01 // ARTIFICIAL_INTELLIGENCE</span>
                    <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">NEURA</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [COMPLETED]</p><p>YEAR: 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-zinc-100 font-bold leading-tight mb-8 uppercase italic">A Chat-to-Action Multi-Intent <br /> Task Execution System.</p>
                    <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">Instead of writing individual commands, one can simply chat in plain English assigning multiple tasks. Neura intelligently understands, splits, classifies, and executes each tasks.</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold uppercase tracking-widest text-left">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 scale-90 group-hover/tech:opacity-100 group-hover/tech:scale-100 transition-all pointer-events-none z-50">
                        <ul className="text-xs font-mono space-y-2 text-zinc-100">
                          <li>&gt; Python, FastAPI</li><li>&gt; Hugging Face Transformers</li><li>&gt; React / Tailwind</li><li>&gt; Mistral via Ollama, DistilBERT</li><li>&gt; MySQL</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-zinc-100 opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={displayneura} className="w-full h-auto grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button onClick={() => setIsNeuraWorkflowOpen(true)} className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white hover:border-white transition-all text-xl font-bold uppercase tracking-widest">[ WORKFLOW ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-56 border-2 border-zinc-100 opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={neuraworkflow} className="w-full grayscale" alt="workflow" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/NEURA-does-it-all" target="_blank" rel="noreferrer" className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                    <a href="https://drive.google.com/file/d/1mzPQOPYF5IL---vYUT2jTTcbbNxpysNk/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white uppercase text-xl font-bold tracking-widest">[ WATCH_DEMO ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 leading-none opacity-90 uppercase tracking-tighter">01</span></div>
            </div>

            {/* sccr 3 - arclens */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
              <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">02 // FULL STACK + ML</span>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter">ArcLens</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [ONGOING]</p><p>YEAR: 2026</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-black font-bold mb-8 uppercase italic leading-tight">Unified Document Intelligence <br /> & Routing System.</p>
                    <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">It is a doc intelligence system that uses OCR and deep learning to extract, classify, summarize and route documents automatically to relevant departments, improving efficiency and accuracy in handling large volumes of paperwork.</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black transition-all text-xl font-bold uppercase tracking-widest">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 group-hover/tech:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                        <ul className="text-xs font-mono space-y-2 text-white">
                          <li>&gt; React</li><li>&gt; Tesseract OCR</li><li>&gt; RAG</li><li>&gt; BART</li><li>&gt; MySQL</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-black opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={displayarclens} className="w-full grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button onClick={() => setIsArcLensWorkflowOpen(true)} className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black text-xl font-bold uppercase tracking-widest">[ WORKFLOW ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-56 border-2 border-black opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={arclensworkflow} className="w-full grayscale" alt="workflow" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/ArcLens" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 opacity-50 uppercase tracking-tighter">02</span></div>
            </div>

            {/* scr 4 - GlyphIO */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
              <div className="w-5xl h-[70vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">03 // AI/ML</span>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter">GlyphIO</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [COMPLETED]</p><p>YEAR: 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-zinc-100 font-bold mb-8 uppercase italic">American Sign Language [ASL] based <br /> Gesture Controller & Chat System</p>
                    <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">a real-time gesture-based input system that converts ASL alphabets (A–Z) directly into text, enabling seamless chatting and text entry across any application - demonstrated with game AmongUs.</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white transition-all text-xl font-bold uppercase tracking-widest">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 group-hover/tech:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                        <ul className="text-xs font-mono space-y-2 text-zinc-100">
                          <li>&gt; Python</li><li>&gt; OpenCV, MediaPipe</li><li>&gt; PyAutoGUI</li><li>&gt; MLPClassifier</li><li>&gt; Joblib</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-zinc-100 opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={displayglyphio} className="w-full grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/GlyphIO_amongus_hand_control" target="_blank" rel="noreferrer" className="text-zinc-400 border-b-2 border-zinc-700 uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                    <a href="https://drive.google.com/file/d/1bmtziFTv5xO55f2PWZqiANCXQOacrbyv/view?usp=drive_link" target="_blank" rel="noreferrer" className="text-zinc-400 border-b-2 border-zinc-700 uppercase text-xl font-bold tracking-widest">[ WATCH_DEMO ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 opacity-90 uppercase tracking-tighter">03</span></div>
            </div>

            {/* scr 5 VertaAI */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
              <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">04 // ML + Frontend</span>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter">VertaAI</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [COMPLETED]</p><p>YEAR: 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-black font-bold mb-8 uppercase italic leading-tight">A Multi Language Translator</p>
                    <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">full-stack AI-powered web app for real-time multilingual text translation using Hugging Face’s MBART transformer model..</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black transition-all text-xl font-bold uppercase tracking-widest">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 group-hover/tech:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                        <ul className="text-xs font-mono space-y-2 text-white">
                          <li>&gt; Python</li><li>&gt; Streamlit</li><li>&gt; BART-large</li><li>&gt; Hugging Face</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-black opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={displayvertaai} className="w-full grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/Verta-AI" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 opacity-50 uppercase tracking-tighter">04</span></div>
            </div>

            {/* scr 6  chatapp.NET */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-black text-white border-r-2 border-zinc-800 relative p-10 bg-grid-dark">
              <div className="w-5xl h-[80vh] border-2 border-zinc-700 p-8 md:p-16 relative bg-zinc-900/50 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(39,39,42,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-zinc-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-zinc-500"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">05 // .NET</span>
                    <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">Thread - A RealTime ChatApp using .NET</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [COMPLETED]</p><p>YEAR: 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-zinc-100 font-bold mb-8 uppercase italic leading-tight">Real-Time Chat System (TCP + WPF GUI)</p>
                    <p className="text-base md:text-lg text-zinc-400 font-mono leading-relaxed max-w-xl">A lightweight chat system supporting multiple users connecting to the same server and exchanging messages instantly; including a TCP server, client, login authentication and a WPF-based GUI for user interaction.</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white transition-all text-xl font-bold uppercase tracking-widest">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-zinc-900 border-2 border-zinc-100 p-4 opacity-0 group-hover/tech:opacity-100 transition-all pointer-events-none z-50">
                        <ul className="text-xs font-mono space-y-2 text-zinc-100">
                          <li>&gt; C#</li><li>&gt; .NET</li><li>&gt; WPF</li><li>&gt; TCP Sockets</li><li>&gt; SQL Server</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-400 border-b-2 border-zinc-700 pb-1 hover:text-white text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-zinc-100 opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                        <img src={displayrealtimechatbot} className="w-full grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/Real-Time-Chatapp-using-.NET" target="_blank" rel="noreferrer" className="text-zinc-400 border-b-2 border-zinc-700 uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 leading-none opacity-90 uppercase tracking-tighter">05</span></div>
            </div>

            {/* scr 7 - Portfolio */}
            <div className="w-screen h-full flex-shrink-0 flex justify-center items-center bg-white text-black border-r-2 border-zinc-200 relative p-10 bg-grid-subtle">
              <div className="w-5xl h-[70vh] border-2 border-black p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-black"></div>
                <div className="flex justify-between items-end mb-12 border-b border-zinc-200 pb-8">
                  <div>
                    <span className="text-zinc-500 font-mono text-sm mb-2 block tracking-widest uppercase">06 // React</span>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter">Portfolio</h3>
                  </div>
                  <div className="text-right hidden md:block font-mono text-zinc-500 text-xs tracking-widest">
                    <p>STATUS: [DEPLOYED]</p><p>YEAR: 2026</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-grow">
                    <p className="text-2xl md:text-3xl text-black font-bold mb-8 uppercase italic leading-tight">Personal Portfolio & Project Archive.</p>
                    <p className="text-base md:text-lg text-zinc-600 font-mono leading-relaxed max-w-xl">The very project you are looking at right now. I have designed it with a focus on a responsiveness, a clean frontend, 
                    but also a brutalist aesthetic. It serves as a hub for my work and a live demonstration of my skills.</p>
                  </div>
                  <div className="flex flex-col gap-4 justify-end items-start min-w-[220px] pt-4">
                    <div className="relative group/tech">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black text-xl font-bold uppercase tracking-widest">[ TECH_STACK ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-64 bg-black border-2 border-black p-4 opacity-0 group-hover/tech:opacity-100 transition-all pointer-events-none z-50 shadow-2xl">
                        <ul className="text-xs font-mono space-y-2 text-white">
                          <li>&gt; React</li><li>&gt; GSAP</li><li>&gt; Tailwind CSS</li><li>&gt; Netlify</li>
                        </ul>
                      </div>
                    </div>
                    <div className="relative group/img">
                      <button className="text-zinc-600 border-b-2 border-zinc-200 pb-1 hover:text-black text-xl font-bold uppercase tracking-widest">[ DISPLAY ]</button>
                      <div className="absolute bottom-full left-0 mb-6 w-120 border-2 border-black opacity-0 group-hover/img:opacity-100 transition-all pointer-events-none z-50">
                        <img src={displayportfolio} className="w-full grayscale hover:grayscale-0" alt="preview" />
                      </div>
                    </div>
                    <a href="https://github.com/sgupta701/saumya-portfolio" target="_blank" rel="noreferrer" className="text-zinc-600 border-b-2 border-zinc-200 uppercase text-xl font-bold tracking-widest">[ GITHUB ]</a>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-10 pointer-events-none z-0"><span className="text-[11vw] font-black text-zinc-900 opacity-50 uppercase tracking-tighter">06</span></div>
            </div>
          </div>
        </div>
      )}

      {/* modals */}
      {isNeuraWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out" onClick={() => setIsNeuraWorkflowOpen(false)}>
          <div className="relative max-w-5xl w-full border-2 border-zinc-700 bg-zinc-900 p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsNeuraWorkflowOpen(false)} className="absolute -top-10 right-0 text-white font-mono uppercase text-xs">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]"><img src={neuraworkflow} className="w-full grayscale hover:grayscale-0" alt="Neura Flow" /></div>
          </div>
        </div>
      )}

      {isArcLensWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out" onClick={() => setIsArcLensWorkflowOpen(false)}>
          <div className="relative max-w-5xl w-full border-2 border-black bg-white p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsArcLensWorkflowOpen(false)} className="absolute -top-10 right-0 text-white font-mono uppercase text-xs">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]"><img src={arclensworkflow} className="w-full grayscale hover:grayscale-0" alt="ArcLens Flow" /></div>
          </div>
        </div>
      )}

      {isVertaAIWorkflowOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out" onClick={() => setIsVertaAIWorkflowOpen(false)}>
          <div className="relative max-w-5xl w-full border-2 border-black bg-white p-2" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsVertaAIWorkflowOpen(false)} className="absolute -top-10 right-0 text-white uppercase text-xs">[ Close_X ]</button>
            <div className="overflow-auto max-h-[80vh]"><img src={vertaaiworkflow} className="w-full grayscale" alt="VertaAI Flow" /></div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;


































