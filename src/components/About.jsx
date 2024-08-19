import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';

const ServiceCard = (props) => {
  return(
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div 
        variants={fadeIn("right" , "spring" , 0.5*props.index , 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        <div
        className='bg-[#000407] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ' 
        > 
            <img src={props.icon} alt={props.title} className='w-16 h-16 object-contain ' />
            <h3 className='text-white text-[20px] font-bold text-center' >{props.title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <p className={styles.sectionHeadText} >Overview</p>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      > 
Hi, I'm Sanchit Vohra, an Electronics and Communication Engineering student at Delhi Technological University. I'm passionate about coding, with expertise in Machine Learning, Deep Learning, and the MERN stack. I enjoy solving problems with Data Structures and Algorithms and love working on electronics projects, from analog and digital circuits to embedded systems. My skills bridge the gap between software and hardware, enabling innovative solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service , index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About , "about")