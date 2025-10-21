import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientsCarousel = () => {
  const clients = [
    { name: "PEMEX", logo: "PEMEX" },
    { name: "IUSA", logo: "IUSA" },
    { name: "ALCATEL", logo: "ALCATEL" },
    { name: "LEYBOLD", logo: "LEYBOLD" },
    { name: "EDWARDS", logo: "EDWARDS" },
    { name: "STOKES", logo: "STOKES" },
    { name: "TATSA", logo: "TATSA" },
    { name: "BUSCH", logo: "BUSCH" },
    { name: "MEISA", logo: "MEISA" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ellos Confían</span> en Nosotros
          </h2>
          <p className="text-xl text-muted-foreground">
            Trabajamos con las empresas más importantes de México
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-8 h-40 flex items-center justify-center bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-bold text-foreground/80 hover:text-primary transition-colors">
                    {client.logo}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsCarousel;
