import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center parallax-section">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/es-es/download/video/18557113/" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient">+30 años de experiencia</span>
            <br />
            <span className="text-foreground">en la tecnologia del vacio en Mexico</span>
          </h1>
         <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Especialistas en fabricación, mantenimiento y reconstrucción de bombas de vacío | Filtradoras y desgasificadoras | Liofilizadoras | Metalizadoras | Servicios de aplicación de vacío y secado en tanques y transformadores| y más.
</p>
<p>
  Marcas en las que nos especializamos: Busch, Alcatel, Stokes, Kinney, BOC Edwards, Becker, Varian Precision Scientific, Welch y más.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground glow-effect group"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
