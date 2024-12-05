'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logos/logo1-svg-trans.svg';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="top-0 w-full z-10 bg-black text-beige font-medium text-xl h-28">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 ">
        {/* Logo */}
        <div className="flex items-center h-48 w-48">
         <Link href={'/'}><Image
            src={logo}
            alt="Logo"
            className="h-full w-full z-50" // Ajusta la altura del logo según sea necesario
            // width={100} // Ajusta el ancho del logo según sea necesario
            // height={40} // Ajusta la altura del logo según sea necesario
          /></Link> 
        </div>

        {/* Menú de navegación en desktop */}
        <ul className="hidden md:flex space-x-6">
       
          <li className=' hover:text-white transition-all duration-300 font-medium'>
            <a href="#about" scroll={false}>
              Estudio
            </a>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <a href="#team" scroll={false}>
              Abogados
            </a>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <a href="#services" scroll={false}>
              Servicios
            </a>
          </li>
          <li className=' hover:text-white transition-all duration-300'>
            <a href="#contact" scroll={false}>
              Contacto
            </a>
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
          } top-0 left-0 w-full h-screen bg-black text-beige flex flex-col justify-center items-center`}
        >
          <ul className="space-y-8 text-center">
            <li className="text-2xl">
              <a href="#about" scroll={false} onClick={handleNav}>
                Estudio
              </a>
            </li>
            <li className="text-2xl">
              <a href="#team" scroll={false} onClick={handleNav}>
                Abogados
              </a>
            </li>
            <li className="text-2xl">
              <a href="#services" scroll={false} onClick={handleNav}>
                Servicios
              </a>
            </li>
            <li className="text-2xl">
              <a href="#contact" scroll={false} onClick={handleNav}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
