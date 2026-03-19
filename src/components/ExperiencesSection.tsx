import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2026 – Présent",
    title: "Freelance Graphiste & Dev Web",
    company: "Indépendant",
    missions: "Création d'identités visuelles, développement de sites web et applications, conseil en stratégie digitale.",
  },
  {
    period: "2024 – 2025",
    title: "Développeur web Full Stack",
    company: "KONNECT Technologies",
    missions: "Développement d’applications web complètes, de la conception de l’interface utilisateur à la gestion des bases de données et des serveurs.",
  },
  {
    period: "Février 2023 – Août 2023",
    title: "Stage Professionnel en Programmation Web, Développement d’Application et Maintenance Informatique",
    company: "KONNECT Technologies",
    missions: "Participation au développement d’applications web, à la conception de solutions logicielles et à la maintenance des systèmes informatiques afin d’assurer leur bon fonctionnement et leur performance.",
  },
];

const ExperiencesSection = () => (
  <section id="experiences" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Expériences</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card p-6 md:p-8 rounded-xl hover-lift">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h3 className="font-display text-xl font-semibold mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{exp.missions}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencesSection;
