import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
    
      {/* <img className='h-[40rem] relative -z-10  w-full' src="src/assets/Untitled design.jpg" alt="" /> */}
    <footer id='footer' className=" relative   w-full h-[30rem] flex flex-col justify-center items-center text-gray-200 px-0">
  <div className="flex  sm:flex-row items-center justify-between w-full ">
    <img src="src/assets/imgs/logos/logo.png" alt="Logo" className="w-350px h-250px mb-4 sm:mb-0" />
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
  <div className="text-xl font-bold text-white flex flex-col  top-20 relative right-[240px] float-left w-full sm:w-2/3">
    <div className="flex items-center mr-6">
      <i className="fas fa-envelope mr-3"></i>
      <span >joinhands@meatwale.com</span>
      <i className=" ml-4 fa-brands fa-whatsapp">   </i>
      <i className=" ml-4 fa-brands fa-facebook"></i>
    </div>
    <div className="flex text-xl font-bold text-white ml-6 flex-col items-start">
      <i className=" fas fa-phone-alt relative top-7 right-7 mr-2"></i>
      <span>(+91) 120-4562267</span>
      <span>(+91) 9971922577</span>
    </div>
  </div>
  <p className="mt-4 text-xl font-bold text-white">© 2020 Your Company, Inc. All rights reserved.</p>
  <a href="#" className="hover:text-gray-800">Partners</a>
</footer>
      
  
    </>
  );
};

export default Footer;
