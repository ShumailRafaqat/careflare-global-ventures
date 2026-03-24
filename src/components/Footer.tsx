import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-lg font-semibold text-primary mb-4">Careflare</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building companies. Scaling ideas. Creating global impact.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/capabilities", label: "Capabilities" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/partnerships", label: "Partnerships" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Giant brand text - ab thoda neeche hai */}
      <div className="overflow-hidden mt-16 md:mt-20 lg:mt-24">
        <p
          className="text-[8vw] font-semibold tracking-tighter leading-none"
          style={{
            WebkitTextStroke: "1px hsl(var(--border))",
            WebkitTextFillColor: "transparent",
          }}
        >
          CAREFLARE
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Careflare. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">careers@careflare.life</p>
      </div>
    </div>
  </footer>
);

export default Footer;
