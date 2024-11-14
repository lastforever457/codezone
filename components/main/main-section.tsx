'use client';

import { Button, Col, Row } from 'antd';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const MainSection = () => {
  return (
    <div
      className={
        "relative bg-[url('/main.jpg')] bg-no-repeat min-h-screen bg-cover bg-center bg-black w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-72 pt-16 sm:pt-20 lg:pt-32 xl:pt-52"
      }
      style={{
        animation: 'mainAnimation 3s',
        animationFillMode: 'forwards',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Row className="flex flex-col lg:flex-row">
          <Col xs={24} lg={12} className="w-full">
            <div className="text-white">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-2">
                  <FiArrowUpRight className="text-lg sm:text-xl" />
                  <p className="text-base sm:text-xl underline">
                    5m+ Trusted Our Clients
                  </p>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-[550px]">
                  Modern & Digital IT Solutions For Your Tech Business
                </h1>
                <p className="text-base sm:text-lg xl:text-xl">
                  25+ Years Of Experience In Tech Services
                </p>
                <Button
                  type="primary"
                  icon={<MdOutlineKeyboardArrowRight />}
                  iconPosition="end"
                  className="mt-4 rounded-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-5 text-base sm:text-lg"
                >
                  Explore Our Services
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
