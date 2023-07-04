'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TitleText } from '.';
import { fadeIn } from '../utils/motion';

import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_03z1las',
        'template_we9wzca',
        {
          from_name: form.name,
          to_name: 'Abdo77',
          from_email: form.email,
          to_email: 'josebravojs1810@gmail.com',
          message: form.message
        },
        'uMeTjU2i0QTqX716w'
      )
      .then(
        () => {
          setLoading(false);
          alert(
            'Gracias. ¡Nos pondremos en contacto contigo tan pronto como sea posible!'
          );

          setForm({
            name: '',
            email: '',
            message: ''
          });
        },
        error => {
          setLoading(false);
          console.error(error);

          alert('Ahh, algo ha salido mal. Por favor inténtalo de nuevo.');
        }
      );
  };

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
    <div class="container my-24 mx-auto md:px-6">
      <section
      id='contacto' class="mb-32 text-center">
        <TitleText
          title={<>¡Ponte en contacto con nosotros!</>}
          textStyles="text-center"
        />
        <div class="py-12 md:px-12">
          <div class="container mx-auto xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
              <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                {/* Contenedor contacto */}
                <motion.div
                  variants={fadeIn('right', 'spring', 0.5, 0.85)}
                  initial="hidden"
                  whileInView="show"
                  class="relative z-[1] block rounded-xl bg-white bg-opacity-[16%] backdrop-filter backdrop-blur-sm px-6 py-12  md:px-12 lg:-mr-14 drop-shadow-xl shadow-lg"
                >
                  <h2 class="mb-12 text-3xl font-bold text-white">
                    ¡Contáctanos!
                  </h2>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                  >
                    <div class="relative mb-6">
                      <div className="w-full flex">
                        <label class="block mb-2 text-sm font-medium text-white">
                          Nombre
                        </label>
                      </div>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 focus:outline-none"
                        placeholder="¿Cuál es tu nombre?"
                        required
                      />
                    </div>

                    <div class="relative mb-6">
                      <div className="w-full flex">
                        <label class="block mb-2 text-sm font-medium text-white">
                          Correo
                        </label>
                      </div>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 focus:outline-none"
                        placeholder="¿Cuál es tu correo electrónico?"
                        required
                      />
                    </div>

                    <div class="relative mb-6">
                      <div className="w-full flex">
                        <label class="block mb-2 text-sm font-medium text-white">
                          Mensaje
                        </label>
                      </div>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block w-full p-2.5 focus:outline-none"
                        placeholder="¿Quieres contarnos algo?"
                        required
                      />
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <motion.button
                        ref={buttonRef}
                        type="submit"
                        className="rounded-xl border-[2px] border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 font-bold hover:cursor-pointer w-[100px] flex items-center justify-center"
                      >
                        {loading ? 'Enviando...' : 'Enviar'}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
              <motion.div 
              variants={fadeIn('left', 'spring', 0.5, 0.85)}
              initial="hidden"
              whileInView="show"
              class="md:mb-12 lg:mb-0">
                <div class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=36M9+9P8,%20Troncal11,%20G%C3%BCig%C3%BCe%202010,%20Carabobo+(My%20BusinInversiones%20ABDO%2077%20C.A.ess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    class="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
