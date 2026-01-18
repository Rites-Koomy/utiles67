import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableInfoBoxProps {
  title: string;
  content: string;
  collapsedHeight?: number;
}

export function ExpandableInfoBox({
  title,
  content,
  collapsedHeight = 92,
}: ExpandableInfoBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Split content by empty lines to handle paragraphs
  const paragraphs = content.split(/\n\s*\n/);

  useEffect(() => {
    if (contentRef.current) {
      // Check if content height is greater than collapsed height
      if (contentRef.current.scrollHeight > collapsedHeight) {
        setShouldShowButton(true);
      }
    }
  }, [content, collapsedHeight]);

  return (
    <div className="bg-background border border-border/50 rounded-2xl p-4 sm:p-5 mb-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-foreground text-lg">{title}</h3>
      </div>
      
      <div className="relative">
        <div
          ref={contentRef}
          className={cn(
            "text-muted-foreground text-base leading-relaxed overflow-hidden transition-[max-height] duration-300 ease-in-out",
          )}
          style={{
            maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : `${collapsedHeight}px`,
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-3 last:mb-0">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Gradient overlay when collapsed */}
        {!isExpanded && shouldShowButton && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {shouldShowButton && (
        <div className="mt-2 flex justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="info-box-content"
            className="flex items-center gap-1.5 text-primary text-sm font-medium hover:bg-primary/5 px-3 py-1.5 rounded-full transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Réduire</span>
                <div className="bg-primary/10 rounded-full p-1">
                    <ChevronUp size={14} />
                </div>
              </>
            ) : (
              <>
                <span>Lire la suite</span>
                <div className="bg-primary/10 rounded-full p-1">
                    <ChevronDown size={14} />
                </div>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
