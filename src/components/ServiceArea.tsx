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
    "Delhi NCR • India Gate • Red Fort • Lotus Temple", 
    "Agra • Taj Mahal • Agra Fort • Fatehpur Sikri",
    "Jaipur • Amber Fort • City Palace • Hawa Mahal",
    "Udaipur • Lake Palace • City Palace • Jagdish Temple",
    "Shimla • Mall Road • Christ Church • Jakhu Temple",
    "Manali • Solang Valley • Rohtang Pass • Old Manali",
    "Rishikesh • Ganga Aarti • Laxman Jhula • Beatles Ashram",
    "Haridwar • Har Ki Pauri • Ganga Aarti • Mansa Devi",
    "Dharamshala • Dalai Lama Temple • McLeod Ganj",
    "Chandigarh • Rock Garden • Sukhna Lake • Rose Garden",
    "Pushkar • Brahma Temple • Pushkar Lake • Camel Safari",
    "Jodhpur • Mehrangarh Fort • Blue City • Umaid Bhawan"
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
              
              {/* Complete India Map Container */}
              <div className="relative mx-auto w-96 h-[500px] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-border overflow-hidden shadow-lg">
                {/* India Map Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
                    {/* Complete India outline */}
                    <path
                      d="M150 30 C180 35, 220 55, 240 85 L250 110 C260 140, 270 170, 265 200 L255 230 C245 260, 235 290, 220 320 L200 350 C180 375, 160 390, 150 395 C140 390, 120 375, 100 350 L80 320 C65 290, 55 260, 45 230 L35 200 C30 170, 40 140, 50 110 L60 85 C80 55, 120 35, 150 30 Z M70 100 C60 120, 65 140, 75 160 M220 120 C230 140, 225 160, 215 180"
                      fill="hsl(var(--muted))"
                      fillOpacity="0.3"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                    
                    {/* Delhi-NCR Zone */}
                    <circle
                      cx="150"
                      cy="130"
                      r="25"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      className="animate-pulse"
                    />
                    
                    {/* Himachal Pradesh Zone */}
                    <circle
                      cx="130"
                      cy="90"
                      r="20"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="2"
                      strokeDasharray="6,3"
                      className="animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    
                    {/* Rajasthan Zone */}
                    <circle
                      cx="120"
                      cy="180"
                      r="30"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="2"
                      strokeDasharray="6,3"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    
                    {/* Haryana Zone */}
                    <circle
                      cx="140"
                      cy="120"
                      r="15"
                      fill="none"
                      stroke="hsl(var(--destructive))"
                      strokeWidth="2"
                      strokeDasharray="4,2"
                      className="animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />
                    
                    {/* Tourist Destination Pins */}
                    
                    {/* Delhi Area */}
                    <g className="tourist-pin">
                      <circle cx="150" cy="130" r="3" fill="hsl(var(--primary))" />
                      <text x="155" y="125" className="text-xs font-bold fill-primary">Delhi</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="145" cy="135" r="2" fill="hsl(var(--secondary))" />
                      <text x="148" y="142" className="text-xs fill-secondary">India Gate</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="155" cy="125" r="2" fill="hsl(var(--secondary))" />
                      <text x="158" y="120" className="text-xs fill-secondary">Red Fort</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="165" cy="140" r="2" fill="hsl(var(--secondary))" />
                      <text x="168" y="135" className="text-xs fill-secondary">Akshardham</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="140" cy="145" r="2" fill="hsl(var(--secondary))" />
                      <text x="143" y="152" className="text-xs fill-secondary">Qutub Minar</text>
                    </g>
                    
                    {/* Agra */}
                    <g className="tourist-pin">
                      <circle cx="170" cy="155" r="3" fill="hsl(var(--primary))" />
                      <text x="175" y="150" className="text-xs font-bold fill-primary">Agra</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="168" cy="158" r="2" fill="hsl(var(--accent))" />
                      <text x="172" y="165" className="text-xs fill-accent">Taj Mahal</text>
                    </g>
                    
                    {/* Himachal Pradesh */}
                    <g className="tourist-pin">
                      <circle cx="130" cy="85" r="3" fill="hsl(var(--primary))" />
                      <text x="135" y="80" className="text-xs font-bold fill-primary">Shimla</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="125" cy="75" r="2" fill="hsl(var(--accent))" />
                      <text x="128" y="70" className="text-xs fill-accent">Manali</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="120" cy="95" r="2" fill="hsl(var(--secondary))" />
                      <text x="123" y="102" className="text-xs fill-secondary">Dharamshala</text>
                    </g>
                    
                    {/* Rajasthan */}
                    <g className="tourist-pin">
                      <circle cx="115" cy="170" r="3" fill="hsl(var(--primary))" />
                      <text x="120" y="165" className="text-xs font-bold fill-primary">Jaipur</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="105" cy="190" r="2" fill="hsl(var(--accent))" />
                      <text x="108" y="197" className="text-xs fill-accent">Udaipur</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="125" cy="185" r="2" fill="hsl(var(--secondary))" />
                      <text x="128" y="192" className="text-xs fill-secondary">Pushkar</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="90" cy="175" r="2" fill="hsl(var(--secondary))" />
                      <text x="93" y="182" className="text-xs fill-secondary">Jodhpur</text>
                    </g>
                    
                    {/* Uttarakhand */}
                    <g className="tourist-pin">
                      <circle cx="165" cy="105" r="2" fill="hsl(var(--accent))" />
                      <text x="168" y="100" className="text-xs fill-accent">Rishikesh</text>
                    </g>
                    
                    <g className="tourist-pin">
                      <circle cx="170" cy="95" r="2" fill="hsl(var(--secondary))" />
                      <text x="173" y="90" className="text-xs fill-secondary">Haridwar</text>
                    </g>
                    
                    {/* Haryana */}
                    <g className="tourist-pin">
                      <circle cx="140" cy="115" r="2" fill="hsl(var(--secondary))" />
                      <text x="143" y="110" className="text-xs fill-secondary">Kurukshetra</text>
                    </g>
                  </svg>
                </div>
                
                {/* Zone Labels */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="font-semibold border-destructive text-destructive mb-2">
                    🇮🇳 Complete India Coverage
                  </Badge>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs bg-destructive/10">Delhi NCR</Badge>
                    <Badge variant="outline" className="text-xs bg-destructive/10">Himachal</Badge>
                    <Badge variant="outline" className="text-xs bg-destructive/10">Rajasthan</Badge>
                    <Badge variant="outline" className="text-xs bg-destructive/10">Haryana</Badge>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-destructive mb-2">
                  🌟 Premium Tourist Destinations Coverage
                </p>
                <p className="text-sm text-muted-foreground">
                  Specialized routes for international travelers • UNESCO World Heritage Sites • Hill Stations • Spiritual Centers
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