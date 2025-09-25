
import React from 'react';
import { 
    LocationPinIcon, PhoneIconV2, EnvelopeIcon, ClockIconV3,
    TramIcon, ParkingIcon, AccessibilityIcon, SirenIcon, CalendarIcon,
    FacebookIconV2, InstagramIconV2, TwitterIconV2
} from '../components/Icons.tsx';

const ContactPage = () => {

    const contactDetails = [
        { icon: <LocationPinIcon />, title: "Adresse", lines: ["68, Fal ould oumeir", "Res, Narjiss 2em étage apt 7", "Agdal, Rabate"] },
        { icon: <PhoneIconV2 className="h-8 w-8" />, title: "Téléphone", lines: ["+212 5 37 73 73 77", "Urgence: 06 61 82 33 87"] },
        { icon: <EnvelopeIcon />, title: "Email", lines: ["allon4maroc@gmail.com", "urgences.allon4maroc@gmail.com"] },
        { icon: <ClockIconV3 />, title: "Horaires", lines: ["Lun-Ven: 8h00 - 19h00", "Sam: 9h00 - 17h00", "Dim: Fermé"] }
    ];

    const practicalInfo = [
        { icon: <TramIcon/>, text: "Tramway: Agdal Avenue De France" },
        { icon: <ParkingIcon />, text: "Parking: Parking disponible (gratuit)" },
        { icon: <AccessibilityIcon />, text: "Accessibilité: Ascenseur disponible" }
    ];

    return (
        <div className="bg-gray-50/50">
            <section className="bg-gradient-to-b from-brand-teal-light/20 to-gray-50/50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-serif text-5xl text-brand-teal-dark">Nous Contacter</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Prenez rendez-vous ou contactez-nous pour toute question. Notre équipe est là pour vous accompagner dans votre parcours de soins.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-10 -mt-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-brand-teal-light text-brand-teal mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-xl text-brand-teal-dark mb-2">{item.title}</h3>
                            <div className="text-gray-500">
                                {item.lines.map((line, i) => <p key={i}>{line}</p>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="font-serif text-3xl text-brand-teal-dark mb-6">Envoyez-nous un message</h2>
                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="font-medium text-gray-700">Prénom *</label>
                                    <input type="text" placeholder="Prénom" className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="font-medium text-gray-700">Nom *</label>
                                    <input type="text" placeholder="Nom" className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"/>
                                </div>
                            </div>
                            <div>
                                <label className="font-medium text-gray-700">Email *</label>
                                <input type="email" placeholder="votre.email@exemple.com" className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"/>
                            </div>
                             <div>
                                <label className="font-medium text-gray-700">Téléphone</label>
                                <input type="tel" placeholder="+212 5 37 73 73 77" className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"/>
                            </div>
                            <div>
                                <label className="font-medium text-gray-700">Type de demande</label>
                                <select className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none appearance-none">
                                    <option>Prise de rendez-vous</option>
                                    <option>Question générale</option>
                                    <option>Information sur un traitement</option>
                                </select>
                            </div>
                            <div>
                                 <label className="font-medium text-gray-700">Message *</label>
                                 <textarea placeholder="Décrivez votre demande..." rows={5} className="mt-2 w-full px-4 py-3 bg-gray-100 border-transparent rounded-lg focus:ring-2 focus:ring-brand-green focus:outline-none"></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button type="submit" className="flex-1 bg-brand-teal text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-brand-green transition duration-300 flex items-center justify-center gap-2">
                                    <EnvelopeIcon /> Envoyer le message
                                </button>
                                <button type="button" className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 px-5 rounded-lg border border-gray-200 hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-2">
                                    <CalendarIcon /> Prendre RDV
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                             <h2 className="font-serif text-3xl text-brand-teal-dark mb-4">Nous trouver</h2>
                             <div className="bg-gray-200 h-64 rounded-lg">
                                {/* Map Placeholder */}
                             </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <h3 className="font-bold text-lg text-brand-teal-dark mb-4">Informations pratiques</h3>
                            <ul className="space-y-3">
                                {practicalInfo.map((info, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <span className="text-brand-teal">{info.icon}</span>
                                        <span className="ml-3">{info.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <h3 className="font-bold text-lg text-brand-teal-dark mb-4">Suivez-nous</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"><FacebookIconV2 /></a>
                                <a href="#" className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition"><InstagramIconV2 /></a>
                                <a href="#" className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition"><TwitterIconV2 /></a>
                            </div>
                             <p className="text-sm text-gray-500 mt-4">Restez informé de nos actualités et conseils santé dentaire.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto px-6 py-20">
                 <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-4xl mx-auto border-t-4 border-red-500">
                    <SirenIcon className="text-red-500 h-12 w-12 mx-auto" />
                    <h2 className="font-serif text-3xl text-brand-teal-dark mt-4">Urgence Dentaire ?</h2>
                    <p className="text-gray-500 mt-2 max-w-2xl mx-auto">En cas d'urgence dentaire, contactez-nous immédiatement. Nous assurons un service d'urgence 24h/7j pour nos patients.</p>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:0612345678" className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center gap-2">
                            <PhoneIconV2 className="h-5 w-5" /> Urgence: 06 12 34 56 78
                        </a>
                        <button className="bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg border border-gray-200 hover:bg-gray-200 transition duration-300">
                            Guide des urgences
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;