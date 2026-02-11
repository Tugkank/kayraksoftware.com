import React from 'react';
import {
    Globe2, Zap, Rocket, Users,
    Cpu, Target, BarChart3, ShieldCheck,
    Lightbulb, RefreshCw, Layers
} from 'lucide-react';
import Image from 'next/image';

const About = () => {
    return (
        <section className="relative w-full bg-white dark:bg-black overflow-hidden font-sans">

            {/* 1. HERO / GLOBAL MINDSET */}
            <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                            <Globe2 className="w-4 h-4 mr-2" />
                            Global Vizyon, Yerel Çözümler
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight">
                            Dijital Dönüşümün <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Gücüyle Büyüyün
                            </span>
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                            Kayrak Software olarak, sınırları aşan teknolojiler üretiyoruz. İşletmenizi sadece bugüne değil,
                            geleceğin dijital dünyasına hazırlıyoruz. Her satır kodda mükemmelliği hedefliyor,
                            dünya standartlarında yazılım çözümleri sunuyoruz.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        {/* Abstract Decor Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                        <div className="relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                                        <Zap className="w-8 h-8 text-amber-500 mb-2" />
                                        <h3 className="font-bold text-zinc-800 dark:text-white">Hızlı</h3>
                                        <p className="text-xs text-zinc-500">Optimize edilmiş kod yapısı</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                                        <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
                                        <h3 className="font-bold text-zinc-800 dark:text-white">Güvenli</h3>
                                        <p className="text-xs text-zinc-500">Üst düzey veri koruma</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-8">
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                                        <Rocket className="w-8 h-8 text-blue-500 mb-2" />
                                        <h3 className="font-bold text-zinc-800 dark:text-white">Ölçeklenebilir</h3>
                                        <p className="text-xs text-zinc-500">Büyüyen iş hacmine uygun</p>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
                                        <Lightbulb className="w-8 h-8 text-purple-500 mb-2" />
                                        <h3 className="font-bold text-zinc-800 dark:text-white">Yenilikçi</h3>
                                        <p className="text-xs text-zinc-500">En son teknolojiler</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. NASIL ÇALIŞIYORUZ (PROCESS) */}
            <div className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Nasıl Çalışıyoruz?</h2>
                        <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            Şeffaf, çevik ve sonuç odaklı bir süreç yönetimi ile projelerinizi hayata geçiriyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Analiz & Planlama", desc: "İhtiyaçlarınızı dinliyor, stratejik yol haritasını belirliyoruz.", icon: <Target /> },
                            { step: "02", title: "Tasarım & UX", desc: "Kullanıcı deneyimini ön planda tutan modern arayüzler tasarlıyoruz.", icon: <Layers /> },
                            { step: "03", title: "Geliştirme", desc: "Clean code prensipleriyle güçlü ve güvenli altyapıyı kuruyoruz.", icon: <Cpu /> },
                            { step: "04", title: "Test & Teslimat", desc: "Detaylı test süreçlerinden sonra projenizi canlıya alıyoruz.", icon: <Rocket /> }
                        ].map((item, index) => (
                            <div key={index} className="relative bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800 group hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute top-4 right-4 text-5xl font-bold text-zinc-100 dark:text-zinc-800 select-none group-hover:text-indigo-500/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 relative z-10">{item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm relative z-10">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. TEKNOLOJİ YAKLAŞIMI */}
            <div className="py-20 bg-white dark:bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                                Geleceğin Teknolojileriyle <br />
                                <span className="text-indigo-600 dark:text-indigo-400">Bugünden Tanışın</span>
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Sadece popüler olanı değil, projenize en uygun ve sürdürülebilir teknolojiyi seçiyoruz.
                                Modern web teknolojileri, bulut mimariler ve yapay zeka entegrasyonlarıyla sistemlerinizi güçlendiriyoruz.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Next.js & React</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">TypeScript</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Node.js Solution</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Yapay Zeka Modülleri</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Bulut Mimarisi</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Modern UI/UX</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            {/* Visual representation of tech stack or code */}
                            <div className="bg-zinc-900 rounded-xl p-6 shadow-2xl border border-zinc-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="space-y-2 font-mono text-sm">
                                    <div className="flex">
                                        <span className="text-pink-500 mr-2">const</span>
                                        <span className="text-blue-400 mr-2">solution</span>
                                        <span className="text-white">=</span>
                                        <span className="text-yellow-300 ml-2">async</span>
                                        <span className="text-purple-400 ml-2">()</span>
                                        <span className="text-white ml-2">=&gt;</span>
                                        <span className="text-white ml-2">{`{`}</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-pink-500 mr-2">await</span>
                                        <span className="text-green-400">Analysis.depth();</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-pink-500 mr-2">const</span>
                                        <span className="text-blue-400 mr-2">result</span>
                                        <span className="text-white">=</span>
                                        <span className="text-yellow-300 ml-2">new</span>
                                        <span className="text-green-400 ml-2">FutureTech();</span>
                                    </div>
                                    <div className="pl-6 flex">
                                        <span className="text-pink-500 mr-2">return</span>
                                        <span className="text-orange-400">result.success;</span>
                                    </div>
                                    <div className="text-white">{`}`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. İSTATİSTİKLER (STATS) */}
            <div className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { number: "50+", label: "Tamamlanan Proje", icon: <CheckCircle /> },
                            { number: "%100", label: "Müşteri Memnuniyeti", icon: <Users /> },
                            { number: "7/24", label: "Teknik Destek", icon: <RefreshCw /> },
                            { number: "5+", label: "Yıl Deneyim", icon: <BarChart3 /> }
                        ].map((stat, index) => (
                            <div key={index} className="px-4">
                                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-indigo-200 text-sm md:text-base font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

// Helper Icon for Stat (can be replaced or imported)
const CheckCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);


export default About;
