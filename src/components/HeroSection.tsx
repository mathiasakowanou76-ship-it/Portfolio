import { motion } from "framer-motion";
import profileImg from "@/assets/Tp.jpg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
    </div>

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]">
          <img src={profileImg} alt="Photo de profil" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4"
      >
        ABESSI Mathias Akowanou
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-xl md:text-2xl text-primary font-display font-medium mb-6"
      >
        Graphiste & Développeur Web
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 italic font-display"
      >
        "Du concept à l’écran : je donne vie à vos projets."
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#projets"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5"
        >
          Me contacter
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
