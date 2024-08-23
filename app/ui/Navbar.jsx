'use client';

import Image from 'next/image';
import logo from '@/public/logos/logo1-svg-trans.svg';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="fixed top-0 w-full z-10 bg-black text-beige font-medium h-28">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 ">
        {/* Logo */}
        <div className="flex items-center  h-52 w-52">
          <Image
            src={logo}
            alt="Logo"
            className="h-full w-full" // Ajusta la altura del logo según sea necesario
            // width={100} // Ajusta el ancho del logo según sea necesario
            // height={40} // Ajusta la altura del logo según sea necesario
          />
        </div>

        {/* Menú de navegación en desktop */}
        <ul className="hidden md:flex space-x-6">
       
          <li className=' hover:text-white transition-all duration-300'>
            <Link href="#about" scroll={false}>
              Estudio
            </Link>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <Link href="#services" scroll={false}>
              Abogados
            </Link>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <Link href="#portfolio" scroll={false}>
              Servicios
            </Link>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <Link href="#contact" scroll={false}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Menu hamburguesa */}
        <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
          {nav ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? 'absolute' : 'hidden'
          } top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center`}
        >
          <ul className="space-y-8 text-center">
            <li className="text-2xl">
              <Link href="#home" scroll={false} onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="#about" scroll={false} onClick={handleNav}>
                About
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="#services" scroll={false} onClick={handleNav}>
                Services
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="#portfolio" scroll={false} onClick={handleNav}>
                Portfolio
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="#contact" scroll={false} onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
