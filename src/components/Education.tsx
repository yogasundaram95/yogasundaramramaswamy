import { GraduationCap, Calendar, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { education } from "../data/education";

type EducationItem = (typeof education)[number];

const EducationCard = ({ edu, index }: { edu: EducationItem; index: number }) => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-card border-2 border-border hover:border-primary/40 transition-all duration-500 hover:shadow-glow group relative overflow-hidden">
        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-3xl bg-white p-2 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg overflow-hidden">
              {"logo" in edu && edu.logo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${edu.logo}`}
                  alt={`${edu.school} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              ) : edu.gpa ? (
                <Award className="w-10 h-10 text-primary" />
              ) : (
                <GraduationCap className="w-10 h-10 text-primary" />
              )}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                  {edu.degree}
                </h3>
                <p className="text-xl text-primary font-semibold mb-2">{edu.school}</p>
                <p className="text-base text-muted-foreground">{edu.location}</p>
              </div>

              {edu.gpa && (
                <div className="text-left lg:text-right bg-primary/5 px-6 py-4 rounded-2xl border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">GPA</div>
                  <div className="font-display text-3xl font-bold text-gradient">{edu.gpa}</div>
                </div>
              )}
            </div>

            {/* Period */}
            <div className="flex items-center gap-2 text-base text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">{edu.period}</span>
            </div>

            {/* Scholarship */}
            {"scholarship" in edu && edu.scholarship && (
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-yellow-400 font-medium">{edu.scholarship as string}</span>
              </div>
            )}

            {/* Coursework */}
            {"categories" in edu && edu.categories && (
              <div className="space-y-5 pt-4 border-t border-border/50">
                <p className="text-base font-display font-semibold text-foreground uppercase tracking-wide">
                  Relevant Coursework
                </p>
                {Object.entries(edu.categories).map(([category, courses], catIndex) => (
                  <div key={catIndex} className="space-y-3">
                    <h4 className="text-base font-semibold text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {courses.map((course, cIndex) => (
                        <span
                          key={cIndex}
                          className="px-4 py-2 text-sm bg-secondary/80 text-secondary-foreground rounded-xl border border-border hover:border-usa-blue hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            {"highlights" in edu && edu.highlights && (
              <div className="space-y-4 pt-4 border-t border-border/50">
                <p className="text-base font-display font-semibold text-foreground uppercase tracking-wide">
                  Key Focus Areas
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="px-4 py-3 text-sm bg-secondary/80 text-secondary-foreground rounded-xl border border-border hover:border-usa-blue hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="education" aria-label="Education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* Blue glow accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: 'hsl(0 90% 60% / 0.05)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </div>

        {/* Education cards */}
        <div className="max-w-6xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
