"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/data/translations";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                {t.sections.projects}
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {language === "fr"
                ? "Découvrez mes derniers projets"
                : language === "es"
                  ? "Mira mis últimos trabajos"
                  : "Check out my latest work"}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {language === "fr"
                ? "Depuis 2024, je dédie mon temps libre à développer des projects entreprenariaux. Voici quelques-uns de mes préférés."
                : language === "es"
                  ? "Desde 2024, dedico mi tiempo libre a desarrollar proyectos emprendedores. Aquí están algunos de mis favoritos."
                  : "Since 2024, I dedicate my free time to developing entrepreneurial projects. Here are a few of my favorites."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={t.projects[id]?.title || project.title}
                description={t.projects[id]?.description || project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
