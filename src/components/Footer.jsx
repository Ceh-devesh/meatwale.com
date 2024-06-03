import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



const   appUrl =  {
  androidUrl: 'https://play.google.com/store/apps/details?id=com.meatwale&hl=en_IN&gl=US&pli=1',

  iosUrl: 'https://apps.apple.com/in/app/meatwale/id6451392592'
}
const Footer = () => {
  return (
    <>
    
    <footer id='footer' className=" relative    w-full  flex flex-col justify-center items-center text-gray-200 px-5">
      <img className='absolute opacity-90  w-full h-full object-cover z-[-1]' src="src/assets/Untitled design.jpg" alt="" />
  <div className="flex   sm:flex-row items-center justify-between w-full ">
    <img  src="src/assets/imgs/logos/logo.png" alt="Logo" className="w-350px mb-4 sm:mb-0" />
    <p className='w-[650px] ml-16 text-xl h-[70px] '>Meatwale.com is the pioneer in the unique business model of delivering raw meat items at your door step. At present we have eighty five plus stores across India in twelve different states.</p>
    <div className="flex  flex-col sm:flex-row justify-center relative top-4 w-full sm:w-2/3 text-lg gap-20">
      <ul className="list-none mr-1 flex text-xl font-semibold flex-col gap-4">
        <li>
          <a href="#" className="hover:text-gray-800">About Meatwale</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">Support</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">Company</a>
        </li>
      </ul>
      <ul className="list-none flex text-xl font-semibold flex-col gap-4 mr-4">
        <li>
          <a href="#" className="hover:text-gray-800">Franchise Form</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">FAQ</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">Join Hands</a>
        </li>
      </ul>
      <ul className="list-none flex text-xl font-semibold flex-col gap-4">
        <li>
          <a href="#" className="hover:text-gray-800">Contact Us</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">Career</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-800">Privacy</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="text-2xl font-bold text-white flex flex-col  top-20 relative right-[150px] float-left w-full sm:w-2/3">
    <div className="flex items-center  mr-8">
      <i className="fas fa-envelope mr-4"></i>
      <span >joinhands@meatwale.com</span>
      <div className='flex relative left-[10rem] my-4 '>
      <a href=""><i className="hover:text-green-400 text-green-500 text-5xl ml-8 fa-brands fa-whatsapp"></i></a>
      <a href=""><i className=" hover:text-blue-700 ml-8 text-blue-500 text-5xl fa-brands fa-facebook"></i></a>
      <a href=""><i className=" hover:text-red-500 text-red-600 ml-8 text-5xl  fa-brands fa-youtube"></i></a>
      </div>
      
    </div>
    <div className="flex text-2xl font-bold text-white ml-8 flex-col items-start">
      <i className=" fas fa-phone-alt relative top-7 right-8 "></i>
      <span>(+91) 120-4562267</span>
      <span>(+91) 9971922577</span>
    </div>
  </div>
  <p className="mt-4 text-xl font-bold text-white">© 2020 Your Company, Inc. All rights reserved.</p>
  
    
     
      {/* App section */}
     <div className=' relative left-[35rem] bottom-[10rem] float-right' >

<div className='mx-14   relative  flex-col float-right  gap-6'  >
<h2 className='text-white text-lg font-bold relative mx-5 '>Download Our App</h2>
<a href={appUrl.iosUrl} target='_blank'><img className='my-2 w-[213px] h-auto apps' src="src/assets/imgs/logos/iso.png" alt="" /></a>
<a href={appUrl.androidUrl} target='_blank'><img  className='w-[210px] h-auto my-2 apps' src="src/assets/imgs/logos/meatwale-app.png" alt="" /></a>
</div>
</div>
    
    

</footer>
      
  
    </>
  );
};

export default Footer;
