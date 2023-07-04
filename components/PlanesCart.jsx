'use client';

import { motion } from 'framer-motion';

import styles from '../app/style';
import { fadeIn } from '../utils/motion';

const PlanesCart = ({
  id,
  imgUrl,
  title,
  price,
  index,
  icon,
  active,
  handleClick
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative overflow-hidden ${
      active === id ? 'lg:flex-[4] flex-[8.2]' : 'lg:flex-[1] flex-[3.8] '
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="Banners"
      className={`absolute w-full h-full object-cover rounded-[24px] ${active === id ? 'brightness-100' : 'brightness-75'}`}
    />
    {active !== id ? (
      
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
      
        {title}
      </h3>
      
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain"/>
        </div>
        <p className="font-normal text-[18px] leading-[19.16px] text-white uppercase">
          {price}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default PlanesCart;
