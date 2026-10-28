"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ANASAYFA", href: "/" },
  { name: "HİZMETLERİMİZ", href: "/hizmetlerimiz" },
  { name: "HAKKIMIZDA", href: "/hakkimizda" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md shadow-md py-2">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo.png"
                alt="Kayrak Software Logo"
                width={293}
                height={98}
                className="h-11 w-auto sm:h-14 md:h-16 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm tracking-widest group"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/iletisim"
              className="px-6 py-2 bg-white text-black font-semibold text-sm tracking-widest rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              İLETİŞİM
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-[60px] sm:top-[64px] z-40 bg-black/50" aria-hidden onClick={closeMenu} />
      )}

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-neutral-900 border-t border-neutral-800 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="py-3 text-gray-200 hover:text-white font-medium text-sm tracking-wider border-b border-neutral-800 last:border-0"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={closeMenu}
            className="mt-3 py-3 text-center bg-white text-black font-semibold text-sm tracking-widest rounded-full hover:bg-gray-200 transition-colors"
          >
            İLETİŞİM
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
