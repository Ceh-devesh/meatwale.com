import React from 'react'
import Card from './Card'
import Stores from './Stores'
import Review from './Review'
import About from './About'
import Form from './Form'
import Footer from './Footer'
import Slider from './Slider'
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Hero from './Hero'

const   appUrl =  {
  androidUrl: 'https://play.google.com/store/apps/details?id=com.meatwale&hl=en_IN&gl=US&pli=1',

  iosUrl: 'https://apps.apple.com/in/app/meatwale/id6451392592'
}


const Home = () => {
  
  return (
    

    

    <>
    
      
      
      <Slider/>
      


        {/* 3 cards */}
        <div className='my-24' id='cards-3'>
          <h2 className='text-5xl font-semibold flex justify-center my-[2rem]'>Our Products</h2>
        <div   className='flex gap-10 relative  left-[14rem] w-[701px]'>
        

        
        <Card   title2={'meatwale'} title={'Raw Chicken'} imageUrl="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


        
        <Card title={'Raw Mutton'} imageUrl='src/assets/imgs/3cards/mix-mutton.jpg' /> 
        
        <Card title={'Non-veg Snacks'} imageUrl='src/assets/imgs/3cards/15619774802971.jpg'/> 
        </div>
        </div>

      <div>
      <div>
        <img className='w-full' src="src/assets/imgs/slider/Looking For (1).png" alt="" />
      </div>
      <img className='w-full ' src="./src/assets/imgs/background-full/special-menu-1.jpg" alt="" />
      
     
      <div className='relative bottom-[655px] float-right right-24 '>
      <div class=" group  cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-[600px]  rounded-2xl hover:duration-700 duration-700">
  <div class="w-[600px] flex-wrap h-[270px] bg-customRed text-white">
    <div class="flex items-center relative font-spaceGrotesk top-[30px] left-2 text-xl font-bold  w-[600px] justify-center">
    Chandigarh | Dehradun | Dharwad | Faridabad | Gurugram | Ghaziabad | Greater Noida | Hubli | Jaipur | Kundli | Mumbai |  Manipal | Mohali | Noida | New Delhi | Navi Mumbai | Pune | Sonipat | Udupi | Zirakpur
    

    </div>
  </div>
  <div class="absolute bg-gray-50 -bottom-[43px] w-[600px] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
    <span class="text-customRed font-bold text-2xl">Meatwale.com</span>
    <span class="text-gray-800 font-bold text-3xl">Find your delivery location</span>
  </div>
  

</div>
      </div>
    </div>

    <div className='relative bottom-[40rem] h-10 text-2xl font-spaceGrotesk left-16 w-[42vw] text-white'>
    <span className='text-5xl '>
    Welcome to Meatwale.Com
          </span><br/>
      Order raw meat & get it delivered at your door steps.
      Antibiotics Free chicken
      Lab tested chicken
      Tender chicken straight from the farms
      Support greenery outside, so fresh chicken , goat mutton & their frozen products are inside our stores<br/>
      <span className='text-4xl '>Call Us : Toll Free No - 1800 2700 026</span><p className='text-red-400 font-semibold my-6'>Open Hours
    Wednesday - Monday : 10:00 am - 9:00 pm</p>
    </div>





        {/* about section */}
        {/* <div className='my-20'>
        <About videoUrl='https://youtu.be/QUY9RpEMyO4'/>
      </div> */}
      
        
        {/* <div className='   flex flex-col justify-center items-center text-center	my-2 text-5xl  font-bold  text-red-500 '>
        <span className='h-14 relative bottom-8' >
        <Typewriter
            words={['Presence in 12 States with 90 Plus Stores & Still Counting...']}
            loop={100}
            typeSpeed={30}
            deleteSpeed={40}
            delaySpeed={1000}
          /> 
          

        </span>
          <span className=' flex gap-4'><p className='text-black text-3xl justify-center items-center my-2 '>Download Our App</p>
            <a href={appUrl.androidUrl} target='_blank' ><img className='my-2 w-[213px] h-auto' src="src/assets/imgs/logos/iso.png" alt="" /></a>
            <a href={appUrl.iosUrl} target='_blank'><img className='w-[200px] h-[50px] my-2'  src="src/assets/imgs/logos/meatwale-app.png" alt="" /></a>
          </span>
        
            
        </div>

      
        <div className='text-5xl  font-bold    text-red-600  h-2 flex justify-center items-center  my-20 '>
        <Typewriter 
            words={['Our stores - Fresh is Always Best']}
            loop={100}
            typeSpeed={30}
            deleteSpeed={40}
            delaySpeed={1000}
          /> 
        </div> */}
        
          <div className=''>
            <img className='w-full h-[45vh] relative bottom-[18rem]' src="src/assets/imgs/slider/1.png" alt="" />
            <span className=' mx-14 relative bottom-[28rem]  flex gap-4'>
            <a href={appUrl.iosUrl} target='_blank' ><img className='my-2 w-[213px] h-auto' src="src/assets/imgs/logos/iso.png" alt="" /></a>
            <a href={appUrl.androidUrl} target='_blank'><img className='w-[200px] h-[50px] my-2'  src="src/assets/imgs/logos/meatwale-app.png" alt="" /></a>
          </span>
          </div>


          {/* stores cards */}
        <div id='storecards'   className='flex   bg-gray-900 p-12	 gap-16 flex-wrap justify-center mt-[-22.2rem]'>
          
            
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-2.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-3.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sec45-2.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-3.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-4.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-5.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-6.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-7.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-8.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-9.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sevenbunglows.png"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-11.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-12.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sevenbunglows.png"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-14.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-15.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-16.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-17.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-18.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-19.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-20.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-21.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sec45-3.jpg.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sec45-4.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/shalimar2.jpeg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/sevenbunglows.png"/>
          <Stores imageUrl2="src/assets/imgs/gallery/shalimar3.png"/>
        </div>


      {/* form section */}
        <div  className=''>
        <Form/>

        </div>
      



      {/* footer */}
      <div  className=''>

        <Footer/>
      </div>
      
      

      

    </>
  )
}

export default Home
