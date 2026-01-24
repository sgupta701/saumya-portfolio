/*src/components/Contact.jsx*/

import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-20" 
           style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
      </div>

      <div className="z-10 text-center">
        <p className="text-neon-green text-xl mb-4 font-bold animate-pulse">
          &lt; SYSTEM STATUS: HIRING /&gt;
        </p>
        <h2 className="text-6xl md:text-9xl font-black mb-10 leading-none">
          LET'S<br />CONNECT
        </h2>
        
        <a href="mailto:saumya@example.com" className="text-2xl md:text-4xl border-b-4 border-neon-green pb-2 hover:bg-neon-green hover:text-black transition-all font-bold">
          saumya.gupta@aktu.ac.in
        </a>

        <div className="mt-20 flex gap-10 justify-center">
          {['GITHUB', 'LINKEDIN', 'INSTAGRAM'].map((social) => (
            <a key={social} href="#" className="text-xl font-bold border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all">
              {social}
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-5 text-gray-500 text-sm">
        © 2026 SAUMYA GUPTA. ALL SYSTEMS OPERATIONAL.
      </div>
    </div>
  );
};

export default Contact;