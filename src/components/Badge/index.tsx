import React, { useState, useEffect } from "react";

export interface BadgeProps {
  template?:
    | "default"
    | "success"
    | "progress"
    | "warning"
    | "alert"
    | "notification";
  content: number | string;
  show?: boolean;
  outline?: boolean;
  style?: "default" | "filled" | "empty";
  compact?: boolean;
  type?: "string" | "number";
  showZero?: boolean;
  counterOverflow?: number;
}

const Badge = ({
  template = "default",
  content,
  show = true,
  outline = false,
  style = "default",
  compact = false,
  type = "string",
  showZero = false,
  counterOverflow,
}: BadgeProps) => {
  const [isVisible, setIsVisible] = useState(show);
  const [displayContent, setDisplayContent] = useState<string | number>(
    content
  );

  useEffect(() => {
    if (type === "number" && content === 0) {
      setIsVisible(showZero);
    } else {
      setIsVisible(show);
    }

    if (
      type === "number" &&
      typeof content === "number" &&
      counterOverflow !== undefined
    ) {
      if (content > counterOverflow) {
        setDisplayContent(`${counterOverflow}+`);
      } else {
        setDisplayContent(content);
      }
    } else {
      setDisplayContent(content);
    }
  }, [show, type, content, showZero, counterOverflow]);

  if (!isVisible) return null;

  const getColorClasses = () => {
    if (template === "notification") {
      return "bg-red-600 text-white";
    }

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
  const heightClass = compact ? "h-4 w-4" : "h-6 w-6";

  const shapeAndPadding =
    type === "number"
      ? "rounded-full p-1 min-w-[1rem]"
      : "rounded-md px-2.5 py-0.5 min-w-[4rem]";

  return (
    <span
      className={`inline-flex items-center justify-center text-xs font-medium ${colorClasses} ${outlineClass} ml-2 ${heightClass} ${shapeAndPadding}`}
    >
      {displayContent}
    </span>
  );
};

export default Badge;
