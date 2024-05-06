import React from 'react'



const Card = ({imageUrl, title}) => {
  

  return (
    <>
    





      
     <div  id='cardss' className="  justify-center inline-block">
      
      <div className="relative grid h-66 w-full max-w-75 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-400 shadow-none"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 mx-10 py-14 md:px-12">
          <h4 className="mb-6 block font-sans text-5xl font-medium leading-[1.5] tracking-normal  text-gray-300 antialiased">
            {/* Empty header */}
            {title}
          </h4>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
          
          </h5>
          <img
            src={imageUrl}
            className="relative inline-block h-16 w-16 !rounded-full border-2 border-white object-cover object-center"
            alt={title}
          />
        </div>
      </div>
    </div>
   

    
    </>
  )
}

export default Card
