import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "secondary" | "outline";
}

export function TechBadge({ name, variant = "secondary" }: TechBadgeProps) {
  return (
    <Badge variant={variant} className="text-sm font-medium">
      {name}
    </Badge>
  );
}
