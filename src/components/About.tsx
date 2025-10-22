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
        <source src="https://www.pexels.com/es-es/download/video/15661523/" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
         <h2 className="text-xl md:text-5xl font-bold text-center mb-6">
  <span className="text-red-600">Acerca de</span> <span className="text-white">Nosotros</span>
</h2>
          <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-12" />
          
          <div className="space-y-6 text-lg text-white leading-relaxed">
            <p>
              <strong className="text-white">Vacío y Hermeticidad</strong> es una empresa de amplia gama que busca ofrecer opciones accesibles para mejorar la productividad de las empresas en el area industrial, no solo en el campo de la tecnologia del vacio, tambien en la fabricación y reconstrucción de equipos completos como: Maquinas de vacio para tanques y transformadores. Hemos trabajado con bombas de vacio en estado critico, practicamente obsoletos y en mal estado. Al reconstruirlas han alcanzado una capacidad de produccion de un sistema nuevo.
            </p>
            <p>
             Buscamos acompañarte en el proceso de producción de tu compañia dandote distintas alternativas: desde la reconstruccion de tu sistema de vacio completo, el mantenimiento o reparación de tus equipos de vacio y/o ofreciendote accesorios de calidad para tus sistemas tales como: vacuometros digitales, mangueras metalicas de 3",4" y 6" pulgadas de diametro con valbulas reductores, empaques compatibles con aceite dielectrico y tornilleria.
            </p>
            <p>
              Hemos ayudado a mejorar la productividad con la aplicacion de vacio , secado en tanques y transformadores, ayudando así a mejorar la productividad de nuestros clientes hasta un 300%. 
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
