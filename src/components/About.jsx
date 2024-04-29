import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Left Side (YouTube Video) */}
      <div className="w-1/2">
        {/* <iframe
          className="w-full h-80"
          src=""
          title="Customer Review"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        <iframe className='w-full h-[580px]' src="https://www.youtube.com/embed/8MdUvf6uD4Q" title="कैसे बनाएं चिकन बिरयानी घर पर, How to cook chicken biryani at home in Hindi with English" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* Right Side (Text) */}
      <div className="w-1/2 bg-black p-8 text-white">
        <h2 className="text-5xl text-customRed font-spaceGrotesk font-bold mb-4">About us</h2>
        <p className="mb-4 text-xl">
          Ordering raw meat shouldn't be harder than eating it. Meatwale is
          simply the easiest way to order raw meat for delivery at your home.
          Whatever you're in the mood for, wherever you're in the mood for it,
          you've got it. We are simply a call away. Meatwale.com is a
          registered trademark and we make sure to partner with only quality
          and deserving people who are willing to serve society with full
          hygiene.
        </p>
        <p className="mb-4 text-xl">
          Meatwale.com is the pioneer in the unique business model of delivering
          raw meat items at your doorstep. We are the leading non-vegetarian
          food chain mainly for raw chicken and raw mutton. The idea behind is
          to serve society by giving them a hassle-free home delivery for these
          items. Yet India has an unorganized market for raw chicken and raw
          mutton and we want to create a platform where users can order
          non-veg items by simply giving a call and we will be more than happy
          to serve the same at your doorstep. The idea is to help housewives by
          making quick decisions to make non-veg food with hassle-free doorstep
          delivery.
        </p>
      </div>
    </div>
  );
};

export default About;
