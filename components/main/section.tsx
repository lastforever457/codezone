'use client';

import { Col, Row } from 'antd';

function Section() {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className={
        "bg-[url('/main.jpg')] bg-cover bg-center bg-black bg-opacity-50 pt-52 px-72"
      }
    >
      <Row>
        <Col span={12} className={'h-full'}>
          <div className={'flex items-center justify-between text-white'}>
            <div className={'py-16'}>
              <p className="text-xl mb-3">5m+ Trusted Our Clients</p>
              <h1 className={' font-bold text-6xl max-w-[550px] mb-8'}>
                Modern & Digital IT Solutions For Your Tech Business
              </h1>
              <span className={' text-xl'}>
                25+ Years Of Experience In Teach Services
              </span>
              <br />
              <button className={'bg-blue-500  rounded-full px-12 py-3 mt-5'}>
                Explore Our Services
              </button>
            </div>
          </div>
        </Col>
        <Col span={12} className={'h-full'}>
          <div className={'mask flex justify-center items-center pt-32'}>
            <img src="/mask.png" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section;
