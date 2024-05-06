import React from 'react'
import {motion} from 'framer-motion'
const Navbar = () => {
    
  return (
    <>
    <motion.nav  id='nav' className='flex  justify-center  h-36 font-spaceGrotesk    '>
        
        <motion.ul initial={{opacity:0,scale:0 }} animate={{opacity:1, scale: 1,}} transition={{delay:0.4, duration:1, }}
          className='flex gap-5  font-semibold   text-[20px] my-14 ul-li'>
            
            <li ><a   href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <div className='hidden'>
                <ul>
                    <li><a href="#">Why Us</a></li>
                    <li><a href="#">The Industry</a></li>
                    <li><a href="#">Chief Advisor</a></li>
                </ul>
            </div>
            <li><a href="">Franchise</a></li>
            <img className='w-[250px] h-[120px] -my-14 mx-2 ' src="/src/assets/imgs/logos/logo.png" alt="" />
            <li><a href="">Products</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact us</a></li>
        </motion.ul>
        <div className='flex my-2 '>
        
        </div>
        <div className='w-[150px] my-6 ' >
        <img className='my-2' src="/src/assets/imgs/iso.png" alt="" />
        <img src="/src/assets/imgs/meatwale-app.png" alt="" />
        </div>
    </motion.nav>
        {/* <marquee className='text-[22px] text-white bg-red-500'  behavior="" direction="">Presence in 12 States with 90 Plus Stores & Counting
</marquee> */}

    
    </>
  )
}

export default Navbar
