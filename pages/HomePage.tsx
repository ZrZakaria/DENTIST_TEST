
import React, { useState } from 'react';
import { 
    ScissorsIcon, OrthoIcon, ImplantIcon, GumsIcon, 
    UserIcon, MailIcon, PhoneIcon, FileTextIcon, 
    CameraIcon, FileIcon, HappyFaceIcon, TargetIcon, 
    HeartIcon, BoltIcon
} from '../components/Icons';

interface HomePageProps {
    onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
    const [activeTestimonial, setActiveTestimonial] = useState(1);

    const services = [
        { icon: <ScissorsIcon />, bgColor: 'bg-pink-100', iconColor: 'text-pink-500', title: 'Chirurgie Buccale', description: 'Interventions chirurgicales spécialisées pour votre santé bucco-dentaire' },
        { icon: <OrthoIcon />, bgColor: 'bg-blue-100', iconColor: 'text-blue-500', title: 'Orthodontie', description: "Correction de l'alignement dentaire pour un sourire parfait" },
        { icon: <ImplantIcon />, bgColor: 'bg-purple-100', iconColor: 'text-purple-500', title: 'Implantologie', description: 'Remplacement permanent des dents manquantes' },
        { icon: <GumsIcon />, bgColor: 'bg-green-100', iconColor: 'text-green-500', title: 'Parodontologie', description: 'Traitement des gencives et des structures de soutien' },
    ];

    const stats = [
        { icon: <HappyFaceIcon />, value: '2500+', label: 'Patients satisfaits' },
        { icon: <TargetIcon />, value: '15', label: 'Années d\'expérience' },
        { icon: <HeartIcon />, value: '98%', label: 'Taux de satisfaction' },
        { icon: <BoltIcon />, value: '24/7', label: 'Urgences dentaires' },
    ];

