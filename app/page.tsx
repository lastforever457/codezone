'use client';

import Header from '@/components/header';
import Blog from '@/components/main/blog';
import CardComponent from '@/components/main/cardComponent';
import MainSection from '@/components/main/main-section';
import Provide from '@/components/main/provide';
import Service from '@/components/main/service';
import SwiperLeft from '@/components/main/swiper-left';
import TeamComponent from '@/components/main/team';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Header />
      <MainSection />
      <SwiperLeft />
      <CardComponent />
      <Service />
      <TeamComponent />
      <Provide />
      <Blog />
    </div>
  );
};

export default Page;
