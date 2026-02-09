"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="border rounded-xl mt-8 p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-background text-sm font-medium text-center">
          {t.contactSection.badge}
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.contactSection.title}{" "}
          <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            {t.contactSection.titleHighlight}
          </span>
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t.contactSection.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-2">
          <Button asChild size="lg" className="group">
            <Link
              href={DATA.contact.social.email.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t.contactSection.emailButton}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4 text-blue-600" />
              {t.contactSection.linkedinButton}
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <span className="text-muted-foreground/50">•</span>
          <span>{t.contactSection.availability}</span>
          <span className="text-muted-foreground/50">•</span>
          <span>{t.contactSection.experience}</span>
        </div>
      </div>
    </div>
  );
}
