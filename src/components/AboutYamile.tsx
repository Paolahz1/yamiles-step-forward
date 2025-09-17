import { Card } from "@/components/ui/card";
import yamilePortrait from "@/assets/yamile-portrait.png";

const AboutYamile = () => {
  return (
    <section id="sobre-yamile" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={yamilePortrait} 
                alt="Yamile, fundadora de Zapatos de Bucaramanga"
            className="w-full h-[400px] md:h-[500px] object-cover object-top"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-hero rounded-full opacity-30"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Conoce a 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Yamile</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-hero rounded-full"></div>
            </div>
            
            <Card className="p-6 bg-gradient-card border-none shadow-soft">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Con más de <strong className="text-primary">10 años de experiencia</strong> en el mundo del calzado femenino, 
                Yamile ha construido su negocio desde cero con pasión y dedicación.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Comenzó como intermediaria, pero su <strong className="text-accent">espontaneidad y gracia</strong> para 
                conectar con las personas la llevaron a crear su propio punto de venta en el corazón de Bucaramanga.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Amante del buen tinto y emprendedora desde joven, Yamile entiende lo que las mujeres buscan: 
                <strong className="text-primary"> estilo, comodidad y confianza en cada paso</strong>.
              </p>
            </Card>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center text-accent">
                <span className="text-2xl mr-2">☕</span>
                <span className="font-medium">Amante del tinto</span>
              </div>
              <div className="flex items-center text-primary">
                <span className="text-2xl mr-2">👠</span>
                <span className="font-medium">+10 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYamile;