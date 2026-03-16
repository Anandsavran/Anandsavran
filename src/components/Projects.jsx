import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="py-16 px-6 border-t border-code-border/30">
      <div className="max-w-screen-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-mono font-semibold text-code-green mb-4">
          Projects
        </h2>
        <p className="text-gray-400 mb-12 text-base">
          Click any project to see details and open the repository.
        </p>

        <div className="space-y-4">
          {projects.map((proj) => {
            const isExpanded = expandedId === proj.id;
            return (
              <div
                key={proj.id}
                className="rounded-xl border bg-code-surface overflow-hidden transition border-code-border hover:border-code-border/80"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                  className="w-full text-left px-6 py-5 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white font-sans">
                      {proj.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400 line-clamp-1">
                      {proj.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-code-bg text-code-amber">
                        {proj.language}
                      </span>
                      {proj.stars > 0 && (
                        <span className="font-mono text-xs text-gray-500">
                          ★ {proj.stars}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`font-mono text-code-accent transition transform ${isExpanded ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-0 border-t border-code-border">
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">
                      {proj.detailed}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-lg bg-code-green/10 text-code-green border border-code-green/30 hover:bg-code-green/20 transition"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                      </a>
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-lg bg-code-accent/10 text-code-accent border border-code-accent/30 hover:bg-code-accent/20 transition"
                        >
                          Open live site →
                        </a>
                      )}
                      {proj.videoUrl && (
                        <a
                          href={proj.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded-lg bg-red-600/10 text-red-500 border border-red-600/30 hover:bg-red-600/20 transition"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          Watch Video Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
