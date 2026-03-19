import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const formations = [
  { year: "2023", title: "Formation en gestion de base de données", school: "Alphorm (en ligne)" },
  { year: "2022", title: "Formation en PHP", school: "Alphorm (en ligne)" },
  { year: "2022", title: "Licence Professionnelle en Système Informatique et Logiciel", school: "UPAO" },
  { year: "2019", title: "Baccalauréat Série D", school: "CEG Malanhoui" },
];

const FormationsSection = () => (
  <section id="formations" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Diplômes & Formations</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {formations.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)] z-10 mt-6" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <span className="text-primary font-medium text-sm">{f.year}</span>
                  <h3 className="font-display text-lg font-semibold mt-1">{f.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm justify-start md:justify-end">
                    {i % 2 !== 0 && <GraduationCap size={14} />}
                    <span>{f.school}</span>
                    {i % 2 === 0 && <GraduationCap size={14} />}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FormationsSection;
