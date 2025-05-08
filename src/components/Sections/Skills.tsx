import React from 'react';

const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'React'] },
  { category: 'Backend', items: ['Flask', 'SQl'] },
  { category: 'Tools', items: ['Git', 'VS code', 'N8N'] },
  { category: 'Soft Skills', items: ['Team Leadership', 'Communication', 'Problem Solving', 'Agile'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">Skills</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
