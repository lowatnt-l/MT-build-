
import React, { useRef } from 'react';

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

interface HeroProps {
  profileImageUrl: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ profileImageUrl, onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="accueil" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-gray-900 leading-tight">
              MOLUH TIJANI
              <span className="block text-brand-blue-600 text-3xl md:text-4xl mt-1">Ingénieur Bâtiment</span>
            </h1>
            <h2 className="mt-4 text-xl text-brand-gray-600">
              Expertise technique & excellence constructive
            </h2>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-brand-gray-700">
              Passionné par la conception de structures innovantes et durables, j'apporte des solutions techniques rigoureuses pour transformer vos projets architecturaux en réalités solides et performantes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#realisations" className="inline-block bg-brand-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
                Voir mes réalisations
              </a>
              <a href="#contact" className="inline-block bg-brand-gray-200 text-brand-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-brand-gray-300 transition-colors duration-300">
                Me contacter
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div 
              className="group relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
              onClick={handleImageClick}
            >
              <img 
                src={profileImageUrl} 
                alt="Portrait professionnel de MOLUH TIJANI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <UploadIcon />
                </div>
              </div>
              <input 
                type="file"
                ref={fileInputRef}
                onChange={onImageUpload}
                accept="image/*"
                className="hidden"
                aria-label="Changer la photo de profil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
