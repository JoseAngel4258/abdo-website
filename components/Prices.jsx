'use client';
import { prices } from '../constants';
import styles from '../app/style';
import { motion } from 'framer-motion';

const Prices = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 1.25 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      className={`${styles.flexCenter} flex-row flex-wrap overflow-hidden`}
    >
      {prices.map(price => (
        <div
          key={price.id}
          className={`flex-1 flex justify-center items-center flex-row`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {price.price}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {price.service}
          </p>
        </div>
      ))}
    </motion.section>
  );
};

export default Prices;
