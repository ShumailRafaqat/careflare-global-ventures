import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, Server, Globe, TrendingUp } from "lucide-react";

const capabilities = [
  { icon: Rocket, label: "Venture Development", description: "Identifying and launching high-potential business ventures from concept to market." },
  { icon: Server, label: "Technology Infrastructure", description: "Building robust digital foundations that power scalable operations." },
  { icon: Globe, label: "Global Operations", description: "Managing cross-border operations with efficiency and strategic alignment." },
  { icon: TrendingUp, label: "Strategic Growth", description: "Driving sustainable growth through data-driven strategies and market insight." },
];

const CapabilitiesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What We <span className="text-gradient">Do</span>
          </h2>
        </motion.div>

        {/* Orbital layout */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Central core */}
          <motion.div
            className="absolute w-24 h-24 rounded-full bg-gradient-olive flex items-center justify-center z-10 glow-primary"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          >
            <span className="font-display text-primary-foreground font-bold text-lg">CF</span>
          </motion.div>

          {/* Orbit ring */}
          <motion.div
            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-primary/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Capability nodes */}
          {capabilities.map((cap, i) => {
            const angle = (i * 90 - 45) * (Math.PI / 180);
            const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 160 : 210;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={cap.label}
                className="absolute cursor-pointer"
                style={{ left: `calc(50% + ${x}px - 60px)`, top: `calc(50% + ${y}px - 60px)` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring" }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-[120px] h-[120px] rounded-2xl glass-panel flex flex-col items-center justify-center gap-2 transition-all duration-300 ${active === i ? "glow-accent" : ""}`}>
                  <cap.icon size={24} className="text-primary" />
                  <span className="text-xs font-medium text-center text-foreground px-2 leading-tight">{cap.label}</span>
                </div>

                {/* Expanded description */}
                {active === i && (
                  <motion.div
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 glass-panel rounded-xl p-4 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed text-center">{cap.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPreview;
