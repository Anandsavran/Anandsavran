const RESUME_PDF = "/resume/Anand%20CV.pdf";

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 border-t border-code-border/30">
      <div className="max-w-screen-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-mono font-semibold text-code-green mb-4">
          Resume
        </h2>
        <p className="text-gray-400 mb-10 text-base">
          Click to view or download my resume.
        </p>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-code-surface border border-code-border hover:border-code-green/50 text-white font-sans font-medium transition group"
        >
          <svg className="w-8 h-8 text-code-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>View my resume (Anand Kumar)</span>
          <span className="text-code-green group-hover:translate-x-1 transition">→</span>
        </a>
      </div>
    </section>
  );
}
