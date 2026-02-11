import React from 'react';

const WhyUs = () => {
    const cards = [
        {
            title: "İhtiyaca Özel Yazılım Çözümleri",
            description: "Hazır kalıplar yerine iş modelinizi gerçekten anlayan çözümler üretiriz. Süreçlerinizi analiz eder, ölçeklenebilir ve size özel yazılımlar geliştiririz. Böylece bugün olduğu kadar yarın da işinizi büyüten bir altyapıya sahip olursunuz."
        },
        {
            title: "Güncel Teknolojiler ve Yüksek Performans",
            description: "En güncel yazılım teknolojilerini ve güvenlik standartlarını kullanarak hızlı, güvenli ve sürdürülebilir sistemler geliştiririz. Performansı yüksek, bakım maliyeti düşük çözümler sunarız."
        },
        {
            title: "Şeffaf İletişim ve Sürekli Destek",
            description: "Projenin her aşamasında açık ve şeffaf iletişim kurarız. Sadece yazılım teslim etmekle kalmaz, sonrasında da teknik destek ve danışmanlık sağlayarak uzun vadeli iş ortaklığı kurarız."
        },
        {
            title: "Güvenilirlik ve Veri Güvenliği",
            description: "İş süreçlerinizin ve verilerinizin güvenliğini en üst seviyede tutarız. Uluslararası güvenlik standartlarına uygun geliştirme yapar, düzenli testler ve güncellemelerle sistemlerinizi koruma altında tutarız."
        }
    ];

    return (
        <section id="neden-biz" className="relative w-full py-24 overflow-hidden bg-zinc-50 dark:bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Soft Gradient Blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
                        Neden Biz?
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 dark:border-zinc-800 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 transform rotate-3 group-hover:rotate-6">
                                {/* Updated Icon Style */}
                                <div className="w-8 h-8 border-2 border-blue-500 dark:border-blue-400 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                                {card.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
