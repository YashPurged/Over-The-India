import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageSquare, Clock, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Direct Call",
      value: "8800570133",
      description: "Available 24/7 for immediate assistance",
      action: "tel:8800570133",
      variant: "primary" as const,
      primary: true
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "basixrakesh@gmail.com",
      description: "Get detailed quotes and information",
      action: "mailto:basixrakesh@gmail.com",
      variant: "secondary" as const
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Quick Chat",
      description: "Instant response via WhatsApp",
      action: "https://wa.me/918800570133",
      variant: "outline" as const
    }
  ];

  const businessHours = [
    { day: "Monday - Saturday", time: "24/7 Service" },
    { day: "Sunday", time: "24/7 Service" },
    { day: "Emergency Service", time: "Always Available" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
            <Send className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your <span className="text-primary">Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for personalized travel solutions and instant bookings across North India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className={`p-8 text-center shadow-card hover:shadow-professional transition-all duration-500 group animate-scale-in ${
                method.primary ? 'ring-2 ring-primary ring-opacity-20 bg-primary-light/30' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  method.primary 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'bg-gradient-to-br from-primary-light to-secondary-light'
                }`}>
                  <method.icon className={`w-8 h-8 ${method.primary ? '' : 'text-primary'}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{method.title}</h3>
                {method.primary && (
                  <Badge variant="secondary" className="text-sm mb-3">
                    Recommended
                  </Badge>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-lg font-bold text-primary">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>

              <Button
                variant={method.variant}
                size="lg"
                className="w-full shadow-card hover:shadow-professional"
                asChild
              >
                <a href={method.action} className="flex items-center justify-center gap-2">
                  <method.icon className="w-5 h-5" />
                  Contact Now
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Business Hours & Location */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center p-4 bg-muted rounded-lg"
                >
                  <span className="font-medium text-foreground">{schedule.day}</span>
                  <span className={`font-semibold ${
                    schedule.day === "Emergency Service" ? "text-secondary" : "text-primary"
                  }`}>
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 shadow-card animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Service Coverage</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Primary Service Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Delhi NCR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Meerut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Haryana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Surroundings</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-secondary-light rounded-lg">
                <p className="text-sm text-secondary font-medium">
                  📍 Operating within 200km radius of Delhi with extended coverage on request
                </p>
              </div>
              
              <Button variant="outline" size="lg" className="w-full">
                View Coverage Map
              </Button>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 lg:p-12 bg-gradient-hero shadow-professional">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Book Your Next Journey Today
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied customers who trust us for their North India travel needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:8800570133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: 8800570133
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/918800570133" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};