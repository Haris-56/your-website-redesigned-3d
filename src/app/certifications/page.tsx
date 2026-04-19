"use client";

import { motion } from "framer-motion";
import HeroScene from '@/components/HeroScene';

const certs = [
  { abbr: "CGR", title: "Certified Graduate Remodeler" },
  { abbr: "CAPS", title: "Certified Aging-In-Place Specialist" },
  { abbr: "CGB", title: "Certified Graduate Builder" },
  { abbr: "CGP", title: "Certified Green Professional" },
  { abbr: "HERS", title: "HERS Rater" },
  { abbr: "NAHB", title: "NAHB Green Verifier" },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      {/* Immersive Sub-page Hero */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroScene variant="subpage" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-7xl px-6 text-center"
        >
          <div className="bg-[#F4F1EA]/80 backdrop-blur-xl border border-border/50 py-2 px-6 rounded-full inline-block mb-6 shadow-lg">
             <p className="text-foreground font-mono text-sm tracking-[0.3em] font-bold uppercase">Credentials that matter</p>
          </div>
          <h1 className="text-5xl md:text-[7vw] font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
             Setting the <br/><span className="italic text-primary font-light">standard.</span>
          </h1>
          <div className="mt-8 mx-auto max-w-3xl bg-[#F4F1EA]/80 backdrop-blur-md p-6 rounded-2xl border border-border/30 shadow-xl">
             <p className="text-xl text-foreground font-light leading-relaxed">
               Frank E. Malpere Jr. is the only Certified Graduate Remodeler in the area. We hold the industry's highest standards, focusing heavily on modern building science to ensure longevity and efficiency.
             </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 pb-32 text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl text-left mb-32">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="p-10 rounded-[2rem] border border-border bg-surface hover:bg-white transition-all duration-700 relative flex flex-col justify-between w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] h-[280px] shadow-sm hover:shadow-2xl hover:-translate-y-4 group overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               <span className="text-[120px] font-heading font-black text-foreground mix-blend-overlay opacity-[0.03] absolute -bottom-10 -right-4 pointer-events-none select-none group-hover:scale-110 group-hover:opacity-[0.06] transition-all duration-700">{cert.abbr}</span>
               
               <div className="relative z-10 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-8 shadow-inner group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="font-mono text-xs font-bold text-accent group-hover:text-white transition-colors duration-500">0{index + 1}</span>
               </div>

               <div className="relative z-10">
                 <span className="block text-accent font-mono text-xs font-bold tracking-widest uppercase mb-2 group-hover:text-primary transition-colors duration-500">{cert.abbr}</span>
                 <h3 className="text-2xl font-bold text-foreground leading-[1.2]">{cert.title}</h3>
               </div>
            </motion.div>
          ))}
        </div>

        {/* ENERGY AUDIT / BUILDING SCIENCE SECTION */}
        <div className="w-full rounded-3xl border border-border bg-surface overflow-hidden flex flex-col lg:flex-row shadow-xl">
          <div className="w-full lg:w-1/2 p-12 md:p-16 text-left flex flex-col justify-center">
            <span className="text-accent font-mono font-bold text-xs uppercase tracking-widest mb-6">Building Science</span>
            <h2 className="text-4xl md:text-[3.5vw] font-heading font-bold text-foreground leading-[1] mb-8 break-words">Home Energy Audits.</h2>
            <p className="text-lg text-foreground font-light mb-6">
              What is an Energy Audit? It is not a guy trying to sell you windows. Using blower doors, duct blowers, and infrared cameras, we locate leaks scientifically.
            </p>
            <p className="text-lg text-foreground font-light mb-8">
              Leakage can account for up to <strong>30% of a home's energy loss</strong>. By identifying bypasses and sealing leaks, we stop mold, prevent ice dams, and lower your carbon footprint safely. 
            </p>
            <div className="bg-background border-l-[3px] border-primary p-6 rounded-r-lg shadow-inner">
              <p className="italic text-foreground/80 font-medium">"By doing an energy audit... we saved about $700 on a heating bill."</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
             {/* Fixed broken image replacing unsplash with Pexels */}
            <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Energy Audit Science" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent opacity-90 lg:opacity-100" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>

      </div>
    </main>
  );
}
