
import React from 'react';
import { Logo, GlobeIcon, ChevronDownIcon } from './Icons';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
    const navLinks = ["Accueil", "Services", "Équipe", "Avant/Après", "Statistiques", "Contact"];

    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("Accueil"); }} className="flex items-center cursor-pointer">
                    <Logo />
                    <span className="font-bold text-xl ml-2 text-brand-teal-dark">Allon4Maroc</span>
                </a>
                <nav className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <a 
                          key={link} 
                          href="#" 
                          onClick={(e) => { e.preventDefault(); onNavigate(link); }}
                          className={`text-gray-600 hover:text-brand-teal font-medium relative transition-colors duration-300 ${currentPage === link ? 'text-brand-teal' : ''}`}
                        >
                          {link}
                          {currentPage === link && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-1 bg-brand-teal rounded-full"></span>}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="hidden sm:flex items-center text-gray-600 hover:text-brand-teal">
                        <GlobeIcon />
                        <span className="ml-2 font-medium">FR</span>
                        <ChevronDownIcon />
                    </button>
                    <button 
                        onClick={() => onNavigate('Contact')}
                        className="bg-brand-teal text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-brand-green transition duration-300">
                        Rendez-vous
                    </button>
                </div>
            </div>
        </header>
    );
};
