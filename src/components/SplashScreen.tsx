import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),   // Logo appear
      setTimeout(() => setPhase(2), 1400),  // Glow + first particles
      setTimeout(() => setPhase(3), 2200),  // First tagline
      setTimeout(() => setPhase(4), 3100),  // Second tagline
      setTimeout(() => setPhase(5), 4000),  // Third tagline
      setTimeout(() => onComplete(), 5200),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, [onComplete]);

  const words = [
    "Building Companies.",
    "Scaling Ideas.",
    "Creating Global Impact.",
  ];

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, hsl(108 14% 18%), hsl(108 14% 25%))",
          }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Elegant Particle Field */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3.5 + 1.5,
                  height: Math.random() * 3.5 + 1.5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `hsl(108 12% ${55 + Math.random() * 25}% / ${0.25 + Math.random() * 0.45})`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase >= 2 ? [0.3, 0.8, 0.2] : 0,
                  scale: phase >= 2 ? [0.6, 1.1, 0.8] : 0,
                  y: phase >= 2 ? [0, -45, -10] : 0,
                  x: phase >= 2 ? [0, Math.random() * 12 - 6] : 0,
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Logo Container */}
          <motion.div className="relative mb-16">
            {/* Soft outer glow */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(108 12% 55% / 0.35) 0%, transparent 65%)",
              }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: phase >= 1 ? 2.4 : 0.6,
                opacity: phase >= 1 ? 0.7 : 0,
              }}
              transition={{ duration: 2.2, ease: "easeOut" }}
            />

            <motion.svg
              width="132"
              height="132"
              viewBox="0 0 132 132"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main circle outline */}
              <motion.circle
                cx="66"
                cy="66"
                r="48"
                fill="none"
                stroke="hsl(108 12% 62%)"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: phase >= 1 ? 1 : 0,
                  opacity: phase >= 1 ? 1 : 0,
                }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Inner glowing circle */}
              <motion.circle
                cx="66"
                cy="66"
                r="48"
                fill="none"
                stroke="hsl(108 12% 78%)"
                strokeWidth="1"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: phase >= 1 ? 1 : 0,
                }}
                transition={{ duration: 2.1, ease: "easeInOut", delay: 0.4 }}
              />

              {/* Logo "C" with shine */}
              <motion.text
                x="66"
                y="73"
                textAnchor="middle"
                fill="hsl(36 24% 94%)"
                fontSize="38"
                fontFamily="Playfair Display, serif"
                fontWeight="700"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: phase >= 1 ? 1 : 0,
                  scale: phase >= 1 ? 1 : 0.6,
                }}
                transition={{ duration: 1.1, delay: 0.6, ease: "backOut" }}
              >
                C
              </motion.text>

              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </motion.svg>

            {/* Subtle pulsing ring */}
            {phase >= 1 && (
              <motion.div
                className="absolute inset-0 rounded-full border border-white/20"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Taglines */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
            {words.map((word, i) => (
              <motion.p
                key={word}
                className="font-display text-2xl md:text-3xl tracking-[-0.02em] font-light"
                style={{ color: "hsl(36 24% 92%)" }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{
                  opacity: phase >= i + 3 ? 1 : 0,
                  y: phase >= i + 3 ? 0 : 40,
                  scale: phase >= i + 3 ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                  delay: i * 0.15,
                }}
              >
                {word}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
