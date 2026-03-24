import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
      setTimeout(() => setPhase(5), 4500),
      setTimeout(() => onComplete(), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const words = ["Building Companies.", "Scaling Ideas.", "Creating Global Impact."];

  return (
    <AnimatePresence>
      {phase < 5 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, hsl(108 14% 18%), hsl(108 14% 25%))" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Particle field */}
          <div className="absolute inset-0">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `hsl(108 12% ${50 + Math.random() * 30}% / ${0.2 + Math.random() * 0.4})`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase >= 1 ? [0, 1, 0.5] : 0,
                  scale: phase >= 1 ? 1 : 0,
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div className="relative mb-12">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 0 ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              {/* Glowing line drawing the logo */}
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="hsl(108 12% 60%)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 0 ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="hsl(108 12% 70%)"
                strokeWidth="0.5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phase >= 0 ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.text
                x="60"
                y="65"
                textAnchor="middle"
                fill="hsl(36 24% 92%)"
                fontSize="22"
                fontFamily="Playfair Display, serif"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                C
              </motion.text>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </motion.svg>

            {/* Glow behind logo */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(108 12% 50% / 0.3) 0%, transparent 70%)" }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: phase >= 1 ? 2 : 0, opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* Text sequence */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            {words.map((word, i) => (
              <motion.p
                key={word}
                className="font-display text-xl md:text-2xl tracking-wide"
                style={{ color: "hsl(36 24% 92%)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: phase >= i + 2 ? 1 : 0,
                  y: phase >= i + 2 ? 0 : 20,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
