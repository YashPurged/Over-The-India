import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
      
      <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-2 border-primary/30 bg-primary-light/80">
              <Star className="w-4 h-4 mr-2 fill-accent text-accent" />
              Trusted Travel Partner Since 2016
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              <span className="block">North India's</span>
              <span className="block text-secondary">Premier Travel</span>
              <span className="block">Experience</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl">
              Serving North India Travel Needs Since <span className="font-bold text-accent">8 Years</span>
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Delhi NCR
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Meerut
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Haryana
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                & Surroundings
              </Badge>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 shadow-professional hover:shadow-glow transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 8800570133
            </Button>
          </div>
        </div>
        
        {/* Right Content - Owner Photo */}
        <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
          <Card className="relative p-8 bg-card/90 backdrop-blur-sm shadow-professional hover:shadow-glow transition-all duration-500 max-w-md">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-30" />
                <img
                  src="/lovable-uploads/112e9717-6952-4646-a741-dbed9f7d7ca7.png"
                  alt="Rakesh Kumar - Business Owner"
                  className="relative w-48 h-48 rounded-full object-cover mx-auto shadow-professional border-4 border-primary-foreground"
                />
                <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Rakesh Kumar</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
                <p className="text-sm text-muted-foreground italic">
                  "Operating in Delhi, Meerut, Haryana & Surroundings with 8+ years of trusted service"
                </p>
                
                <div className="flex justify-center gap-2 pt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Rated 5.0 by 500+ satisfied customers
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};