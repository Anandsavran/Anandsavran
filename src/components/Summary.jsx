import React from 'react';

export default function Summary() {
  return (
    <section id="summary" className="py-24 px-6 border-b border-code-border/30">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-2xl font-mono font-semibold text-code-green mb-6 text-center md:text-left">
          Summary
        </h2>
        <div className="rounded-xl border bg-code-surface p-8 md:p-12 border-code-border shadow-lg">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans text-center md:text-left">
            Computer Science and Engineering student at Lovely Professional University with a strong focus on Data Science, Data Analytics, and Machine Learning. Skilled in programming languages including Python, C, C++, and Java, with hands-on experience in SQL, Excel, and Power BI for data analysis and visualization. Experienced in working with real-world datasets using tools such as Pandas, NumPy, and Matplotlib to extract meaningful insights. Passionate about solving complex problems through data-driven approaches and building scalable analytical solutions. Currently seeking entry-level roles such as Data Analyst, Junior Data Scientist, Machine Learning Analyst, or Business Intelligence Analyst.
          </p>
        </div>
      </div>
    </section>
  );
}
