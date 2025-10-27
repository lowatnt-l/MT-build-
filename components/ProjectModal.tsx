
import React, { useEffect, useRef } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onImageUpload: (projectId: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onImageUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleImageUploadClick = () => {
        fileInputRef.current?.click();
    };

  return (
    <div 
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="group relative">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <button
                    onClick={handleImageUploadClick}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 text-brand-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-white"
                >
                    Changer l'image
                </button>
                <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => onImageUpload(project.id, e)}
                    accept="image/*"
                    className="hidden"
                />
            </div>
            <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/70 rounded-full p-2 text-brand-gray-700 hover:bg-white hover:text-brand-gray-900 transition-all duration-300"
            aria-label="Fermer la modale"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="p-6 md:p-8">
          <span className="inline-block bg-brand-blue-100 text-brand-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            {project.domain}
          </span>
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">{project.title}</h2>
          
          <div className="space-y-6 text-brand-gray-700 text-base leading-relaxed">
            <div>
                <h3 className="text-lg font-semibold text-brand-gray-800 mb-2 border-b-2 border-brand-blue-200 pb-1">Description du projet</h3>
                <p>{project.description}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-brand-gray-800 mb-2 border-b-2 border-brand-blue-200 pb-1">Défis techniques relevés</h3>
                <p>{project.challenges}</p>
            </div>
          </div>

          <div className="mt-8 text-right">
             <button
                onClick={onClose}
                className="bg-brand-gray-200 text-brand-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-brand-gray-300 transition-colors duration-300"
             >
                Fermer
             </button>
          </div>
        </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
       `}</style>
    </div>
  );
};

export default ProjectModal;
