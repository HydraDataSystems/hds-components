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
    position?: "start" | "end"
  };
};

export type BodyProps = {
  size?: "compact" | "normal";
  transition?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  detached?: boolean;
  custom?: string;
};

export type AccordionProps = {
  header: HeaderProps;
  body: BodyProps;
  expanded?: boolean;
  onToggle?: () => void;
  toggleIcon?: "start" | "end";
  disabled?: boolean;
};

export const Accordion = ({
  header,
  body,
  expanded = false,
  onToggle,
  toggleIcon = "start",
  disabled = false,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentExpanded, setContentExpanded] = useState<boolean>(expanded);

  const headerWithDefaults: Required<Omit<HeaderProps, 'icon'>> & { icon?: Required<HeaderProps['icon']> } = {
    ...header,
    size: header.size || "normal",
    template: header.template || "primary",
    custom: header.custom || "",
    icon: header.icon ? {
      ...header.icon,
      position: header.icon.position || "start"
    } : undefined
  };

  const bodyWithDefaults: Required<BodyProps> = {
    ...body,
    size: body.size || "normal",
    transition: body.transition || "ease-in-out",
    detached: body.detached || false,
    custom: body.custom || ""
  }



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
      className={classNames(
        contentExpanded ? "rotate-90" : "",
        "transition-transform duration-500",
        disabled ? "text-slate-400" : ""
      )}
    />
  );

  const CustomIcon = headerWithDefaults.icon && (
    <headerWithDefaults.icon.name
      className={classNames(
        "bg-transparent accordion-icon",
        disabled ? "text-slate-400" : "",
        !disabled && headerWithDefaults.custom ? headerWithDefaults.custom : ""
      )}
    />
  );

  const headerClasses = classNames(
    "flex items-center gap-2 transition-colors duration-200",
    headerWithDefaults.size === "normal" ? "p-4" : "px-4",
    !disabled && headerWithDefaults.template ? Template[headerWithDefaults.template] : "",
    !disabled && headerWithDefaults.custom ? headerWithDefaults.custom : "",
    disabled ? "bg-slate-500 cursor-not-allowed text-slate-300" : "cursor-pointer"
  );

  const bodyClasses = classNames(
    "overflow-hidden",
    `duration-500 ${bodyWithDefaults.transition}`,
    bodyWithDefaults.detached ? "mt-2" : ""
  );

  const bodyContentClasses = classNames(
    bodyWithDefaults.size === "compact" ? "p-2" : "p-4",
    bodyWithDefaults.detached ? "border rounded-md" : "border-t-0 rounded-b-md",
    bodyWithDefaults.custom || ""
  );

  const renderHeaderContent = () => (
    <>
      {toggleIcon === "start" && ChevronIcon}
      {headerWithDefaults.icon?.position === "start" && CustomIcon}
      <div className="flex flex-grow items-center">{headerWithDefaults.title}</div>
      {headerWithDefaults.icon?.position === "end" && CustomIcon}
      {toggleIcon === "end" && ChevronIcon}
    </>
  );

  return (
    <div className="mb-4">
      <div
        className={classNames(
          "border",
          bodyWithDefaults.detached ? "rounded-md" : "rounded-t-md",
          "overflow-hidden",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
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
        className={bodyClasses}
        style={{
          transitionProperty: "height",
          height: contentExpanded
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div className={bodyContentClasses}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;