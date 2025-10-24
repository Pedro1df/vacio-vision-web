import { Gauge, Fan, Filter, Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "bombas",
      icon: Gauge,
      title: "Bombas y sistemas de vacío",
      description: "Soluciones integrales para sistemas de vacío industriales.",
      extraDescription:
        "Sistemas de vacío completos con accesorios como vacuómetros digitales, mangueras metálicas de 3, 4 y 6 pulgadas, válvulas reductoras, empaques compatibles con aceite dieléctrico y tornillería especializada.",
      video: "https://www.pexels.com/es-es/download/video/30288954/",
      features: [
        "Venta de equipos nuevos y reconstruidos.",
        "Reparación, reconstrucción y mantenimiento.",
        "Remanufactura de partes dañadas (pistones, rotores, estatores, válvulas de media luna, etc.).",
        "Sistemas personalizados según aplicación, refacciones y más.",
      ],
    },
    {
      id: "filtradoras",
      icon: Fan,
      title: "Filtradoras y desgasificadoras de aceite",
      description:
        "Eliminación de gases como nitrogeno, oxigeno, monoxido y bioxido de carbono, humedad,etc. sin que el aceite regenerado pierda sus propiedades.",
      extraDescription:
        "En un solo paso usted puede eliminar de 2,800 a 1 particula entre 5-10 micrones. Conoce nuestros casos de éxito.",
      video: "https://www.pexels.com/es-es/download/video/5194439/",
      features: [
        "Venta de equipos nuevos y reconstruidos, reconstrucción, mantenimiento y repación de sistemas de tratamiento de aceite.",
        "Servicio de filtrado y desgasificación en sus instalaciones.",
        "Renta de equipos completos.",
        "Aplicables para aceite de transformador, hidraulico, de corte, de engranes, de templado, mineral o sintetico.",
      ],
    },
    {
      id: "secado",
      icon: Filter,
      title: "Secado al vacío",
      description:
        "Servicio de secado de tanques e intercambiadores de calor, secado de transformadores al vacio, renta de sistemas de vacio completos para secado de transformador.",
      extraDescription:
        "Sistemas de filtración con alta eficiencia para aceites dieléctricos, líquidos hidráulicos y transformadores, con accesorios modulares para fácil integración.",
      video: "https://www.pexels.com/es-es/download/video/10058364/",
      features: [
        "Secado de tanques e intercambiadores de calor o cualquier otro con agua, por prueba hidrostatica.",
        "Secado de transformadores al vacio nuevos y reparados con equipos de menos de 100 micrones.",
        "Renta de sistemas de vacio completos(bomba, vacuometro, manguera metalica, valvulas para dielectrico y tornilleria) para secado de transformador.",
        "Sistemas de filtración portátiles",
      ],
    },
    {
      id: "detectores",
      icon: Package,
      title: "Detectores de fuga y otros servicios",
      description:
        "Detectores de fuga liquidos , pruebas de hermeticidad de transformadores, reparación de desgasificadoras, repuestos y accesorios para equipos de vacio",
      extraDescription:
        "Detección de fugas para varíos gases tales como: gases refrigerantes, gas helio, por sniffing (dentro del tanque, camara o tuberia), por evacuación o vacío. Ademas contamos con detectores de fuga liquido de marca propia, probados en nuestros sistemas y servicios en otras instalaciones.",
      video: "https://www.pexels.com/es-es/download/video/12891228/",
      features: [
        "Detectores de fuga liquidos.",
        "Construccíon de metalizadoras.",
        "Construccíon de liofilizadoras para la industria alimenticia y farmaceutica.",
        "Buscamos que nuestros precios sean accesibles, contratos flexibles y facilidades de pago (mensualidades sin intereses en muchos casos, asesoria tecnica personalizada y garantía. Tambien a cuenta sistemas en mal estado.",
      ],
    },
  ];

  return (
    <section className="py-0">
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          className={`relative parallax-section min-h-screen flex items-center ${
            index % 2 === 0
              ? "bg-background"
              : "bg-black-to-b from-background to-card"
          }`}
        >
          {/* Video de fondo con overlay oscuro */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            >
              <source src={service.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/80 z-10" />
          </div>

          {/* Contenido */}
          <div className="container mx-auto px-4 z-20">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                <Card className="border-primary/100 bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-3xl md:text-4xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary mt-3 mr-3 flex-shrink-0" />
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
                  <p className="text-xl text-white mb-8">
                    {service.extraDescription}
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