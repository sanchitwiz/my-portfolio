import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { github } from '../assets';
import { SectionWrapper } from './hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[30%] md:w-[28%]" // Adjust width to fit 3 cards in a row
    >
      <Tilt
        options={{
          max: 20, // Reduced tilt effect
          scale: 1.05, // Slight scale on hover
          speed: 300, // Decrease speed for smoother movement
        }}
        className="bg-[#000407] p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className="absolute inset-0 flex justify-end card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer my-2'
            >
              <img 
                src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name} 
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <p className={styles.sectionHeadText}>Projects</p>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I've developed projects in both web development and electronics, blending my love for coding with hands-on circuit work. In web development, I've built applications using React.js and the MERN stack, focusing on responsive, user-friendly designs. On the electronics side, I've worked on analog, digital, and embedded systems projects, gaining experience in integrating software with hardware to solve real-world challenges.
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap justify-between gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
