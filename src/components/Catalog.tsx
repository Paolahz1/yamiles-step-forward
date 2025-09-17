import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";

// Import category images
import sandaliasImg from "@/assets/category-sandalias.jpg";
import deportivosImg from "@/assets/category-deportivos.jpg";
import yuteImg from "@/assets/category-yute.jpg";
import mocasinesImg from "@/assets/category-mocasines.jpg";
import taconesImg from "@/assets/category-tacones.jpg";

interface CatalogItem {
  id: string;
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
  color: string;
}

const catalogItems: CatalogItem[] = [
  {
    id: "sandalias",
    title: "Sandalias",
    description: "Comodidad y estilo para el verano. Diseños frescos y elegantes.",
    image: sandaliasImg,
    pdfUrl: "https://github.com/Paolahz1/Cat-logo_ZapatosDeBucaramanga/raw/main/sandalias.pdf",
    color: "primary"
  },
  {
    id: "deportivos",
    title: "Deportivos",
    description: "Calzado deportivo femenino. Perfecto para tu día a día activo.",
    image: deportivosImg,
    pdfUrl: "https://github.com/Paolahz1/Cat-logo_ZapatosDeBucaramanga/raw/main/deportivo.pdf",
    color: "accent"
  },
  {
    id: "yute",
    title: "Yute",
    description: "Alpargatas y plataformas. Estilo casual con materiales naturales.",
    image: yuteImg,
    pdfUrl: "https://github.com/Paolahz1/Cat-logo_ZapatosDeBucaramanga/raw/main/Yute.pdf",
    color: "secondary"
  },
  {
    id: "mocasines",
    title: "Mocasines",
    description: "Elegancia clásica y comodidad. Perfectos para el día a día profesional.",
    image: mocasinesImg,
    pdfUrl: "https://github.com/Paolahz1/Cat-logo_ZapatosDeBucaramanga/raw/main/mocasines.pdf",
    color: "accent"
  },
  {
    id: "tacones",
    title: "Tacones",
    description: "Elegancia y sofisticación. Para ocasiones especiales.",
    image: taconesImg,
    pdfUrl: "https://github.com/Paolahz1/Cat-logo_ZapatosDeBucaramanga/raw/main/Tacones.pdf",
    color: "gold"
  }
];

const Catalog = () => {
  const handleViewPDF = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="catalogo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Catálogo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras colecciones diseñadas especialmente para ti. 
            Cada categoría con estilos únicos y de la mejor calidad.
          </p>
          <div className="w-20 h-1 bg-gradient-hero rounded-full mx-auto mt-6"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {catalogItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Catálogo de ${item.title}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-3">
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={() => handleViewPDF(item.pdfUrl, item.title)}
                      className="w-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Catálogo
                    </Button>
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => handleViewPDF(item.pdfUrl, item.title)}
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <Button 
                  variant="catalog" 
                  className="w-full"
                  onClick={() => handleViewPDF(item.pdfUrl, item.title)}
                >
                  Explorar Colección
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Contáctanos para asesoría personalizada
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Asesoría Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;