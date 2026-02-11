"use client";

import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md shadow-md py-2"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Kayrak Software Logo"
              width={293}
              height={98}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "ANASAYFA", href: "/" },
            { name: "HİZMETLERİMİZ", href: "/hizmetlerimiz" },
            { name: "HAKKIMIZDA", href: "/hakkimizda" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm tracking-widest group"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            href="/iletisim"
            className="px-6 py-2 bg-white text-black font-semibold text-sm tracking-widest rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            İLETİŞİM
          </Link>
        </div>

        {/* Mobile Menu Button - Optional, add later */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
