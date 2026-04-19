"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    author: "Jim & Sue Cassullo",
    text: "Thank you for making our house into a dream home. We are amazed at how well you handled last-minute changes and offered us a complete package where we did not have to coordinate any of the project. You made us happy by staying within the budget and not throwing us surprises.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?q=80&w=2000"
  },
  {
    author: "Sydney Jewell",
    text: "The expertise that you and your team demonstrated was impressive, exceptionally important & you really worked hard to meet all my concerns and wishes on this new build. You took your time to explain things during the processes and didn't cut corners.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000"
  },
  {
    author: "Edwin J. Hayes Jr.",
    text: "Many thanks for such an excellent job. We were impressed with the care taken of the shrubbery when you removed the shingles and also the attention to collecting stray nails and staples. We couldn't have asked for more thoughtful workmen.",
    img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-background rounded-3xl border border-border shadow-md">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          src={testimonials[currentIndex].img}
          className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex gap-2 mb-8 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.3] mb-12">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary tracking-wide uppercase font-mono text-sm">— {testimonials[currentIndex].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex shrink-0 gap-4 mt-8 md:mt-0">
          <button onClick={prev} className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-primary transition-colors backdrop-blur-md">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={next} className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-hover hover:text-primary transition-colors backdrop-blur-md">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
