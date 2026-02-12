import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-48">
                            {/* Placeholder for Logo if image fails, or use text as fallback */}
                            <Image
                                src="/logo.png"
                                alt="Kayrak Software"
                                width={180}
                                height={60}
                                className="w-auto h-12 object-contain"
                            />
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Dijital dünyada iz bırakmanız için yenilikçi yazılım çözümleri üretiyoruz.
                            Geleceği bugünden kodluyoruz.
                        </p>
                        <div className="flex space-x-4">
                            {[<Facebook key="fb" />, <Twitter key="tw" />, <Instagram key="ig" />, <Linkedin key="li" />].map((icon, i) => (
                                <a key={i} href="#" className="p-2 bg-neutral-800 rounded-lg hover:bg-indigo-600 hover:text-white text-neutral-400 transition-all duration-300">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-indigo-500 pl-3">Hızlı Linkler</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Anasayfa", href: "/" },
                                { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
                                { name: "Hakkımızda", href: "/hakkimizda" },
                                { name: "İletişim", href: "/iletisim" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-neutral-400 hover:text-indigo-400 text-sm flex items-center group transition-colors">
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Optional - can be replaced with more links) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-indigo-500 pl-3">Hizmetler</h3>
                        <ul className="space-y-3">
                            {[
                                "Web Yazılım",
                                "Mobil Uygulama",
                                "SEO & Dijital Pazarlama",
                                "UI/UX Tasarım",
                                "Yapay Zeka Çözümleri"
                            ].map((service, index) => (
                                <li key={index}>
                                    <span className="text-neutral-400 text-sm cursor-default hover:text-indigo-400 transition-colors">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-indigo-500 pl-3">İletişim</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-indigo-500 mt-0.5" />
                                <span className="text-neutral-400 text-sm">
                                    Teknopark İstanbul, Sanayi Mah.<br />
                                    Teknoloji Bulvarı, No: 1/1C<br />
                                    Pendik, İstanbul
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-indigo-500" />
                                <span className="text-neutral-400 text-sm">+90 537 428 1563</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-indigo-500" />
                                <a href="mailto:info@kayraksoftware.com" className="text-neutral-400 hover:text-white text-sm transition-colors">
                                    info@kayraksoftware.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-neutral-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Kayrak Software. Tüm halkarı saklıdır.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
