import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, Mail, Heart } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+573168455043";
  const whatsappMessage = "Hola Yamile! Me interesa conocer más sobre sus zapatos";
  


  const openWhatsAppDetal = () => {
    window.open('https://chat.whatsapp.com/LsVCiUGQvrp3NbbgBENZPB', '_blank');
  };

  const openWhatsAppMayoreo = () => {
    window.open('https://chat.whatsapp.com/BvVHM3eGM6s4G5vbU3oIBZ', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/zapatosdbucaramanga', '_blank');
  };

  const openFacebook = () => {
    window.open('https://facebook.com/zapatosdbucaramanga', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:yamile@zapatosdebucaramanga.com?subject=Consulta sobre calzado', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¡Hablemos de 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Zapatos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar el calzado perfecto. 
            Contáctanos por tu medio favorito.
          </p>
          <div className="w-20 h-1 bg-gradient-hero rounded-full mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <Card className="mb-8 p-8 bg-gradient-card border-none shadow-elegant">
            <CardContent className="p-0 text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Conversemos por WhatsApp
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  La forma más rápida de obtener asesoría personalizada de Yamile
                </p>
                  <a
                    href={`https://wa.me/573168455043?text=${encodeURIComponent("Hola Yamile! Me interesa conocer más sobre sus zapatos")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-lg px-8 py-4 rounded-md bg-gradient-hero text-white hover:brightness-110 transition"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Escribir por WhatsApp
                  </a>

              </div>
            </CardContent>
          </Card>

          {/* WhatsApp Groups */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Ventas al Detal</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Únete a nuestro grupo de ventas al detal
                </p>
                <Button variant="outline" size="sm" onClick={openWhatsAppDetal}>
                  Unirse al Grupo
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Ventas al Por Mayor</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Accede a precios especiales para mayoristas
                </p>
                <Button variant="outline" size="sm" onClick={openWhatsAppMayoreo}>
                  Unirse al Grupo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Instagram</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Mira nuestras últimas colecciones
                </p>
                <Button variant="outline" size="sm" onClick={openInstagram}>
                  Seguir
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Facebook</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Únete a nuestra comunidad
                </p>
                <Button variant="outline" size="sm" onClick={openFacebook}>
                  Me Gusta
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gold-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Para consultas detalladas
                </p>
                <Button variant="outline" size="sm" onClick={sendEmail}>
                  Escribir
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="p-8 bg-primary/5 border border-primary/20 text-center">
            <CardContent className="p-0">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                ¡Gracias por elegirnos!
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                En Zapatos de Bucaramanga, cada cliente es especial. 
                Te ayudamos a encontrar el calzado que refleje tu personalidad única.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={`https://wa.me/573168455043?text=${encodeURIComponent("Hola Yamile! Me interesa conocer más sobre sus zapatos")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md bg-gradient-hero text-white hover:brightness-110 transition"
                      >
                        Consultar Disponibilidad
                      </a>

                <Button 
                  variant="gold"
                  onClick={() => document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Visitar Showroom
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;