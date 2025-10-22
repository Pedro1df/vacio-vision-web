import { Gauge, Fan, Filter, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "sistemas",
      icon: Gauge,
      title: "Sistemas de Alto Vacío",
      description: "Diseño, instalación y mantenimiento de sistemas completos de alto vacío para aplicaciones industriales exigentes.",
      video: "https://www.pexels.com/es-es/download/video/4778069/",
      features: [
        "Diseño personalizado según requerimientos",
        "Instalación certificada",
        "Monitoreo y control automatizado",
        "Mantenimiento preventivo y correctivo",
      ],
    },
    {
      id: "bombas",
      icon: Fan,
      title: "Bombas de Vacío",
      description: "Amplia gama de bombas de vacío de las mejores marcas internacionales para todo tipo de aplicaciones industriales.",
      video: "https://www.pexels.com/es-es/download/video/15499454/",
      features: [
        "Bombas rotativas de paletas",
        "Bombas de anillo líquido",
        "Bombas de lóbulos (Roots)",
        "Bombas moleculares y turbomoleculares",
      ],
    },
    {
      id: "filtradoras",
      icon: Filter,
      title: "Filtradoras y Desgasificadoras",
      description: "Equipos especializados para filtración y desgasificación en procesos industriales críticos.",
      video: "https://www.pexels.com/es-es/download/video/10058364/",
      features: [
        "Filtración de aceites y líquidos",
        "Desgasificación de transformadores",
        "Purificación de líquidos industriales",
        "Sistemas de filtración portátiles",
      ],
    },
    {
      id: "renta",
      icon: Package,
      title: "Renta de Equipos de Vacío",
      description: "Servicio de renta flexible de equipos de vacío para proyectos temporales o pruebas de concepto.",
      video: "https://www.pexels.com/es-es/download/video/12891228/",
      features: [
        "Equipos de última generación",
        "Contratos flexibles",
        "Mantenimiento incluido",
        "Soporte técnico 24/7",
      ],
    },
  ];

  return (
    <section className="py-24">
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          className={`parallax-section min-h-screen flex items-center ${
            index % 2 === 0 ? "bg-background" : "bg-card"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src={service.video} type="video/mp4" />
            </video>
            <div className="video-overlay" />
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-3xl md:text-4xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                <div className="text-center lg:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                    {service.title.split(" ")[0]}
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    Soluciones profesionales respaldadas por décadas de experiencia y las mejores marcas del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
