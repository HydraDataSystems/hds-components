import { useRef, useState, useEffect, PropsWithChildren } from "react";
import { HiChevronRight } from "react-icons/hi2";

export type AccordionProps = {
  barContent: React.ReactNode;
  active?: boolean;
  headerStyle?: string;
  transition?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  onToggle?: () => void;
};

export const Accordion = ({
  barContent,
  active = false,
  headerStyle = "p-4 bg-gray-100 flex items-center gap-2",
  transition = 'ease-in-out',
  onToggle,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentActive, setContentActive] = useState<boolean>(active);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = contentActive ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [contentActive]);

  const onToggleClick = () => {
    setContentActive((prev) => !prev);
    onToggle && onToggle();
  };

  return (
    <div className="mb-4">
      <div
        className="border rounded-t-md overflow-hidden cursor-pointer"
        onClick={onToggleClick}
        data-testid="accordion-header"
      >
        <div className={`${headerStyle}`}>
          <HiChevronRight
            className={` ${ contentActive ? "rotate-90" : "" }
            transition-transform duration-500 ${transition}`}
          />
          <div className="flex flex-grow items-center">{barContent}</div>
        </div>
      </div>
      <div
        ref={contentRef}
        data-testid="accordion-content"
        className={`overflow-hidden duration-500 ${transition}`}
        style={{ transitionProperty: 'height', height: contentActive ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;