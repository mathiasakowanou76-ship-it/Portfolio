import AnimatedSection from "./AnimatedSection";
import profileImg from "@/assets/Tp1.jpeg";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-display font-bold text-primary">{count}+</span>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </div>
  );
};

const AboutSection = () => (
  <section id="apropos" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">À propos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden glow-border">
              <img src={profileImg} alt="À propos" className="w-full aspect-[3.7/5] object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl blur-xl" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold">
              Passionné par le design et le code
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Graphiste et développeur web freelance, je combine créativité visuelle et expertise technique pour donner vie à des projets digitaux uniques. Ma double compétence me permet d'assurer une cohérence totale entre l'identité visuelle et l'expérience utilisateur.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ma philosophie : chaque projet est une opportunité de créer quelque chose de mémorable. Je travaille en étroite collaboration avec mes clients pour comprendre leur vision et la traduire en solutions visuelles et fonctionnelles qui dépassent leurs attentes.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-9 mt-16 glass-card p-6 md:p-20 rounded-2xl text-center">
          <Counter target={3} label="Années d'expérience" />
          <Counter target={50} label="Projets réalisés" />
          <Counter target={35} label="Clients satisfaits" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
