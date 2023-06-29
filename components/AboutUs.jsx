'use client';

import { motion } from 'framer-motion';

import styles, { layout } from '../app/style';

const AboutUs = () => (
  <section className="px-[25px]" id='aboutus'>
    <div className="flex flex-col md:flex-row justify-center items-center w-full mb-[45px] md:mb-[124px]">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 1.25 }}
        variants={{
          visible: { y: 0, opacity: 1, scale: 1 },
          hidden: { y: 150, opacity: 0, scale: 0 }
        }}
        className="font-poppins font-semibold text-center xs:text-[72px] md:text-[65px] text-[56px] text-white flex flex-col md:flex-row items-center justify-center md:text-5xl lg:text-[72px] italic w-full drop-shadow-2xl px-[50px] my-0 sm:mb-[10px] sm:mt-[60px] text-gradient"
      >
        ¿Quiénes Somos?
      </motion.h1>
    </div>
    <div id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <div className="flex justify-center items-center mb-2">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 1.25 }}
            variants={{
              visible: { x: 0, opacity: 1, scale: 1 },
              hidden: { x: -150, opacity: 0, scale: 0 }
            }}
            className={`${styles.heading2}`}
          >
            Abdo77: Conexión confiable,
            <br className="sm:block hidden" /> velocidad extraordinaria.
          </motion.h2>
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.25 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: -150, opacity: 0, scale: 0 }
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          {' '}
          • En Abdo77 nos especializamos en proveer servicios de Internet,
          transporte y gestión de redes de comunicaciones a empresas, pymes y
          hogares. Nuestro objetivo es ofrecer a nuestros clientes un servicio
          de calidad superior, por lo que contamos con las tecnologías más
          avanzadas en el campo de las telecomunicaciones.
          <br /> <br />• Nuestra red de telecomunicaciones es altamente
          sofisticada, ya que combinamos enlaces de fibra óptica con tecnología
          inalámbrica de última generación, lo que nos permite brindar una
          conexión a Internet sin interrupciones y con un rendimiento
          excepcional. Trabajamos arduamente para garantizar que nuestros
          clientes disfruten de un servicio confiable y de alta velocidad en
          todo momento.
        </motion.p>

        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.25 }}
          variants={{
            visible: { y: 0, opacity: 1, scale: 1 },
            hidden: { y: 200, opacity: 0, scale: 0 }
          }}
          type="button"
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        >
          Get Started
        </motion.button>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.25 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: 200, opacity: 0, scale: 0 }
          }}
          className={`flex flex-row p-6 rounded-[20px]
      'mb-6' feature-card items-center justify-center`}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src="/Star.svg"
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              Excelencia
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              Somos una empresa líder en servicios de internet, comprometida con
              la excelencia y la satisfacción del cliente.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.65 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: 200, opacity: 0, scale: 0 }
          }}
          className={`flex flex-row p-6 rounded-[20px]
      'mb-6' items-center feature-card`}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}
          >
            <img
              src="/Shield.svg"
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3 my-2">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              100% Seguridad
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              Estamos comprometidos en brindarte una experiencia en línea
              protegida y confiable.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 2.05 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: 200, opacity: 0, scale: 0 }
          }}
          className={`flex flex-row p-6 rounded-[20px]
      'mb-6' feature-card items-center justify-center`}
        >
          <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
          >
            <img
              src="/Send.svg"
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              Velocidad
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              Nuestra conexión ultrarrápida te brinda la capacidad de descargar,
              transmitir y explorar con una velocidad sin precedentes.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1.25 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          className={`flex flex-row p-6 
      'mb-6' items-center justify-center`}
        >
          <div
            className={`w-[400px] rounded-[75px] ${styles.flexCenter} my-4 bg-dimBlue py-[27px] px-[10px] hover:scale-110 transition-all duration-[.6s]`}
          >
            <img
              src="/nosotros.jpg"
              alt="star"
              className="w-[90%] h-[99%] object-contain rounded-[65px] hover:scale-105 transition-all duration-[.4s]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUs;
