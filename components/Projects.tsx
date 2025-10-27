
import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick }) => {
  return (
    <section id="realisations" className="bg-brand-gray-100 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">Mes Réalisations</h2>
          <p className="mt-4 text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Un aperçu de projets variés où j'ai pu apporter mon expertise en ingénierie structurelle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-brand-blue-100 text-brand-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                  {project.domain}
                </span>
                <h3 className="text-xl font-bold text-brand-gray-900">{project.title}</h3>
                <p className="mt-4 text-brand-blue-600 font-medium flex items-center">
                  Voir les détails
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
