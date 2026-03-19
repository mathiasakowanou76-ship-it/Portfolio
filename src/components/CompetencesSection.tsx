import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  level: number;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Graphisme",
    skills: [
      { name: "Adobe Photoshop", level: 85 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Canva", level: 85},
    ],
  },
  {
    title: "Développement Web",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "PHP", level: 75 },
      { name: "React", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "Laravel", level: 75 },
      { name: "Java", level: 75 },
      { name: "Flutter", level: 75 },
    ],
  },
  {
    title: "CMS & Outils",
    skills: [
      { name: "WordPress", level: 90 },
      { name: "WooCommerce", level: 90 },


    ],
  },
];

const SkillBar = ({ name, level }: Skill) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const CompetencesSection = () => (
  <section id="competences" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.15}>
            <div className="glass-card p-6 rounded-xl h-full">
              <h3 className="font-display text-xl font-semibold mb-6 text-primary">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CompetencesSection;
