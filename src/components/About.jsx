// import React from 'react';

// const About = () => {
//   return (
//     <div className="flex justify-center items-center">
//       {/* Left Side (YouTube Video) */}
//       <div className="w-1/2">
//         {/* <iframe
//           className="w-full h-80"
//           src=""
//           title="Customer Review"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         /> */}
//         <iframe className='w-full h-[580px]' src="https://www.youtube.com/embed/8MdUvf6uD4Q" title="कैसे बनाएं चिकन बिरयानी घर पर, How to cook chicken biryani at home in Hindi with English" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//       </div>

//       {/* Right Side (Text) */}
//       <div className="w-1/2 bg-black p-8 text-white">
//         <h2 className="text-5xl text-customRed font-spaceGrotesk font-bold mb-4">About us</h2>
//         <p className="mb-4 text-xl">
//           Ordering raw meat shouldn't be harder than eating it. Meatwale is
//           simply the easiest way to order raw meat for delivery at your home.
//           Whatever you're in the mood for, wherever you're in the mood for it,
//           you've got it. We are simply a call away. Meatwale.com is a
//           registered trademark and we make sure to partner with only quality
//           and deserving people who are willing to serve society with full
//           hygiene.
//         </p>
//         <p className="mb-4 text-xl">
//           Meatwale.com is the pioneer in the unique business model of delivering
//           raw meat items at your doorstep. We are the leading non-vegetarian
//           food chain mainly for raw chicken and raw mutton. The idea behind is
//           to serve society by giving them a hassle-free home delivery for these
//           items. Yet India has an unorganized market for raw chicken and raw
//           mutton and we want to create a platform where users can order
//           non-veg items by simply giving a call and we will be more than happy
//           to serve the same at your doorstep. The idea is to help housewives by
//           making quick decisions to make non-veg food with hassle-free doorstep
//           delivery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react'

const About = () => {
  return (
   <>

    <div className="relative mb-[24rem] " >
 
  <img id='about'  className="absolute   inset-0 w-full  object-cover z-0" src="src/assets/imgs/background-full/5.png" alt="" />
    {/* <video  className='className="absolute inset-0 w-full object-cover z-0' src="src/assets/vid1.mp4"></video> */}
  <marquee  className='text-3xl font-bold bg   relative p-1 text-yellow-400 my-0 ' behavior=""  direction="">Presence in 12 States with 90 Plus Stores & Counting
</marquee>
<div className='relative float-right inline-block font-bold text-3xl   w-[43rem] top-[8rem] text-white'>
      
        Order raw meat & get it delivered at your door steps.
        Antibiotics Free chicken
        Lab tested chicken
        Tender chicken straight from the farms
        Support greenery outside, so fresh chicken , goat mutton & their frozen products are inside our stores<br/>
        <br /><span className='text-3xl text-yellow-300'>Call Us : Toll Free No - 1800 2700 026</span><p className='text-yellow-300 font-semibold text-[1.6rem] my-3 '>Open Hours
      Wednesday - Monday : 10:00 am - 9:00 pm</p>
      </div>
  <div className="card m-auto top-[5rem] right-[5rem]  text-gray-300 w-[clamp(260px,90%,600px)] hover:brightness-60 transition-all cursor-pointer group bg-gradient-to-tl from-red-600 to-gray-950 hover:from-red-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-800  rounded-xl overflow-hidden relative z-10">
    <div className="px-8 py-10">
      <div className='w-[170px]' ><img src="src/assets/imgs/logos/logo.png" alt="" /></div>
      <div className="uppercase font-bold text-3xl my-4">
        Find Your Delivery location
      </div>
      <div className="text-gray-300 text-lg uppercase tracking-widest">
        Chandigarh | Dehradun | Dharwad | Faridabad | Gurugram | Ghaziabad | Greater Noida | Hubli | Jaipur | Kundli | Mumbai | Manipal | Mohali | Noida | New Delhi | Navi Mumbai | Pune | Sonipat | Udupi | Zirakpur
      </div>
      <div className="text-gray-400 mt-8">
        <p className="text-gray-100 text-lg uppercase tracking-widest">Presence in 12 States with 85 Plus Stores & still Counting</p>
      </div>
    </div>
    
    <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-5xl m-auto rounded transition-all absolute bottom-0"></div>
    <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
    
  </div>
  
  
</div>



   
   </>
  )
}

export default About
