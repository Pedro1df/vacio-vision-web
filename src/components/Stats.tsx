import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    production: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      years: 35,
      clients: 500,
      production: 150,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        production: Math.floor(targets.production * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      value: counts.years,
      suffix: "+",
      label: "Años de Experiencia",
      description: "Liderando el mercado mexicano",
    },
    {
      value: counts.clients,
      suffix: "+",
      label: "Clientes Satisfechos",
      description: "Confiando en nuestras soluciones",
    },
    {
      value: counts.production,
      suffix: "%",
      label: "Mayor Producción",
      description: "Incremento promedio con nuestros equipos",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:glow-effect"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">
                {stat.value}
                {stat.suffix}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
