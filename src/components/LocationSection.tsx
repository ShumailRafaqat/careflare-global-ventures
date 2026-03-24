import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "United States", role: "Client & Market Access", x: 25, y: 40 },
  { name: "Thailand", role: "Expansion & Administration", x: 72, y: 55 },
  { name: "Pakistan", role: "Operational Hub", x: 62, y: 45 },
];

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Global Presence</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Where We <span className="text-gradient">Operate</span>
          </h2>
        </motion.div>

        {/* Globe visualization (2D stylized) */}
        <motion.div
          className="relative mx-auto max-w-3xl aspect-[2/1] rounded-3xl glass-panel overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Grid lines for map feel */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-[1px] bg-primary" style={{ top: `${(i + 1) * 12}%` }} />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-[1px] bg-primary" style={{ left: `${(i + 1) * 8}%` }} />
            ))}
          </div>

          {/* Location markers */}
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className="absolute cursor-pointer z-10"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15, type: "spring" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
            >
              <motion.div
                className="relative"
                animate={active === i ? { scale: 1.3 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-primary/20"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
                <div className="w-4 h-4 rounded-full bg-gradient-olive glow-primary" />
              </motion.div>

              {/* Info panel */}
              {active === i && (
                <motion.div
                  className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 glass-panel rounded-xl p-4 z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">{loc.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{loc.role}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
