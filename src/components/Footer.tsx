import { Heart, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Zapatos de Bucaramanga
            </h3>
            <p className="text-background/80 leading-relaxed">
              Más de 10 años creando estilo y confianza en cada paso. 
              Calzado femenino de calidad en el corazón de Bucaramanga.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-primary-glow">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-primary-glow" />
                <span className="text-sm">Hotel Nuevo Marazul, Bucaramanga</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-primary-glow" />
                <span className="text-sm">+57 300 123 4567</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-primary-glow">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com/zapatosdebucaramanga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a 
                href="https://facebook.com/zapatosdebucaramanga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm flex items-center justify-center">
            Hecho con 
            <Heart className="w-4 h-4 mx-2 text-primary fill-current" />
            para las mujeres de Bucaramanga
          </p>
          <p className="text-background/40 text-xs mt-2">
            © 2024 Zapatos de Bucaramanga. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;