import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section aria-label="Hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* Blue glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />

      {/* Red glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse-glow" style={{ background: 'hsl(0 90% 60% / 0.08)', animationDelay: "0.8s" }} />

      {/* Blue glow bottom */}
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr,380px] gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div>
            {/* Greeting */}
            <p
              className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              aria-label="Yoga Sundaram Rama Swamy"
            >
              <span className="text-gradient">Yoga Sundaram</span>
              <br />
              <span className="text-gradient">Rama Swamy</span>
            </h1>

            {/* Title */}
            <p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              GTM Engineer
            </p>

            {/* Description */}
            <p
              className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              GTM Engineer with 6+ years of experience building revenue systems, automation workflows, and analytics infrastructure across SaaS and enterprise environments. Experienced in designing outbound orchestration, lead enrichment, funnel analytics, and AI-powered workflows using Python, Snowflake, dbt, Salesforce, Clay, and modern GTM tooling.
            </p>

            {/* Stat chips */}
            <div
              className="flex flex-wrap gap-3 mb-10 animate-fade-up opacity-0"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              {[
                { value: "28%", label: "campaign engagement ↑" },
                { value: "31%", label: "free-to-paid conversion ↑" },
                { value: "45%", label: "operational effort ↓" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm"
                >
                  <span className="font-display font-bold text-primary">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div
            className="relative hidden lg:block animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />

              {/* Photo container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 shadow-glow">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Yoga Sundaram Rama Swamy - GTM Engineer"
                  className="w-full h-full object-cover object-top"
                  width={380}
                  height={380}
                  style={{ objectPosition: 'center 50%' }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-usa-red rounded-3xl shadow-glow-red" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-usa-white/40 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
