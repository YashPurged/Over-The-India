import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, CheckCircle } from "lucide-react";

export const ServiceArea = () => {
  const landmarks = [
    { name: "India Gate", top: "45%", left: "52%" },
    { name: "Red Fort", top: "42%", left: "51%" },
    { name: "Lotus Temple", top: "48%", left: "53%" },
    { name: "Qutub Minar", top: "50%", left: "49%" },
    { name: "Akshardham", top: "46%", left: "54%" },
    { name: "Taj Mahal", top: "52%", left: "55%" },
    { name: "Agra Fort", top: "53%", left: "55%" },
    { name: "Shimla", top: "25%", left: "55%" },
    { name: "Manali", top: "20%", left: "55%" },
    { name: "Rishikesh", top: "35%", left: "56%" },
    { name: "Haridwar", top: "37%", left: "56%" },
    { name: "Jaipur", top: "60%", left: "50%" },
    { name: "Udaipur", top: "70%", left: "45%" },
    { name: "Pushkar", top: "65%", left: "48%" },
  ];

  const serviceAreas = [
    "Delhi NCR", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", 
    "Meerut", "Panipat", "Karnal", "Ambala", "Chandigarh",
    "Shimla", "Manali", "Dharamshala", "Rishikesh", "Haridwar",
    "Jaipur", "Udaipur", "Jodhpur", "Pushkar", "Mount Abu"
  ];

  return (
    <section id="service-area" className="py-20 bg-gradient-map">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
            <Navigation className="w-4 h-4 mr-2" />
            Our Service Coverage
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Strategic Service <span className="text-primary">Coverage Zone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We operate actively across North India's most popular destinations with deep local expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <Card className="relative p-8 shadow-professional hover:shadow-glow transition-all duration-500 animate-scale-in">
            <div className="relative">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Active Operation Zone
              </h3>
              
              {/* India Map Container */}
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-border overflow-hidden">
                {/* India Map Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 280" className="w-full h-full" fill="none">
                    {/* Simplified India outline */}
                    <path
                      d="M100 20 C120 25, 140 40, 150 60 L160 80 C165 100, 170 120, 160 140 L150 160 C140 180, 130 200, 120 220 L100 240 C80 235, 60 220, 50 200 L40 180 C35 160, 30 140, 40 120 L50 100 C60 80, 70 60, 80 40 C85 30, 92 25, 100 20 Z"
                      fill="hsl(var(--muted-foreground))"
                      fillOpacity="0.1"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    
                    {/* Red circle around North India */}
                    <circle
                      cx="100"
                      cy="80"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse-glow"
                    />
                    
                    {/* Delhi marker */}
                    <circle
                      cx="100"
                      cy="80"
                      r="4"
                      fill="hsl(var(--destructive))"
                      className="shadow-glow"
                    />
                  </svg>
                </div>
                
                {/* Zone Label */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="font-semibold border-destructive text-destructive">
                    Primary Service Zone
                  </Badge>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-destructive">
                  We Operate Actively in This Region
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Covering 300+ km radius including Popular Tourist Destinations
                </p>
              </div>
            </div>
          </Card>

          {/* Service Areas List */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Cities We <span className="text-secondary">Serve</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our experienced drivers know these routes like the back of their hand, ensuring safe and efficient travel.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground text-sm">{area}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary-light border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Extended Coverage Available
                  </h4>
                  <p className="text-sm text-primary/80">
                    We actively serve popular destinations in Himachal Pradesh, Rajasthan, and Uttarakhand including hill stations, heritage cities, and spiritual centers.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};