'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and invite them to play together int he same world!</>}/>
    </motion.div>
    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
    >
      <img src="/map.png" alt="map" className='w-full h-full object-cover'/>
      <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
        <img src="people-01.png" alt="people" className='w-full h-full'/>
      </div>
      <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
        <img src="people-02.png" alt="people" className='w-full h-full'/>
      </div>
      <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
        <img src="people-03.png" alt="people" className='w-full h-full'/>
      </div>
      <div className='absolute top-11 right-[35%] w-[140px] h-[100px] p-[8px] rounded-[10px] bg-[#5d6680] opacity-85'>
        <img src="map-element-1.png" alt="people" className='w-full h-full rounded-[10px]'/>
      </div>
      <div className='absolute top-1/2 left-[16%] w-[140px] h-[100px] p-[8px] rounded-[10px] bg-[#5d6680] opacity-85'>
        <img src="map-element-2.png" alt="people" className='z-5 w-full h-full rounded-[10px]'/>
        <div className='gradient-03 relative z-10'>
        </div>
      </div>
      
    </motion.div>
  </section>
);

export default World;
