import { useState } from 'react';

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

export interface AccordionProps {
  icon?: React.ReactNode;
  items: AccordionItem[];
  className?: string;
  containerClassName?: string;
  onIconClick?: (idx: number, item: AccordionItem) => void;
}

const Accordion = ({ icon, items, containerClassName, className, onIconClick }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  return (
    <div className={`space-y-2 ${containerClassName || ''}`}>
      {items.map((item, idx) => (
        <div key={idx} className={`${className || ''}`}>
          <button
            className="w-full flex justify-between items-center cursor-pointer py-3 text-left font-medium focus:outline-none"
            onClick={() => toggleIndex(idx)}
          >
            <span>{item.question}</span>
            {icon ? (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onIconClick && onIconClick(idx, item);
                }}
                className="ml-2 flex items-center"
                style={{
                  cursor: onIconClick ? 'pointer' : 'default',
                  transform: openIndexes.includes(idx) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
              >
                {icon}
              </span>
            ) : (
              <span>{openIndexes.includes(idx) ? '\u2212' : '+'}</span>
            )}
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${openIndexes.includes(idx) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <div className="pb-3">{item.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
