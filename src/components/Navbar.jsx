import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
  return (
    <>
    {/* <motion.nav  id='nav' className='flex  justify-center  h-36 font-spaceGrotesk    '>
        
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
        <div className='flex my-3 w-[10rem] h-20 relative left-20 top-5 '>
          <img   src="src/assets/imgs/logos/nav-logo2.png" alt="" />
          <img  src="src/assets/imgs/logos/logo3.png" alt="" />
        
        </div>
        <div className='w-[150px] my-6 ' >
        <img className='my-2' src="/src/assets/imgs/iso.png" alt="" />
        <img src="/src/assets/imgs/meatwale-app.png" alt="" />
        </div>
    </motion.nav> */}
    <motion.nav  className=' z-100  cursor-pointer h-[94vh] bg-red-400 relative text-2xl text-white font-bold'>
  <img  className=' cursor-default absolute inset-0 w-full h-full object-cover' src="src/assets/imgs/navbar.png" alt="" />
  <div className='flex justify-evenly items-center relative z-10'>
    <ul    className='flex gap-10   '>
      <li className='hover:text-red-600'><Link to='/'>Home</Link></li>
      <li className='hover:text-red-600'><Link to='/about'>About Us</Link></li>
      <li className='hover:text-red-600'><Link to='/product'>Products</Link></li>
    </ul>
    <motion.img initial={{opacity:0,scale:0 }} animate={{opacity:1, scale: 1,}} transition={{delay:0.2, duration:1, }}  src="src/assets/imgs/logos/logo.png" alt="logo" />
    <ul className='flex gap-10'>
      <li className='hover:text-red-300'><Link to='/contact'>Contact Us</Link></li>
      <li className='hover:text-red-600'><Link to='/career'>Career</Link></li>
      <li><button className='border ring-2 outline-none ring-red-700 hover:bg-red-700 -m-2 p-3 rounded-full text-lg bg-gray-800'>Join Our Franchise!</button></li>
    </ul>
  </div>
</motion.nav>
        

    
    </>
  )
}

export default Navbar
