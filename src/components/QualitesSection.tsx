import AnimatedSection from "./AnimatedSection";
import { Sparkles, Target, Clock, Layers, User, Users, Ear, RefreshCw } from "lucide-react";

const qualites = [
  { icon: Sparkles, label: "Créativité" },
  { icon: Target, label: "Rigueur" },
  { icon: Clock, label: "Ponctualité" },
  { icon: Layers, label: "Polyvalence" },
  { icon: User, label: "Autonomie" },
  { icon: Users, label: "Esprit d'équipe" },
  { icon: Ear, label: "Écoute client" },
  { icon: RefreshCw, label: "Adaptabilité" },
];

const QualitesSection = () => (
  <section id="qualites" className="section-padding bg-secondary/20">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Qualités</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {qualites.map((q, i) => (
          <AnimatedSection key={q.label} delay={i * 0.05}>
            <div className="glass-card p-6 rounded-xl text-center hover-lift group cursor-default">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <q.icon size={24} className="text-primary" />
              </div>
              <p className="font-medium text-foreground">{q.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default QualitesSection;
