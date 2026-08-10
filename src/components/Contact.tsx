import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/yogasundaram95", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yogasundaram", label: "LinkedIn" },
];

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Interested in discussing GTM engineering, revenue operations, or analytics infrastructure?
            I'm always open to connecting and exploring new opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="red" size="xl" asChild>
              <a href="mailto:Yoga.Sundaram@outlook.com">
                <Mail className="w-5 h-5" />
                Yoga.Sundaram@outlook.com
              </a>
            </Button>
            <Button variant="glow" size="xl" asChild>
              <a href="https://linkedin.com/in/yogasundaram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          {/* Download Resume */}
          <div className="mb-12">
            <Button variant="outline" size="lg" asChild>
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Yoga_Sundaram_Resume.pdf" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
