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
  ];

  const serviceAreas = [
    "Delhi NCR", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", 
    "Meerut", "Panipat", "Karnal", "Ambala", "Chandigarh"
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
              
              {/* Simplified India Map Container */}
              <div className="relative mx-auto w-80 h-80 bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-border overflow-hidden">
                {/* Delhi Service Zone Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Outer service area */}
                    <div className="w-48 h-48 bg-secondary/20 rounded-full border-4 border-secondary border-dashed animate-pulse-glow flex items-center justify-center">
                      {/* Inner core zone */}
                      <div className="w-32 h-32 bg-secondary/40 rounded-full border-2 border-secondary flex items-center justify-center">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-glow">
                          <MapPin className="w-8 h-8 text-secondary-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Zone Label */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" className="font-semibold">
                        Active Zone
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Landmark Markers */}
                {landmarks.map((landmark, index) => (
                  <div
                    key={landmark.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-scale-in"
                    style={{ top: landmark.top, left: landmark.left }}
                    data-delay={index * 200}
                  >
                    <div className="relative group">
                      <div className="w-3 h-3 bg-accent rounded-full shadow-lg pulse" />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
                          {landmark.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-primary">
                  We Operate Actively in This Region
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Covering 200+ km radius from Delhi
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

            <div className="grid sm:grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{area}</span>
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
                    Need service beyond our primary zone? We offer extended coverage to nearby states including Uttarakhand, Rajasthan, and Himachal Pradesh on request.
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