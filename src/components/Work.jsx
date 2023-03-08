import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
          <div>
            <h2 className='h2  leading-light text-accent'>My Latest <br/> Work.</h2>
            <p className="max-w-sm mb-16 text-lg
"> In this section you can see the projects carried out and so you can see the work don in the last year</p>
           <button className='btn btn-sm'><a href='https://github.com/patriciacor' rel="noreferrer" target="_blank">View all projects</a></button>
          </div>
          <motion.div 
           variants={fadeIn('right',0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once:false,amount:0.3}} className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 ' src="https://i.ibb.co/nk3f6LN/Brush-2-2.png"  alt="coinbase-1" />         
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient lg:text-3xl lg:font-bold'>Web layout development</span>
              
              </div>  
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
            <span className=' lg:text-3xl text-white'>Login OpenBootcamp</span>
          </div>
          </motion.div>
        </div>
       <motion.div 
       
       variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once:false,amount:0.3}}
       className='flex-1 flex flex-col gap-y-10'>
       <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 ' src="https://i.ibb.co/tKG03hG/Brush-2-1.png"  alt="login" />         
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient lg:text-3xl lg:font-bold'>Responsive Web developed with Typescript an React</span>
              
              </div>  
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
            <span className=' lg:text-3xl text-white'>Food Bank Balcarse</span>
          </div>
          </div>

      
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500 '  src="https://i.ibb.co/dDfDX1x/Brush-2.jpg"  alt="ecommerce-react" />         
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient lg:text-3xl lg:font-bold'>Developed,deployin and Firebase</span>
              
              </div>  
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
            <span className=' lg:text-3xl text-white'>E-commerce React.js </span>
          </div>
        </div>   
      </motion.div>
      </div>
    </div>
    </section>
  )
}

export default Work