import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import profileImg from '../assets/profile.png'; 
import arrowImg from '../assets/arrows.png'; 
import hehe from '../assets/hehe.png'; 
import rotatedarrow from '../assets/rotatedarrow.png';
import paperplane from '../assets/paper-plane.png';
import uparrow from '../assets/up-arrow.png';
import woman from '../assets/woman.png';
import arglasses from '../assets/ar-glasses.png';
import mandala1 from '../assets/mandala.png';
import origami from '../assets/origami.png';
import bracket from '../assets/bracket.png';
import right from '../assets/right.png';
import left from '../assets/left.png';
import leftarrow from '../assets/left-arrow.png';
import dotteddown from '../assets/dotted-down.png';
import up from '../assets/up.png';
import down from '../assets/down.png';

gsap.registerPlugin(ScrollTrigger);

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

const KineticText = () => {
  const words = ["INTELLIGENCE", "ARCHITECTURES", "SOLUTIONS", "SYSTEMS"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block text-white bg-black px-4 py-2 mt-2 min-w-[300px] text-center transition-all duration-500">
      {words[index]}
    </span>
  );
};

const milestones = [
  { id: 'cp1', title: "10th", detail: "98% (St. Francis Convent Sr. Sec. School, Bareilly)", size: "small", x: "12%", y: "20%" },
  { id: 'y2019', year: "2019", size: "large", x: "17%", y: "20%" },
  { id: 'cp2', title: "12th", detail: "91.4% (St. Francis Convent Sr. Sec. School, Bareilly)", size: "small", x: "33%", y: "20%" },
  { id: 'y2021', year: "2021", size: "large", x: "39%", y: "20%" },
  { id: 'y2022', year: "2022", size: "large", x: "45%", y: "20%" },
  { id: 'cp3', title: "APTECH Catechization", detail: "APTECH Catechization - 1st position (Technovaganza)", size: "small", x: "60%", y: "20%" },
  { id: 'y2023', year: "2023", size: "large", x: "65%", y: "20%" },
  { id: 'cp4', title: "Code Starters", detail: "Code Starters - 3rd place (COMPTECH)", size: "small", x: "73%", y: "20%" },
  { id: 'cp5', title: "Digital Poster Making", detail: "Digital Poster Making - 3rd Position (TECHVYOM)", size: "small", x: "82%", y: "20%" },
  { id: 'cp5b', title: "Hackathon, SRMSCET", detail: "2nd rank. “AI-based automatic alarm generation and Dropping of payload via Drone”", size: "small", x: "89%", y: "20%" },
  { id: 'y2024', year: "2024", size: "large", x: "90%", y: "34%" },
  { id: 'cp6', title: "Design Dynamo", detail: "Design Dynamo - 3rd Position (TECHVYOM)", size: "small", x: "90%", y: "49%" },
  { id: 'cp7', title: "Clone the Web", detail: "Clone the Web - 3rd Place (TECHVYOM)", size: "small", x: "83%", y: "50%" },
  { id: 'cp8', title: "Code Quest", detail: "Code Quest - 1st Place (TECHVYOM)", size: "small", x: "73%", y: "50%" },
  { id: 'cp9', title: "SIH (Smart India Hackthon)", detail: "SIH’24, Team Lead : Secured 2nd waitlist place among 500 teams. Proposed an ML driven resource conservation system.", size: "small", x: "64%", y: "50%" },
  { id: 'cp10', title: "IIT Delhi, Rendezvous", detail: "IIT-Delhi Rendezvous’24, Team Lead: Secured an AIR 6. Proposed solutions to streamline India’s blood donation system.", size: "small", x: "56%", y: "50%" },
  { id: 'cp11', title: "IIT Indore, Hackathon", detail: "IIT Indore Hackathon’24, Team Lead: Got AIR 3 /960+ teams for crafting onboarding flow for e-commerce platform.", size: "small", x: "47%", y: "50%" },
  { id: 'cp12', title: "Vault of Codes Internship", detail: "Full Stack Developer Intern at Vault of Codes", size: "small", x: "39%", y: "50%" },
  { id: 'cp13a', title: "Vishleshan, IIM Raipur", detail: "Presented FinTech market analysis at IIM Raipur’s Vishleshan, 2024, secured AIR 2", size: "small", x: "29%", y: "50%" },
  { id: 'cp13b', title: "Kaizen, IIM Rohtak", detail: "AIR - 2. Supply Chain Optimization presentation.", size: "small", x: "21%", y: "50%" },
  { id: 'y2025', year: "2025", size: "large", x: "13%", y: "50%" },
  { id: 'cp14', title: "Research Paper Presentation", detail: "Decentralized Machine Unlearning System", size: "small", x: "10%", y: "60%" },
  { id: 'cp15', title: "Saiket Systems, Internship", detail: "Machine Learning Intern at Saiket Systems", size: "small", x: "10%", y: "72%" },
  { id: 'cp16', title: "IBM, Internship", detail: "GenAI Intern at IBM (PBEL)", size: "small", x: "13%", y: "80%" },
  { id: 'cp17', title: "Infosys Springboard, Internship", detail: "Artificial Intelligence Intern at Infosys Springboard", size: "small", x: "23%", y: "80%" },
  { id: 'y2026', year: "2026", size: "large", x: "32%", y: "80%" },
  { id: 'cp18', title: "Joined Bitgranth Organization", detail: "Full Stack Developer at Bitgranth Organization", size: "small", x: "40%", y: "80%" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const photoRef = useRef(null);
  const summaryRef = useRef(null);
  const navRef = useRef(null);
  
  const planeRef = useRef(null);
  const mandalaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const entryTl = gsap.timeline({ delay: 3.2 });
      entryTl
        .from(navRef.current, { y: -50, opacity: 0, duration: 0.8 })

        .fromTo(summaryRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.4")
        .fromTo(planeRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 0.5, duration: 0.8 }, "-=0.8")

        .fromTo(photoRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.8")
        .fromTo(mandalaRef.current, { scale: 0.5, opacity: 0, rotate: -90 }, { scale: 1, opacity: 0.4, rotate: 10, duration: 1.5, ease: "back.out(1.7)" }, "-=1");

      gsap.to(sectionRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-white">
      <div ref={sectionRef} className="flex w-[200vw] h-screen font-mono">
        
        {/* SCREEN 1 */}
        <div className="w-screen h-full bg-white text-black flex relative overflow-hidden bg-grid-subtle">
          <Doodle innerRef={planeRef} src={paperplane} x="13%" y="18%" rotate={10} width="110px" scale={1} />
          <Doodle innerRef={mandalaRef} src={mandala1} x="52%" y="23%" rotate={10} width="450px" scale={1} opacity={0.4} />
          <div className="w-[8vw] md:w-[6vw] border-r-2 border-black flex flex-col items-center overflow-hidden bg-white h-full relative z-20">
            <div className="animate-marquee-vertical flex flex-col shrink-0">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="h-[250px] flex items-center justify-center shrink-0">
                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter -rotate-90 whitespace-nowrap block">
                    SAUMYA<span className="inline-block w-5"></span>GUPTA
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-grow flex flex-col relative z-10">
            <nav ref={navRef} className="w-full border-b-2 border-black flex justify-end items-center px-10 h-[8vh] gap-8 font-bold text-sm tracking-widest bg-white">
              <a href="https://github.com/sgupta701" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-all hover:scale-110">GITHUB</a>
              <a href="https://www.linkedin.com/in/saumya-gupta-4385452a4/" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-all hover:scale-110">LINKEDIN</a>
            </nav>

            <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-12 md:px-24">
              <div ref={summaryRef} className="w-full md:w-1/2 relative">
                <span className="absolute -top-20 -left-10 text-[12rem] font-black text-gray-100 -z-10 select-none opacity-50">01</span>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase italic">
                  CRAFTING <br /> DIGITAL <br /> 
                  <KineticText />
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-md font-medium leading-relaxed border-l-4 border-black pl-6">
                  I build systems that learn and interfaces that feel alive. Currently focusing on AI/ML and full-stack architecture.
                </p>
              </div>

              <div ref={photoRef} className="w-full md:w-[25%] h-[61vh] relative group">
  
              <div className="absolute inset-0 border-2 border-black bg-black opacity-90 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              
              <img 
                src={profileImg} 
                alt="Saumya Gupta" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 border-2 border-black" 
              />
            </div>
            </div>

            <div className="h-[6vh] border-t-2 border-black flex items-center px-10 justify-between text-xs font-bold uppercase tracking-widest bg-white">
              <span className="animate-pulse">Scroll to Explore</span>
            </div>
          </div>
        </div>

        {/* screen 2 */}
        <div className="w-screen h-full flex flex-col bg-white text-black overflow-hidden relative bg-grid-subtle">
          
          <Doodle src={rotatedarrow} x="2%" y="23%" rotate={10} width="110px" scale={1} />
          <Doodle src={uparrow} x="37.8%" y="79%" rotate={25} width="70px" scale={1} />
          <Doodle src={right} x="25%" y="22.7%" rotate={25} width="40px" scale={1} />
          <Doodle src={right} x="55%" y="22.7%" rotate={25} width="40px" scale={1} />
          <Doodle src={right} x="77%" y="22.7%" rotate={25} width="40px" scale={1} />
          <Doodle src={left} x="24.7%" y="48.3%" rotate={25} width="40px" scale={1} />
          <Doodle src={left} x="48.8%" y="48.3%" rotate={25} width="40px" scale={1} />
          <Doodle src={left} x="78%" y="48.3%" rotate={25} width="40px" scale={1} />
          <Doodle src={right} x="34.6%" y="74.3%" rotate={25} width="40px" scale={1} />
          <Doodle src={right} x="15%" y="74.3%" rotate={25} width="40px" scale={1} />
          <Doodle src={leftarrow} x="73%" y="51%" rotate={25} width="75px" scale={1} />
          <Doodle src={down} x="89%" y="15%" rotate={25} width="48px" scale={1} />
          <Doodle src={down} x="28%" y="19%" rotate={25} width="40px" scale={1} />
          <Doodle src={dotteddown} x="48%" y="39%" rotate={25} width="85px" scale={1} />
          <Doodle src={up} x="8%" y="76%" rotate={25} width="65px" scale={1} />

          <nav className="w-full border-b-2 border-black flex justify-between items-center px-6 py-4 h-[8vh] bg-white z-20">
            <div className="text-2xl font-bold tracking-tighter uppercase">SAUMYA GUPTA</div>
            <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest">
              <a href="https://github.com/sgupta701" target="_blank" className="hover:text-neon-green">GITHUB</a>
              <a href="https://www.linkedin.com/in/saumya-gupta-4385452a4/" target="_blank" className="hover:text-neon-green">LINKEDIN</a>
            </div>
          </nav>

          <div className="flex-grow relative overflow-hidden">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <polyline points="10,20 90,20 90,50 10,50 10,80 40,80" fill="none" stroke="#3c3838" strokeWidth="0.4" strokeDasharray="1,1" className="opacity-70" />
            </svg>

            {milestones.map((m) => (
              <div key={m.id} className="absolute group z-10" style={{ left: m.x, top: m.y, transform: 'translate(-50%, -50%)' }}>
                <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                {m.year && (
                  <span className="text-base font-black italic mb-1 whitespace-nowrap">
                    {m.year}
                  </span>
                )}
                {m.title && (
                  <span className="text-[11px] md:text-[11px] font-bold tracking-tighter text-black text-center whitespace-normal max-w-[100px] leading-tight">
                    {m.title}
                  </span>
                )}
                
                </div>
                <div className={`${m.size === 'large' ? 'w-10 h-10 bg-black' : 'w-7 h-7 bg-gray-400'} rounded-full border-4 border-white shadow-[0_0_0_2px_black] group-hover:bg-neon-green group-hover:scale-125 transition-all duration-300 cursor-help`}></div>
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-52 bg-white border-2 border-black p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-2 transition-all duration-300 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-[110]">
                  <h4 className="text-[11px] font-black uppercase border-b-2 border-black mb-2 pb-1">{m.title || m.year}</h4>
                  <p className="text-[10px] font-mono leading-tight text-gray-600">{m.detail}</p>
                </div>
              </div>            
            ))}

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-auto min-h-[30%] bg-black text-white flex flex-col justify-center items-center cursor-pointer group hover:w-[350px] transition-all duration-500 border-l-2 border-black z-40">
              
              <div className="rotate-90 whitespace-nowrap font-bold tracking-widest text-[10px] uppercase group-hover:hidden">
                #OpenToWork
              </div>

              <div className="hidden group-hover:flex flex-col p-6 w-full animate-fadeIn items-center">
                
                <div className="mb-4 border-2 border-black grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={hehe} 
                    className="block max-w-full h-auto object-contain" 
                    alt="Achievement Gallery" 
                  />
                </div>
                
              </div>
            </div>

            <div className="absolute top-[7%] right-[3%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1vw] font-black tracking-tighter text-gray-400 opacity-60 leading-[0.8]">
                competitions
              </h2>
            </div>
            <div className="absolute top-[11%] left-[29%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1vw] font-black tracking-tighter text-gray-400 opacity-60 leading-[0.8]">
                education
              </h2>
            </div>
            <div className="absolute top-[37%] right-[48%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1vw] font-black tracking-tighter text-gray-400 opacity-60 leading-[0.8]">
                hackathons
              </h2>
            </div>
            <div className="absolute bottom-[9%] left-[4%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1vw] font-black tracking-tighter text-gray-400 opacity-60 leading-[0.8]">
                internships
              </h2>
            </div>
            <div className="absolute bottom-[42%] right-[12%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[1vw] font-black tracking-tighter text-gray-400 opacity-80 leading-[0.8]">
                hover for details
              </h2>
            </div>
            <div className="absolute top-[2%] left-[1%] pointer-events-none select-none z-0 text-left overflow-hidden">
              <h2 className="text-[4vw] font-black uppercase tracking-tighter text-gray-400 opacity-50 leading-[0.8]">
                CAREER PATH
              </h2>
            </div>
            <div className="absolute bottom-[13%] right-[8%] pointer-events-none select-none z-0 text-right overflow-hidden">
              <h2 className="text-[8.5vw] font-black uppercase tracking-tighter text-gray-400 opacity-50 leading-[0.8]">
                CHRONOLOGY
              </h2>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;