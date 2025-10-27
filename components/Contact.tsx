
import React, { useState } from 'react';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Envoi en cours...');
    // Simulate form submission
    console.log("Form data submitted:", formData);
    setTimeout(() => {
        setFormStatus('Votre message a bien été envoyé !');
        setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    { Icon: MailIcon, text: 'moluh.tijani.ingenieur@email.pro', href: 'mailto:moluh.tijani.ingenieur@email.pro' },
    { Icon: WhatsappIcon, text: '+237 6 97 10 50 32', href: 'https://wa.me/237697105032' },
    { Icon: LocationIcon, text: 'Littoral, Cameroun', href: 'https://www.google.com/maps/place/Littoral+Region,+Cameroon' },
  ];

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900">Contact</h2>
          <p className="mt-4 text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Discutons de votre projet. Je suis disponible pour toute question ou demande de collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-brand-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-brand-gray-800 mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700">Nom</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-brand-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-brand-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-brand-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-brand-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500">
                  Envoyer
                </button>
              </div>
              {formStatus && <p className="text-center text-brand-gray-600">{formStatus}</p>}
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-brand-gray-800 mb-6">Informations</h3>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 bg-brand-blue-100 text-brand-blue-600 rounded-full p-3">
                    <Icon />
                  </div>
                  <div className="ml-4">
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg text-brand-gray-700 hover:text-brand-blue-600 transition-colors duration-300">
                      {text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
