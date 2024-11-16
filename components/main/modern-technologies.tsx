import { Button, Col, Row } from 'antd';
import { BiChevronRight } from 'react-icons/bi';
import { IoLayersOutline } from 'react-icons/io5';

const ModernTechnologies = () => {
  return (
    <div className="px-5 lg:px-0 py-7 lg:py-16">
      <div className="flex w-full max-h-[792px] items-center justify-center">
        <Row gutter={[0, 30]}>
          <Col md={14} xs={24}>
            <div className="w-full md:h-[792px]">
              <img
                src="/modern-tech.png"
                alt=""
                className="bg-no-repeat w-full h-full bg-contain object-contain"
              />
            </div>
          </Col>
          <Col md={10} xs={24}>
            <div className="flex h-[500px] md:h-[80%] justify-center items-center">
              <div className="w-full flex flex-col items-start gap-6 md:gap-10 h-full text-white py-10 px-5 md:px-20 md:py-28 bg-[#020626]">
                <span className="text-8xl text-blue-600">
                  <IoLayersOutline />
                </span>
                <h1 className="text-3xl font-bold">
                  Modern Technology Advancement and Innovative Incentives
                </h1>
                <p className="text-[#999]">
                  We denounce with righteous indignation and like men who are
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire foresee the pain
                </p>
                <Button
                  icon={<BiChevronRight />}
                  type={'primary'}
                  className="px-7 py-6 rounded-lg font-semibold"
                  iconPosition="end"
                >
                  View Details
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ModernTechnologies;
