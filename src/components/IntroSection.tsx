import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <motion.p
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Careflare operates as a parent company managing a{" "}
          <span className="text-gradient">diverse portfolio</span> of businesses across multiple industries.
        </motion.p>

        <motion.p
          className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our focus lies in identifying scalable opportunities, building strong operational foundations, and driving long-term growth through innovation and execution.
        </motion.p>

        {/* Animated growth nodes */}
        <motion.div
          className="mt-20 relative h-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-olive"
              style={{
                width: 12 + i * 8,
                height: 12 + i * 8,
              }}
              initial={{ scale: 0, x: 0 }}
              animate={inView ? {
                scale: 1,
                x: (i - 2) * 60,
              } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15, type: "spring" }}
            />
          ))}
          {/* Connecting line */}
          <motion.div
            className="absolute h-[2px] bg-gradient-olive rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 240 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
