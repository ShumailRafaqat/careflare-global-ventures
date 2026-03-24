import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "United States", role: "Client & Market Access", x: 25, y: 48 },
  { name: "Thailand", role: "Expansion & Administration", x: 30, y: 80 },
  { name: "Pakistan", role: "Operational Hub", x: 40, y: 70 },
];

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<number | null>(null);

  // Auto hover one by one after 3 seconds
  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        setActive(currentIndex);
        currentIndex = (currentIndex + 1) % locations.length;
      }, 1800);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [inView]);

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

        {/* Globe/Map Container */}
        <motion.div
          className="relative mx-auto max-w-[520px] aspect-[1.8/1] rounded-3xl glass-panel overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-[1px] bg-primary" style={{ top: `${(i + 1) * 12}%` }} />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-[1px] bg-primary" style={{ left: `${(i + 1) * 8}%` }} />
            ))}
          </div>

          {/* Connection Lines with Animated Data Flow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" style={{ opacity: 0.6 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#86efac" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {locations.map((loc1, i) =>
              locations.slice(i + 1).map((loc2, j) => {
                const x1 = loc1.x + 1.5; // slight offset for better look
                const y1 = loc1.y + 1.5;
                const x2 = loc2.x + 1.5;
                const y2 = loc2.y + 1.5;

                return (
                  <g key={`${i}-${j}`}>
                    {/* Static base line */}
                    <line
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      strokeOpacity="0.35"
                      filter="url(#glow)"
                    />

                    {/* Animated flowing particles */}
                    <motion.circle
                      r="2"
                      fill="#bef575"
                      filter="url(#glow)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: (i + j) * 0.4,
                      }}
                    >
                      <animateMotion
                        dur="2.8s"
                        repeatCount="indefinite"
                        path={`M ${x1}% ${y1}% Q ${(x1 + x2) / 2}% ${(y1 + y2) / 2 - 12}% ${x2}% ${y2}%`}
                      />
                    </motion.circle>

                    {/* Second particle with different timing */}
                    <motion.circle
                      r="1.5"
                      fill="#86efac"
                      filter="url(#glow)"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: (i + j) * 0.4 + 1.1,
                      }}
                    >
                      <animateMotion
                        dur="2.8s"
                        repeatCount="indefinite"
                        path={`M ${x1}% ${y1}% Q ${(x1 + x2) / 2}% ${(y1 + y2) / 2 - 12}% ${x2}% ${y2}%`}
                      />
                    </motion.circle>
                  </g>
                );
              })
            )}
          </svg>

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
                animate={active === i ? { scale: 1.45 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Pulse ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-primary/20"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                />
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-olive glow-primary" />
              </motion.div>

              {/* Info panel */}
              {active === i && (
                <motion.div
                  className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 glass-panel rounded-xl p-4 z-20 shadow-xl"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={15} className="text-primary" />
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
