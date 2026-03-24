import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Settings, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offerings = [
  { icon: Handshake, title: "Strategic Partnership", description: "Collaborate on ventures with shared vision and complementary strengths." },
  { icon: Settings, title: "Operational Support", description: "Leverage our infrastructure, expertise, and resources to scale faster." },
  { icon: Globe, title: "Market Expansion", description: "Access new markets through our global network and operational presence." },
];

const Partnerships = () => {
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
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Partnerships</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Partner With <span className="text-gradient">Careflare</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We collaborate with entrepreneurs, investors, and businesses to build and scale impactful ventures.
            </p>
          </motion.div>

          <div ref={ref} className="mt-20 grid md:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-panel rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-olive flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-gradient-olive text-primary-foreground font-semibold text-lg tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.03] glow-primary"
            >
              Let's Build Something Together
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Partnerships;
