import React, { useState, useEffect } from 'react';

const SketchLine = () => (
  <div className="w-full h-px border-b-2 border-dashed border-zinc-700/50 my-8"></div>
);

// --- CONFIGURATION ---
// 1. Create a free Redis DB at upstash.com
// 2. Paste your credentials here:
const UPSTASH_REDIS_REST_URL = "YOUR_UPSTASH_REDIS_REST_URL";
const UPSTASH_REDIS_REST_TOKEN = "YOUR_UPSTASH_REDIS_REST_TOKEN";
const REDIS_KEY = "portfolio_likes";
// ---------------------

const Contact = () => {
  const [likes, setLikes] = useState(null);
  const [hasLiked, setHasLiked] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(false);

  // Fetch likes count and check local storage on mount
  useEffect(() => {
    const checkLikeStatus = () => {
      const alreadyLiked = localStorage.getItem('has_liked_portfolio') === 'true';
      setHasLiked(alreadyLiked);
    };

    const fetchCurrentLikes = async () => {
      if (!UPSTASH_REDIS_REST_URL || UPSTASH_REDIS_REST_URL.startsWith("YOUR_")) {
        setLikes(0);
        return;
      }
      try {
        const response = await fetch(`${UPSTASH_REDIS_REST_URL}/get/${REDIS_KEY}`, {
          headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}` }
        });
        const data = await response.json();
        setLikes(data.result ? parseInt(data.result, 10) : 0);
      } catch (err) {
        console.error("Error fetching counter:", err);
        setLikes(0);
      }
    };

    checkLikeStatus();
    fetchCurrentLikes();
  }, []);

  // Handle click trigger
  const handleLikeClick = async () => {
    if (hasLiked || isIncrementing) return;

    // Optimistically lock UI to prevent spam clicks
    setHasLiked(true);
    setIsIncrementing(true);
    localStorage.setItem('has_liked_portfolio', 'true');

    // Optimistic UI update
    setLikes(prev => (prev !== null ? prev + 1 : 1));

    try {
      const response = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/${REDIS_KEY}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}` }
      });
      const data = await response.json();
      if (data.result) {
        setLikes(parseInt(data.result, 10));
      }
    } catch (err) {
      console.error("Error updating counter:", err);
    } finally {
      setIsIncrementing(false);
    }
  };

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
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.3s ease-out forwards;
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

      <div className="relative z-10 w-full max-w-4xl px-6 py-12">
        
        <div className="relative bg-black border-2 border-dashed border-white/80 p-8 md:p-16 text-center shadow-[20px_20px_0px_0px_rgba(30,30,30,1)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-zinc-800/80 backdrop-blur-sm rotate-2 shadow-sm border border-zinc-700"></div>

          

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

          {/* ANONYMOUS LIKE COUNTER */}
          <div className="my-10 flex justify-center">
            <button
              onClick={handleLikeClick}
              disabled={hasLiked}
              className={`group/btn flex items-center justify-center gap-4 border-2 border-dashed px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 select-none
                ${hasLiked 
                  ? 'border-zinc-800 text-zinc-500 bg-zinc-950/40 cursor-default' 
                  : 'border-white text-white hover:bg-white hover:text-black cursor-pointer'
                }`}
            >
              {/* Text / Status */}
              <span className={isIncrementing ? 'animate-pop' : ''}>
                {hasLiked ? 'SYSTEM APPRECIATED⚡' : 'Like this space? Drop your like👍 -> '}
              </span>

              {/* Counter Divider */}
              <span className={`h-4 w-px border-r border-dashed ${hasLiked ? 'border-zinc-800' : 'border-zinc-700 group-hover/btn:border-black'}`}></span>

              {/* Running Counter */}
              <span className="font-black tracking-normal min-w-[1.5rem]">
                {likes === null ? '...' : likes}
              </span>
            </button>
          </div>

          <SketchLine />

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { name: 'GITHUB', link: 'https://github.com/sgupta701' },
              { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/saumya-gupta-4385452a4/' },
              { name: 'INSTAGRAM', link: 'https://www.instagram.com/__gupta.saumya_?igsh=MXNiMmh3OHJmdnpxdA==' },
              { name: 'RESUME', link: 'https://drive.google.com/file/d/1M2K1imOWHLQaUb5mbmWh21jENh5wBtL2/view?usp=sharing' }
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