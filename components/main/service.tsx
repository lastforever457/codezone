import { Button, Col, Progress, Row } from 'antd';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaStarOfLife } from 'react-icons/fa';
import { IoMdLaptop } from 'react-icons/io';
import { LuArrowUpRight } from 'react-icons/lu';
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';

const Service = () => {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState<number>(0);
  const stars = useMemo(
    () => [
      {
        id: 1,
        icon: <FaStar />,
      },
      {
        id: 2,
        icon: <FaStar />,
      },
      {
        id: 3,
        icon: <FaStar />,
      },
      {
        id: 4,
        icon: <FaStar />,
      },
      {
        id: 5,
        icon: <FaStar />,
      },
    ],
    []
  );
  const services = useMemo(
    () => [
      {
        id: 1,
        title: t('UX/UI Design'),
        icon: <IoMdLaptop />,
        description: t('service_desc_ux'),
      },
      {
        id: 2,
        title: t('IT Management'),
        icon: <IoMdLaptop />,
        description: t('service_desc_management'),
      },
      {
        id: 3,
        title: t('Data Security'),
        icon: <IoMdLaptop />,
        description: t('service_desc_security'),
      },
      {
        id: 4,
        title: t('Infrastructure Plan'),
        icon: <IoMdLaptop />,
        description: t('service_desc_infrastructure'),
      },
      {
        id: 5,
        title: t('Firewall Advancement'),
        icon: <IoMdLaptop />,
        description: t('service_desc_firewall'),
      },
      {
        id: 6,
        title: t('Desktop Computing'),
        icon: <IoMdLaptop />,
        description: t('service_desc_desktop'),
      },
    ],
    [t]
  );

  return (
    <div className="relative bg-[#F6F2ED] mt-24 mb-14">
      <img
        src="/dot-pattern.png"
        className="absolute opacity-25 w-32 md:w-40 lg:w-auto rotate-180"
        alt=""
      />
      <img
        src="/dot-pattern.png"
        className="right-0 absolute opacity-25 w-32 lg:w-auto transform scale-y-[-1]"
        alt=""
      />
      <div className="flex flex-col justify-center items-center gap-4 pt-24 pb-12">
        <h4
          data-aos="fade-up"
          className="font-bold text-blue-500 text-xl lg:text-2xl leading-relaxed"
        >
          {t('Popular Services')}
        </h4>
        <h2
          data-aos="fade-up"
          className="font-bold text-3xl text-center md:text-4xl lg:text-5xl leading-snug md:leading-tight"
        >
          {t('Services We Provide')}
        </h2>
      </div>
      {/*lg:px-32 2xl:px-72 */}
      <div className="gap-6 mx-auto px-4 pb-24 container">
        <Row gutter={[3, 3]}>
          {services.map((service: Record<string, any>, index: number) => (
            <Col xs={24} sm={12} md={12} lg={8} xl={8} key={service.id}>
              <div
                className={`${
                  isHovering === index + 1
                    ? 'flex z-50 opacity-100'
                    : 'hidden opacity-0'
                } absolute top-1/2 left-1/2 text-white px-5 py-10 md:p-10 w-full h-[130%] bg-blue-600 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
              >
                <div className="flex flex-col justify-between items-start w-full h-full">
                  <div className="w-full">
                    <Row>
                      <Col span={16}>
                        <div className="flex flex-col gap-2 w-full">
                          <span className="text-6xl">{service.icon}</span>
                          <p className="font-semibold text-2xl">
                            {service.title}
                          </p>
                        </div>
                      </Col>
                      <Col span={8}>
                        <div className="flex justify-end items-start w-full h-full">
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            className="font-bold text-[5rem] text-white md:text-[6rem]"
                            style={{
                              color: 'rgba(255, 255, 255, 0.7)',
                            }}
                          >
                            0{index + 1}
                          </motion.span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p className="text-sm">{service.description}</p>
                  <div className="flex">
                    <Button
                      icon={<MdKeyboardArrowRight />}
                      iconPosition="end"
                      type="text"
                      className="z-50 mt-5 pl-0 font-bold text-white hover:text-white transition-transform hover:translate-x-2 duration-300 cursor-pointer ease-in-out hover:scale-105"
                    >
                      {t('read more')}
                    </Button>{' '}
                  </div>
                </div>
                <div className="flex justify-end items-start h-full"></div>
              </div>
              <div
                onMouseEnter={() => setIsHovering(index + 1)}
                onMouseLeave={() => setIsHovering(0)}
                key={service.id}
                className={`relative bg-white flex p-10 justify-between items-center w-full shadow-lg h-[250px] group hover:bg-blue-500 hover:text-white transition duration-300 ${
                  isHovering === index + 1 ? 'z-30' : 'z-10'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-blue-600">
                        0{index + 1}
                      </span>
                      <h3 className="font-bold text-xl leading-relaxed">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Button className="bg-[#F6F2ED] py-16 rounded-3xl">
                    <LuArrowUpRight />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="relative mx-auto px-4 container">
        <img
          src="/pattern.png"
          alt=""
          className="top-0 left-0 absolute w-full h-[400px]"
          color="#000"
        />
        <Row>
          <Col xs={24} sm={24} md={24} lg={11}>
            {/* pl-5 2xl:pl-72 */}
            <div className="py-5 2xl:py-16 pr-10">
              <h4 className="font-bold text-blue-500 text-xl leading-relaxed">
                {t('Best IT Solutions')}
              </h4>
              <h2
                data-aos="fade-up"
                className="mt-6 font-bold text-3xl lg:text-5xl leading-snug lg:leading-tight"
              >
                {t('We Prominent Truly IT Your solutions')}
              </h2>
              <div
                data-aos="fade-up"
                className="flex justify-center md:justify-start items-center gap-5 mt-10"
              >
                <div className="flex flex-col justify-center items-center">
                  <Progress size={'small'} type="circle" percent={68} />
                  <p className="mt-2 font-semibold">{t('Business Strategy')}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Progress size={'small'} type="circle" percent={93} />
                  <p className="mt-2 font-semibold">
                    {t('Technology Solutions')}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex md:flex-row flex-col justify-start lg:justify-center md:items-center gap-5 space-x-4 mt-10"
              >
                <div>
                  <Button
                    iconPosition="end"
                    icon={<MdOutlineKeyboardArrowRight />}
                    type="primary"
                    className="hover:bg-blue-700 px-12 py-5 rounded-lg font-bold text-white transition duration-300"
                  >
                    {t('read more')}
                  </Button>
                </div>
                <div className="flex justify-start items-center">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 4 }, (_, index) => (
                      <img
                        key={index}
                        src={`/customer-${index + 1}.jpg`}
                        alt="Customer"
                        className="hover:scale-110 border-2 border-white rounded-full w-10 h-10"
                      />
                    ))}
                  </div>
                  <span className="ml-4 font-medium text-lg">
                    10m+ {t('Customers')}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={13}>
            <div
              className={
                'bg-[url(/feature.jpg)] bg-center bg-cover object-contain px-0 py-10 lg:px-16 lg:pt-64 lg:pb-32 lg:mb-10'
              }
            >
              <div className="flex justify-start items-end w-full h-full">
                <div
                  className={'bg-blue-600 w-[340px] py-16 px-16 text-white'}
                  data-aos="fade-up"
                >
                  <h1 className={'text-6xl font-bold mb-2'}>25+</h1>
                  <h4 className={'border-b-2 border-b-white'}>
                    {t('Years of Experience')}
                  </h4>
                  <div className={'flex items-center gap-3 pt-6'}>
                    {stars.map((item) => (
                      <div key={item.id}>
                        <span>{item.icon}</span>
                      </div>
                    ))}
                    <span>{t('Trustpoint')}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mx-auto px-4 container">
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
              <div className="flex justify-center items-center gap-2 w-full h-32 2xl:h-44 font-semibold text-3xl">
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
    </div>
  );
};

export default Service;
