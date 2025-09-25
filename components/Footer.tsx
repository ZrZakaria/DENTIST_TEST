
import React from 'react';
import { Logo, FacebookIcon, InstagramIcon, TwitterIcon, LocationIcon, PhoneIcon, MailIcon, ClockIcon, ArrowUpIcon } from './Icons.tsx';

interface FooterProps {
    onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
    const navLinks = ["Accueil", "Services", "Équipe", "Avant/Après", "Contact"];

    return (
        <footer className="bg-brand-teal-dark text-white relative">
            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                         <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("Accueil"); }} className="flex items-center cursor-pointer">
                            <Logo white/>
                             <span className="font-bold text-2xl ml-2 text-white">Allon4Maroc</span>
                        </a>
                        <p className="mt-4 text-white/70 max-w-sm">
                            Votre sourire, notre priorité. Une approche moderne et bienveillante des soins dentaires avec les technologies les plus avancées.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><FacebookIcon /></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><InstagramIcon /></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"><TwitterIcon /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(link); }} className="text-white/70 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-start">
                                <LocationIcon />
                                <span className="ml-3">68, Fal ould oumeir Res, Narjiss 2em étage apt 7 Agdal, Rabat</span>
                            </li>
                            <li className="flex items-start">
                                <PhoneIcon />
                                <span className="ml-3">+212 5 37 73 73 77</span>
                            </li>
                            <li className="flex items-start">
                                <MailIcon />
                                <span className="ml-3">allon4maroc@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <ClockIcon />
                                <span className="ml-3">Lun-Ven: 09h-18h<br/>Sam: 09h-13h</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/50 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2024 Allon4Maroc. Tous droits réservés.</p>
                    <p className="mt-2 md:mt-0">Mentions légales | Politique de confidentialité</p>
                </div>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute -top-5 right-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-teal hover:bg-gray-200 transition-colors"
              aria-label="Scroll to top"
            >
                <ArrowUpIcon />
            </button>
        </footer>
    );
};