/*src/components/Contact.jsx*/

import React from 'react';

const SketchLine = () => (
  <div className="w-full h-px border-b-2 border-dashed border-zinc-700/50 my-8"></div>
);

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black text-white relative overflow-hidden font-mono selection:bg-white selection:text-black">
      <style>{`
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
             backgroundSize: '25px 25px'
           }}>
      </div>

      <div className="absolute top-10 left-10 text-zinc-600 text-6xl font-thin select-none">+</div>
      <div className="absolute bottom-10 right-10 text-zinc-600 text-6xl font-thin select-none">+</div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-dashed border-zinc-800 rounded-full opacity-30 pointer-events-none animate-spin-slow"></div>

      <div className="absolute bottom-1/5 right-1/4 w-96 h-96 border-4 border-dotted border-zinc-800/40 rounded-full opacity-20 pointer-events-none animate-spin-reverse-slow"></div>
      <div className="absolute top-32 left-10 w-[500px] h-px border-b-2 border-dashed border-zinc-700/20 rotate-[25deg] pointer-events-none"></div>
      <div className="absolute top-10 left-40 w-px h-[400px] border-r-2 border-dashed border-zinc-700/20 rotate-[15deg] pointer-events-none"></div>

   
      <div className="absolute bottom-32 right-20 w-48 h-32 border-2 border-dashed border-zinc-800/50 rotate-[-8deg] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-36 right-24 w-48 h-32 border-2 border-dotted border-zinc-700/30 rotate-[-12deg] pointer-events-none opacity-40"></div>

      <div className="absolute top-40 right-40 text-zinc-700/40 text-sm pointer-events-none font-mono tracking-[1em] select-none">x x x</div>
      <div className="absolute bottom-60 left-20 text-zinc-700/40 text-sm pointer-events-none font-mono tracking-[1em] rotate-90 select-none">x x x</div>

      <div className="absolute top-1/2 left-16 text-zinc-800/40 text-7xl pointer-events-none rotate-[-30deg] font-thin select-none">
        →
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        
        <div className="relative bg-black border-2 border-dashed border-white/80 p-8 md:p-16 text-center shadow-[20px_20px_0px_0px_rgba(30,30,30,1)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-zinc-800/80 backdrop-blur-sm rotate-2 shadow-sm border border-zinc-700"></div>

          <div className="inline-block border-2 border-dashed border-zinc-600 px-4 py-1 mb-8">
             <span className="text-green-500 mr-2">●</span>
             <span className="text-zinc-400 text-xs tracking-[0.2em] uppercase">SYSTEM STATUS: Open to Work</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-2 leading-none uppercase tracking-tighter">
            Let's <br/> Connect
          </h2>
          
          <p className="text-zinc-500 text-sm md:text-base font-bold uppercase tracking-widest mb-10">
            // Open for collaborations & coffee
          </p>

          <SketchLine />

          <div className="group relative inline-block my-4">
            <a 
              href="mailto:gupta.sg003@gmail.com"
              className="relative z-10 block text-2xl md:text-4xl font-bold bg-white text-black px-6 py-4 border-2 border-black hover:bg-zinc-200 transition-colors uppercase tracking-tight"
            >
              gupta.sg003@gmail.com
            </a>
            <div className="absolute inset-0 bg-zinc-800 translate-x-2 translate-y-2 -z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          </div>

          <p className="text-zinc-600 text-xs mt-4 mb-8">
            [ EMAIL ME ON THIS ADDRESS ]
          </p>

          <SketchLine />

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { name: 'GITHUB', link: 'https://github.com/sgupta701' },
              { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/saumya-gupta-4385452a4/' },
              { name: 'INSTAGRAM', link: 'https://www.instagram.com/__gupta.saumya_?igsh=MXNiMmh3OHJmdnpxdA==' },
              { name: 'RESUME', link: 'https://drive.google.com/file/d/1YBIfZbE4Ypj2BZ8hCL-89H6ygSZXMN7v/view?usp=sharing' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.link}
                target="_blank"
                rel="noreferrer" 
                className="text-zinc-400 text-sm border-b-2 border-dashed border-zinc-700 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-[0.2em] group"
              >
                {social.name} <span className="inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-5 w-full text-center">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.5em]">
          .....
        </p>
      </div>

    </div>
  );
};

export default Contact;
