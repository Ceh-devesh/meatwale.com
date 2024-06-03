import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-xl leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">
          About
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
        Ordering raw meat shouldn't be harder than eating it.
        </h2>
        <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
        Meatwale is simply the easiest way to order raw meat for delivery at your home. Whatever you're in the mood for, wherever you're in the mood for it, you've got it. We are simply a call away. Meatwale.com is a registered trademark and we make sure to partner with only quality and deserving people who are willing to serve society with full hygiene.

Meatwale.com is the pioneer in the unique business model of delivering raw meat items at your door step. We are the leading non vegetarian food chain mainly for raw chicken and raw mutton. The idea behind is to serve the society by giving them a hassle free home delivery for these items. Meatwale.com products are procured from quality vendors working in markets and Meatwale does not manufacture anything from its own, all items are completely procured from suppliers and Meatwale is only involved in logistics (delivering) of goods to the stores.

Yet India has an unorganized market for raw chicken and raw mutton and we want to create a platform where users can order non veg items by simply giving a call and we will be more than happy to serve the same at your door step. The idea is to help house wife by making quick decisions to make non veg food with a hassle free doorstep delivery.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img className="lg:block rounded-[14px] h-[550px]  hidden w-full" src="src/assets/imgs/about/Web_Photo_Editor.jpg" alt="Group of people chilling" />
        <img className="lg:hidden sm:block  hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people chilling" />
        <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people chilling" />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Vission
          </h2>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-4">
          To be the most profitable QSR business, through a strong franchise network and with our great team of investors. We look forward to see our products in every household in Indian kitchen with a promise of hygiene and commitment of fresh and tender taste. Meatwale.com is poised to serve non- veg food in a fast, friendly environment and the company must realize to rank and maintain itself as a top brand within this sector.
          </p>
          <p className="font-normal text-xl leading-6 text-gray-600 mt-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2">
          <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="People discussing on board" />
          <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="People discussing on board" />
          <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="People discussing on board" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
