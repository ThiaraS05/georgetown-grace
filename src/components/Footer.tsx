const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <span className="font-serif text-xl">Georgetown</span>
              <br />
              <span className="text-xs tracking-[0.25em] uppercase text-primary-foreground/60">
                Endodontics
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Specialized root canal therapy in a calm, caring environment in Georgetown, Ontario.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Meet the Doctors", href: "#doctors" },
                { label: "Root Canal Therapy", href: "#services" },
                { label: "What to Expect", href: "#expect" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>92 Guelph St</p>
              <p>Georgetown, ON L7G 3Z9</p>
              <a
                href="tel:2898916333"
                className="block hover:text-primary-foreground transition-colors"
              >
                (289) 891-6333
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Georgetown Endodontics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
