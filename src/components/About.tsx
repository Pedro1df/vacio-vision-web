const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://videos.pexels.com/video-files/6774107/6774107-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Acerca de <span className="text-gradient">Nosotros</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-12" />
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Vacío y Hermeticidad</strong> es una empresa mexicana con más de 35 años de experiencia especializada en la venta, renta, reparación y mantenimiento de equipos de alto vacío.
            </p>
            <p>
              Nuestro compromiso es proporcionar soluciones integrales de vacío a la industria nacional, trabajando con las marcas más reconocidas a nivel mundial y ofreciendo un servicio técnico de excelencia.
            </p>
            <p>
              Contamos con un equipo de ingenieros altamente capacitados y certificados, capaces de atender las necesidades más exigentes del sector industrial, desde la implementación de sistemas completos hasta el mantenimiento preventivo y correctivo.
            </p>
            <p className="text-primary font-semibold text-xl">
              Ayudamos a nuestros clientes a aumentar su producción hasta en un 150% mediante la implementación de nuestras soluciones de vacío.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
