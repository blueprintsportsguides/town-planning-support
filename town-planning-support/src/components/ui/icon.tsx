import {
  Search,
  FileCheck,
  Scale,
  Clock,
  Briefcase,
  MessageSquare,
  PoundSterling,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  Building2,
  Users,
  Shield,
  Target,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  FileCheck,
  Scale,
  Clock,
  Briefcase,
  MessageSquare,
  PoundSterling,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  Building2,
  Users,
  Shield,
  Target,
  Sparkles,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
}

export { iconMap };
