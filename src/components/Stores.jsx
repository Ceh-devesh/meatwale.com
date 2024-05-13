import React, { useState } from 'react';

const Stores = ({ imageUrl2 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='storeCards' className="relative   rounded-[20rem]  h-[351px] ">
      
      <div 
        className="w-[390px] h-[352px]  gap-2 border bg-cover bg-center rounded-[30rem] bg-gray-300 cursor-pointer"
        style={{ backgroundImage: `url(${imageUrl2})` }}
        onClick={openModal}
      />
      {isModalOpen && (
        <div
          className="fixed top-0 rounded left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img src={imageUrl2} alt="Full Size" className="max-w-full   max-h-full" />
        </div>
      )}
    </div>
  );
};

export default Stores;
