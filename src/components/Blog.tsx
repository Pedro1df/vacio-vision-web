import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: " Caso de éxito: Reconstrucción de varias desgasificadoras de aceite dielectrico para transformador de CFE ",
      excerpt: "Conoce el caso de CFE, enterate como nuestros especialistas ayudaron a esta empresa publica a alcanzar un mayor volumen de produccion y reducción de costos en sus procesos, gracias a la reconstruccion de varias desgasificadoras en estado critico.",
      category: "Caso de Éxito",
      content: "Descubré como la implementación de estos sistemas dió resultados en producción, como si fueran practicamente equipos nuevos.",
    },
    {
      title: "Guía Completa: Detección y Solución de Fugas en Sistemas de Vacío Industriales",
      excerpt: "Todo lo que necesitas saber sobre el mantenimiento de tus equipos de vacío para garantizar máxima eficiencia y vida útil prolongada.",
      date: "8 de Marzo, 2024",
      category: "Mantenimiento",
      content: "El mantenimiento preventivo es crucial para el correcto funcionamiento de las bombas de vacío. Un programa bien estructurado puede extender la vida útil del equipo hasta en un 50% y prevenir paros no programados que cuestan miles de dólares...",
    },
    {
      title: "Caso de Exito: ",
      excerpt: "Las últimas tendencias y tecnologías en sistemas de vacío que están revolucionando la industria manufacturera mexicana.",
      date: "1 de Marzo, 2024",
      category: "Tecnología",
      content: "La industria del vacío está experimentando una transformación digital. Los nuevos sistemas inteligentes con IoT permiten monitoreo remoto en tiempo real, mantenimiento predictivo y optimización automática de procesos. Estas innovaciones están cambiando la forma en que las empresas...",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-gradient from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-gradient">Blog</span>
          </h4>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artículos, casos de éxito y guías técnicas sobre tecnología de vacío
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:glow-effect group"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.content}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
