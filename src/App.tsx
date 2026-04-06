import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Compass, Sparkles, Moon, ArrowDown } from 'lucide-react';

function Atmosphere() {
  return <div className="atmosphere" />;
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
    >
      <div className="font-serif text-2xl tracking-widest uppercase">Aether</div>
      <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase opacity-70">
        <a href="#discover" className="hover:opacity-100 transition-opacity">Discover</a>
        <a href="#journey" className="hover:opacity-100 transition-opacity">Journey</a>
        <a href="#beyond" className="hover:opacity-100 transition-opacity">Beyond</a>
      </div>
      <button className="glass-panel px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
        Begin
      </button>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="text-center z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-serif text-[15vw] md:text-[12vw] leading-none font-light tracking-tighter text-glow">
            Deep <span className="italic text-white/70">Space</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-base md:text-xl font-light tracking-widest uppercase opacity-60 max-w-xl text-center"
        >
          An immersive journey through the cosmos
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeatureSection({ title, subtitle, description, icon: Icon, align = 'left', imageSrc }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section ref={ref} className="min-h-screen flex items-center py-24 px-8 md:px-24">
      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${align === 'right' ? 'md:grid-flow-col-dense' : ''}`}>
        
        <motion.div 
          style={{ opacity, y }}
          className={`flex flex-col gap-8 ${align === 'right' ? 'md:col-start-2' : ''}`}
        >
          <div className="glass-panel w-16 h-16 rounded-full flex items-center justify-center">
            <Icon size={24} className="opacity-80" />
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] opacity-50 mb-4">{subtitle}</h3>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight">
              {title}
            </h2>
          </div>
          
          <p className="text-lg opacity-60 leading-relaxed font-light max-w-md">
            {description}
          </p>
          
          <button className="self-start group flex items-center gap-4 mt-4 cursor-pointer">
            <span className="text-sm uppercase tracking-widest group-hover:opacity-100 opacity-70 transition-opacity">Explore</span>
            <div className="w-12 h-[1px] bg-white/30 group-hover:w-24 group-hover:bg-white transition-all duration-500" />
          </button>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className={`relative aspect-[3/4] md:aspect-square rounded-[2rem] overflow-hidden ${align === 'right' ? 'md:col-start-1' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <img 
            src={imageSrc} 
            alt="Feature"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

      </div>
    </section>
  );
}

function Starfield() {
  return (
    <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [null, Math.random() * 0.8 + 0.2, null],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white/20">
      <Atmosphere />
      <Starfield />
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="discover">
          <FeatureSection 
            title={<>The <span className="italic">Unknown</span></>}
            subtitle="Chapter 01"
            description="Venture beyond the familiar. Discover celestial bodies that defy imagination, where time and space bend to the will of gravity."
            icon={Compass}
            imageSrc="https://picsum.photos/seed/nebula/800/1000?blur=2"
            align="left"
          />
        </div>

        <div id="journey">
          <FeatureSection 
            title={<>Stellar <span className="italic">Nursery</span></>}
            subtitle="Chapter 02"
            description="Witness the birth of stars. In the vast clouds of dust and gas, new worlds are forged in the crucible of cosmic creation."
            icon={Sparkles}
            imageSrc="https://picsum.photos/seed/galaxy/800/1000?blur=1"
            align="right"
          />
        </div>

        <div id="beyond">
          <FeatureSection 
            title={<>Silent <span className="italic">Void</span></>}
            subtitle="Chapter 03"
            description="Embrace the profound silence of the deep void. A place of reflection, where the only sound is the beating of your own heart."
            icon={Moon}
            imageSrc="https://picsum.photos/seed/space/800/1000?blur=2"
            align="left"
          />
        </div>
      </main>

      <footer className="py-12 text-center opacity-40 text-sm tracking-widest uppercase">
        <p>&copy; 2026 Aether Exploration. All rights reserved.</p>
      </footer>
    </div>
  );
}
