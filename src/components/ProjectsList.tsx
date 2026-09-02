"use client";

import { useState, useEffect } from "react";
import { Project, projects as defaultProjects } from "@/data/projects";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

interface ProjectsListProps {
  projects?: Project[];
  className?: string;
}

export function ProjectsList({ projects = defaultProjects, className = "" }: ProjectsListProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  
  // Mouse position for floating image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement with physics
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <>
      <section
        id="projects"
        className={`w-full bg-[#0a0a0a] text-[#f5f5f5] py-20 md:py-32 px-4 sm:px-6 lg:px-12 border-t border-[#262626] relative ${className}`}
      >
        {/* Section Header // Industrial Asymmetrical Header */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#262626]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] tracking-[0.25em] uppercase">
                <span className="w-1.5 h-1.5 bg-[#00ff88] animate-pulse" />
                <span>{"// MATRIX_INDEX [02]"}</span>
              </div>
              <h2 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-[#f5f5f5] leading-none">
                SELECTED<br />
                <span className="text-[#737373] hover:text-[#f5f5f5] transition-colors">PROJECTS</span>
              </h2>
            </div>

            <div className="font-mono text-xs text-[#737373] flex flex-col md:items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88]">SYS_COUNT:</span>
                <span className="text-[#f5f5f5] font-bold">[{String(projects.length).padStart(2, "0")}] RECORDS</span>
              </div>
              <div>LAYOUT: VERTICAL_STREAM // RAW</div>
              <div>STATUS: PROD_VERIFIED</div>
            </div>
          </div>
        </div>

        {/* Vertical List Container */}
        <div className="max-w-7xl mx-auto border-t-2 border-[#262626]">
          {projects.map((project, idx) => (
            <motion.article
              layoutId={`project-container-${project.id}`}
              key={project.id}
              className="group relative border-b-2 border-[#262626] transition-colors duration-200 hover:bg-[#111111]/80 cursor-pointer"
              onClick={() => setActiveProject(project)}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="py-10 md:py-16 px-2 sm:px-4 md:px-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8 transition-all pointer-events-none">
                {/* Left Column */}
                <div className="flex items-baseline gap-4 md:gap-8 font-mono text-xs shrink-0 lg:w-48">
                  <span className="text-sm md:text-base font-bold text-[#00ff88] tracking-widest">
                    [{project.number}]
                  </span>
                  <div className="flex flex-col gap-1 text-[#737373]">
                    <span className="uppercase text-[11px] tracking-wider text-[#a3a3a3]">
                      {project.year}
                    </span>
                    <span className="text-[10px] uppercase text-[#525252] hidden sm:block">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Center / Dominant Column */}
                <div className="flex-1 space-y-4">
                  <motion.h3 
                    layoutId={`project-title-${project.id}`}
                    className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-[#f5f5f5] group-hover:text-[#00ff88] transition-colors duration-150"
                  >
                    {project.title}
                  </motion.h3>

                  <div className="font-mono text-xs sm:text-sm text-[#737373] flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-[#a3a3a3] uppercase">{project.role}</span>
                    {project.client && (
                      <>
                        <span className="text-[#262626] hidden sm:inline">|</span>
                        <span className="text-[#525252]">CLIENT: {project.client}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 shrink-0 font-mono text-xs">
                  <span className="text-[10px] text-[#525252] uppercase tracking-wider hidden md:block">
                    {project.status}
                  </span>
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 border border-[#262626] bg-[#141414] text-[#a3a3a3] group-hover:border-[#00ff88] group-hover:text-[#00ff88] transition-colors uppercase text-xs pointer-events-auto"
                  >
                    <span>[ VIEW_SYSTEM ↗ ]</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Stream Telemetry Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#525252]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            <span>STREAM_STATUS: ALL RECORDS PARSED SUCCESSFULLY</span>
          </div>
          <div>END_OF_INDEX // [EOF]</div>
        </div>
        
        {/* Floating Preview Image */}
        <AnimatePresence>
          {hoveredProject && !activeProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-0 left-0 pointer-events-none z-40 hidden lg:block overflow-hidden border border-[#262626] shadow-2xl"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
                width: 400,
                height: 250,
              }}
            >
              <motion.img 
                layoutId={`project-image-${hoveredProject.id}`}
                src={hoveredProject.imageUrl} 
                alt={hoveredProject.title} 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-[#00ff88] mix-blend-overlay opacity-20"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Full Screen Cinematic Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 md:p-16 bg-[#0a0a0a]/90 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.article
              layoutId={`project-container-${activeProject.id}`}
              className="w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-[#262626] overflow-y-auto flex flex-col cursor-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Hero */}
              <div className="relative w-full h-[30vh] md:h-[45vh] overflow-hidden border-b border-[#262626] shrink-0">
                <motion.img
                  layoutId={`project-image-${activeProject.id}`}
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 px-4 py-2 bg-[#141414] border border-[#262626] text-[#00ff88] font-mono text-xs tracking-widest uppercase hover:bg-[#00ff88] hover:text-black transition-colors z-10"
                >
                  [ CLOSE_SYSTEM × ]
                </button>
              </div>

              {/* Modal Content - Expanded */}
              <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 shrink-0">
                
                <div className="lg:col-span-12">
                  <motion.h3 
                    layoutId={`project-title-${activeProject.id}`}
                    className="font-sans font-black text-5xl sm:text-7xl uppercase tracking-tighter leading-none text-[#f5f5f5]"
                  >
                    {activeProject.title}
                  </motion.h3>
                </div>

                {/* Left Meta Specs */}
                <div className="lg:col-span-4 space-y-6 font-mono text-xs">
                  <div className="text-[11px] text-[#00ff88] uppercase tracking-wider pb-1 border-b border-[#262626]">
                    {"// METRICS & TELEMETRY"}
                  </div>
                  <div className="space-y-2">
                    {activeProject.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-center justify-between p-3 border border-[#1f1f1f] bg-[#141414]"
                      >
                        <span className="text-[#737373] text-[10px] uppercase">
                          {metric.label}:
                        </span>
                        <span className="text-[#f5f5f5] font-bold text-xs">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[#262626]">
                    <div className="text-[#737373] text-[10px] uppercase mb-2">ROLE</div>
                    <div className="text-[#f5f5f5] uppercase">{activeProject.role}</div>
                  </div>
                </div>

                {/* Right Narrative & Tech Matrix */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="border-l-2 border-[#00ff88] pl-6">
                    <p className="font-mono text-sm md:text-base text-[#d4d4d4] leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-4 font-mono">
                    <div className="text-[10px] text-[#737373] uppercase tracking-widest">
                      {"// STACK_ARCHITECTURE"}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 text-xs border border-[#262626] bg-[#141414] text-[#a3a3a3] uppercase hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
                        >
                          [{tech}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Action Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-[#1f1f1f] font-mono text-xs">
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-bold uppercase tracking-wider hover:bg-[#00e67a] transition-all"
                      >
                        <span>LAUNCH_SYSTEM</span>
                        <span className="text-sm">↗</span>
                      </a>
                    )}

                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-[#262626] bg-[#141414] text-[#f5f5f5] font-semibold uppercase tracking-wider hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
                      >
                        <span>SRC_REPOSITORY</span>
                        <span className="text-sm">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectsList;
