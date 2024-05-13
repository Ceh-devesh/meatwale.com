import React from 'react'
import Card from './Card'
import Stores from './Stores'
import About from './About'
import Form from './Form'
import Footer from './Footer'
import Slider from './Slider'
import AppSection from './AppSection'


const   appUrl =  {
  androidUrl: 'https://play.google.com/store/apps/details?id=com.meatwale&hl=en_IN&gl=US&pli=1',

  iosUrl: 'https://apps.apple.com/in/app/meatwale/id6451392592'
}


const Home = () => {
  
  return (
    

    

    <>

       {/* about section */}
    <About/>
    
      <div className='relative '>
      
          {/* 4 cards */}
          <div className='my-[22rem] h-[13rem] bg-smokehite p-1'    id='cards-3'>
          <h2 className='text-5xl font-semibold flex justify-center my-5  text-white'>Our Products</h2>
        <div   className='flex  gap-10 items-center mx-4 justify-center  my-10 '>
        

        
        <Card    title2={'meatwale'} title={'Raw Chicken'} imageUrl="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


        
        <Card title={'Raw Mutton'} imageUrl='src/assets/imgs/3cards/mix-mutton.jpg' /> 
        
        
        <Card title={'Seekh Kebabs'} imageUrl='src/assets/imgs/3cards/15619774802971.jpg'/> 
        <Card title={'Chicken Salami'} imageUrl='src/assets/imgs/3cards/chicken-salami-plain.jpg'/> 
        </div>
        </div>

     

    </div>



       
        <AppSection/>
      


          {/* stores cards */}
          <h2 className='text-5xl flex justify-center my-8 font-bold  text-white '>Visit Our Stores</h2>
        <div id='storecards'    className=' bg-red-500  rounded-t-[14rem] p-10 flex gap-8 flex-wrap justify-center  '>
            
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




        <Slider/>
      {/* form section */}
        <Form/>

        
      



      {/* footer */}
      

        <Footer/>
      

      
      
      
            
      

    </>
  )
}

export default Home
