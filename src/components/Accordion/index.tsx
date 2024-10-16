import { useRef, useState, useEffect, PropsWithChildren } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { classNames } from "src/helpers";
import { IconType } from "react-icons";

enum Template {
  primary = "border-transparent bg-indigo-600 text-white hover:bg-indigo-700",
  secondary = "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  white = "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
}

export type HeaderProps = {
  title: React.ReactNode;
  size?: "compact" | "normal";
  template?: keyof typeof Template;
  custom?: string;
  icon?: {
    name: IconType;
    position: "start" | "end";
  };
};

export type AccordionProps = {
  header: HeaderProps;
  contentStyle?: "compact" | "normal";
  detached?: boolean;
  expanded?: boolean;
  transition?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  onToggle?: () => void;
  toggleIcon?: "start" | "end";
  disabled?: boolean;
};

export const Accordion = ({
  header,
  expanded = false,
  detached = false,
  contentStyle = "normal",
  transition = "ease-in-out",
  onToggle,
  toggleIcon = "start",
  disabled = false,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentExpanded, setContentExpanded] = useState<boolean>(expanded);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = contentExpanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentExpanded]);

  const onToggleClick = () => {
    if (!disabled) {
      setContentExpanded((prev) => !prev);
      onToggle && onToggle();
    }
  };

  const ChevronIcon = (
    <HiChevronRight
      className={`${contentExpanded ? "rotate-90" : ""}
      transition-transform duration-500 ${transition}
      ${disabled ? "text-slate-400" : ""}`}
    />
  );

  const CustomIcon = header.icon && (
    <header.icon.name className={disabled ? "text-slate-400" : ""} />
  );

  const headerClasses = classNames(
    "flex items-center gap-2",
    header.size === "normal" ? "p-4" : "px-4",
    disabled ? "bg-slate-500 cursor-not-allowed text-slate-300" :
      header.template ? Template[header.template] : "",
    header.custom || ""
  );

  const renderHeaderContent = () => (
    <>
      {toggleIcon === "start" && ChevronIcon}
      {header.icon?.position === "start" && CustomIcon}
      <div className="flex flex-grow items-center">{header.title}</div>
      {header.icon?.position === "end" && CustomIcon}
      {toggleIcon === "end" && ChevronIcon}
    </>
  );

  return (
    <div className="mb-4">
      <div
        className={`border ${detached ? "rounded-md" : "rounded-t-md"} overflow-hidden ${disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${detached ? "mb-2" : ""}`}
        onClick={onToggleClick}
        data-testid="accordion-header"
      >
        <div className={headerClasses}>
          {renderHeaderContent()}
        </div>
      </div>
      <div
        ref={contentRef}
        data-testid="accordion-content"
        className={`overflow-hidden duration-500 ${transition}`}
        style={{
          transitionProperty: "height",
          height: contentExpanded
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div className={`h-full ${detached ? "" : ""}`}>
          <div
            className={`${contentStyle === "normal" ? "p-4" : "p-2"} ${detached ? "border rounded-md" : "border rounded-b-md"}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;