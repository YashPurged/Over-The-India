import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bus, Car, Truck, Users, Shield, CheckCircle, Clock } from "lucide-react";

export const Fleet = () => {
  const vehicles = [
    {
      icon: Bus,
      name: "Luxury Buses",
      capacity: "20-45 Passengers",
      features: ["AC Seating", "Entertainment System", "Comfortable Interiors"],
      ideal: "Group Tours & Corporate Travel",
      color: "text-primary"
    },
    {
      icon: Truck,
      name: "Premium SUVs",
      capacity: "6-8 Passengers",
      features: ["Spacious Interiors", "All-Terrain Ready", "Premium Comfort"],
      ideal: "Family Trips & Adventure Tours",
      color: "text-secondary"
    },
    {
      icon: Car,
      name: "Executive Sedans",
      capacity: "3-4 Passengers",
      features: ["Professional Service", "City Navigation", "Business Class"],
      ideal: "Business Travel & Airport Transfers",
      color: "text-accent"
    }
  ];

  const driverFeatures = [
    {
      icon: Shield,
      title: "4+ Years Experience",
      description: "All drivers have minimum 4 years of verified professional experience"
    },
    {
      icon: CheckCircle,
      title: "Background Verified",
      description: "Complete background checks and proper licensing verification"
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "Known for timely pickups and efficient route management"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
            <Car className="w-4 h-4 mr-2" />
            Our Fleet
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fleet Options for <span className="text-primary">Every Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles, each perfect for different travel needs
          </p>
        </div>

        {/* Vehicle Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {vehicles.map((vehicle, index) => (
            <Card
              key={vehicle.name}
              className="p-8 text-center shadow-card hover:shadow-professional transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <vehicle.icon className={`w-10 h-10 ${vehicle.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                <Badge variant="secondary" className="text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {vehicle.capacity}
                </Badge>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground font-medium">Features:</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3">Ideal for:</p>
                <p className="text-sm font-medium text-foreground">{vehicle.ideal}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Driver Experience Section */}
        <Card className="p-8 lg:p-12 bg-card shadow-professional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Professional Drivers
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                All Drivers Have <span className="text-secondary">4+ Years</span> Verified Experience
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to safety and professionalism starts with our carefully selected and trained drivers who know North India's routes inside out.
              </p>
              
              <Button size="lg" className="shadow-professional hover:shadow-glow">
                View Driver Credentials
              </Button>
            </div>

            <div className="space-y-6 animate-scale-in">
              {driverFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};