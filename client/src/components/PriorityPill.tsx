import { Bike, Home, Leaf, Heart, Users, LucideIcon } from "lucide-react";

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
};

const colorMap: Record<string, { active: string; inactive: string }> = {
  mobilite: {
    active: "bg-teal-600 text-white border-teal-600",
    inactive: "bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-400",
  },
  logement: {
    active: "bg-amber-500 text-white border-amber-500",
    inactive: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400",
  },
  ecologie: {
    active: "bg-emerald-600 text-white border-emerald-600",
    inactive: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400",
  },
  solidarite: {
    active: "bg-rose-500 text-white border-rose-500",
    inactive: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400",
  },
  democratie: {
    active: "bg-violet-600 text-white border-violet-600",
    inactive: "bg-violet-50 text-violet-700 border-violet-200 hover:border-violet-400",
  },
};

export function PriorityPill({ id, title, icon, isActive, onClick }: PriorityPillProps) {
  const Icon = iconMap[icon] || Leaf;
  const colors = colorMap[id] || colorMap.ecologie;

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
