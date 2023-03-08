import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import {fadeIn} from '../variants'
import { motion } from 'framer-motion'

const Contact = () => {
  const formRef = useRef();
 
 
  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs.sendForm('service_wgu6zi6', 'template_9fu4tz8', formRef.current, '4k1KKHY5akEKYMmHq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
  
        });
        e.target.reset();
    };
  


  return (
    <section className="section"id="contact">
      <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
      <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false,amount:0.3}} className='flex-1 flex justify-start items-center '>   
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 
              tracking-wide  '>Get in touch </h4>
              <h2 className='text-[45px] lg:text-[90px]  leading-none mb-12'>Let's work <br/> together!</h2>

              </div>
             </motion.div>

             
             <motion.form ref={formRef} onSubmit={sendEmail} 
               variants={fadeIn('left',0.3)}
               initial='hidden'
               whileInView={"show"}
               viewport={{once:false,amount:0.3}}className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' netlify>
             <input required  type="text" placeholder='Your Name' className="bg-transparent border-b py-3 outline-none w-full 
             placeholder:text-white focus:border-accent transition-all"/>
              <input type="text" placeholder='Your Email' className="bg-transparent border-b py-3 outline-none w-full 
             placeholder:text-white focus:border-accent transition-all"/>
             <textarea placeholder='Your message' className="bg-transparent border-b py-12 outline-none w-full 
             placeholder:text-white focus:border-accent transition-all resize-none mb-12">
              </textarea>

            <button className="btn btn-lg" value="Send" >Send message</button>
            </motion.form> 
            </div>

    </div>
    </section>
  )
}

export default Contact
