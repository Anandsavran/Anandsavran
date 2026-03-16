const contacts = [
  { label: "Email", href: "mailto:anandsavarn@gmail.com", text: "anandsavarn@gmail.com" },
  { label: "GitHub", href: "https://github.com/Anandsavran", text: "github.com/Anandsavran" },
  { label: "LeetCode", href: "https://leetcode.com/u/anandsavarn/", text: "leetcode.com/u/anandsavarn" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/anandsavarn", text: "hackerrank.com/profile/anandsavarn" },
  { label: "CodeChef", href: "https://www.codechef.com/users/anand_savarn", text: "codechef.com/users/anand_savarn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anandsavarn/", text: "linkedin.com/in/anandsavarn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-code-border bg-code-surface py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-mono text-sm font-semibold text-code-green mb-4">
          &gt; contact
        </h3>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
          {contacts.map(({ label, href, text }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-code-green transition"
              >
                <span className="text-code-amber">{label}:</span> {text}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 pt-6 border-t border-code-border font-mono text-xs text-gray-500 text-center">
          All rights reserved by Anand Kumar
        </p>
      </div>
    </footer>
  );
}
