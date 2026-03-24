import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "Quorixs",
    sector: "Technology & Automation",
    description: "Building scalable digital solutions and infrastructure",
    slug: "quorixs",
  },
  {
    name: "Goalix",
    sector: "Sportswear & E-commerce",
    description: "Delivering high-quality athletic apparel and consumer products",
    slug: "goalix",
  },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 md:py-48 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="text-gradient">Companies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {companies.map((company, i) => (
            <motion.div
              key={company.slug}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-panel rounded-2xl p-8 md:p-10 h-full cursor-pointer transition-all duration-500"
                whileHover={{ scale: 1.02, y: -4 }}
                style={{
                  boxShadow: hoveredIndex === i
                    ? "0 20px 60px hsl(108 12% 39% / 0.12)"
                    : "0 4px 20px hsl(0 0% 0% / 0.03)",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {company.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary mt-1">{company.sector}</p>
                  </div>
                  <motion.div
                    animate={{ x: hoveredIndex === i ? 4 : 0, opacity: hoveredIndex === i ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="text-primary" size={20} />
                  </motion.div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{company.description}</p>

                {/* Bottom glow */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-olive rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === i ? "80%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Connecting line between cards */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-16 bg-gradient-olive rounded-full opacity-30"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
