
import  { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mt-8'>
            <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[350px] lg:h-[700px]"
      >
        
        <SwiperSlide className='relative '>
        <div className='absolute top-1/3 left-20'>
          
          <h1 className="text-3xl lg:text-6xl text-white font-semibold mb-4">Find world's <br />best job For Yourself</h1>
          <h3 className="text-xl lg:text-3xl font-medium text-white">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>
        </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/jz26pwK/full-shot-man-working-outdoors.jpg" alt="" />
          </SwiperSlide>

        <SwiperSlide className='relative'>
        <div className='absolute top-1/3 left-20'>

        <h1 className="text-3xl lg:text-6xl text-white font-semibold mb-4">Find world's <br />best job For Yourself</h1>
          <h3 className="text-xl lg:text-3xl font-medium text-white">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>
        </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/xX0Sd2M/840ebda5-60e9-457e-a6e4-581b30758101-1024x681.jpg" alt="" />
          </SwiperSlide>


        <SwiperSlide className='relative'>
        <div className='absolute top-1/3 left-20 '>
        <h1 className="text-3xl lg:text-6xl text-white font-semibold mb-4">Find world's <br />best job For Yourself</h1>
          <h3 className="text-xl lg:text-3xl font-medium text-white">Find the best remote job opportunities with trustworthy <br /> companies that offer work-from-home positions.</h3>
        </div>
          <img className='w-full h-[350px] lg:h-[700px]' src="https://i.ibb.co/kHKZw75/tech-sales-career-image.webp" alt="" />
          </SwiperSlide>
     
        <div className="autoplay-progress" slot="container-end">
        <svg  ref={progressCircle}>
            <circle></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;