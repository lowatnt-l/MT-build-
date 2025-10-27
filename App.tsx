
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import type { Project } from './types';
import { PROJECTS as initialProjects } from './constants';

function App() {
  const [profileImageUrl, setProfileImageUrl] = useState("https://picsum.photos/seed/engineer/500/500");
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleProfileImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImageUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectImageUpload = (projectId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const newImageUrl = e.target.result as string;
          const updatedProjects = projects.map(p => 
            p.id === projectId ? { ...p, imageUrl: newImageUrl } : p
          );
          setProjects(updatedProjects);
          // Also update the selected project if it's the one being changed
          if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject({ ...selectedProject, imageUrl: newImageUrl });
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-brand-gray-50 font-sans text-brand-gray-800 antialiased">
      <Header />
      <main>
        <Hero 
          profileImageUrl={profileImageUrl}
          onImageUpload={handleProfileImageUpload} 
        />
        <Projects projects={projects} onProjectClick={handleOpenModal} />
        <Contact />
      </main>
      <footer className="bg-brand-gray-900 text-brand-gray-300 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MOLUH TIJANI. Tous droits réservés.</p>
      </footer>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal}
          onImageUpload={handleProjectImageUpload}
        />
      )}
    </div>
  );
}

export default App;
