'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { fadeIn } from '../utils/motion';
import DropdownButton from './DropdownButton';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY != 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main className="flex justify-center">
      <motion.nav
        variants={fadeIn('down', 'spring', 0.25, 0.75)}
        initial="hidden"
        whileInView="show"
        className={`flex flex-row justify-between items-center bg-white bg-opacity-[16%] backdrop-filter backdrop-blur-sm h-20 p-6 md:p-12 w-[89%] m-auto fixed drop-shadow-xl shadow-xl z-20 font-[17.5px] ${
          scrolling
            ? 'top-0 w-full rounded-none md:p-6 h-[90px]'
            : 'top-[20px] rounded-xl justify-between'
        }`}
      >
        <div className="flex items-center justify-center">
          <img
            className="w-[200px] mr-10"
            src="/abdologo.png"
            alt="abdo_logo"
          />
        </div>
        <ul
          
          className={`hidden md:flex flex-row justify-end gap-6 font-medium text-white [&>li]:cursor-pointer static top-[80px] p-4 text-center  ${
            scrolling ? 'top-12 w-full rounded-b-xl justify-end' : ''
          }`}
        >
          <a href="/">
            <li className="text-gradient1 transition-all">Inicio</li>
          </a>
          <a href="#nosotros">
            <li className="text-gradient1 transition-all">Nosotros</li>
          </a>
          <a href="#planes">
            <li className="text-gradient1 transition-all">Planes</li>
          </a>

          <a href="#preguntas">
            <li className="text-gradient1 transition-all">Preguntas</li>
          </a>

          <a href="#contacto">
            <li className="text-gradient1 transition-all">Contacto</li>
          </a>
        </ul>

        {/* Menu responsive */}
        <div className="md:hidden ">
          <NavbarMenu />
        </div>
      </motion.nav>
    </main>
  );
};

export default Navbar;
