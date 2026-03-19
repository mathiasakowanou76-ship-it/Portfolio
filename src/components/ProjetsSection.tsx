import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Imports
import b1 from "@/assets/project-branding-1.jpg";
import b2 from "@/assets/project-branding-2.jpg";
import b3 from "@/assets/project-branding-3.png";
import b4 from "@/assets/project-branding-4.jpg";
import b5 from "@/assets/project-branding-5.jpg";
import b6 from "@/assets/project-branding-6.jpg";
import b7 from "@/assets/project-branding-7.jpg";
import b8 from "@/assets/project-branding-8.jpg";
import w1 from "@/assets/project-web-1.png";
import w2 from "@/assets/project-web-2.png";
import w3 from "@/assets/project-web-3.png";
import w4 from "@/assets/project-web-4.png";
import w5 from "@/assets/project-web-5.png";
import w6 from "@/assets/project-web-6.png";
import w7 from "@/assets/project-web-7.png";
import w8 from "@/assets/project-web-8.png";
import w9 from "@/assets/project-web-9.png";
import w10 from "@/assets/project-web-10.png";
import a1 from "@/assets/project-app-1.jpg";
import a2 from "@/assets/project-app-2.jpg";
import a3 from "@/assets/project-app-3.jpg";
import a4 from "@/assets/project-app-4.jpg";
import a5 from "@/assets/project-app-5.jpg";
import a6 from "@/assets/project-app-6.jpg";
import a7 from "@/assets/project-app-7.jpg";
import a8 from "@/assets/project-app-8.jpg";
import a9 from "@/assets/project-app-9.jpg";
import f1 from "@/assets/project-funnel-1.jpg";
import f2 from "@/assets/project-funnel-2.jpg";
import f3 from "@/assets/project-funnel-3.jpg";
import f4 from "@/assets/project-funnel-4.jpg";
import f5 from "@/assets/project-funnel-5.jpg";
import f6 from "@/assets/project-funnel-6.jpg";

type Category = "tous" | "graphisme" | "web" | "mobile" /*| "funnel"*/;

const filters: { label: string; value: Category }[] = [
  { label: "Tous", value: "tous" },
  { label: "Graphisme", value: "graphisme" },
  { label: "Développement Web", value: "web" },
  { label: "Application Mobile", value: "mobile" },
  // { label: "Tunnel de Vente", value: "funnel" },
];

const projects: { src: string; cat: Category }[] = [
  { src: b1, cat: "graphisme" }, { src: b2, cat: "graphisme" }, { src: b3, cat: "graphisme" },
  { src: b4, cat: "graphisme" }, { src: b5, cat: "graphisme" }, { src: b6, cat: "graphisme" },
  { src: b7, cat: "graphisme" }, { src: b8, cat: "graphisme" },
  { src: w1, cat: "web" }, { src: w2, cat: "web" }, { src: w3, cat: "web" },
  { src: w4, cat: "web" }, { src: w5, cat: "web" }, { src: w6, cat: "web" }, { src: w7, cat: "web" },
  { src: w8, cat: "web" }, { src: w9, cat: "web" }, { src: w10, cat: "web" },
  { src: a1, cat: "mobile" }, { src: a2, cat: "mobile" }, { src: a3, cat: "mobile" },
  { src: a4, cat: "mobile" }, { src: a5, cat: "mobile" }, { src: a6, cat: "mobile" },
  { src: a7, cat: "mobile" }, { src: a8, cat: "mobile" }, { src: a9, cat: "mobile" },
  // { src: f1, cat: "funnel" }, { src: f2, cat: "funnel" }, { src: f3, cat: "funnel" },
  // { src: f4, cat: "funnel" }, { src: f5, cat: "funnel" }, { src: f6, cat: "funnel" },
];

const ProjetsSection = () => {
  const [active, setActive] = useState<Category>("tous");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);

  const filtered = active === "tous" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projets" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">Projets</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === f.value
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => { setLightbox(p.src); setZoom(40); }}
              >
                <img
                  src={p.src}
                  alt="Projet"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div
              className="flex-1 overflow-auto w-full flex items-start justify-center py-4"
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: zoom > 100 ? 'grab' : 'default' }}
            >
               <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.2 }}
                src={lightbox}
                alt="Projet agrandi"
                className="rounded-xl origin-top-left"
                style={{
                  width: `${zoom}%`,
                  maxWidth: 'none',
                  height: 'auto',
                }}
                draggable={false}
              />
            </div>

            {/* Zoom controls */}
            <div
              className="flex items-center gap-3 mt-4 px-5 py-3 rounded-full bg-card/80 backdrop-blur-md border border-border/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoom((z) => Math.max(25, z - 25))}
                className="p-1.5 rounded-full hover:bg-secondary transition-colors text-foreground"
              >
                <ZoomOut size={18} />
              </button>
              <Slider
                value={[zoom]}
                onValueChange={(v) => setZoom(v[0])}
                min={25}
                max={300}
                step={5}
                className="w-32"
              />
              <button
                onClick={() => setZoom((z) => Math.min(300, z + 25))}
                className="p-1.5 rounded-full hover:bg-secondary transition-colors text-foreground"
              >
                <ZoomIn size={18} />
              </button>
              <span className="text-sm font-medium text-muted-foreground w-12 text-center tabular-nums">
                {zoom}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjetsSection;
