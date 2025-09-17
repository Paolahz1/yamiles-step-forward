import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  const address = "Hotel Nuevo Marazul bodega 209, Bucaramanga, Santander";
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3775889159453!2d-73.1242849845931!3d7.119047094881386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f4516aae6e7%3A0x2b5c3e6b8c4d3f4c!2sHotel%20Nuevo%20Marazul!5e0!3m2!1ses!2sco!4v1629887654321!5m2!1ses!2sco`;
  
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/Hotel+Nuevo+Marazul+Bucaramanga+Santander`, '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Ubicación</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visítanos en nuestro punto de venta en el corazón de Bucaramanga
          </p>
          <div className="w-20 h-1 bg-gradient-hero rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant h-96 lg:h-full min-h-[400px]">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Zapatos de Bucaramanga"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-none shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-hero p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Dirección</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-gold p-3 rounded-full">
                    <Clock className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Horarios</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 5:00 PM</p>
                      <p>Domingos: 10:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="bg-primary p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Contacto</h3>
                    <p className="text-muted-foreground">
                      WhatsApp: +57 300 123 4567
                    </p>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={openInGoogleMaps}
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Cómo Llegar
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="p-6 bg-accent/10 border border-accent/20">
              <CardContent className="p-0 text-center">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  ¡Te esperamos en nuestro showroom!
                </h4>
                <p className="text-muted-foreground mb-4">
                  Pruébate los zapatos antes de comprar y recibe asesoría personalizada de Yamile
                </p>
                <div className="flex justify-center space-x-2 text-accent">
                  <span>👠</span>
                  <span>👡</span>
                  <span>👟</span>
                  <span>🥿</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;