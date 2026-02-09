"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

type Language = "en" | "fr" | "es";

const flags = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
};

const languageNames = {
  en: "English",
  fr: "Français",
  es: "Español",
};

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const languages: Language[] = ["en", "fr", "es"];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center transition-transform hover:scale-110",
        className,
      )}
      onClick={handleLanguageChange}
      aria-label={`Change language to ${languageNames[language]}`}
    >
      <span
        className="text-2xl"
        role="img"
        aria-label={languageNames[language]}
      >
        {flags[language]}
      </span>
    </button>
  );
}
