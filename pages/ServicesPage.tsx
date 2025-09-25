
import React from 'react';
import { 
    ScissorsIcon, OrthoIcon, ImplantIcon, GumsIcon,
    CheckIcon, ClockIconV2, ProstheticsIcon,
    ConservativeIcon, PedodonticsIcon, ExpertiseIcon, CaringIcon, AdvancedTechIcon
} from '../components/Icons.tsx';

interface ServicesPageProps {
    onNavigate: (page: string) => void;
}

const ServicesPage = ({ onNavigate }: ServicesPageProps) => {
    const servicesData = [
        { image: 'https://picsum.photos/seed/surgery/400/500', icon: <ScissorsIcon />, title: 'Chirurgie Buccale', description: 'Interventions chirurgicales spécialisées pour votre santé bucco-dentaire', items: ['Extraction de dents de sagesse', 'Chirurgie pré-implantaire', 'Greffe osseuse', 'Chirurgie parodontale'], time: '1-3 heures', price: '150 DH' },
        { image: 'https://picsum.photos/seed/ortho/400/500', icon: <OrthoIcon />, title: 'Orthodontie', description: "Correction de l'alignement dentaire pour un sourire parfait", items: ['Aligneurs invisibles (Invisalign)', 'Bagues traditionnelles', 'Orthodontie linguale', 'Contention post-traitement'], time: '12-24 mois', price: '2500 DH' },
        { image: 'https://picsum.photos/seed/implant/400/500', icon: <ImplantIcon />, title: 'Implantologie', description: 'Remplacement permanent des dents manquantes', items: ['Implants unitaires', 'Bridges sur implants', 'Prothèses complètes', 'Mise en charge immédiate'], time: '3-6 mois', price: '1200 DH' },
        { image: 'https://picsum.photos/seed/gums/400/500', icon: <GumsIcon />, title: 'Parodontologie', description: 'Traitement des gencives et des structures de soutien', items: ['Détartrage profond', 'Surfaçage radiculaire', 'Chirurgie parodontale', 'Maintenance parodontale'], time: '1-2 heures', price: '80 DH' },
        { image: 'https://picsum.photos/seed/prosthetics/400/500', icon: <ProstheticsIcon />, title: 'Prothèse et Esthétique Dentaire', description: 'Solutions esthétiques pour retrouver votre sourire', items: ['Facettes céramique', 'Couronnes esthétiques', 'Blanchiment dentaire', 'Composite esthétique'], time: '2-4 semaines', price: '300 DH' },
        { image: 'https://picsum.photos/seed/conservative/400/500', icon: <ConservativeIcon />, title: 'Soins Conservateurs', description: 'Préservation et restauration de vos dents naturelles', items: ['Caries et obturations', 'Dévitalisation', 'Inlays/Onlays', 'Prévention et hygiène'], time: '30-90 minutes', price: '50 DH' },
        { image: 'https://picsum.photos/seed/pedodontics/400/500', icon: <PedodonticsIcon />, title: 'Pédodontie', description: 'Soins dentaires spécialisés pour les enfants', items: ['Première consultation', 'Soins préventifs', 'Fluoration', 'Éducation à l\'hygiène'], time: '30-60 minutes', price: '40 DH' },
    ];
    
    const whyChooseUsData = [
        { icon: <ExpertiseIcon />, title: 'Expertise Reconnue', description: '15 ans d\'expérience et formation continue aux dernières techniques' },
        { icon: <CaringIcon />, title: 'Approche Bienveillante', description: 'Écoute, empathie et respect de vos besoins et appréhensions' },
        { icon: <AdvancedTechIcon />, title: 'Technologies Avancées', description: 'Équipements de pointe pour des soins précis et confortables' },
    ];

    return (
        <>
            <section className="bg-gray-50/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-serif text-5xl text-brand-teal-dark">Nos Services</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Une gamme complète de soins dentaires pour toute la famille, assurée par des experts passionnés pour garantir votre bien-être et un sourire radieux.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {servicesData.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <div className="md:w-5/12 flex-shrink-0">
                                    <img src={service.image} alt={service.title} className="h-64 w-full md:h-full object-cover"/>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-between md:w-7/12">
                                    <div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-brand-green">{service.icon}</span>
                                            <h2 className="font-bold text-2xl text-brand-teal-dark">{service.title}</h2>
                                        </div>
                                        <p className="text-gray-500 mt-2 text-sm">{service.description}</p>
                                        <ul className="space-y-2 mt-4">
                                            {service.items.map(item => (
                                                <li key={item} className="flex items-center text-gray-600">
                                                    <CheckIcon /><span className="ml-2 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                            <div className="flex items-center"><ClockIconV2 /><span className="ml-2">{service.time}</span></div>
                                            <span className="bg-brand-teal-light text-brand-teal font-semibold px-3 py-1 rounded-full">À partir de {service.price}</span>
                                        </div>
                                        <button 
                                            onClick={() => onNavigate('Contact')}
                                            className="w-full bg-brand-teal text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-brand-green transition duration-300">
                                            Prendre rendez-vous
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-brand-teal-dark">Pourquoi nous <span className="text-brand-green">choisir ?</span></h2>
                    <p className="text-gray-500 mt-2">Notre engagement envers l'excellence et votre bien-être</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {whyChooseUsData.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <div className="w-20 h-20 bg-brand-teal-light rounded-full flex items-center justify-center mx-auto text-brand-teal">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl text-brand-teal-dark mt-6">{item.title}</h3>
                                <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-brand-teal text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl">Prêt à retrouver votre sourire ?</h2>
                    <p className="mt-4 max-w-2xl mx-auto opacity-90">
                        Contactez-nous pour une consultation personnalisée et découvrez le traitement qui vous convient.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                         <button 
                             onClick={() => onNavigate('Contact')}
                             className="bg-white text-brand-teal font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                            Consultation gratuite
                        </button>
                        <button 
                            onClick={() => onNavigate('Contact')}
                            className="bg-transparent text-white font-bold py-3 px-6 rounded-lg border border-white/50 hover:bg-white/10 transition duration-300">
                            Nous contacter
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;