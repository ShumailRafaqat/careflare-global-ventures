import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Server, Headphones, Globe, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const capabilities = [
  {
    icon: Rocket,
    title: "Venture Development",
    description: "We identify high-potential opportunities and build them into structured, scalable ventures with strong foundations for long-term success.",
  },
  {
    icon: Server,
    title: "Technology Infrastructure",
    description: "Building robust digital systems that power modern business operations — from cloud infrastructure to custom software solutions.",
  },
  {
    icon: Headphones,
    title: "Business Process Outsourcing (BPO)",
    description: "We provide structured BPO services including customer support, back-office operations, and workflow management. Focus on scalable, efficient solutions supporting global business growth.",
  },
  {
    icon: Globe,
    title: "Global Operations",
    description: "Managing cross-border operations with strategic alignment, ensuring efficiency and consistency across diverse markets and regions.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Growth",
    description: "Driving sustainable growth through data-driven strategies, market analysis, and strategic partnerships that create lasting value.",
  },
];

const Capabilities = () => {
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
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Capabilities</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Our <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Careflare provides comprehensive operational support across its portfolio, enabling each venture to focus on growth while leveraging shared expertise and infrastructure.
            </p>
          </motion.div>

          <div className="mt-20 space-y-6">
            {capabilities.map((cap, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-50px" });

              return (
                <motion.div
                  key={cap.title}
                  ref={ref}
                  className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.01, y: -2 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-olive flex items-center justify-center shrink-0">
                    <cap.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Capabilities;
