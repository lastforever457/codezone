'use client';

import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const MainSection = () => {
  const { t } = useTranslation();
  //  sm:px-6 md:px-8 2xl:px-72
  return (
    <div
      id="home"
      className="relative bg-black bg-cover bg-no-repeat bg-center px-4 2xl:py-52 pt-16 sm:pt-20 lg:pt-10 2xl:pt-32 w-full h-[70vh] xl:h-screen"
      style={{
        backgroundImage: `url('/main.jpg')`,
      }}
    >
      <div className="mx-auto container">
        <Row className="flex lg:flex-row flex-col">
          <Col xs={24} lg={12} className="w-full">
            <div className="flex flex-col md:mt-32 text-white">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-2">
                  <FiArrowUpRight className="text-lg sm:text-xl" />
                  <p className="text-base sm:text-xl underline cursor-default">
                    {t('5m')}.
                  </p>
                </div>
                <h1 className="max-w-[650px] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                  {t('main title')}
                </h1>
                <p className="text-base sm:text-lg xl:text-xl">
                  {t('tech services')}.
                </p>
                <Button
                  type="primary"
                  icon={<MdOutlineKeyboardArrowRight />}
                  iconPosition="end"
                  className="mt-4 px-5 sm:px-8 lg:px-10 py-5 sm:py-5 rounded-lg text-sm sm:text-lg"
                >
                  {t('explore our services')}
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={12} className={'h-full'}>
            <div className={'mask flex justify-end items-center pt-32'}>
              <img src="/mask.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainSection;
