"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Mass Tort", href: "/mass-tort", dropdown: true },
  { name: "Class Action", href: "/class-action", dropdown: true },
  { name: "Personal Injury", href: "/personal-injury", dropdown: true },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-4 pt-3">
        <nav className="bg-white rounded-2xl shadow-lg px-5 lg:px-20 py-4 flex items-center justify-between">

          <ul className="hidden lg:flex items-center gap-8  text-[#004E97]font-medium  pl-5 pr-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1  text-[#004E90] transition"
                >
                  {item.name}
                  {item.dropdown && (
                    <span className="bg-yellow-400 text-white rounded-md p-[2px]">
                      <ChevronDown size={14} />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="tel:8882021350"
              className="flex items-center gap-3 bg-[#004E90] text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
            >
              <span className="bg-yellow-400 text-blue-800 p-2 rounded-full">
                <Phone size={16} />
              </span>
              (888) 202-1350
            </a>
          </div>

          {/* Mobile Menu Button */}
         <button
           onClick={() => setOpen(!open)}
          className="lg:hidden ml-auto text-[#004E90] w-10 h-10 flex items-center justify-center">{open ? <X size={26} /> : <Menu size={26} />}</button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-6 space-y-4 justify-center items-center flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#004E90] font-medium"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:8882021350"
              className="flex justify-center items-center gap-3 bg-[#004E90] text-white px-6 py-3 rounded-full"
            >
              <Phone size={16} />
              (888) 202-1350
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
