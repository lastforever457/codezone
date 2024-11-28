import { MailOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CgChevronRight } from 'react-icons/cg';
import { FaInstagram, FaStarOfLife, FaTwitter } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { IoArrowUpOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
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
    <div className="bg-[#ECE8E3] px-5 lg:px-72 py-10 lg:py-16">
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
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Data Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Cyber Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Data Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Cyber Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Data Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2 w-full items-center h-56 text-5xl font-semibold">
            <span className="text-blue-600">
              <FaStarOfLife />
            </span>
            <p className="relative group cursor-pointer hover:text-blue-700">
              {t('Cyber Security')}
              <span className="absolute left-0 bottom-0 h-[5px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <footer className="bg-white py-20 px-5 md:px-14 mt-8 relative">
        <span className="up-btn absolute bottom-0 bg-white left-1/2 flex justify-center items-center -translate-x-1/2 rounded-full size-16 translate-y-1/2">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 size-14 rounded-full flex justify-center items-center"
          >
            <IoArrowUpOutline className="text-xl text-white font-bold" />
          </button>
        </span>
        <Row gutter={[24, 36]}>
          <Col xs={24} sm={12} lg={6}>
            <div className="md:w-[60%] flex flex-col gap-6">
              <img src="/logo2.png" alt="Logo" className="w-[60%]" />
              <p className="text-gray-500 text-base md:text-lg">
                Sed ut persiciatis unde omnis natus voluptatem
              </p>
              <p className="text-base md:text-xl font-semibold">
                {t('follow us')}
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-700 bg-[#F6F2ED] hover:bg-[#D2A98E] hover:text-white size-10 rounded-full flex justify-center items-center"
                >
                  <FaFacebookF className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 bg-[#F6F2ED] hover:bg-[#D2A98E] hover:text-white size-10 rounded-full flex justify-center items-center"
                >
                  <FaTwitter className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 bg-[#F6F2ED] hover:bg-[#D2A98E] hover:text-white size-10 rounded-full flex justify-center items-center"
                >
                  <FaLinkedinIn className="text-lg" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 bg-[#F6F2ED] hover:bg-[#D2A98E] hover:text-white size-10 rounded-full flex justify-center items-center"
                >
                  <FaInstagram className="text-lg" />
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={5}>
            <h2 className="text-xl font-bold mb-5 pl-2">{t('IT Services')}</h2>
            <ul className="space-y-3 text-lg text-gray-600">
              {listColumn1.map((item: Record<string, any>, index: number) => (
                <li
                  key={index}
                  className="flex justify-start gap-2 items-center"
                >
                  <CgChevronRight className="text-xl" />
                  {item.name}
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} sm={12} lg={5}>
            <h2 className="text-xl font-bold mb-5 pl-2">{t('Support')}</h2>
            <ul className="space-y-3 text-lg text-gray-600">
              {listColumn2.map((item: Record<string, any>, index: number) => (
                <li
                  key={index}
                  className="flex justify-start gap-2 items-center"
                >
                  <CgChevronRight className="text-xl" />
                  {item.name}
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <h2 className="text-xl font-bold mb-5">{t('Newsletter')}</h2>
            <p className="text-gray-500 text-base md:text-xl">
              {t('Newsletter desc')}
            </p>
            <div className="flex items-center my-5 gap-2 rounded-lg border border-gray-300 bg-gray-50 p-2 shadow-sm">
              {/* <MailOutlined className="text-gray-500 text-lg" /> */}
              <Input
                prefix={<MailOutlined className="text-gray-500 text-lg" />}
                placeholder={t('Email Address')}
                className="border-none bg-gray-50  focus:outline-none p-2"
              />
              <Button
                type="primary"
                className="flex items-center rounded-lg p-5"
                icon={<CgChevronRight />}
                iconPosition="end"
              >
                {t('Sign Up')}
              </Button>
            </div>
          </Col>
        </Row>
      </footer>
      <div className="flex-col md:flex-row justify-between text-[#555] mt-20">
        <p className="text-center mb-5 md:mb-0">
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
  );
};

export default Footer;
