import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FooterCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(108 12% 39% / 0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, hsl(108 12% 60% / 0.15) 0%, transparent 60%)",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Looking to collaborate or build something{" "}
          <span className="text-gradient">impactful?</span>
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-olive text-primary-foreground font-semibold text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] glow-primary"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
