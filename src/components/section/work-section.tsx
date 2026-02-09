/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work, index) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {t.work[index]?.title || work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {t.work[index]?.start || work.start} -{" "}
                  {(t.work[index]?.end || work.end) ?? t.workSection.present}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 space-y-4">
            {/* Context */}
            {work.context && (
              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {t.workSection.context}
                </div>
                <p className="text-sm leading-relaxed text-primary/70">
                  {t.work[index]?.context || work.context}
                </p>
              </div>
            )}

            {/* Responsibilities */}
            {work.responsibilities && work.responsibilities.length > 0 && (
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {t.workSection.keyResponsibilities}
                </div>
                <ul className="space-y-1.5">
                  {work.responsibilities.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed text-primary/70 flex items-start gap-2"
                    >
                      <span className="shrink-0">—</span>
                      <span className="flex-1">
                        {t.work[index]?.responsibilities?.[idx] || item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {work.results && work.results.length > 0 && (
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {t.workSection.keyResults}
                </div>
                <ul className="space-y-1.5">
                  {work.results.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed text-primary/70 flex items-start gap-2"
                    >
                      <span className="mt-1 shrink-0">↗</span>
                      <span className="flex-1">
                        {t.work[index]?.results?.[idx] || item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack */}
            {work.stack && (
              <div className="pt-2 border-t border-border/50 space-y-2">
                <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {t.workSection.stack}
                </div>
                <div className="flex flex-wrap gap-1">
                  {work.stack.split(",").map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="text-[11px] font-medium border border-sky-500 text-sky-500 bg-sky-500/2 h-6 w-fit px-2"
                      variant="outline"
                    >
                      {skill.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
