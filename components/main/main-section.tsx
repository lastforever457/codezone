'use client';

import { Button, Col, Row } from 'antd';
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const MainSection = () => {
  return (
    <div
      className={
        "bg-[url('/main.jpg')] h-[65vh] md:h-[95vh] bg-cover bg-center bg-black pt-20 lg:pt-52 lg:px-72"
      }
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} className={'h-full'}>
          <div className={'flex items-center justify-between text-white'}>
            <div className={'pl-5 lg:pl-0 py-10 lg:py-16 pr-10 lg:pr-0'}>
              <div className="flex justify-start items-center mb-4 gap-2">
                <FiArrowUpRight className="text-xl" />
                <p className="text-xl underline">5m+ Trusted Our Clients</p>
              </div>
              <h1
                className={'font-bold text-4xl lg:text-6xl max-w-[550px] mb-5'}
              >
                Modern & Digital IT Solutions For Your Tech Business
              </h1>
              <span className={'text-md lg:text-xl'}>
                25+ Years Of Experience In Teach Services
              </span>
              <br />
              <Button
                type="primary"
                iconPosition="end"
                icon={<MdOutlineKeyboardArrowRight />}
                className={'rounded-lg px-10 py-3 mt-5'}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={12} className={'h-full'}>
          <div className={'mask flex justify-center items-center pt-32'}>
            <img src="/mask.png" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainSection;
