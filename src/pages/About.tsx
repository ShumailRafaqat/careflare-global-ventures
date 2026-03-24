import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Shield, TrendingUp, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Layers, title: "Multi-industry expertise" },
  { icon: Shield, title: "Strong operational backbone" },
  { icon: TrendingUp, title: "Scalable business models" },
  { icon: Globe, title: "Global market perspective" },
];

const sections = [
  {
    label: "Who We Are",
    text: "Careflare is a multi-industry business group focused on building, operating, and scaling companies across global markets.",
  },
  {
    label: "Our Approach",
    text: "Our model is centered around identifying opportunities with strong growth potential and transforming them into structured, scalable businesses.",
  },
];

const AnimatedSection = ({ label, text, index }: { label: string; text: string; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">{label}</p>
      <h3 className="font-display text-2xl md:text-4xl font-semibold leading-relaxed max-w-3xl">{text}</h3>
    </motion.div>
  );
};

const About = () => {
  const featRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: "-80px" });
  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">About</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              A Group Built for <span className="text-gradient">Scale and Innovation</span>
            </h1>
          </motion.div>

          {sections.map((s, i) => (
            <AnimatedSection key={s.label} label={s.label} text={s.text} index={i} />
          ))}

          {/* What Sets Us Apart */}
          <div ref={featRef} className="py-20">
            <motion.p
              className="text-sm font-medium tracking-widest uppercase text-secondary mb-10"
              initial={{ opacity: 0 }}
              animate={featInView ? { opacity: 1 } : {}}
            >
              What Sets Us Apart
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="glass-panel rounded-2xl p-8 flex items-start gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-olive flex items-center justify-center shrink-0">
                    <f.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-medium text-foreground text-lg">{f.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <motion.div
            ref={visionRef}
            className="py-20 md:py-28 border-t border-border/30"
            initial={{ opacity: 0, y: 40 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Vision</p>
            <h3 className="font-display text-2xl md:text-4xl font-semibold leading-relaxed max-w-3xl">
              To become a globally recognized business group known for developing high-impact companies across diverse industries.
            </h3>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
