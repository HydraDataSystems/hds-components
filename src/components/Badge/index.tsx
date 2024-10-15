export interface BadgeProps {
  type: "success" | "warning" | "alert";
  content: number | string;
}

const Badge = ({ type, content }: BadgeProps) => {
  const colorClasses = {
    success:
      "bg-green-100 text-green-800 ring-1 ring-inset ring-green-600/10 border border-green-300",
    alert:
      "bg-red-100 text-red-800 ring-1 ring-inset ring-red-600/10 border border-red-300",
    warning:
      "bg-orange-100 text-orange-800 ring-1 ring-inset ring-orange-600/10 border border-orange-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${colorClasses[type]} ml-2`}
    >
      {content}
    </span>
  );
};

export default Badge;
