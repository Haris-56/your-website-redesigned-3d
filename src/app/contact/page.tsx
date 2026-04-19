"use client";

import { motion } from "framer-motion";
import HeroScene from '@/components/HeroScene';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none grayscale opacity-[0.03]">
        <img 
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Home Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/50" />
      </div>
      
      {/* Reusing the 3D scene but keeping it subtle behind content */}
      <div className="absolute top-0 right-0 w-full h-[60vh] opacity-30 z-0 pointer-events-none">
         <HeroScene variant="subpage" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1 py-40 px-6">
        
        {/* Left Column - Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-left"
        >
           <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-6">Eliminate the guesswork.</p>
           <h1 className="text-6xl md:text-[6vw] font-heading font-bold text-foreground mb-12 leading-[1.1]">
             Let's start<br/>
             <span className="italic text-primary font-light">building.</span>
           </h1>
           <p className="text-xl text-foreground/80 font-light mb-12 max-w-lg">
             With half a century of experience, Frank E. Malpere Jr. and team are ready to transform your space cleanly, efficiently, and responsibly.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-mono text-sm uppercase tracking-widest text-foreground font-bold">
             <div className="flex flex-col gap-4 border-l border-border pl-6">
               <span className="text-primary opacity-90">Location</span>
               <span className="text-foreground leading-relaxed">1064 Toll Rd.<br/>Effort, PA. 18330</span>
               <span className="text-accent mt-2">HIC# NJ 13VH04620700<br/>HIC# PA055885</span>
             </div>
             <div className="flex flex-col gap-4 border-l border-border pl-6">
               <span className="text-primary opacity-90">Connect</span>
               <a href="tel:8004043995" className="hover:text-amber-500 transition-colors">(800) 404-3995</a>
               <a href="mailto:fmalpere@qualitydesignbuild.com" className="hover:text-amber-500 transition-colors w-max break-all text-xs">fmalpere@qualitydesignbuild.com</a>
             </div>
           </div>
        </motion.div>

        {/* Right Column - Six Secrets Booklet CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-lg p-12 md:p-16 rounded-[3rem] border border-border bg-surface backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            
            <span className="text-6xl mb-8">📖</span>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Six Secrets to Successful Remodeling</h2>
            <p className="text-foreground/80 font-light mb-8">
              Avoid becoming a horror story on the nightly news. Read the exact strategies to choose the right contractor and plan your project.
            </p>
            <p className="text-accent font-bold font-mono text-xs uppercase tracking-widest mb-10">100% Free • No Salesperson Will Call</p>

            <a href="mailto:fmalpere@qualitydesignbuild.com?subject=Please send Free Six Secrets Booklet" className="w-full py-5 rounded-full bg-foreground text-background font-bold tracking-widest uppercase hover:bg-primary transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300">
              Request Booklet
            </a>
          </div>
        </motion.div>
        
      </div>
    </main>
  );
}
