import { jobRoles } from "../data/jobRoles";

export default function JobRoles() {
  return (
    <section id="roles" className="py-16 px-6 relative border-t border-code-border/30">
      <div className="max-w-screen-2xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
          Target_roles
        </h2>
        <p className="text-gray-400 mb-12 font-mono text-base">
          Roles I am actively targeting and exploring in my career journey.
        </p>

        <div className="relative w-full">
          {/* Subtle gradient edges for better scroll UI */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-code-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-code-bg to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-x-auto gap-4 pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>
              {`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {jobRoles.map((role, index) => (
              <div
                key={index}
                className="snap-start whitespace-nowrap flex-shrink-0 px-6 py-4 rounded-xl bg-code-surface/40 hover:bg-code-surface border border-code-border/50 hover:border-code-green/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:-translate-y-1 transition-all duration-300 font-sans font-semibold text-gray-300 hover:text-white cursor-default group"
              >
                <span className="text-code-green/50 group-hover:text-code-green mr-2 transition-colors">#</span>
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
