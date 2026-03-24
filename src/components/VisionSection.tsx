import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-48 md:py-64 overflow-hidden">
      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-olive"
            style={{
              width: 4 + Math.random() * 60,
              height: 4 + Math.random() * 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: y2 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/20 rounded-full"
            style={{
              width: 100 + Math.random() * 200,
              height: 100 + Math.random() * 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <motion.div className="relative z-10 mx-auto max-w-4xl px-6 text-center" style={{ opacity }}>
        <motion.p
          className="text-sm font-medium tracking-widest uppercase text-secondary mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Vision
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We aim to build a <span className="text-gradient">globally recognized ecosystem</span> of companies that solve real-world problems and create long-term value across industries.
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default VisionSection;
