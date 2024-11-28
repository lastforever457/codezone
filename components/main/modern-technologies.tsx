import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { IoLayersOutline } from 'react-icons/io5';

const ModernTechnologies = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 lg:px-0 py-7 2xl:py-16">
      <div className="flex w-full items-center justify-center">
        <Row gutter={[0, 30]}>
          <Col lg={14} xs={24}>
            <div className="w-full lg:h-[792px]">
              <img
                src="/modern-tech.png"
                alt=""
                className="bg-no-repeat w-full h-full bg-contain object-contain"
              />
            </div>
          </Col>
          <Col
            lg={10}
            xs={24}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="flex min-h-[500px] md:h-[80%] justify-center items-center lg:mt-28">
              <div className="w-full flex flex-col items-start gap-6 md:gap-10 h-full text-white py-10 px-5 2xl:px-20 2xl:py-28 bg-[#020626]">
                <span className="text-5xl md:text-8xl text-blue-600">
                  <IoLayersOutline />
                </span>
                <h1 className="text-xl md:text-3xl font-bold">
                  {t('modern technologies')}
                </h1>
                <p className="text-[#999] text-[11px] md:text-base">
                  We denounce with righteous indignation and like men who are
                  beguiled and demoralized by the charms of pleasure of the
                  moment, so blinded by desire foresee the pain
                </p>
                <Button
                  icon={<BiChevronRight />}
                  type={'primary'}
                  className="md:px-7 md:py-6 rounded-lg font-semibold text-[12px] md:text-base"
                  iconPosition="end"
                >
                  {t('View Details')}
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
