"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

export default function SwiperLeft() {
  return (
    <div className={"bg-[#020626] py-10 px-10"}>
      <Swiper
        className=""
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView={1}
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
        <SwiperSlide className={"h-[50px]"}>
          <div className="hover:scale-110 cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
            <img
              height={70}
              className={
                " rounded bg-center bg-contain object-contain transition-all"
              }
              src="/picture-1.png"
              alt="Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={"hover:scale-110"}>
          <div className="hover:scale-110 cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
            <img
              height={70}
              className={
                "max-w-[100%]  rounded bg-center bg-contain object-contain transition-all"
              }
              src="/picture-3.png"
              alt="Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={"hover:scale-110"}>
          <div className="hover:scale-110 cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
            <img
              height={70}
              className={
                "max-w-[100%]  rounded bg-center bg-contain object-contain transition-all"
              }
              src="/picture-4.png"
              alt="Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={"hover:scale-110"}>
          <div className="hover:scale-110 cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
            <img
              height={70}
              className={
                "max-w-[100%]  rounded bg-center bg-contain object-contain transition-all"
              }
              src="/picture-5.png"
              alt="Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={"hover:scale-110"}>
          <div className="hover:scale-110 cursor-pointer object-cover rounded-2xl transition-all overflow-hidden flex justify-center items-center">
            <img
              height={70}
              className={
                "max-w-[100%]  rounded bg-center bg-contain object-contain transition-all"
              }
              src="/picture-6.png"
              alt="Image 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
