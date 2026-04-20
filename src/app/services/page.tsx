"use client";

import { motion } from "framer-motion";
import HeroScene from '@/components/HeroScene';

const servicesDetails = [
  { group: "Major Constructs", items: ["New Homes", "Room Additions", "Add-a-Levels Additions", "Dormers"], img: "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { group: "Interior Renovations", items: ["Luxury Kitchens", "Bespoke Bathrooms", "Finished Basements", "Finished Attics", "Interiors"], img: "https://images.pexels.com/photos/2062424/pexels-photo-2062424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { group: "Exterior Upgrades", items: ["Custom Garages", "Decks", "Porches", "Roofing", "Siding", "Windows & Doors", "Garage Doors"], img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { group: "Specialty & Protection", items: ["Energy Audits", "ADA Modifications", "Seamless Gutters", "Leaf Guards", "Insurance Repairs"], img: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Immersive Sub-page Hero mimicking Homepage */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroScene variant="subpage" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-7xl px-4 md:px-6 text-center"
        >
          <div className="bg-[#F4F1EA]/80 backdrop-blur-xl border border-border/50 py-2 px-4 md:px-6 rounded-full inline-block mb-4 md:mb-6 shadow-lg">
             <p className="text-foreground font-mono text-[10px] md:text-sm tracking-[0.3em] font-bold uppercase">Masterful Capabilities</p>
          </div>
          <h1 className="text-5xl md:text-[8vw] font-heading font-bold tracking-tighter text-foreground leading-[1] md:leading-[0.9]">
            The scope of<br/><span className="text-primary italic font-light">expertise.</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col items-start px-4 md:px-6 pb-20 md:pb-32 w-full">
        <div className="flex flex-col w-full gap-16 md:gap-32 w-full">
          {servicesDetails.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-16 lg:gap-24 items-center w-full`}
            >
              {/* Image Reveal */}
              <div className="w-full lg:w-1/2 aspect-[4/5] relative overflow-hidden rounded-[1.5rem] md:rounded-2xl shadow-xl group border border-border flex-shrink-0">
                <img 
                  src={group.img} 
                  alt={group.group} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-background/5 mix-blend-overlay" />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="font-mono text-primary font-bold tracking-widest text-xs md:text-sm mb-4 md:mb-6">0{index + 1} //</div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 md:mb-8 leading-tight">{group.group}</h2>
                <div className="w-full h-[1px] bg-border mb-6 md:mb-8" />
                <ul className="flex flex-col gap-4 md:gap-6">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 leading-snug">
                      <span className="w-4 md:w-8 h-[2px] bg-accent mr-4 flex-shrink-0" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
