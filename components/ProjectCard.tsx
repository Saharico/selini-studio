"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import LocalVideo from "./LocalVideo";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasPair = Boolean(project.videoSrc2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-12 gap-6 md:gap-10 items-center border-b border-line py-10 md:py-14"
    >
      <div className="md:col-span-1 font-sans text-fg-muted text-sm">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className={`${hasPair ? "md:col-span-4" : "md:col-span-6"} order-2 md:order-1`}>
        <h3 className="font-display text-3xl md:text-5xl leading-tight">{project.title}</h3>
        {project.studio && (
          <p className="mt-3 font-sans text-sm uppercase tracking-[0.15em] text-fg-muted">
            {project.studio}
          </p>
        )}
        <p className="mt-4 max-w-md font-sans text-fg-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.category.split(" · ").map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs uppercase tracking-[0.1em] border border-line rounded-full px-3 py-1 text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`${hasPair ? "md:col-span-7" : "md:col-span-5"} order-1 md:order-2`}>
        {project.videoSrc2 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-bg-soft">
              <LocalVideo src={project.videoSrc} title={project.title} />
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-bg-soft">
              <LocalVideo src={project.videoSrc2} title={`${project.title} — film 02`} />
            </div>
          </div>
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-[2px] bg-bg-soft">
            <LocalVideo src={project.videoSrc} title={project.title} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
