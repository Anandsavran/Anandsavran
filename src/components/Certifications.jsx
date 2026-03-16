import { useState } from "react";
import { certifications } from "../data/certifications";

function openCertificate(url) {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const visibleCertifications = showAll ? certifications : certifications.slice(0, initialCount);

  return (
    <section id="certifications" className="py-16 px-6 border-t border-code-border/30">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-mono font-semibold text-code-green mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-base">
            Click a certification to open the certificate in a new tab.
          </p>
        </div>

        <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-4">
            {visibleCertifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-lg border bg-code-surface overflow-hidden transition border-code-border hover:border-code-green/50 flex flex-col sm:flex-row"
            >
              <button
                type="button"
                onClick={() => openCertificate(cert.certificateUrl)}
                className="flex-1 block w-full text-left px-4 py-3 hover:bg-code-bg/30 transition disabled:cursor-default"
                disabled={!cert.certificateUrl}
              >
                <h3 className="text-base font-semibold text-white font-sans">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-code-green font-mono">
                  {cert.institution}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 font-mono">
                  {cert.date}
                </p>
                {cert.details && (
                  <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                    {cert.details}
                  </p>
                )}
                {cert.certificateUrl ? (
                  <span className="inline-block mt-1 text-code-accent text-xs font-mono">
                    View certificate →
                  </span>
                ) : (
                  <p className="mt-1 text-xs text-gray-500 font-mono">
                    Certificate link will be added soon.
                  </p>
                )}
              </button>
              {cert.certificateUrl && (
                <button
                  type="button"
                  onClick={() => openCertificate(cert.certificateUrl)}
                  className="sm:w-24 flex-shrink-0 p-2 bg-code-bg/50 border-t sm:border-t-0 sm:border-l border-code-border flex items-center justify-center hover:bg-code-bg/80 transition min-h-[4.5rem]"
                  title="Click to open certificate in new tab"
                >
                  <span className="w-full h-14 rounded border border-code-border bg-code-surface flex items-center justify-center text-code-green overflow-hidden">
                    {cert.certificateImage ? (
                      <img
                        src={cert.certificateImage}
                        alt="Certificate"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                    ) : null}
                    <span className={`flex items-center justify-center text-code-green ${cert.certificateImage ? "hidden" : ""}`} aria-hidden>
                      <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>
          ))}
          </div>
        </div>

        {certifications.length > initialCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg bg-code-green/10 text-code-green border border-code-green/30 hover:bg-code-green/20 transition font-mono text-sm"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
