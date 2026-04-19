"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroScene from '@/components/HeroScene';
import TestimonialsCarousel from '@/components/Testimonials3D';

const services = [
  { id: 1, title: 'Additions & Add-a-Levels', desc: 'Seamlessly extending your home with architectural precision.', img: "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 2, title: 'Luxury Kitchens', desc: 'State of the art culinary domains built for entertaining.', img: "https://images.pexels.com/photos/2062424/pexels-photo-2062424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 3, title: 'Bespoke Bathrooms', desc: 'Spa-like retreats within the comfort of your sanctuary.', img: "https://images.pexels.com/photos/1910609/pexels-photo-1910609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 4, title: 'Energy Audits', desc: 'Blower doors and infrared cameras to lower your footprint.', img: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 5, title: 'Custom Garages', desc: 'Secure, durable, engineered structures with distinct style.', img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
];

export default function Page() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  const titleY = useTransform(smoothProgress, [0, 0.2], [0, 200]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  const xTransform = useTransform(horizontalProgress, [0, 1], ["0%", "-75%"]);

  return (
    <main className="relative bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroScene variant="home" />
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 flex flex-col items-center text-center px-4 pt-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 px-6 py-2 rounded-full border border-border/50 bg-[#F4F1EA]/80 backdrop-blur-xl shadow-lg relative z-20"
          >
            <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-foreground uppercase text-center block max-w-xs md:max-w-none">Frank E. Malpere Jr. CGR, CAPS, CGB</span>
          </motion.div>
          
          <h1 className="font-heading text-[15vw] md:text-[9vw] leading-[0.8] tracking-tighter font-bold flex flex-col items-center">
            
            <motion.span 
              initial={{ y: 80, opacity: 0, rotate: 2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground relative z-10"
            >
              QUALITY
            </motion.span>
            <motion.span 
              initial={{ y: 80, opacity: 0, rotate: -2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary italic font-light ml-[10vw] relative z-10"
            >
              BUILDING
            </motion.span>

          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
           {/* Frosted pill for 'Scroll to explore' to ensure legibility */}
          <div className="bg-[#F4F1EA]/70 backdrop-blur-md px-4 py-2 rounded-full border border-border/20 shadow-sm">
             <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-foreground">Scroll to explore</span>
          </div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
        </motion.div>
      </section>

      {/* 2. SCROLLYTELLING INTRODUCTION */}
      <section className="relative min-h-[150vh] flex items-start justify-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 overflow-hidden bg-background">
          <div className="max-w-6xl mx-auto flex flex-col items-center px-2">
            <motion.h2 
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-[6vw] font-heading text-center leading-[1.1] tracking-tighter text-foreground font-bold"
            >
              We take the <span className="text-primary italic font-medium">fear</span><br />
              out of remodeling.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-12 text-lg md:text-3xl text-center max-w-4xl text-foreground/80 leading-relaxed font-light"
            >
              For over half a century, we've transformed homes with precision building science, unrivaled certifications, and an obsessive focus on detail.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. PARALLAX HORIZONTAL SCROLL SERVICES */}
      <section ref={horizontalRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-background">
          <motion.div 
            style={{ x: xTransform }}
            className="flex h-full items-center gap-8 md:gap-16 px-[5vw] md:px-[10vw]"
          >
            {/* Intro Slide */}
            <div className="w-[85vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center pr-4 md:pr-12">
              <p className="text-accent font-mono text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 font-bold">Our Capabilities</p>
              <h2 className="text-4xl md:text-[5vw] font-heading font-bold tracking-tighter text-foreground leading-[1]">
                Masterful<br/>
                <span className="italic text-primary font-medium">Craftsmanship.</span>
              </h2>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-foreground font-light max-w-xl leading-relaxed">
                A spectrum of services from foundation to roof. From <b className="font-bold">room additions under $50,000</b> to sweeping exterior overhauls, building science dictates our entire process.
              </p>
            </div>
            
            {/* Image Cards */}
            {services.map((svc) => (
              <div key={svc.id} className="w-[85vw] md:w-[50vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-border">
                <img 
                  src={svc.img} 
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                {/* Dark overlay for strong white text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent opacity-90 transition-opacity duration-1000 group-hover:opacity-80" />
                
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end text-[#F4F1EA]">
                  <div className="overflow-hidden mb-4">
                    <span className="block font-mono text-sm md:text-lg text-primary font-bold tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      0{svc.id} / 05
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter mb-4 text-white leading-[1.1] md:leading-none">{svc.title}</h3>
                  <div className="overflow-hidden">
                    <p className="text-base md:text-xl font-medium max-w-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out text-[#F4F1EA]/90 leading-relaxed md:leading-normal">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3.1 SIX SECRETS BOOKLET SECTION */}
      <section className="relative py-40 px-6 md:px-12 bg-background overflow-hidden border-t border-border">
        <div className="absolute inset-0 z-0">
           <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-full object-cover opacity-[0.03] grayscale" />
           <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-6">Free Download</p>
            <h2 className="text-4xl md:text-[4vw] font-heading font-bold text-foreground mb-8 leading-tight">
              Six Secrets to <span className="italic text-accent font-light">Successful Remodeling.</span>
            </h2>
            <p className="text-xl text-foreground font-light leading-relaxed mb-6">
              This is the booklet FLY-By-Night Contractors hope you never read. Discover how simple it is to avoid becoming a horror story on the nightly news. Avoid common misconceptions and scams before you sign a contract.
            </p>
            <p className="text-lg text-foreground/80 font-bold leading-relaxed mb-10">
              To order your booklet, simply ask. No salesperson will call, you don't even have to hire us to build your project.
            </p>
            <a href="/contact" className="px-10 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-wider hover:bg-primary transition-colors inline-block hover:scale-105 duration-300">
              Get Your Free Copy
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 aspect-[3/4] bg-surface rounded-2xl border border-border flex flex-col items-center justify-center p-12 text-center relative overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-50" />
            <span className="text-5xl mb-6">📖</span>
            <h3 className="font-heading text-2xl font-bold text-foreground leading-tight">The Six Secrets Guide</h3>
            <p className="font-mono mt-4 text-accent font-bold text-sm">Authored by Frank E. Malpere Jr</p>
          </motion.div>
        </div>
      </section>

      {/* 4. AWARDS & CAROUSEL SECTION */}
      <section className="relative py-48 px-6 md:px-12 bg-background overflow-hidden border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <p className="text-accent font-mono font-bold text-sm tracking-widest uppercase mb-4">Legacy</p>
              <h2 className="text-5xl md:text-[6vw] font-heading font-bold tracking-tighter text-foreground leading-none">
                Distinguished <br/><span className="text-primary italic font-light">Recognition.</span>
              </h2>
            </div>
            <div className="flex flex-col font-mono text-xs uppercase tracking-widest text-foreground font-bold gap-4 max-w-sm md:text-right">
              <p>Pocono Builders Association Remodeler of the Year</p>
              <p>NJ Builders Association Hall of Fame</p>
              <p>National Kids Construction Club Volunteer Award</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestimonialsCarousel />
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-24 md:py-48 px-6 bg-foreground overflow-hidden flex flex-col items-center">
        <h2 className="text-[12vw] font-heading font-bold text-background mb-12 tracking-tighter leading-none text-center">QUALITY<br/><span className="font-thin">BUILDING</span></h2>
        <div className="flex flex-col md:flex-row gap-12 text-center text-background/80 font-mono text-sm font-bold uppercase tracking-widest">
          <p>1064 Toll Rd., Effort, PA.</p>
          <a href="tel:8004043995" className="hover:text-primary transition-colors">(800) 404-3995</a>
          <a href="mailto:fmalpere@qualitydesignbuild.com" className="border-b border-background/50 hover:text-primary transition-all">fmalpere@qualitydesignbuild.com</a>
        </div>
        <p className="mt-16 text-background/50 font-mono text-xs text-center border-t border-background/20 pt-8 w-full max-w-2xl">
          HIC# NJ 13VH04620700 | HIC# PA055885<br/>
          Copyright © {new Date().getFullYear()} Quality Building & Remodeling
        </p>
      </footer>
    </main>
  );
}
