import React from 'react';
import { Target, Globe, Lightbulb, Zap } from 'lucide-react';

const MissionVision = () => {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-black overflow-hidden relative">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Mission Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-xl">
                                <Target className="w-8 h-8 text-red-600 dark:text-red-400" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Misyonumuz</h2>
                        </div>

                        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Teknolojiyi sadece kod yazmak olarak değil, <span className="font-semibold text-zinc-900 dark:text-white">problem çözme sanatı</span> olarak görüyoruz.
                                İşletmelerin ihtiyaçlarını doğru analiz ederek; sürdürülebilir, ölçeklenebilir ve güvenli yazılım çözümleri geliştiriyoruz.
                            </p>
                            <p>
                                Müşterilerimizin operasyonlarını hızlandıran, verimliliğini artıran ve dijital dönüşümünü güçlendiren sistemler üretmeyi hedefliyoruz.
                                Her projeye; <span className="font-semibold text-zinc-900 dark:text-white">performans, kullanıcı deneyimi ve uzun vadeli sürdürülebilirlik</span> odağında yaklaşıyoruz.
                            </p>
                            <p className="border-l-4 border-red-500 pl-4 italic text-zinc-500 dark:text-zinc-500">
                                "Kaliteli yazılımın; doğru mimari, temiz kod ve güçlü iletişimle mümkün olduğuna inanıyoruz."
                            </p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="flex flex-col justify-center space-y-6 relative">
                        {/* Visual Connector for Desktop */}
                        <div className="hidden lg:block absolute left-[-40px] top-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"></div>

                        <div className="flex items-center space-x-3 mb-2">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl">
                                <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Vizyonumuz</h2>
                        </div>

                        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            <p>
                                Yenilikçi teknolojileri yakından takip eden ve uygulayan, <span className="font-semibold text-zinc-900 dark:text-white">global ölçekte rekabet edebilen</span> bir yazılım markası olmak.
                            </p>
                            <p>
                                Sadece yazılım geliştiren değil; sektöre yön veren, modern mimari yaklaşımları benimseyen ve yüksek performanslı sistemler üreten bir teknoloji şirketi haline gelmek.
                            </p>

                            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 mt-4">
                                <div className="flex items-start space-x-3">
                                    <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm md:text-base">
                                        Geleceğin dijital dünyasında; güvenilir, hızlı ve kullanıcı odaklı çözümlerimizle işletmelerin <span className="font-bold text-indigo-600 dark:text-indigo-400">vazgeçilmez teknoloji partneri</span> olmayı amaçlıyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;
