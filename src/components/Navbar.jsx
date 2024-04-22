import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-space-evenly  h-31 font-spaceGrotesk bg-customRed  '>
        <img className='w-[210px] h-[120px] mx-18 ' src="/src/assets/imgs/logos/logo.png" alt="" />
        <ul className='flex gap-5  font-semibold   text-[20px] my-14 ul-li'>
            
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
            <li><a href="">Products</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact us</a></li>
        </ul>
        <div className='flex my-2 '>
        <img className='w-[80px] h-[80px] mt-4' src="/src/assets/imgs/logos/nav-logo2.png" alt="" /><img src="" alt="" />
        <img className='w-[100px] h-[110px] /' src="/src/assets/imgs/logos/40538787-removebg-preview.png" alt="" /><img src="" alt="" />
        </div>
        <div className='w-[150px] my-6 ' >
        <img className='my-2' src="/src/assets/imgs/iso.png" alt="" />
        <img src="/src/assets/imgs/meatwale-app.png" alt="" />
        </div>
    </nav>
        {/* <marquee className='text-[22px] text-white bg-red-500'  behavior="" direction="">Presence in 12 States with 90 Plus Stores & Counting
</marquee> */}

    
    </>
  )
}

export default Navbar
