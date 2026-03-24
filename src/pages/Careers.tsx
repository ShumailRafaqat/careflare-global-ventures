import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, TrendingUp, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  { icon: Globe, title: "Work on diverse global projects" },
  { icon: TrendingUp, title: "Growth-driven environment" },
  { icon: Building, title: "Opportunity to build impactful businesses" },
];

const Careers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Join <span className="text-gradient">Careflare</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We are always looking for talented individuals to join our growing ecosystem of companies.
            </p>
          </motion.div>

          <div ref={ref} className="mt-20">
            <h2 className="font-display text-2xl font-bold mb-8">Why Join Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-olive flex items-center justify-center">
                    <r.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-medium text-foreground">{r.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="mailto:careers@careflare.life"
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-olive text-primary-foreground font-semibold text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] glow-primary"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
