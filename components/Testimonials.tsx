import React from 'react';
import { Star, Quote, Users, CheckCircle, Headphones, Building2 } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-900/50 relative overflow-hidden">

            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">Başarı Hikayeleri</span>
                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mt-3 mb-6">
                    Müşterilerimiz Ne Diyor?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                    İş ortaklarımızla kurduğumuz güçlü bağlar ve başarı odaklı projelerimizden yansımalar.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="container mx-auto px-6 relative z-10 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Ahmet Yılmaz",
                            role: "CEO, TechVenture",
                            content: "Kayrak Software ile çalışmak projemizin kaderini değiştirdi. Beklentimizin çok ötesinde, ölçeklenebilir ve modern bir altyapı sundular. Ekibin iletişimi harikaydı.",
                            stars: 5,
                            avatarColor: "bg-blue-100 text-blue-600"
                        },
                        {
                            name: "Elif Demir",
                            role: "Pazarlama Müdürü, NovaCreative",
                            content: "Web sitemizin yenilenme sürecinde gösterdikleri titizlik ve yaratıcı çözümler için teşekkürler. Müşteri geri dönüşlerimiz %40 arttı. Kesinlikle tavsiye ediyorum.",
                            stars: 5,
                            avatarColor: "bg-purple-100 text-purple-600"
                        },
                        {
                            name: "Mehmet Özkan",
                            role: "Kurucu, E-Ticaret A.Ş.",
                            content: "Özel yazılım ihtiyacımızı tam olarak anlayan ve buna uygun, hızlı çalışan bir çözüm üreten nadir firmalardan. Destek süreçleri de çok hızlı.",
                            stars: 5,
                            avatarColor: "bg-emerald-100 text-emerald-600"
                        }
                    ].map((review, index) => (
                        <div key={index} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800 hover:-translate-y-2 transition-transform duration-300 relative group">
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-zinc-200 dark:text-zinc-800 group-hover:text-indigo-100 dark:group-hover:text-indigo-900/20 transition-colors" />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 relative z-10 leading-relaxed min-h-[100px]">
                                "{review.content}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${review.avatarColor}`}>
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">{review.name}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-indigo-600 dark:bg-indigo-900 py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">

                        <div className="flex flex-col items-center p-4">
                            <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">50+</div>
                            <div className="text-indigo-100 font-medium text-lg">Mutlu Müşteri</div>
                        </div>

                        <div className="flex flex-col items-center p-4">
                            <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">100+</div>
                            <div className="text-indigo-100 font-medium text-lg">Tamamlanan Proje</div>
                        </div>

                        <div className="flex flex-col items-center p-4">
                            <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                <Headphones className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">7/24</div>
                            <div className="text-indigo-100 font-medium text-lg">Teknik Destek</div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;
