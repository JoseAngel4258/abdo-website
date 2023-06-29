'use client';

import styles from '../app/style';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

import { useRef, useEffect } from 'react';


const Hero = () => {
  const buttonRef = useRef();
  useEffect(() => {
    const applyContainerProperties = () => {
      buttonRef.current.classList.add('effect-container');
    };

    const applyStyles = e => {
      const { offsetX, offsetY } = e;
      const { style } = buttonRef.current;
      const sizeOffset = 50;

      style.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
      style.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
    };

    const onClick = e => {
      buttonRef.current.classList.remove('active');
      applyStyles(e);
      buttonRef.current.classList.add('active');
    };

    applyContainerProperties();

    buttonRef.current.addEventListener('mouseup', onClick);

    const cleanupRef = buttonRef.current;

    return () => {
      cleanupRef.removeEventListener('mouseup', onClick);
    };
  });

  return (
    <section className="flex flex-col min-[900px]:flex-row justify-center items-center h-[1600px] min-[768px]:h-[900px] min-[1440px]:h-[980px] w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full min-[900px]:w-[60%] px-[34px] xl:px-[7px] min-[768px]:mt-[280px] min-[900px]:mt-[24px] mt-[0px] max-[360px]:mt-[90px] min-[390px]:-mt-[120px] lg:mt-[100px]">
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.85)}
            initial="hidden"
            animate="show"
          
            className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5"
          >
            <img src="/oferta.svg" alt="oferta" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Router</span> Instalación{' '}
              <span className="text-white">Fibra </span> 15 días gratis{' '}
              <span className="text-white">110$</span>
            </p>
          </motion.div>

          <div className="flex flex-row justify-between items-center w-full">
            <motion.h1
              variants={fadeIn('left', 'spring', 0.65, 0.75)}
              initial="hidden"
              animate="show"
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
            >
              ¡Internet <br className="sm:block hidden" />{' '}
            </motion.h1>
          </div>
          <motion.div
            variants={fadeIn('right', 'spring', 0.80, 0.75)}
            initial="hidden"
            animate="show"
          >
            <span className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100.8px] leading-[75px]">
              al servicio
            </span>{' '}
          </motion.div>

          <motion.h1
            variants={fadeIn('left', 'spring', 0.95, 0.75)}
            initial="hidden"
            animate="show"
            className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          >
            de todos!
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 'spring', 1.1, 0.75)}
            initial="hidden"
            animate="show"
            className={`${styles.paragraph} max-w-[470px] mt-5`}
          >
            En Abdo77 nos especializamos en proveer servicios de Internet.
            Nuestro objetivo es ofrecer a nuestros clientes un servicio de
            calidad superior, por lo que contamos con las tecnologías más
            avanzadas en el campo de las telecomunicaciones.
          </motion.p>
          <div className="w-full flex  items-center pt-[35px]">
            <motion.button
              ref={buttonRef}
              type="button"
              variants={fadeIn('right', 'spring', 0.95, 0.75)}
              initial="hidden"
              animate="show"
              className="rounded-xl border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm md:text-[15px] font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 text-gradient"
            >
              <a href="#aboutus">Ver más...</a>
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 110, x: 60, opacity: 0 }}
        animate={{ y: 50, x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          delay: 1,
          duration: 1,
          ease: 'easeOut'
        }}
        className="w-[430px] md:w-[40%] -mt-[25px] md:mt-0 max-[281px]:w-[90%] max-[281px]:mb-[55px]"
      >
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 mt-14 relative left `}
        >
          <div>
            <img
              src="/robot.png"
              alt="billing"
              className="object-cover relative z-[5]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
