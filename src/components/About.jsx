import React from 'react';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'


const About = () => {
  const [ref,inView]= useInView({
    threshold:0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}

          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-normal  lg:rounded-full  bg-top '></motion.div>

          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
         className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='mb-6'>I'm Front-end Developer with react 
              over 2 years of experience.
            </h3>
            <p>
             I am passionate about technology and web development, I teach as a freelance tutor, on the other hand I am passionate about nature and green places. 

            </p>
            
       <div className='flex gap-x-8 items-center py-8'>
              <button className='btn btn-lg'>Contact me</button>
            </div>
       </motion.div>
     </div>  
     </div>   
    </section>
  )
}

export default About