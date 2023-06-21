'use client';

import styles from '../app/style';

import { motion } from 'framer-motion';

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
    <section className="flex flex-col md:flex-row justify-center items-center h-[1050px] md:h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-screen md:w-[60%] px-[64px] xl:px-[7px] mt-[35px] md:-mt-[24px] md:pt-0 pt-[-135px]">
        <div className="w-screen md:w-full">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1.25
            }}
            className="flex flex-col md:flex-row items-center justify-center text-[51px] md:text-[60px] lg:text-[66px] text-white font-bold w-full text-center drop-shadow-2xl mt-[110px] md:mt-[74px] md:w-full px-[12px] sm:px-[24px] md:px-[6px] lg:px-[44px] text-gradient mb-[21px]"
          >
            ¡Internet al servicio de todos!
          </motion.h1>
          
        </div>
        <motion.button
          ref={buttonRef}
          type="button"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 1.4
          }}
          className="rounded-md border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm md:text-[15px] font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 text-gradient"
        >
          Ver más...
        </motion.button>
      </div>
      <motion.div
        initial={{ y: 110, x: 60, opacity: 0 }}
        animate={{ y: 50, x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 1.5
        }}
        className="w-[430px] md:w-[40%] -mt-[25px] md:mt-0"
      >
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 mt-14 relative left`}
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
