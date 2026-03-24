import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NetworkVisualization from "./NetworkVisualization";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkVisualization />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}   // faster
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Building <span className="text-gradient">Companies.</span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Scaling <span className="text-gradient">Ideas.</span>
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Creating <span className="text-gradient">Global Impact.</span>
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}   // faster
        >
          Careflare is a multi-sector business entity focused on building and operating high-growth ventures across technology, digital infrastructure, and consumer brands.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}   // faster
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-olive text-primary-foreground font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] glow-primary"
          >
            Explore Our Portfolio
          </Link>
          <Link
            to="/partnerships"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-primary/30 text-primary font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary/5 hover:border-primary/50 hover:scale-[1.02]"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator - made slightly faster bounce */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
            animate={{ y: [0, 13, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
