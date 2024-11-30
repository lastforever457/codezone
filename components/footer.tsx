import useBreakpoint from '@/hooks/use-breakpoint';
import { MailOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CgChevronRight } from 'react-icons/cg';
import { FaInstagram, FaStarOfLife, FaTwitter } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { IoArrowUpOutline } from 'react-icons/io5';
import { LuSend } from 'react-icons/lu';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const listColumn1 = useMemo(
    () => [
      {
        id: 0,
        name: t('IT Consultancy'),
      },
      {
        id: 1,
        name: t('IT Management'),
      },
      {
        id: 2,
        name: t('IT Support'),
      },
      {
        id: 3,
        name: t('Cloud Computing'),
      },
      {
        id: 4,
        name: t('Cyber Security'),
      },
    ],
    [t]
  );

  const listColumn2 = useMemo(
    () => [
      {
        id: 0,
        name: t('Forum Support'),
      },
      {
        id: 1,
        name: t('Help & FAQ'),
      },
      {
        id: 2,
        name: t('Contact Us'),
      },
      {
        id: 3,
        name: t('Pricing and Plans'),
      },
      {
        id: 4,
        name: t('Cookies Policy'),
      },
    ],
    [t]
  );
  return (
    // 2xl:px-72
    <div className="bg-[#ECE8E3] px-4 md:py-10 2xl:py-16">
      <div className="mx-auto container">
        <Swiper
          navigation={false}
          className="w-full"
          loop
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {new Array(10).fill(0).map((_, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center gap-2 w-full h-32 2xl:h-56 font-semibold text-3xl">
                <div className="flex justify-center items-center">
                  <span className="text-blue-600">
                    <FaStarOfLife />
                  </span>
                  <p className="relative hover:text-blue-700 cursor-pointer group">
                    {(index + 1) % 2 === 0
                      ? t('Data Security')
                      : t('Cyber Security')}
                    <span className="group-hover:w-full bottom-0 left-0 absolute bg-blue-600 w-0 h-[5px] transition-all duration-500"></span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mx-auto container">
        <footer className="relative bg-white md:mt-8 px-5 md:px-14 py-10 md:py-20">
          <span className="bottom-0 left-1/2 absolute flex justify-center items-center bg-white up-btn rounded-full -translate-x-1/2 translate-y-1/2 size-16">
            <button
              onClick={scrollToTop}
              className="flex justify-center items-center bg-blue-500 rounded-full size-14"
            >
              <IoArrowUpOutline className="font-bold text-white text-xl" />
            </button>
          </span>
          <Row gutter={[24, 36]}>
            <Col xs={24} sm={12} lg={6}>
              <div className="flex flex-col gap-6 md:w-[60%]">
                <img src="/logo2.png" alt="Logo" className="w-[60%]" />
                <p className="text-base text-gray-500 md:text-lg">
                  Sed ut persiciatis unde omnis natus voluptatem
                </p>
                <p className="font-semibold text-base md:text-xl">
                  {t('follow us')}
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-[#F6F2ED] hover:bg-[#D2A98E] rounded-full text-gray-700 hover:text-white size-10"
                  >
                    <FaFacebookF className="text-lg" />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-[#F6F2ED] hover:bg-[#D2A98E] rounded-full text-gray-700 hover:text-white size-10"
                  >
                    <FaTwitter className="text-lg" />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-[#F6F2ED] hover:bg-[#D2A98E] rounded-full text-gray-700 hover:text-white size-10"
                  >
                    <FaLinkedinIn className="text-lg" />
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center bg-[#F6F2ED] hover:bg-[#D2A98E] rounded-full text-gray-700 hover:text-white size-10"
                  >
                    <FaInstagram className="text-lg" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={5}>
              <h2 className="mb-5 pl-2 font-bold text-base md:text-xl">
                {t('IT Services')}
              </h2>
              <ul className="space-y-3 text-gray-600 text-lg">
                {listColumn1.map((item: Record<string, any>, index: number) => (
                  <li
                    key={index}
                    className="flex justify-start items-center gap-2 text-sm md:text-base"
                  >
                    <CgChevronRight className="text-xl" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={24} sm={12} lg={5}>
              <h2 className="mb-5 pl-2 font-bold text-base md:text-xl">
                {t('Support')}
              </h2>
              <ul className="space-y-3 text-gray-600 text-lg">
                {listColumn2.map((item: Record<string, any>, index: number) => (
                  <li
                    key={index}
                    className="flex justify-start items-center gap-2 text-sm md:text-base"
                  >
                    <CgChevronRight className="text-xl" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <h2 className="mb-3 md:mb-5 font-bold text-base md:text-xl">
                {t('Newsletter')}
              </h2>
              <p className="text-gray-500 text-sm md:text-xl">
                {t('Newsletter desc')}
              </p>
              <div className="flex items-center gap-2 border-gray-300 bg-gray-50 shadow-sm my-5 p-2 border rounded-lg">
                {/* <MailOutlined className="text-gray-500 text-lg" /> */}
                <Input
                  prefix={<MailOutlined className="text-gray-500 text-lg" />}
                  placeholder={t('Email Address')}
                  className="bg-gray-50 p-2 border-none focus:outline-none"
                />
                <Button
                  type="primary"
                  className="flex items-center p-3 md:p-5 rounded-lg"
                  icon={
                    !['sm', 'xs'].includes(breakpoint) && <CgChevronRight />
                  }
                  iconPosition="end"
                >
                  {['sm', 'xs'].includes(breakpoint) ? (
                    <LuSend />
                  ) : (
                    t('Sign Up')
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </footer>
        <div className="flex md:flex-row xl:flex-row flex-col justify-between items-center mt-20 pb-10 text-[#555]">
          <p className="mb-5 2xl:mb-0 text-center text-sm md:text-base">
            © 2023 WiaTech - IT Services. {t('All rights reserved')}.
          </p>
          <div className="flex justify-center items-center gap-5 text-sm md:text-base">
            <Link className="hover:text-blue-600" href="/">
              {t('company')}
            </Link>
            <Link className="hover:text-blue-600" href="/">
              {t('support')}
            </Link>
            <Link className="hover:text-blue-600" href="/">
              {t('privacy')}
            </Link>
            <Link className="hover:text-blue-600" href="/">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
