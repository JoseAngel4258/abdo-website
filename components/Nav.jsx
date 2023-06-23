'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import { navVariants } from '../utils/motion';
import { navButtonVariants } from '../utils/motion';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <main className="flex justify-center">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`flex justify-between items-center bg-white bg-opacity-[16%] backdrop-filter backdrop-blur-sm h-20 p-6 md:p-12 w-[89%] m-auto fixed drop-shadow-xl z-20 ${
          scrolling
            ? `top-0 w-full rounded-none md:p-6`
            : 'fixed top-[20px] rounded-xl justify-between'
        }`}
      >
        <div className="flex items-center justify-center">
          <img className="w-[240px]" src="/abdologo.png" alt="abdo_logo" />
        </div>
        <motion.ul
          variants={navButtonVariants}
          initial="hidden"
          whileInView="show"
          className={`md:flex flex-row gap-12 font-medium text-white [&>li]:cursor-pointer static top-[80px] p-4 text-center hidden  ${
            openMenu ? 'hidden' : ''
          } ${
            scrolling && openMenu
              ? 'top-12 w-full rounded-b-xl'
              : 'rounded-b-xl right-7'
          } ${window.scrollY != 0 ? '' : ''}`}
        >
          <a href="/">
            <li className="hover:text-blue-400">Inicio</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Nosotros</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Planes</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Oficinas</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Preguntas Frecuentes</li>
          </a>
          <a href="/">
            <li className="hover:text-blue-400">Contacto</li>
          </a>
        </motion.ul>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          <button onClick={menuHandler} aria-label="Menu">
            {openMenu ? (
              <GrClose size={25} />
            ) : (
              <FiMenu className="text-white" size={25} />
            )}
          </button>
        </div>
      </motion.nav>
    </main>
  );
};

export default Navbar;
