import { Bike, Home, Leaf, Heart, Users, Building2, Briefcase, LucideIcon } from "lucide-react";

interface PriorityPillProps {
  id: string;
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Bike,
  Home,
  Leaf,
  Heart,
  Users,
  Building2,
  Briefcase,
};

const colorMap: Record<string, { active: string; inactive: string }> = {
  logement: {
    active: "bg-amber-500 text-white border-amber-500",
    inactive: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400",
  },
  "services-publics": {
    active: "bg-blue-600 text-white border-blue-600",
    inactive: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400",
  },
  emploi: {
    active: "bg-orange-500 text-white border-orange-500",
    inactive: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400",
  },
  ecologie: {
    active: "bg-emerald-600 text-white border-emerald-600",
    inactive: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400",
  },
  mobilite: {
    active: "bg-cyan-600 text-white border-cyan-600",
    inactive: "bg-cyan-50 text-cyan-700 border-cyan-200 hover:border-cyan-400",
  },
  democratie: {
    active: "bg-violet-600 text-white border-violet-600",
    inactive: "bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-400",
  },
  solidarite: {
    active: "bg-rose-500 text-white border-rose-500",
    inactive: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400",
  },
};

const defaultColors = {
  active: "bg-gray-600 text-white border-gray-600",
  inactive: "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400",
};

export function PriorityPill({ id, title, icon, isActive, onClick }: PriorityPillProps) {
  const Icon = iconMap[icon] || Leaf;
  const colors = colorMap[id] || defaultColors;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 whitespace-nowrap ${
        isActive ? colors.active : colors.inactive
      }`}
      data-testid={`pill-priority-${id}`}
    >
      <Icon size={16} strokeWidth={2} />
      <span>{title}</span>
    </button>
  );
}
