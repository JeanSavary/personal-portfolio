"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

interface ProfessionalInfoSectionProps {
  delay?: number;
}

export default function ProfessionalInfoSection({
  delay = 0,
}: ProfessionalInfoSectionProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <BlurFade delay={delay}>
      <div className="flex flex-wrap -mt-10 items-center justify-center gap-x-3 text-sm text-muted-foreground border-slate-200 border rounded-lg py-2 px-4">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="hover:underline hover:text-foreground hover:cursor-pointer">
            {t.professionalInfo.available}
          </span>
        </div>
        <span className="text-muted-foreground/80">•</span>
        <span className="hover:underline hover:text-foreground hover:cursor-pointer">
          {t.professionalInfo.location}
        </span>
        <span className="text-muted-foreground/80">•</span>
        <span className="hover:underline hover:text-foreground hover:cursor-pointer">
          {t.professionalInfo.remoteLabel} {t.professionalInfo.remote}
        </span>
        <span className="text-muted-foreground/80">•</span>
        <span className="hover:underline hover:text-foreground hover:cursor-pointer">
          {t.professionalInfo.rate}
        </span>
      </div>
    </BlurFade>
  );
}
