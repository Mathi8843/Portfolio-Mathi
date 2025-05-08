import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Mathi8843/https---github.com-Mathi8843-E-Commerce-site-for-local-artisans',
    demo: '#',
    tags: ['HTML','CSS','JS', 'SQl'],
  },
 
  {
    title: 'Automated Timetable Generator system',
    description: 'AiI powered timetable generator using flask',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Mathi8843/Time_table_generator',
    demo: '#',
    tags: ['HTML', 'CSS', 'Flask'],
  },
  {
    title: 'Vehicle Maintenanace Prediction',
    description: 'A Machine learning model to predict the vehicle maintenance',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Mathi8843/Vehicle_Maintenance_Prediction',
    demo: '#',
    tags: ['React', 'TypeScript', 'API Integration'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-white/70">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 text-white/70 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-2 text-white/70 hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
