

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineSearch } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div className='mt-8'>
            <Swiper 
       pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
        className="mySwiper h-[350px] lg:h-[700px]"
      >
     
                      
        <SwiperSlide className='relative '>
         <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black opacity-100'>
         <div className='absolute top-10 lg:top-1/3 left-10 lg:left-20'>
          
          <h1 className="text-2xl lg:text-6xl text-white font-semibold mb-1 lg:mb-4">Find worlds <br />best job For Yourself</h1>
          <h3  className="text-lg lg:text-3xl font-medium text-gray-300">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>


          <div className='flex flex-col lg:flex-row max-w-xs lg:max-w-3xl gap-4 items-center bg-base-100  p-2 lg:p-4 rounded-lg mt-1 lg:mt-3'>
          <label className="input border-green-400 px-4 lg:px-6 py-2 lg:py-4 flex items-center gap-2">
              <input type="text" className="grow" placeholder="Key Words" />
          </label>
           <label className='hidden lg:block'>
             <input type="text" placeholder="Category" className="input border-green-400 lg:w-full px-6 py-4 " />
           </label>
           <button className='flex items-center bg-[#5BBC2E] px-3 lg:px-6 py-1 lg:py-3 rounded-lg font-semibold text-lg text-white hover:bg-white hover:border hover:border-green-500 hover:text-green-600 '><span className='text-xl mr-2'><MdOutlineSearch /></span> Find Job</button>
          </div>
        </div>
         </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/jz26pwK/full-shot-man-working-outdoors.jpg" alt="" />
          </SwiperSlide>
          

        <SwiperSlide className='relative'>
        <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black opacity-100'>
         <div className='absolute top-10 lg:top-1/3 left-10 lg:left-20'>
          
          <h1 className="text-2xl lg:text-6xl text-white font-semibold mb-1 lg:mb-4">Join us
           & Explore
           <br /> thousands of Jobs</h1>
          <h3 className="text-lg lg:text-3xl font-medium text-gray-300">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>


          <div className='flex flex-col lg:flex-row max-w-xs lg:max-w-3xl gap-4 items-center bg-base-100  p-2 lg:p-4 rounded-lg mt-1 lg:mt-3'>
          <label className="input border-green-400 px-4 lg:px-6 py-2 lg:py-4 flex items-center gap-2">
              <input type="text" className="grow" placeholder="Key Words" />
          </label>
           <label className='hidden lg:block'>
             <input type="text" placeholder="Category" className="input border-green-400 w-full px-6 py-4 " />
           </label>
           <button className='flex items-center bg-[#5BBC2E] px-3 lg:px-6 py-1 lg:py-3 rounded-lg font-semibold text-lg text-white hover:bg-white hover:border hover:border-green-500 hover:text-green-600 '><span className='text-xl mr-2'><MdOutlineSearch /></span>Find Job</button>
          </div>
        </div>
         </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/xX0Sd2M/840ebda5-60e9-457e-a6e4-581b30758101-1024x681.jpg" alt="" />
          </SwiperSlide>


        <SwiperSlide className='relative '>
        <div className='absolute w-full h-full bg-gradient-to-l from-transparent to-black opacity-100'>
         <div className='absolute top-10 lg:top-1/3 left-10 lg:left-20'>
          
          <h1 className="text-2xl lg:text-6xl text-white font-semibold mb-1 lg:mb-4">Find worlds <br />best job For Yourself</h1>
          <h3 className="text-lg lg:text-3xl font-medium text-gray-300">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>


          <div className='flex flex-col lg:flex-row max-w-xs lg:max-w-3xl gap-4 items-center bg-base-100  p-2 lg:p-4 rounded-lg mt-1 lg:mt-3'>
          <label className="input border-green-400 px-4 lg:px-6 py-2 lg:py-4 flex items-center gap-2">
              <input type="text" className="grow" placeholder="Key Words" />
          </label>
           <label className='hidden lg:block'>
             <input type="text" placeholder="Category" className="input border-green-400 w-full px-6 py-4 " />
           </label>
           <button className='flex items-center bg-[#5BBC2E] px-3 lg:px-6 py-1 lg:py-3 rounded-lg font-semibold text-lg text-white hover:bg-white hover:border hover:border-green-500 hover:text-green-600 '><span className='text-xl mr-2'><MdOutlineSearch /></span> Find Job</button>
          </div>
        </div>
         </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/kHKZw75/tech-sales-career-image.webp" alt="" />
          </SwiperSlide>
          </Swiper>
        </div>
    );
};

export default Banner;