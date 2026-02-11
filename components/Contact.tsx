import React from 'react';
import {
    Phone, Mail, MapPin, Send,
    Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

const Contact = () => {
    return (
        <section className="relative w-full bg-zinc-50 dark:bg-black min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
                        Bizimle <span className="text-indigo-600 dark:text-indigo-400">İletişime Geçin</span>
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        Projeleriniz, sorularınız veya iş birlikleri için buradayız.
                        Aşağıdaki formu doldurun veya iletişim kanallarımızdan bize ulaşın.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">

                    {/* Left Side: Contact Info */}
                    <div className="w-full lg:w-2/5 bg-indigo-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-indigo-100">Telefon</h3>
                                        <p className="text-lg">+90 537 428 1563</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-indigo-100">E-Posta</h3>
                                        <p className="text-lg text-indigo-50 hover:text-white transition-colors">
                                            <a href="mailto:info@kayraksoftware.com">info@kayraksoftware.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-indigo-100">Adres</h3>
                                        <p className="text-indigo-50 leading-relaxed">
                                            Teknopark İstanbul, Sanayi Mah.<br />
                                            Teknoloji Bulvarı, No: 1/1C<br />
                                            Pendik, İstanbul
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
                            <div className="flex space-x-4">
                                {[<Facebook key="fb" />, <Twitter key="tw" />, <Instagram key="ig" />, <Linkedin key="li" />].map((icon, i) => (
                                    <a key={i} href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                                        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-3/5 p-10 bg-white dark:bg-zinc-900">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Adınız Soyadınız"
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">E-Posta Adresiniz</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="ornek@mail.com"
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Konu</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Proje / Destek / Diğer"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Mesajınız</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Mesajınızı buraya yazın..."
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-zinc-900 dark:text-white placeholder-zinc-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Mesajı Gönder</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
