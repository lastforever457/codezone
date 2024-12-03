'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Footer = dynamic(() => import('@/components/footer'), { ssr: false });
const Header = dynamic(() => import('@/components/header'), { ssr: false });
const Blog = dynamic(() => import('@/components/main/blog'), { ssr: false });
const CardComponent = dynamic(
  () => import('@/components/main/card-component'),
  { ssr: false }
);
const Contact = dynamic(() => import('@/components/main/contact'), {
  ssr: false,
});
const MainSection = dynamic(() => import('@/components/main/main-section'), {
  ssr: false,
});
const ModernTechnologies = dynamic(
  () => import('@/components/main/modern-technologies'),
  { ssr: false }
);
const Provide = dynamic(() => import('@/components/main/provide'), {
  ssr: false,
});
const Service = dynamic(() => import('@/components/main/service'), {
  ssr: false,
});
const SwiperLeft = dynamic(() => import('@/components/main/swiper-left'), {
  ssr: false,
});
const TeamComponent = dynamic(() => import('@/components/main/team'), {
  ssr: false,
});

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="">
      <Header />
      <div className="">
        <MainSection />
      </div>
      <SwiperLeft />
      <CardComponent />
      <Service />
      <TeamComponent />
      <ModernTechnologies />
      <Provide />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
