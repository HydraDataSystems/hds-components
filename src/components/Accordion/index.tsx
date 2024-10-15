import { useRef, useState, useEffect, PropsWithChildren } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { BtnStyle } from "../Button";

export type AccordionProps = {
  title: React.ReactNode;
  headerSize?: "compact" | "normal";
  headerStyle?: keyof typeof BtnStyle;
  headerColor?: string;
  contentStyle?: "compact" | "normal";
  detached?: boolean;
  active?: boolean;
  transition?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  onToggle?: () => void;
};

export const Accordion = ({
  title: barContent,
  active = false,
  detached = false,
  headerSize = "normal",
  headerStyle = "primary",
  contentStyle = "normal",
  transition = "ease-in-out",
  onToggle,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentActive, setContentActive] = useState<boolean>(active);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = contentActive
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentActive]);

  const onToggleClick = () => {
    setContentActive((prev) => !prev);
    onToggle && onToggle();
  };

  return (
    <div className="mb-4">
      <div
        className={`border ${detached ? "rounded-md" : "rounded-t-md"} overflow-hidden cursor-pointer ${detached ? "mb-2" : ""}`}
        onClick={onToggleClick}
        data-testid="accordion-header"
      >
        <div
          className={`${BtnStyle[headerStyle]} flex items-center gap-2 ${headerSize === "normal" ? "p-4" : ""}`}
        >
          <HiChevronRight
            className={` ${contentActive ? "rotate-90" : ""}
            transition-transform duration-500 ${transition}`}
          />
          <div className="flex flex-grow items-center">{barContent}</div>
        </div>
      </div>
      <div
        ref={contentRef}
        data-testid="accordion-content"
        className={`overflow-hidden duration-500 ${transition}`}
        style={{
          transitionProperty: "height",
          height: contentActive
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        <div className={`h-full ${detached ? "" : ""}`}>
          <div
            className={` ${contentStyle === "normal" ? "p-4" : "p-2"} ${detached ? "border rounded-md" : "border rounded-b-md"}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
