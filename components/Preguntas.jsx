'use client';

import React, { useState } from 'react';
import { TitleText } from '.';
import { motion } from 'framer-motion';
import { fadeIn, textVariant2 } from '../utils/motion';

const Preguntas = () => {
  return (
    <section id="preguntas" className="text-white mt-6">
      <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-full text-center lg:mb-20">
              <div className="w-full flex items-center justify-center">
                <TitleText
                  title={<>¿Alguna pregunta?</>}
                  textStyles="text-center"
                />
              </div>
              <motion.p
                variants={textVariant2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="text-base text-body-color"
              >
                Estas son algunas de las preguntas más frecuentes que suelen
                tener nuestros clientes.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              variants={fadeIn('right', 'spring', 0.4, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <AccordionItem
                header="¿A qué zonas de Güigüe llega Abdo77?"
                text="Los Garcías, Las Tiamitas, Guaica, El Venado, La Linda, Güigüe, Inavi, Parque Azul, Buena Ventura, Parque Encantado, El Uno, La Aduana, La Primavera, 5 de Julio, Pared de Piedra, el Trompillo y Las Colonias."
              />
            </motion.div>

            <motion.div
              variants={fadeIn('right', 'spring', 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <AccordionItem
                header="¿Cómo realizo mi solicitud de instalación?"
                text="Puedes dirigirte a nuestra oficina principal, Inversiones ABDO 77 C.A., ubicada en la Avenida Miranda, Local N° 2, Güigüe (al frente de MRW) o escribiéndonos a nuestro número de teléfono por WhatsApp:"
                tlfPrincipal="+58 412-8322236"
              />
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'spring', 0.4, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <AccordionItem
                header="¿Cómo contacto al servicio técnico?"
                text="Escribiéndonos a nuestro número de teléfono por WhatsApp:"
                tlfTecnico="+58 414-8829287"
              />
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              variants={fadeIn('left', 'spring', 0.6, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              {' '}
              <AccordionItem
                header="¿Qué planes tienen para el área residencial y el área corporativa?"
                text="Planes desde 30Mbps hasta 100Mbps."
              />
            </motion.div>

            <motion.div
              variants={fadeIn('left', 'spring', 0.5, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              {' '}
              <AccordionItem
                header="¿Cómo puedo medir la velocidad de mi internet?"
                text="Recomendamos que utilices este link: "
                link="https://www.speedtest.net"
              />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'spring', 0.6, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <AccordionItem
                header="¿Se cae la conexión si llueve?"
                text="No, el servicio de fibra óptica no se ve afectado por las condiciones climatológicas."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preguntas;

const AccordionItem = ({ header, text, link, tlfPrincipal, tlfTecnico }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-xl bg-white bg-opacity-[16%] backdrop-filter backdrop-blur-sm p-4 sm:p-8 lg:px-6 xl:px-8 shadow-xl">
      <button
        className={`faq-btn flex w-full text-left items-center justify-center`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-white bg-opacity-5 text-white">
          <svg
            className={`duration-200 ease-in-out fill-white stroke-white ${
              active ? 'rotate-180' : ''
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-white">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">
          {text}{' '}
          <a
            className="text-blue-600 underline hover:text-blue-500"
            Target="_blank"
            href="https://www.speedtest.net"
          >
            {link}
          </a>
          <a
            className="text-green-600 underline hover:text-green-500"
            Target="_blank"
            href="https://wa.me/584128322236"
          >
            {tlfPrincipal}
          </a>
          <a
            className="text-green-600 underline hover:text-green-500"
            Target="_blank"
            href="https://wa.me/584148829287"
          >
            {tlfTecnico}
          </a>
        </p>
      </div>
    </div>
  );
};
