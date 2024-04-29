import React from 'react'
import Card from './Card'
import Stores from './Stores'
import Review from './Review'
import About from './About'
import Form from './Form'
import Footer from './Footer'

const Home = () => {

  return (
    




    <>
    <div>
      <img className='w-full ' src="./src/assets/imgs/background-full/special-menu-1.jpg" alt="" />
      
      {/* <div
  className="relative overflow-hidden  float-right right-5	 w-[650px] h-[50vh] rounded-3xl cursor-pointer text-2xl bottom-[43rem] font-bold bg-customRed opacity-90"
>
  <div className="z-10 absolute w-full h-full peer"></div>
  <div
    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-700 transition-all duration-500"
  ></div>
  <div
    className="absolute flex text-[22px] text--500 text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-36 w-36 h-44 rounded bg-customRed text-white transition-all duration-500"
  >
  Chandigarh / Dehradun / Dharwad / Faridabad / Gurugram / Ghaziabad / Greater Noida / Hubli / Jaipur / Kundli / Mumbai / Manipal / Mohali / Noida / New Delhi / Navi Mumbai / Pune / Sonipat / Udupi / Zirakpur
  </div>
  <button  className=''></button>
  <button
  className=" my-1 w-[370px] text-white border p-2  flex justify-center relative -top-4 items-center mx-[150px] px-8 py-2  rounded-[100px] bg-customRed  isolation-auto z-10  border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
>
          Find your delivery location
</button>
  <div className="w-full h-full items-center justify-center flex flex-col	  uppercase text-white text-4xl ">
    <span className='border  p-2 relative rounded-[35px]'>
        CHECK OUT THE AREAS
    </span>
   
  </div>
</div> */}
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
    {/* <p class="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
  </div>
  

</div>
      </div>
    </div>

    

    <div className='relative bottom-[40rem] h-24 text-2xl font-spaceGrotesk left-16 w-[42vw] text-white'>
    <span className='text-5xl '>
    Welcome to Meatwale.Com
          </span><br/>
      Order raw meat & get it delivered at your door steps.
      Antibiotics Free chicken
      Lab tested chicken
      Tender chicken straight from the farms
      Support greenery outside, so fresh chicken , goat mutton & their frozen products are inside our stores<br/>
      <span className='text-4xl '>Call Us : Toll Free No - 1800 2700 026</span>
      

      

    </div>
     

        {/* 3 cards */}
        <div  className='flex gap-10 relative left-[200px] w-[700px]'>

        
        <Card title2={'meatwale'} title={'Raw Chicken'} imageUrl="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


        <Card title={'Raw Mutton'} imageUrl='src/assets/imgs/3cards/mix-mutton.jpg' /> 
        <Card title={'Non-veg Snacks'} imageUrl='src/assets/imgs/3cards/15619774802971.jpg'/> 
        </div>
        <div className='my-20'>
        <About videoUrl='https://youtu.be/QUY9RpEMyO4'/>
      </div>
      
        {/* stores cards */}
        <div  className='  flex justify-center items-center text-center	relative top-[100px] text-6xl font-spaceGrotesk font-extrabold shadow-black bg-blend-darken drop-shadow-2xl text-red-600'>
        <h2>Our stores - Fresh is Always Best</h2>
        </div>
        <div className='flex  bg-newRed p-20	 gap-16 flex-wrap justify-center my-[200px]'>
          
            
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-2.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-3.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-3.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-4.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-5.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-6.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-7.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-8.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-9.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-10.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-11.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-12.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-13.jpg"/>
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
          <Stores imageUrl2="src/assets/imgs/gallery/gallery-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-22.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
          <Stores imageUrl2="src/assets/imgs/gallery/26-11-2021-1.jpg"/>
        </div>


      
      <div>
        <Form/>
      </div>

      <div>

        <Footer/>
      </div>
      

      

    </>
  )
}

export default Home
