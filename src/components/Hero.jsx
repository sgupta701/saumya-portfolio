import React from 'react';
// Ensure these images are in your src/assets folder
import profileImg from '../assets/profile.png'; 
import arrowImg from '../assets/arrows.png'; 

const Hero = () => {
  return (
    <div className="h-screen w-full bg-white text-black flex flex-col font-mono overflow-hidden">
      
      {/* 1. TOP NAVIGATION (Height: Reduced to 6vh) */}
      <nav className="w-full border-b-2 border-black flex justify-between items-center px-6 py-4 h-[6vh]">
       
        <div className="text-2xl font-bold tracking-tighter uppercase cursor-default transition-transform duration-300 hover:scale-110 origin-left">
          SAUMYA GUPTA
        </div>
        
        <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest">
          <a href="https://github.com/sgupta701" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors hover:underline decoration-2 underline-offset-4">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/saumya-gupta-4385452a4/" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors hover:underline decoration-2 underline-offset-4">
            LINKEDIN
          </a>
          <a href="YOUR_GOOGLE_DRIVE_LINK_HERE" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors hover:underline decoration-2 underline-offset-4">
            RESUME
          </a>
        </div>
      </nav>

      {/* 2. STATUS BAR (Height: Reduced to 4vh) */}
      <div className="w-full border-b-2 border-black flex justify-between items-center px-6 h-[4vh] bg-white text-black text-sm font-bold tracking-widest uppercase">
        <span>Final Year Undergraduate</span>
        <span className="text-neon-green">2022 — 2026</span>
      </div>

      {/* 3. MAIN GRID (Height: Adjusted to 76vh) */}
      <div className="flex-grow flex flex-col md:flex-row border-b-2 border-black h-[76vh]">       

        {/* col 1 */}
        <div className="hidden md:flex w-[15%] border-r-2 border-black justify-center items-center overflow-hidden bg-white relative">
           <img 
             src={arrowImg} 
             alt="Arrows" 
             className="w-[150%] max-w-none opacity-100" 
             onError={(e) => {e.target.style.display='none'}} 
           />
           <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
           </div>
        </div>

        {/* column 2 */}
        <div className="w-full md:w-[50%] flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-black">
          
          {/* Header Section */}
          <div className="flex flex-col border-b-2 border-black h-[14%] px-6 py-4 justify-between">
            <p className="text-sm leading-relaxed text-gray-700 font-medium pr-4">
              Just a curious developer who loves building things. I enjoy creating AI models that learn and systems that actually help people.
            </p>
          </div>

          {/* Menu Items */}
          <div className="flex-grow flex flex-col">
            {[
              'AI/ML ENGINEER',   
              'FULL STACK DEVELOPER',         
            ].map((item, index) => (
              <div key={item} className="flex-1 flex items-center border-b-2 border-black px-6 hover:bg-black transition-all duration-300 cursor-pointer group hover:scale-[1.04] hover:z-10 origin-center">
                <span className="text-xs mr-4 text-gray-400 group-hover:text-neon-green font-mono">0{index + 1}</span>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-neon-green transition-colors">
                  {item}
                </h2>
              </div>
            ))}
          </div>
     
          {/* Footer */}
          <div className="h-[20%] flex justify-between items-center px-6 bg-gray-50">
            <span className="text-xs md:text-xs font-bold uppercase tracking-widest text-gray-600">
              START YOUR DIGITAL VOYAGE WITH A SCROLL
            </span>
            <span className="text-2xl animate-bounce">↓</span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="w-full md:w-[25%] relative overflow-hidden bg-black border-r-2 border-black">
          <img 
            src={profileImg} 
            alt="Saumya Gupta" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            onError={(e) => {e.target.src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop'}} 
          />
        </div>

        {/* COL 4: ACHIEVEMENTS */}
        <div className="hidden md:flex w-[10%] bg-white relative">
          
          {/* THE BUTTON */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-black text-white flex flex-col justify-center items-center cursor-pointer group hover:w-[80%] hover:scale-105 transition-all duration-300 border-l-2 border-black">
            
            <div className="rotate-90 whitespace-nowrap font-bold tracking-widest text-[10px] uppercase group-hover:opacity-0 transition-opacity duration-300">
              ACHIEVEMENTS
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-[100%] w-[300px] bg-white text-black border-2 border-black p-6 
                            opacity-0 translate-x-[20%] pointer-events-none
                            group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
                            transition-all duration-500 ease-out z-50 shadow-2xl">
              
              <div className="absolute top-1/2 -translate-y-1/2 right-[-12px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-black"></div>

              <h3 className="text-lg font-black uppercase mb-4 border-b-2 border-black pb-2 text-left">
                HONORS & AWARDS
              </h3>
              
              <ul className="space-y-4 text-left">
                <li className="flex flex-col">
                  <span className="text-xs font-bold text-neon-green">2025</span>
                  <span className="font-bold text-sm">Smart India Hackathon</span>
                  <span className="text-[10px] text-gray-500 uppercase">First Place Winner</span>
                </li>
                
                <li className="flex flex-col">
                  <span className="text-xs font-bold text-neon-green">2024</span>
                  <span className="font-bold text-sm">5-Star Gold Badge</span>
                  <span className="text-[10px] text-gray-500 uppercase">HackerRank (Problem Solving)</span>
                </li>

                <li className="flex flex-col">
                  <span className="text-xs font-bold text-neon-green">2023</span>
                  <span className="font-bold text-sm">Best Project Award</span>
                  <span className="text-[10px] text-gray-500 uppercase">AKTU Tech Fest</span>
                </li>
              </ul>
            </div>

            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="rotate-180 text-xl font-bold">&rarr;</span>
            </div>

          </div>
        </div>

      </div>

      {/* 4. MARQUEE (Height: Increased to 14vh) */}
      <div className="h-[14vh] overflow-hidden flex items-center bg-white border-t-2 border-black">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Increased text size to 6xl/8xl to match the new height */}
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
          <span className="text-5xl md:text-5xl font-white tracking-tighter mr-16">saumya gupta</span>
        </div>
      </div>

    </div>
  );
};

export default Hero;