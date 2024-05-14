import React from 'react'





const Card = () => {
  

  return (
    <>
    
     {/* <div   className="  justify-center inline-block">
      
      <div id='cardss' className="relative grid h-66 w-full max-w-75 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-400 shadow-none"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 mx-10 py-14 md:px-12">
          <h4 className="mb-6 block font-sans text-5xl font-medium leading-[1.5] tracking-normal  text-gray-300 antialiased">
           
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
    </div> */}
   
{/* 
   <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="relative mx-2 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
    <img src='https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Raw Chicken
    </h4>
    <p
      className="block font-sans  antialiased font-medium leading-relaxed text-2xl text-black ">
      meatwale
    </p>
  </div>
  
</div> */}

{/* card 1 */}
<div className='flex gap-10 m-12  justify-center'>
<div
  class="relative transition-all duration-[.3s] ease-in-out hover:transform hover:scale-110 grid h-[20rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-12 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Raw Chicken
    </h2>
    <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      
    </h5>
    <img alt="Tania Andrew"
      src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>    

{/* card 2 */}
<div
  class="relative transition-all duration-[.3s] ease-in-out hover:transform hover:scale-110 grid h-[20rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('src/assets/imgs/3cards/mix-mutton.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-12 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Raw Mutton
    </h2>
    
    <img alt="Tania Andrew"
      src="src/assets/imgs/3cards/mix-mutton.jpg"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>  
{/* card 3 */}
<div
  class="relative  transition-all duration-[.3s] ease-in-out hover:transform hover:scale-110 grid h-[20rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('src/assets/imgs/3cards/15619774802971.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative  p-6 px-6 py-12 md:px-12">
    <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Kebabs
    </h2>
    
    <img alt="Tania Andrew"
      src="src/assets/imgs/3cards/15619774802971.jpg"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>  

{/* card 4 */}

<div
  class="relative  transition-all duration-[.3s] ease-in-out hover:transform hover:scale-110 grid h-[20rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('src/assets/imgs/3cards/chicken-salami-plain.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-12 md:px-12">
    <h2 class="mb-6 block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Chicken Salami
    </h2>
    
    <img alt="Tania Andrew"
      src="src/assets/imgs/3cards/chicken-salami-plain.jpg"
      class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>  
</div>
    </>
  )
}

export default Card










