
import React from 'react';
import { ConservativeIcon, KeyIcon, CalendarIcon, MailIcon, PhoneIcon } from '../components/Icons.tsx';

interface EquipePageProps {
    onNavigate: (page: string) => void;
}

const EquipePage = ({ onNavigate }: EquipePageProps) => {
    const teamMembers = [
        {
            name: 'Dr. El Bakouri Malika',
            role: 'Ceo & Chirurgien-Dentiste',
            specialty: 'Dentisterie Générale & Esthétique',
            bio: "Diplômée de l'Université Paris VII, Dr. Martin cumule 15 ans d'expérience en dentisterie générale et esthétique. Passionnée par les nouvelles technologies, elle se forme continuellement aux dernières innovations.",
            qualifications: [
                'Doctorat en Chirurgie Dentaire - Paris VII',
                'DU Implantologie - Paris V',
                'Certification Invisalign',
                'Formation continue en esthétique dentaire',
            ],
            languages: ['Français', 'Anglais', 'Espagnol'],
            experience: '15 ans d\'expérience',
            image: 'https://picsum.photos/seed/doc1/400/500'
        },
        {
            name: 'Dr. Bara Mohamed',
            role: 'Orthodontiste Spécialisé',
            specialty: 'Orthodontie Invisible & Traditionnelle',
            bio: 'Spécialiste en orthodontie depuis 12 ans, Dr. Dubois est expert en aligneurs invisibles et orthodontie linguale. Il privilégie une approche personnalisée pour chaque patient.',
            qualifications: [
                'Doctorat en Chirurgie Dentaire - Lyon I',
                'DES Orthopédie Dento-Faciale',
                'Certification Invisalign Diamond',
                'Formation orthodontie linguale',
            ],
            languages: ['Français', 'Anglais'],
            experience: '12 ans d\'expérience',
            image: 'https://picsum.photos/seed/doc2/400/500'
        },
        {
            name: 'Dr. Oumaima',
            role: 'Parodontologue',
            specialty: 'Parodontologie & Chirurgie Gingivale',
            bio: "Experte en parodontologie, Dr. Leroy se consacre au traitement des maladies parodontales et à la chirurgie esthétique gingivale. Son approche préventive permet d'éviter les complications.",
            qualifications: [
                'Doctorat en Chirurgie Dentaire - Bordeaux II',
                'DU Parodontologie',
                'Formation chirurgie plastique parodontale',
                'Certification laser thérapeutique',
            ],
            languages: ['Français', 'Italien'],
            experience: '10 ans d\'expérience',
            image: 'https://picsum.photos/seed/doc3/400/500'
        },
        {
            name: 'Dr. Nassim Nassma',
            role: 'Implantologue',
            specialty: 'Implantologie & Chirurgie Orale',
            bio: 'Chirurgien spécialisé en implantologie, Dr. Moreau maîtrise les techniques de pointe incluant la navigation guidée et la mise en charge immédiate.',
            qualifications: [
                'Doctorat en Chirurgie Dentaire - Strasbourg',
                'DU Implantologie Orale',
                'Formation chirurgie guidée',
                'Certification All-on-4',
            ],
            languages: ['Français', 'Allemand', 'Anglais'],
            experience: '8 ans d\'expérience',
            image: 'https://picsum.photos/seed/doc4/400/500'
        }
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-brand-teal-light/30 to-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-serif text-5xl text-brand-teal-dark">Notre Équipe</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Des professionnels passionnés et expérimentés, dédiés à votre bien-être et à l'excellence des soins dentaires.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 space-y-24">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`bg-white p-8 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-5/12 relative flex-shrink-0">
                                <img src={member.image} alt={member.name} className="rounded-2xl shadow-lg w-full h-auto object-cover"/>
                                <span className="absolute bottom-4 left-4 bg-brand-green text-white text-sm font-semibold px-4 py-2 rounded-lg">{member.experience}</span>
                            </div>
                            <div className="lg:w-7/12">
                                <h2 className="text-3xl font-bold text-brand-teal-dark">{member.name}</h2>
                                <p className="text-brand-green font-semibold mt-1">{member.role}</p>
                                <span className="inline-block bg-brand-teal-light text-brand-teal font-medium px-3 py-1 rounded-full text-sm mt-3">{member.specialty}</span>
                                <p className="text-gray-600 mt-4">{member.bio}</p>
                                
                                <div className="mt-6">
                                    <h3 className="flex items-center font-bold text-lg text-brand-teal-dark">
                                        <ConservativeIcon /> <span className="ml-2">Qualifications</span>
                                    </h3>
                                    <ul className="mt-3 space-y-2">
                                        {member.qualifications.map(q => (
                                            <li key={q} className="flex items-start text-gray-500">
                                                <KeyIcon /><span className="ml-3 text-sm">{q}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="mt-6">
                                    <h3 className="font-bold text-lg text-brand-teal-dark">Langues parlées</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {member.languages.map(lang => (
                                            <span key={lang} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{lang}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex items-center gap-4">
                                    <button 
                                        onClick={() => onNavigate('Contact')}
                                        className="flex-grow bg-brand-teal text-white font-bold py-3 px-5 rounded-lg shadow-md hover:bg-brand-green transition duration-300 flex items-center justify-center">
                                        <CalendarIcon /><span className="ml-2">Prendre RDV</span>
                                    </button>
                                    <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"><MailIcon /></button>
                                    <button className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"><PhoneIcon /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50/50 py-20">
                 <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-brand-teal-dark">Nos Valeurs</h2>
                    <p className="text-gray-500 mt-2">Ce qui nous unit et guide notre pratique quotidienne</p>
                 </div>
            </section>
        </>
    );
};

export default EquipePage;