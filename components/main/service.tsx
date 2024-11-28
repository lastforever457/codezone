import { Button, Col, Progress, Row } from 'antd';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import { IoMdLaptop } from 'react-icons/io';
import { LuArrowUpRight } from 'react-icons/lu';
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

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
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
      {
        id: 2,
        title: t('IT Management'),
        icon: <IoMdLaptop />,
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
      {
        id: 3,
        title: t('Data Security'),
        icon: <IoMdLaptop />,
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
      {
        id: 4,
        title: t('Infrastructure Plan'),
        icon: <IoMdLaptop />,
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
      {
        id: 5,
        title: t('Firewall Advancement'),
        icon: <IoMdLaptop />,
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
      {
        id: 6,
        title: t('Desktop Computing'),
        icon: <IoMdLaptop />,
        description:
          'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
      },
    ],
    [t]
  );

  return (
    <div className="bg-[#F6F2ED] mt-24 mb-14 relative">
      <img
        src="/dot-pattern.png"
        className="absolute w-40 md:w-auto rotate-180 opacity-25"
        alt=""
      />
      <img
        src="/dot-pattern.png"
        className="absolute w-40 md:w-auto right-0 transform scale-y-[-1] opacity-25"
        alt=""
      />
      <div className="flex items-center pt-24 justify-center flex-col gap-4 pb-12">
        <h4
          data-aos="fade-up"
          className="text-blue-500 text-xl font-bold lg:text-2xl"
        >
          {t('Popular Services')}
        </h4>
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-5xl font-bold text-center"
        >
          {t('Services We Provide')}
        </h2>
      </div>

      <div className="gap-6 pb-24 px-5 lg:px-72">
        <Row gutter={[2, 2]}>
          {services.map((service: Record<string, any>, index: number) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} key={service.id}>
              <div
                className={`${
                  isHovering === index + 1
                    ? 'flex z-50 opacity-100'
                    : 'hidden opacity-0'
                } absolute top-1/2 left-1/2 text-white p-10 w-full h-[120%] bg-blue-600 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
              >
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex flex-col gap-3">
                    <span className="text-6xl">{service.icon}</span>
                    <p className="font-semibold text-2xl">{service.title}</p>
                    <p className="text-sm">{service.description}</p>
                    <div className="flex">
                      <Button
                        icon={<MdKeyboardArrowRight />}
                        iconPosition="end"
                        type="text"
                        className="text-white pl-0 cursor-pointer hover:translate-x-2 transition-transform duration-300 ease-in-out hover:text-white hover:scale-105"
                      >
                        {t('read more')}
                      </Button>{' '}
                    </div>
                  </div>
                  <div className="flex justify-end items-start h-full">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      className="text-[7rem] font-bold text-white"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      0{index + 1}
                    </motion.span>
                  </div>
                </div>
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
                      <span className="text-blue-600 font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Button className="py-16 rounded-3xl bg-[#F6F2ED]">
                    <LuArrowUpRight />
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="relative">
        <img
          src="/pattern.png"
          alt=""
          className="absolute top-0 left-0 h-[400px] w-full"
          color="#000"
        />
        <Row>
          <Col xs={24} sm={24} md={11} lg={11}>
            <div className="py-5 lg:py-16 pl-5 lg:pl-72 pr-10">
              <h4 className="text-xl text-blue-500 font-bold">
                {t('Best IT Solutions')}
              </h4>
              <h2
                data-aos="fade-up"
                className="text-3xl lg:text-5xl font-bold mt-6"
              >
                {t('We Prominent Truly IT Your solutions')}
              </h2>
              <p
                data-aos="fade-up"
                className="text-gray-500 mt-8 text-sm lg:text-[16px]"
              >
                We denounce with righteous indignation and like men who are so
                beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire foresee the pain
              </p>
              <div
                data-aos="fade-up"
                className="flex justify-center lg:justify-start gap-5 items-center mt-10"
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
                className="flex flex-col gap-5 lg:flex-row justify-center lg:items-center mt-10 space-x-4"
              >
                <div className="">
                  <Button
                    iconPosition="end"
                    icon={<MdOutlineKeyboardArrowRight />}
                    type="primary"
                    className="px-12 py-5 text-white rounded-lg font-bold hover:bg-blue-700 transition duration-300"
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
                        className="hover:scale-110 w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="ml-4 text-lg font-medium">
                    10m+ {t('Customers')}
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={11} lg={13} className="px-5">
            <div
              className={
                'bg-[url(/feature.jpg)] bg-center bg-cover object-contain px-0 py-10 lg:px-16 lg:pt-64 lg:pb-32 lg:mb-10'
              }
            >
              <div className="flex justify-start items-end w-full h-full">
                <div
                  className={'bg-blue-600 w-[340px] py-16 px-16 text-white'}
                  data-aos="fade-right"
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
    </div>
  );
};

export default Service;
