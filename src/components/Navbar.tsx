import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="glass-panel flex items-center justify-between rounded-3xl px-8 py-4 shadow-xl border border-white/10">
          {/* Logo */}
          <Link
            to="/"
            className="group font-display text-2xl font-semibold text-primary tracking-tighter flex items-center gap-2"
          >
            Careflare
            <motion.span
              className="text-primary/60 group-hover:text-primary transition-colors"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
              
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-6 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-all rounded-2xl overflow-hidden group"
                >
                  {/* Hover background (Vercel style) */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-2xl"
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-2xl border border-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-3 rounded-2xl text-foreground hover:bg-white/10 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:hidden mx-6 mt-3"
          >
            <div className="glass-panel rounded-3xl p-6 shadow-2xl border border-white/10 flex flex-col gap-1">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-4 rounded-2xl text-base font-medium transition-all ${
                    location.pathname === link.to
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "hover:bg-white/5 text-foreground/80 hover:text-foreground"
                  }`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
