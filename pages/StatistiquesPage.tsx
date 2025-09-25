
import React from 'react';
import { HappyFaceIcon, TargetIcon, ClockIcon, AwardIcon, ChartBarIcon, TrendingUpIcon, UsersIcon, BoltIcon } from '../components/Icons.tsx';

const StatistiquesPage = () => {
    const stats = [
        { icon: <HappyFaceIcon />, value: '2500+', label: 'Sourires transformés' },
        { icon: <TargetIcon />, value: '98%', label: 'Taux de satisfaction' },
        { icon: <ClockIcon />, value: '15', label: 'Années d\'expérience' },
        { icon: <AwardIcon />, value: '50+', label: 'Prix reçus' },
    ];

    const satisfactionData = [95, 96, 94, 96, 98, 99];
    const ageData = [48, 120, 180, 150, 90, 68];
    const annualData = {
        patients: [500, 480, 650, 800, 950, 1100],
        revenue: [1200, 1150, 1400, 1850, 2200, 2600]
    };

    return (
        <div className="bg-gray-50/70">
            <section className="bg-gradient-to-b from-brand-teal-light/20 to-gray-50/70 py-20">
                <div className="container mx-auto px-6 text-center">
                    <span className="inline-flex items-center bg-brand-teal-light text-brand-green font-semibold px-4 py-2 rounded-full text-sm mb-4">
                        <ChartBarIcon /> Données & Performance
                    </span>
                    <h1 className="font-serif text-5xl text-brand-teal-dark">Nos Statistiques</h1>
                    <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
                        Découvrez les données qui témoignent de notre excellence et de la satisfaction de nos patients.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-3 text-brand-teal">{stat.icon}</div>
                                <p className="text-3xl font-bold text-brand-teal-dark">{stat.value}</p>
                                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Satisfaction Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center text-white bg-gradient-to-r from-brand-green to-brand-teal p-4 -m-6 mb-6 rounded-t-2xl">
                                <TrendingUpIcon />
                                <h3 className="font-bold text-lg ml-2">Évolution de la Satisfaction</h3>
                            </div>
                            <div className="h-64 relative">
                                <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    {/* Grid Lines */}
                                    {[0, 25, 50, 75, 100].map(y => (
                                        <g key={y}>
                                            <line x1="30" y1={180 - (y/100)*160} x2="490" y2={180 - (y/100)*160} stroke="#E5E7EB" strokeWidth="1" />
                                            <text x="25" y={185 - (y/100)*160} textAnchor="end" fontSize="10" fill="#9CA3AF">{y}</text>
                                        </g>
                                    ))}
                                    {/* Area */}
                                    <path d={`M 50,${180 - (satisfactionData[0]/100)*160} L ${satisfactionData.map((d, i) => `${50 + i * (440/5)},${180 - (d/100)*160}`).join(' L ')} L 490,180 L 50,180 Z`} fill="url(#areaGradient)" />
                                    {/* Line */}
                                    <path d={`M ${satisfactionData.map((d, i) => `${50 + i * (440/5)},${180 - (d/100)*160}`).join(' L ')}`} fill="none" stroke="#2EC4B6" strokeWidth="2" />
                                    <defs><linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2EC4B6" stopOpacity="0.4"/><stop offset="100%" stopColor="#2EC4B6" stopOpacity="0.05"/></linearGradient></defs>
                                    {/* X-Axis Labels */}
                                    {['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'].map((label, i) => (
                                        <text key={label} x={50 + i * (440/5)} y="195" textAnchor="middle" fontSize="10" fill="#9CA3AF">{label}</text>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        {/* Treatments Pie Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                           <div className="flex items-center text-white bg-gradient-to-r from-brand-green to-brand-teal p-4 -m-6 mb-6 rounded-t-2xl">
                                <TargetIcon />
                                <h3 className="font-bold text-lg ml-2">Répartition des Traitements</h3>
                            </div>
                            <div className="h-64 flex items-center justify-center">
                                <svg width="200" height="200" viewBox="0 0 100 100">
                                    <circle r="25" cx="50" cy="50" fill="#EF4444" strokeDasharray="50.24 157.08" transform="rotate(-90 50 50)" />
                                    <circle r="25" cx="50" cy="50" fill="#F59E0B" strokeDasharray="18.84 157.08" transform="rotate(-70.8 50 50)" />
                                    <circle r="25" cx="50" cy="50" fill="#8B5CF6" strokeDasharray="31.4 157.08" transform="rotate(-28.8 50 50)" />
                                    <circle r="25" cx="50" cy="50" fill="#3B82F6" strokeDasharray="39.25 157.08" transform="rotate(43.2 50 50)" />
                                    <circle r="25" cx="50" cy="50" fill="#2EC4B6" strokeDasharray="54.95 157.08" transform="rotate(133.2 50 50)" />
                                </svg>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-green mr-2"></span>Orthodontie: 35%</p>
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-blue mr-2"></span>Implants: 25%</p>
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-violet mr-2"></span>Esthétique: 20%</p>
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-orange mr-2"></span>Chirurgie: 12%</p>
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-red mr-2"></span>Autres: 8%</p>
                                </div>
                            </div>
                        </div>

                        {/* Age Bar Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center text-white bg-gradient-to-r from-brand-green to-brand-teal p-4 -m-6 mb-6 rounded-t-2xl">
                                <UsersIcon />
                                <h3 className="font-bold text-lg ml-2">Répartition par Âge</h3>
                            </div>
                            <div className="h-64">
                                <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    {/* Y-Axis Grid */}
                                    {[0, 45, 90, 135, 180].map(y => (
                                        <g key={y}>
                                            <line x1="30" y1={180 - (y/180)*160} x2="490" y2={180 - (y/180)*160} stroke="#E5E7EB" strokeWidth="1" />
                                            <text x="25" y={185 - (y/180)*160} textAnchor="end" fontSize="10" fill="#9CA3AF">{y}</text>
                                        </g>
                                    ))}
                                    {/* Bars */}
                                    {ageData.map((d, i) => (
                                        <rect key={i} x={50 + i * (440/6)} y={180 - (d/180)*160} width="50" height={(d/180)*160} fill="#8B5CF6" rx="4" />
                                    ))}
                                    {/* X-Axis Labels */}
                                    {['18-25', '26-35', '36-45', '46-55', '56-65', '65+'].map((label, i) => (
                                        <text key={label} x={75 + i * (440/6)} y="195" textAnchor="middle" fontSize="10" fill="#9CA3AF">{label}</text>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        {/* Growth Line Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center text-white bg-gradient-to-r from-brand-green to-brand-teal p-4 -m-6 mb-6 rounded-t-2xl">
                                <BoltIcon />
                                <h3 className="font-bold text-lg ml-2">Croissance Annuelle</h3>
                            </div>
                            <div className="h-64">
                               <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                                    {/* Y-Axis Grid */}
                                    {[0, 650, 1300, 1950, 2600].map(y => (
                                        <g key={y}>
                                            <line x1="30" y1={180 - (y/2600)*160} x2="490" y2={180 - (y/2600)*160} stroke="#E5E7EB" strokeWidth="1" />
                                            <text x="25" y={185 - (y/2600)*160} textAnchor="end" fontSize="10" fill="#9CA3AF">{y}</text>
                                        </g>
                                    ))}
                                    {/* Revenue Line */}
                                    <path d={`M ${annualData.revenue.map((d, i) => `${50 + i * (440/5)},${180 - (d/2600)*160}`).join(' L ')}`} fill="none" stroke="#EF4444" strokeWidth="2" />
                                    {annualData.revenue.map((d, i) => <circle key={i} cx={50 + i * (440/5)} cy={180 - (d/2600)*160} r="3" fill="#EF4444" />)}

                                    {/* Patients Line */}
                                    <path d={`M ${annualData.patients.map((d, i) => `${50 + i * (440/5)},${180 - (d/2600)*160}`).join(' L ')}`} fill="none" stroke="#F59E0B" strokeWidth="2" />
                                    {annualData.patients.map((d, i) => <circle key={i} cx={50 + i * (440/5)} cy={180 - (d/2600)*160} r="3" fill="#F59E0B" />)}
                                    
                                    {/* X-Axis Labels */}
                                    {['2019', '2020', '2021', '2022', '2023', '2024'].map((label, i) => (
                                        <text key={label} x={50 + i * (440/5)} y="195" textAnchor="middle" fontSize="10" fill="#9CA3AF">{label}</text>
                                    ))}
                               </svg>
                                <div className="flex justify-center space-x-4 text-sm mt-2">
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-orange mr-2"></span>patients</p>
                                    <p><span className="inline-block w-3 h-3 rounded-full bg-brand-red mr-2"></span>revenue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatistiquesPage;