import React, { useState } from 'react';

const Stores = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsImagePopupOpen(true);
  };

  const handlePopupClose = () => {
    // Close the popup when clicking outside the image
    if (event.target.id !== 'popupImage') { // Check if clicked outside the image
      setIsImagePopupOpen(false);
    }
  };

  return (

    <>

      <h2 className='flex justify-center text-7xl  p-5 font-semibold text-white'>Visit Our Stores</h2>
    <div className="flex flex-wrap justify-center p-8 gap-10 rounded-t-[14rem] bg-contain  ">
      <img className='absolute rounded-t-[120px]   opacity-90  w-full h-[94rem] object-cover z-[-1]' src="src/assets/imgs/background-full/5.png" alt="" />
      <div  className=" storeCards  ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img className='bg-center' src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards  ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards  ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
      <div className=" storeCards ring-8 ring-red-700 relative mx-4 mt-4 overflow-hidden text-gray-800 bg-black shadow-lg bg-clip-border rounded w-[20rem]  h-[19rem] cursor-pointer" onClick={handleImageClick}>
        <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" id="popupImage" />
      </div>
      <div className="p-2">
        
      
      </div>

      {isImagePopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
          <img src="src/assets/imgs/gallery/26-11-2021-2.jpg" alt="profile-picture" className="max-h-screen max-w-screen object-cover rounded-lg" onClick={handlePopupClose} />
        </div>
      )}
    </div>
    
    </>
    
    
  );
};

export default Stores;