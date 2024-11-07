'use client';

import Header from '@/components/header';
import Section from '@/components/main/section';
import SwiperLeft from '@/components/swiper-left';
import CardComponent from '@/components/main/cardComponent';
import Service from '@/components/main/service';
import TeamComponent from '@/components/team';
import Blog from '@/components/blog';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Header />
      <Section />
      <SwiperLeft />
      <CardComponent />
      <Service />
      <TeamComponent />
      <Blog />
    </div>
  );
};

export default Page;
