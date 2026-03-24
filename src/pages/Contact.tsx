import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Mail size={16} className="text-primary" />
            <a href="mailto:careers@careflare.life" className="text-sm hover:text-primary transition-colors">
              careers@careflare.life
            </a>
          </motion.div>

          {submitted ? (
            <motion.div
              className="mt-16 glass-panel rounded-2xl p-12 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank you!</h3>
              <p className="text-muted-foreground">We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              className="mt-12 space-y-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { key: "name", label: "Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "company", label: "Company", type: "text" },
              ].map((field) => (
                <motion.div key={field.key} whileFocus={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    required={field.key !== "company"}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200"
                    placeholder={`Your ${field.label.toLowerCase()}`}
                  />
                </motion.div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 resize-none"
                  placeholder="Your message"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-olive text-primary-foreground font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 glow-primary"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
