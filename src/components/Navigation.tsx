"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuLinks = [
  { text: "Home", href: "/", img: "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "Services", href: "/services", img: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "Certifications", href: "/certifications", img: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { text: "Contact", href: "/contact", img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredImg, setHoveredImg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border h-20' : 'bg-transparent h-28'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="relative z-[60] flex items-center font-heading text-xl md:text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
            QUALITY<span className="text-primary font-light ml-1">BUILDING</span>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative z-[110] w-12 h-12 rounded-full border border-border flex flex-col items-center justify-center gap-[5px] overflow-hidden bg-background hover:bg-surface-hover transition-colors"
          >
            <span className={`w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-2xl flex flex-col overflow-y-auto"
          >
            {/* Background Image Reveal on Hover */}
            <div className="absolute inset-0 z-0 opacity-[0.15] transition-opacity duration-700 pointer-events-none grayscale mix-blend-multiply">
              <AnimatePresence mode="wait">
                {hoveredImg && (
                  <motion.img 
                    key={hoveredImg}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    src={hoveredImg} 
                    alt="Menu Background" 
                    className="w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-28 pb-12 w-full min-h-max px-6">
              
              <nav className="flex flex-col items-center gap-6 md:gap-8 w-full">
                {menuLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden" onMouseEnter={() => setHoveredImg(link.img)} onMouseLeave={() => setHoveredImg("")}>
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-5xl md:text-8xl font-heading font-bold tracking-tight text-foreground hover:text-primary transition-colors btn-animate-chars uppercase"
                      >
                        {link.text.split('').map((char, index) => (
                          <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
                        ))}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-8 w-full max-w-2xl border-t border-border flex flex-col md:flex-row justify-between items-center text-foreground font-mono text-xs md:text-sm gap-4 text-center font-bold"
              >
                <span>1064 Toll Rd., Effort, PA.</span>
                <span>(800) 404-3995</span>
              </motion.div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
