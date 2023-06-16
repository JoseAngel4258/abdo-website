'use client';

import styles from '../app/app';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { useRef, useEffect } from 'react';

import { slideIn, textVariant } from '../utils/motion';

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
    <section className="flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-[42%] md:w-[60%] px-[64px] xl:px-[84px]  md:mt-0">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 1.25
          }}
          className="flex flex-col md:flex-row items-center justify-center text-[36px] md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold italic w-full text-center drop-shadow-2xl mt-[20px] md:mt-0 mb-8"
        >
          Internet al servicio de todos.
        </motion.h1>
        <motion.button
          ref={buttonRef}
          type="button"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            duration: 1.35
          }}
          className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
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
        className="w-[58%] md:w-[40%] -mt-[25px] md:mt-0"
      >
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div>
            <img
              src="/robot.png"
              alt="billing"
              className="object-cover relative z-[5]"
            />
          </div>
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </motion.div>

      <div className="background relative -z-50">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
