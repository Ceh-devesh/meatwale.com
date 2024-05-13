import React from 'react'

const   appUrl =  {
    androidUrl: 'https://play.google.com/store/apps/details?id=com.meatwale&hl=en_IN&gl=US&pli=1',
  
    iosUrl: 'https://apps.apple.com/in/app/meatwale/id6451392592'
  } 
const AppSection = () => {
  return (
    <>
     <div className='h-[23rem]' style={{ backgroundImage: `url('src/assets/imgs/slider/apps.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

<div className='mx-14   relative top-[12.8rem] flex gap-4'  >
<h2 className='text-white text-5xl font-bold relative bottom-0 '>Download Our App</h2>
<a href={appUrl.iosUrl} target='_blank'><img className='my-2 w-[213px] h-auto apps' src="src/assets/imgs/logos/iso.png" alt="" /></a>
<a href={appUrl.androidUrl} target='_blank'><img  className='w-[200px] h-[50px] my-2 apps' src="src/assets/imgs/logos/meatwale-app.png" alt="" /></a>
</div>
</div>
    
    
    </>
  )
}

export default AppSection
