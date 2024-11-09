'use client';

import { useMemo } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperLeft = () => {
  const images = useMemo(() => [1, 3, 4, 5, 6], []);
  const doubleImages = useMemo(() => [...images, ...images], []);
  SwiperCore.use([Autoplay]);
  return (
    <div
      className={
        'bg-[#020626] py-20 px-72 h-[350px] bg-center bg-contain object-contain'
      }
      style={{ backgroundImage: `url("/pattern.png")` }}
    >
      <Swiper
        className=""
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView={5}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {doubleImages.map((img: number, index: number) => (
          <SwiperSlide className={'h-[50px]'} key={index}>
            <div className="cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
              <img
                height={40}
                className={'bg-center bg-contain object-contain transition-all'}
                src={`/picture-${img}.png`}
                alt="Image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperLeft;
