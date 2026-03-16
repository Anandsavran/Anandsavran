import { useEffect, useRef } from "react";

function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    }

    function initParticles() {
      const rect = canvas.getBoundingClientRect();
      const count = 80;
      particles = [];
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: 1 + Math.random() * 2,
          vy: -0.3 - Math.random() * 0.8,
          vx: (Math.random() - 0.5) * 0.3,
          alpha: 0.2 + Math.random() * 0.5,
        });
      }
    }

    function drawParticles() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, rect.width, rect.height);

      particles.forEach((p) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 3
        );
        gradient.addColorStop(0, `rgba(63, 185, 80, ${p.alpha})`);
        gradient.addColorStop(1, "rgba(13, 17, 23, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function updateParticles() {
      const rect = canvas.getBoundingClientRect();
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;

        if (p.y < -10) {
          p.y = rect.height + 10;
          p.x = Math.random() * rect.width;
        }
        if (p.x < -10) p.x = rect.width + 10;
        if (p.x > rect.width + 10) p.x = -10;
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export default function Hero() {
  const skills = [
    "React", "JavaScript", "Python", "C", "C++", "Java", "Kotlin", "XML",
    "Android Development", "Data Science", "Data Visualization", "Big Data",
    "SQL", "NoSQL", "HTML & CSS", "Machine Learning", "Git",
  ];

  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 w-full">
        {/* Header Section: Photo and Name/Uni (Centered) */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-code-border shadow-2xl ring-4 ring-code-green/10">
              <img
                src="/profile.png"
                alt="Anand Kumar"
                className="w-full h-full object-cover scale-[1.10]"
              />
            </div>
          </div>

          {/* Name & Basic Info */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-sans text-white tracking-tight">
              Anand Kumar
            </h1>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-code-green font-mono text-xs md:text-sm uppercase tracking-widest">
                Computer Science & Engineering
              </p>
              <p className="text-code-green font-mono text-xs md:text-sm uppercase tracking-widest">
                Lovely Professional University
              </p>
            </div>
          </div>
        </div>

        {/* Summary Box: Directly below the header, spanning width */}
        <div id="summary" className="rounded-xl border border-code-green/20 p-8 md:p-12 shadow-2xl relative z-20">
          <h2 className="text-xl md:text-2xl font-mono font-semibold text-code-green mb-6">
            Summary
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
            Computer Science and Engineering student at Lovely Professional University with a strong focus on Data Science, Data Analytics, and Machine Learning. Skilled in programming languages including Python, C, C++, and Java, with hands-on experience in SQL, Excel, and Power BI for data analysis and visualization. Experienced in working with real-world datasets using tools such as Pandas, NumPy, and Matplotlib to extract meaningful insights. Passionate about solving complex problems through data-driven approaches and building scalable analytical solutions. Currently seeking entry-level roles such as Data Analyst, Junior Data Scientist, Machine Learning Analyst, or Business Intelligence Analyst.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mt-12">
          <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest ml-1 text-center md:text-left">Tech Stack</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 rounded-xl bg-transparent border border-code-green/30 text-code-green font-mono text-sm md:text-base hover:border-code-green/60 hover:bg-code-green/5 transition whitespace-nowrap"
                >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
