import AnimatedSection from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Romain Galib",
    text: "Je recommande à 200 % ! J'ai décidé de faire confiance à Mathias, et les résultats ont dépassé mes attentes. Je suis vraiment ravi de sa communication et de la façon dont il a parfaitement cerné mon besoin. Tout est impeccable ! Un grand merci !",
    stars: 5,
  },
  {
    name: "Berengereagt",
    text: "Super service, un freelance à l'écoute qui a su s'adapter à notre cahier des charges qui était très précis. Je recommande !",
    stars: 5,
  },
  {
    name: "Belesprit",
    text: "Magnifique ,d'une compétence ,d'une patience et d'une gentillesse incroyable! Je le conseille tous les jours! Bravo!",
    stars: 5,
  },
];

const TemoignagesSection = () => (
  <section id="temoignages" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Témoignages</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="glass-card p-8 rounded-xl hover-lift h-full flex flex-col">
              <Quote size={32} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                    {/* <p className="text-muted-foreground text-xs">{t.role}</p> */}
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

export default TemoignagesSection;
