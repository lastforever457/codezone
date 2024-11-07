'use client';

import Header from '@/components/header';
import Blog from '@/components/main/blog';
import CardComponent from '@/components/main/cardComponent';
import Provide from '@/components/main/provide';
import Section from '@/components/main/section';
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
      <Section />
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
