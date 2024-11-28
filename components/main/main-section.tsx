'use client';

import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const MainSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className="relative bg-no-repeat h-[70vh] xl:h-screen bg-black w-full px-4 sm:px-6 md:px-8 2xl:px-72 pt-16 sm:pt-20 lg:pt-10 2xl:pt-32 2xl:py-52 bg-cover bg-center"
      style={{
        backgroundImage: `url('/main.jpg')`,
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Row className="flex flex-col lg:flex-row">
          <Col xs={24} lg={12} className="w-full">
            <div className="text-white flex flex-col md:mt-32">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-2">
                  <FiArrowUpRight className="text-lg sm:text-xl" />
                  <p className="text-base sm:text-xl underline cursor-default">
                    {t('5m')}.
                  </p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-[650px]">
                  {t('main title')}
                </h1>
                <p className="text-base sm:text-lg xl:text-xl">
                  {t('tech services')}.
                </p>
                <Button
                  type="primary"
                  icon={<MdOutlineKeyboardArrowRight />}
                  iconPosition="end"
                  className="mt-4 rounded-lg px-5 sm:px-8 lg:px-10 py-5 sm:py-5 text-sm sm:text-lg"
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
