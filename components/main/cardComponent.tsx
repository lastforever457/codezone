'use client';

import { Button, Col, Row } from 'antd';
import { useMemo } from 'react';
import { FaUsers, FaUsersSlash } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';
import { MdSettingsBrightness } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

function CardComponent() {
  const cards = useMemo(
    () => [
      {
        id: 1,
        title: 'Cost-effectiveness',
        description:
          'We offer It Solution that help you reduce costs and improve',
        icon: <GiReceiveMoney size={80} />,
      },
      {
        id: 2,
        title: 'Innovative Technology',
        description:
          'We offer It Solution that help you reduce costs and improve',
        icon: <MdSettingsBrightness size={80} />,
      },
      {
        id: 3,
        title: 'Industry Expertise',
        description:
          'We offer It Solution that help you reduce costs and improve',
        icon: <FaUsersSlash size={80} />,
      },
    ],
    []
  );

  return (
    <div className={'px-72 py-20'}>
      <div className={'mt-[-230px] mb-24 flex justify-between'}>
        <Row gutter={[20, 20]}>
          {cards.map((card: Record<string, any>, index: number) => (
            <Col xs={24} sm={24} md={12} lg={8} key={index}>
              <div
                className={
                  'bg-white rounded-xl p-10 transition-all cursor-pointer border-b-blue-500 gap-3 border-b-4 h-[350px] hover:bg-blue-500 hover:text-white hover:border-b-white flex flex-col justify-center items-start'
                }
              >
                <span className="text-blue-600">{card.icon}</span>
                <h3 className={'text-xl mb-3 font-bold'}>{card.title}</h3>
                <span className={'text-gray-500'}>{card.description}</span>
                <Button
                  iconPosition="end"
                  icon={<IoIosArrowForward />}
                  className={
                    'mt-6 py-5 px-12 transition-all font-bold border-2 border-gray-200 rounded-xl hover:bg-white hover:text-black'
                  }
                >
                  Read More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className={'mt-20 flex justify-center gap-14'}>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <div className="relative overflow-hidden rounded-full">
              <img
                src="/men.jpg"
                alt="Custom Shaped"
                className="w-full h-full object-cover"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <div className="flex justify-center items-center w-full h-full pl-5">
              <div className="p-2 flex flex-col justify-between items-start">
                <h4 className={'font-bold mt-16 mb-5 text-2xl text-blue-500'}>
                  About Company
                </h4>
                <h2 className={'text-4xl font-bold mb-3'}>
                  Make your life <br /> easier with help from{' '}
                  <span className="text-blue-600">Wiatech</span>
                </h2>
                <br />
                <span
                  className={
                    'text-gray-500 font-medium p-0 m-0 flex justify-center items-center gap-2'
                  }
                >
                  <TiTick size={24} className={'text-blue-600'} />
                  Professional Team Member
                </span>
                <br />
                <span
                  className={
                    'text-gray-500 font-medium p-0 m-0 flex justify-center items-center gap-2'
                  }
                >
                  <TiTick size={24} className={'text-blue-600'} /> Awards
                  Winning IT Solutions Company
                </span>
                <br />
                <span
                  className={
                    'text-gray-500 font-medium p-0 m-0 flex justify-center items-center gap-2'
                  }
                >
                  <TiTick size={24} className={'text-blue-600'} /> Dedicated
                  Tech Services
                </span>
                <br />
                <Button
                  iconPosition="end"
                  icon={<IoIosArrowForward />}
                  className={
                    'bg-blue-600 text-white py-6 px-10 text-xl rounded-xl mt-6'
                  }
                >
                  Read More
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <div className={''}>
              <h1 className={'text-2xl mt-16 mb-5 font-bold'}>
                We’ve 25+ Years Of Experience In Tech Services
              </h1>
              <span className={'text-gray-500 mt-5 text-md text-justify'}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam, eaque epsa
                inventore
              </span>
              <div className={'flex justify-between items-center mt-28'}>
                <div>
                  <FaUsers size={50} className={'text-blue-600'} />
                  <h3 className={'text-5xl font-bold mb-3'}>56k+</h3>
                  <span className={'text-gray-500 text-lg'}>
                    Satisfied Customers
                  </span>
                </div>
                <div>
                  <FaUsers size={50} className={'text-blue-600'} />
                  <h3 className={'text-5xl font-bold mb-3'}>8m+</h3>
                  <span className={'text-gray-500 text-lg'}>
                    Project Complete
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CardComponent;
