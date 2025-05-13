'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import parse from 'html-react-parser';
import { useRichText } from '@/hooks/useRichText';
import { AccordionProps } from '@/types/page-component-props';



export default function Accordion({ items }:AccordionProps) {
    // 1. State hooks
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    // 2. Functions/handlers
       const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    // 3. useEffect or other hooks
    const { renderRichText } = useRichText();
    // 4. scope component or mini component
 

    return (
        <div className="w-full space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.id} className="border-b border-dashed border-border overflow-hidden last:border-0">
                        <button
                            className="w-full flex items-center justify-between py-4 transition"
                            onClick={() => toggleItem(index)}
                        >
                            <span className='text-left'>{parse(item.title)}</span>
                            <span className='shrink-0'>

                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </button>

                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                        >
                            <div className="overflow-hidden ">
                                <ul className="space-y-2 pb-4">{renderRichText(item.description)}</ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
