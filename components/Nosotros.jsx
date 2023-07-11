'use client';

import { features } from '../constants';
import styles, { layout } from '../app/style';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { TitleText } from './CustomTexts';

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card transition-all`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Nosotros = () => (
  <section className="mt-[-220px] md:mt-0" id="nosotros">
    <div className="mb-[62px]">
      <TitleText title={<>¿Quienés somos?</>} textStyles="text-center" />
    </div>
    <div className={`px-[25px] ${layout.section}`}>
      <div className={layout.sectionInfo}>
        <motion.h1
          variants={fadeIn('right', 'spring', 0.5, 0.85)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className={styles.heading2}
        >
          Somos <font className="text-gradient">Abdo77</font>: Conexión{' '}
          <font className="text-gradient">confiable</font>,{' '}
          <br className="sm:block hidden" /> velocidad{' '}
          <font className="text-gradient">extraordinaria</font>.
        </motion.h1>
        <motion.p
          variants={fadeIn('right', 'spring', 0.55, 1.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className={`${styles.paragraph} max-w-[470px] mt-5 p-3`}
        >
          En Abdo77, nos dedicamos a proporcionar servicios de Internet de alta
          velocidad y confiable a través de la tecnología de fibra óptica y
          antenas. Estamos comprometidos con brindar a nuestros clientes una
          conexión a Internet rápida y estable, para que puedan disfrutar de una
          experiencia en línea sin interrupciones.
        </motion.p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Nosotros;
