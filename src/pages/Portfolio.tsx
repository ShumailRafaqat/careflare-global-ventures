import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const companies = [
  {
    name: "Quorixs",
    sector: "Technology & Automation",
    overview: "Quorixs is a technology-focused company specializing in automation, digital systems, and scalable infrastructure solutions.",
    services: ["Custom software solutions", "Process automation", "Digital infrastructure development"],
    market: "Businesses seeking scalable and efficient technology solutions.",
    website: "https://quorisx.com/",   // ← Add this
  },
  {
    name: "Goalix",
    sector: "Sportswear & E-commerce",
    overview: "Goalix delivers high-quality athletic apparel and consumer products through modern e-commerce channels.",
    services: ["Premium sportswear design", "Direct-to-consumer retail", "Global distribution"],
    market: "Athletes and fitness enthusiasts seeking quality athletic apparel.",
    website: "https://www.goalix/", // ← Add this
  },
];

const Portfolio = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Portfolio</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Our <span className="text-gradient">Companies</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Each company in the Careflare portfolio operates with autonomy while benefiting from shared resources, strategy, and operational support.
            </p>
          </motion.div>

          <div className="mt-20 space-y-8">
            {companies.map((company, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-50px" });
              const isExpanded = expanded === i;

              return (
                <motion.div
                  key={company.name}
                  ref={ref}
                  className="glass-panel rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  whileHover={{ scale: 1.005 }}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-secondary mb-2">{company.sector}</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{company.name}</h2>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="text-primary" size={24} />
                      </motion.div>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{company.overview}</p>
                  </div>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-10 border-t border-border/30 pt-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">What They Do</h3>
                          <ul className="space-y-2">
                            {company.services.map((s) => (
                              <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gradient-olive" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">Market Focus</h3>
                          <p className="text-sm text-muted-foreground">{company.market}</p>
                        </div>
                      </div>

                      {/* Visit Website Button - Only shown when expanded */}
                      {company.website && (
                        <div className="mt-8 flex justify-start">
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // Prevent closing the accordion
                            className="group inline-flex items-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-all active:scale-95"
                          >
                            Visit Website
                            <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
