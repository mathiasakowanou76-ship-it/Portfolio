import AnimatedSection from "./AnimatedSection";
import { Palette, Globe, Smartphone, TrendingUp, Code2, Figma, Server, Database } from "lucide-react";

const services = [
  { icon: Palette, title: "Identité Visuelle", desc: "Création de logos, chartes graphiques et supports de communication cohérents et impactants." },
  { icon: Globe, title: "Développement Web", desc: "Sites vitrines, e-commerce et applications web sur mesure, responsive et performants." },
  { icon: Smartphone, title: "Applications Mobiles", desc: "Conception et développement d'applications mobiles intuitives et ergonomiques." },
  { icon: TrendingUp, title: "Tunnels de Vente", desc: "Pages de vente optimisées pour la conversion avec des parcours clients efficaces." },
  { icon: Database, title: "Conception de base de donnée", desc: "Conception de bases de données optimisées, structurées et adaptées aux besoins de votre application." },
  { icon: Server, title: "Hébergement de site", desc: "Hébergement sécurisé et performant pour garantir la disponibilité continue de vos sites web." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle mt-4">Des solutions complètes pour vos projets digitaux</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="glass-card p-8 rounded-xl hover-lift group h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
