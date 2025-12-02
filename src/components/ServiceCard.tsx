import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="bg-card border border-border rounded-2xl p-0 transition-all duration-300 hover:border-primary hover:shadow-lg group">
      <CardContent className="p-8">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: 'var(--gradient-button)' }}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};