    const FileUpload = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
        <div>
            <p className="font-semibold text-gray-700 mb-2">{title}</p>
            <div className="border-2 border-dashed border-brand-green bg-brand-teal-light/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full mx-auto flex items-center justify-center mb-3">{icon}</div>
                <p className="text-gray-600 font-medium">Glissez votre {title.toLowerCase()} ici ou <span className="text-brand-green font-bold">cliquez pour sélectionner</span></p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG ou PDF supportés</p>
                <p className="text-xs text-gray-400">Taille max: 10MB</p>
            </div>
        </div>
    );

    return (
        <>
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <span className="inline-block bg-brand-teal-light text-brand-green font-semibold px-4 py-2 rounded-full text-sm">✨ Clinique moderne & innovante</span>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-teal-dark mt-4 leading-tight">Votre sourire, <br /><span className="bg-gradient-to-r from-brand-green to-brand-teal bg-clip-text text-transparent">notre priorité</span></h1>
                  <p className="text-gray-500 mt-6 max-w-lg mx-auto lg:mx-0">Découvrez une approche moderne et bienveillante des soins dentaires. Notre équipe d'experts vous accompagne pour retrouver un sourire éclatant dans un environnement chaleureux et professionnel.</p>
                  <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                    <button onClick={() => onNavigate('Contact')} className="bg-brand-teal text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-brand-green transition duration-300 flex items-center">Prendre rendez-vous<span className="ml-2">→</span></button>
                    <button className="bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg border border-gray-200 hover:bg-gray-200 transition duration-300 flex items-center">Voir nos résultats<span className="ml-2">→</span></button>
                  </div>
                </div>
                <div className="relative">
                  <img src="https://picsum.photos/seed/dentaloffice/600/500" alt="Dental Clinic Interior" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-48 text-center"><p className="font-bold text-3xl text-brand-teal-dark">2500+</p><p className="text-gray-500 text-sm">Patients satisfaits</p></div>
                  <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-48 text-center"><p className="font-bold text-3xl text-brand-green">98%</p><p className="text-gray-500 text-sm">Taux de satisfaction</p></div>
                </div>
              </div>
            </section>
            
            {/* Services Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-brand-teal-dark">Nos Services</h2>
                    <p className="text-gray-500 mt-2">Une gamme complète de soins dentaires pour toute la famille</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto`}><span className={service.iconColor}>{service.icon}</span></div>
                                <h3 className="font-bold text-xl text-brand-teal-dark mt-6">{service.title}</h3>
                                <p className="text-gray-500 mt-2 text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-brand-teal-dark">Consultation Personnalisée</h2>
                    <p className="text-gray-500 mt-2">Téléchargez vos documents pour une évaluation complète</p>
                    <div className="mt-12 bg-white p-8 lg:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <form className="space-y-6 text-left">
                                <div className="relative"><span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400"><UserIcon /></span><input type="text" placeholder="Nom complet" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" /></div>
                                <div className="relative"><span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400"><MailIcon /></span><input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" /></div>
                                <div className="relative"><span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400"><PhoneIcon /></span><input type="tel" placeholder="Téléphone" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none" /></div>
                                <div className="relative"><span className="absolute top-4 left-0 flex items-center pl-4 text-gray-400"><FileTextIcon /></span><textarea placeholder="Description de votre situation" rows={4} className="w-full pl-12 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"></textarea></div>
                                <button type="submit" className="w-full bg-gradient-to-r from-brand-green to-brand-teal text-white font-bold py-4 px-6 rounded-lg shadow-md hover:opacity-90 transition duration-300">Envoyer la demande</button>
                            </form>
                            <div className="text-left space-y-6">
                               <h3 className="font-serif text-2xl text-brand-teal-dark">Documents médicaux</h3>
                               <FileUpload title="Photo de profil" icon={<CameraIcon />} />
                               <FileUpload title="Radiographie" icon={<FileIcon />} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="bg-gradient-to-r from-brand-green to-brand-teal text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">{stat.icon}</div>
                                <p className="text-4xl font-bold">{stat.value}</p><p className="text-sm opacity-90">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-brand-teal-dark">Témoignages <span className="text-brand-green">Patients</span></h2>
                    <p className="text-gray-500 mt-2">Ce que disent nos patients satisfaits</p>
                    <div className="relative mt-12 max-w-3xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                             <p className="text-gray-600 italic">"Un service exceptionnel et une équipe aux petits soins. J'ai retrouvé le sourire grâce à eux. Je recommande vivement !"</p>
                             <div className="mt-6">
                                <img src="https://picsum.photos/seed/patient1/80/80" alt="Patient" className="w-16 h-16 rounded-full mx-auto" />
                                <p className="font-bold text-brand-teal-dark mt-4">Marie Dubois</p><p className="text-sm text-gray-400">Patiente en orthodontie</p>
                             </div>
                        </div>
                        <div className="flex justify-center items-center space-x-4 mt-8">
                            <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-brand-teal">&lt;</button>
                            <div className="flex items-center space-x-2">
                                {[0, 1, 2].map(i => (<button key={i} onClick={() => setActiveTestimonial(i)} className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === i ? 'bg-brand-teal' : 'bg-gray-300'}`}></button>))}
                            </div>
                            <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-brand-teal">&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-teal-dark text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl">Prêt à retrouver votre sourire ?</h2>
                    <p className="mt-4 max-w-2xl mx-auto opacity-80">Prenez rendez-vous dès aujourd'hui et découvrez pourquoi nos patients nous font confiance.</p>
                    <div className="mt-8 flex justify-center space-x-4">
                         <button onClick={() => onNavigate('Contact')} className="bg-white text-brand-teal-dark font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">Prendre rendez-vous</button>
                        <button onClick={() => onNavigate('Contact')} className="bg-transparent text-white font-bold py-3 px-6 rounded-lg border border-white/50 hover:bg-white/10 transition duration-300">Nous contacter</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
