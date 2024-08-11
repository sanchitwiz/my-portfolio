import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../style";
import {ComputersCanvas} from "./canvas";

function Hero() {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915edd]'>Sanchit</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I Make Useful Web Applications for <br className='sm:block hidden' /> the Humanity</p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className="w-[25px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 ">
            <motion.div 
              animate={{
                y: [0, 18, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
