import React, { useState, useEffect } from "react";

export interface BadgeProps {
  template?: "default" | "success" | "progress" | "warning" | "alert";
  content: number | string;
  show?: boolean;
  outline?: boolean;
  style?: "default" | "filled" | "empty";
  compact?: boolean;
}

const Badge = ({
  template = "default",
  content,
  show = true,
  outline = false,
  style = "default",
  compact = false,
}: BadgeProps) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  if (!isVisible) return null;

  const getColorClasses = () => {
    const baseColors = {
      default: "gray",
      success: "green",
      progress: "blue",
      warning: "orange",
      alert: "red",
    };

    const baseColor = baseColors[template as keyof typeof baseColors];

    switch (style) {
      case "filled":
        return `bg-${baseColor}-300 text-${baseColor}-800 border border-${baseColor}-300`;
      case "empty":
        return `bg-transparent text-${baseColor}-800 border border-${baseColor}-300`;
      default:
        return `bg-${baseColor}-100 text-${baseColor}-800 ring-1 ring-inset ring-${baseColor}-600/20 border border-${baseColor}-300`;
    }
  };

  const outlineClass = outline ? "outline outline-2 outline-transparent" : "";
  const colorClasses = getColorClasses();
  const heightClass = compact ? "h-4" : "h-6";

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-medium ${colorClasses} ${outlineClass} ml-2 min-w-[4rem] ${heightClass}`}
    >
      {content}
    </span>
  );
};

export default Badge;
