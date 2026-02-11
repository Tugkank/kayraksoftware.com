import React from 'react';
import {
    Code2, Globe, Smartphone, Database,
    Search, BarChart,
    Palette, PenTool, Layers,
    BrainCircuit, Cpu, Bot,
    ChevronRight, CheckCircle2
} from 'lucide-react';

const Services = () => {
    return (
        <section className="relative w-full bg-zinc-50 dark:bg-black overflow-hidden">

            {/* Hero Section of Services */}
            <div className="relative py-20 lg:py-32 container mx-auto px-6 text-center z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
                    Dijital Geleceğinizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">İnşa Ediyoruz</span>
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Yazılımdan yapay zekaya, tasarımdan SEO optimizasyonuna kadar uçtan uca dijital çözümler sunuyoruz.
                </p>
            </div>

            {/* 1. YAZILIM */}
            <div className="py-16 md:py-24 bg-white dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center mb-16">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mr-6">
                            <Code2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">Yazılım Geliştirme</h2>
                            <p className="text-zinc-500 dark:text-zinc-400">İşiniz için en modern ve ölçeklenebilir teknolojiler.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* 1.1 Web */}
                        <ServiceCard
                            title="Web Geliştirme"
                            icon={<Globe className="w-6 h-6 text-blue-500" />}
                            items={[
                                "Kurumsal Web Siteleri",
                                "E-Ticaret Sistemleri",
                                "Özel Web Uygulamaları",
                                "Yönetim Panelli (Admin) Sistemler",
                                "SEO Uyumlu & Performans Odaklı Siteler"
                            ]}
                        />

                        {/* 1.2 Mobil */}
                        <ServiceCard
                            title="Mobil Uygulama"
                            icon={<Smartphone className="w-6 h-6 text-purple-500" />}
                            items={[
                                "iOS & Android Native Uygulamalar",
                                "Cross-Platform (Flutter / React Native)",
                                "Kurumsal Mobil Çözümler",
                                "API Entegrasyonlu Uygulamalar"
                            ]}
                        />

                        {/* 1.3 Özel Yazılım */}
                        <ServiceCard
                            title="İhtiyaca Özel Çözümler"
                            icon={<Database className="w-6 h-6 text-emerald-500" />}
                            items={[
                                "CRM / ERP Sistemleri",
                                "İş Takip & Operasyon Yazılımları",
                                "Otomasyon Sistemleri",
                                "SaaS Platform Geliştirme",
                                "Özel Dashboard & Raporlama"
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* 2. SEO */}
            <div className="py-16 md:py-24 bg-zinc-50 dark:bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 blur-3xl opacity-20 rounded-full"></div>
                                <div className="relative bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
                                    <BarChart className="w-16 h-16 text-orange-500 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Arama Motoru Optimizasyonu (SEO)</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                        Web sitenizin arama motorlarında üst sıralarda yer almasını sağlayarak organik trafiğinizi artırıyoruz.
                                        Analiz, strateji ve uygulama ile görünürlüğünüzü maksimize edin.
                                    </p>
                                    <ul className="space-y-3">
                                        {["Anahtar Kelime Analizi", "Teknik SEO Optimizasyonu", "İçerik Stratejisi", "Rakip Analizi", "Backlink Yönetimi"].map((item, i) => (
                                            <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                                                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Görünürlüğünüzü Artırın</h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                                Potansiyel müşterilerinizin sizi bulmasını kolaylaştırıyoruz. Google ve diğer arama motorlarında
                                rakiplerinizin önüne geçin.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* 3. TASARIM */}
            <div className="py-16 md:py-24 bg-white dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Palette className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Kreatif Tasarım Çözümleri</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
                            Markanızın hikayesini estetik ve etkileyici tasarımlarla anlatıyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { title: "Grafik Tasarım", icon: <PenTool className="w-6 h-6" /> },
                            { title: "Reklam Tasarımı", icon: <Layers className="w-6 h-6" /> },
                            { title: "Logo Tasarımı", icon: <Code2 className="w-6 h-6" /> }, // Logo icon variant
                            { title: "Kurumsal Kimlik", icon: <Database className="w-6 h-6" /> },
                            { title: "Afiş ve Broşür", icon: <Palette className="w-6 h-6" /> },
                            { title: "Sosyal Medya", icon: <Globe className="w-6 h-6" /> }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors text-center group cursor-pointer border border-zinc-100 dark:border-zinc-800 hover:border-pink-200">
                                <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform text-pink-500">
                                    {item.icon}
                                </div>
                                <h4 className="font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. YAPAY ZEKA */}
            <div className="py-16 md:py-24 bg-zinc-50 dark:bg-black relative overflow-hidden text-zinc-900 dark:text-white">
                {/* Abstract Background for AI */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-zinc-50 dark:via-black to-zinc-50 dark:to-black"></div>

                <div className="container relative mx-auto px-6 z-10">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="sticky top-24">
                                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-indigo-200 dark:border-indigo-500/30">
                                    <BrainCircuit className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Yapay Zeka Teknolojileri</h2>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                                    Geleceğin teknolojisini iş süreçlerinize entegre edin. Yapay zeka çözümlerimizle verimliliğinizi artırın
                                    ve rakiplerinizden bir adım öne geçin.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Makine Öğrenimi", desc: "Verilerden öğrenen akıllı algoritmalar.", icon: <Cpu /> },
                                { title: "Doğal Dil İşleme (NLP)", desc: "Metin ve konuşma anlama sistemleri.", icon: <Search /> },
                                { title: "Görüntü İşleme", desc: "Görsel veri analizi ve tanıma.", icon: <Layers /> },
                                { title: "Özelleştirilmiş AI", desc: "İşinize özel yapay zeka modelleri.", icon: <BrainCircuit /> },
                                { title: "Model Geliştirme", desc: "Yüksek doğruluklu tahmin modelleri.", icon: <BarChart /> },
                                { title: "Veri Analizi", desc: "Büyük veri işleme ve anlamlandırma.", icon: <Database /> },
                                { title: "Metin Analizi", desc: "İçerik sınıflandırma ve özetleme.", icon: <PenTool /> },
                                { title: "Chatbot Geliştirme", desc: "7/24 hizmet veren akıllı asistanlar.", icon: <Bot /> }
                            ].map((item, index) => (
                                <div key={index} className="p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500/50 transition-colors group shadow-sm">
                                    <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300">
                                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 mr-3" })}
                                        <h4 className="font-bold text-zinc-900 dark:text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

// Helper Component for Service Cards (Software Section)
const ServiceCard = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) => (
    <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
        </div>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full flex-shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default Services;
