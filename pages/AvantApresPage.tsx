
import React from 'react';
import { HappyFaceIcon, StarIcon, ClockIcon, AwardIcon } from '../components/Icons';
import { ImageComparer } from '../components/ImageComparer';

const AvantApresPage = () => {
    const stats = [
        { icon: <HappyFaceIcon />, value: '2500+', label: 'Sourires transformés' },
        { icon: <StarIcon />, value: '98%', label: 'Taux de satisfaction' },
        { icon: <ClockIcon />, value: '15', label: 'Années d\'expérience' },
        { icon: <AwardIcon />, value: '50+', label: 'Prix reçus' },
    ];

    const transformations = [
        {
            before: 'https://picsum.photos/seed/ortho-before/800/600',
            after: 'https://picsum.photos/seed/ortho-after/800/600',
            title: 'Orthodontie Invisible',
            description: 'Correction de l\'alignement dentaire avec des aligneurs transparents',
            tag: 'Invisalign',
            duration: '18 mois',
            patient: '28 ans'
        },
        {
            before: 'https://picsum.photos/seed/bleach-before/800/600',
            after: 'https://picsum.photos/seed/bleach-after/800/600',
            title: 'Blanchiment Dentaire',
            description: 'Éclaircissement professionnel pour un sourire éclatant',
            tag: 'Blanchiment LED',
            duration: '2 séances',
            patient: '35 ans'
        },
        {
            before: 'https://picsum.photos/seed/implant-before/800/600',
            after: 'https://picsum.photos/seed/implant-after/800/600',
            title: 'Implant Dentaire',
            description: 'Remplacement d\'une dent manquante par un implant',
            tag: 'Implant + Couronne',
            duration: '6 mois',
            patient: '42 ans'
        },
        {
            before: 'https://picsum.photos/seed/veneer-before/800/600',
            after: 'https://picsum.photos/seed/veneer-after/800/600',
            title: 'Facettes Dentaires',
            description: 'Transformation esthétique complète du sourire',
            tag: '8 Facettes Céramique',
            duration: '3 semaines',
            patient: '31 ans'
        },
        {
            before: 'https://picsum.photos/seed/recon-before/800/600',
            after: 'https://picsum.photos/seed/recon-after/800/600',
            title: 'Reconstruction Complète',
            description: 'Réhabilitation complète de la dentition',
            tag: 'Implants + Prothèses',
            duration: '12 mois',
            patient: '55 ans'
        },
        {
            before: 'https://picsum.photos/seed/gums-before/800/600',
            after: 'https://picsum.photos/seed/gums-after/800/600',
            title: 'Correction Parodontale',
            description: 'Traitement des gencives et esthétique gingivale',
            tag: 'Chirurgie Parodontale',
            duration: '4 mois',
            patient: '38 ans'
        }
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-brand-teal-light/20 via-white to-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-serif text-5xl text-brand-teal-dark">Avant / Après</h1>
                    <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                        Découvrez les transformations remarquables réalisées par notre équipe. Chaque sourire raconte une histoire de confiance retrouvée.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-3 text-brand-teal">{stat.icon}</div>
                                <p className="text-3xl font-bold text-brand-teal-dark">{stat.value}</p>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50/70">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="font-serif text-4xl text-brand-teal-dark">Nos Transformations</h2>
                         <p className="text-gray-500 mt-2">Faites glisser le curseur pour voir la transformation</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {transformations.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <ImageComparer before={item.before} after={item.after} />
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-xl text-brand-teal-dark">{item.title}</h3>
                                            <p className="text-gray-500 mt-1 text-sm">{item.description}</p>
                                        </div>
                                        <span className="bg-brand-teal-light text-brand-teal font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap">{item.tag}</span>
                                    </div>
                                    <div className="flex items-center space-x-6 text-sm text-gray-600 mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center"><ClockIcon /><span className="ml-2">Durée: {item.duration}</span></div>
                                        <div className="flex items-center"><HappyFaceIcon /> <span className="ml-2">Patient: {item.patient}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AvantApresPage;
