import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Navbar />
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
        </motion.div>

        <motion.div
          className="mt-12 prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-panel rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-xl font-bold text-foreground mb-4">Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not share or sell our clients or customers data to any third party.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Careflare is committed to protecting the privacy and security of all personal information we receive. We implement appropriate technical and organizational measures to ensure compliance with data protection standards.
            </p>
            <p className="text-sm text-muted-foreground">
              For questions regarding our privacy practices, please contact us at{" "}
              <a href="mailto:careers@careflare.life" className="text-primary hover:underline">
                careers@careflare.life
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;
