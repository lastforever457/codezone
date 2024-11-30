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
        'bg-[#020626] py-14 px-4 2xl:py-20  h-[350px] bg-center bg-contain object-contain'
      }
      style={{ backgroundImage: `url("/pattern.png")` }}
    >
      <div className="mx-auto container">
        <Swiper
          className=""
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
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
            <SwiperSlide key={index}>
              <img
                height={40}
                className={
                  'bg-center bg-contain object-contain px-5 transition-all'
                }
                src={`/picture-${img}.png`}
                alt="Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperLeft;
