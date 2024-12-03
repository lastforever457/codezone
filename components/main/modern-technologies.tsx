import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { IoLayersOutline } from 'react-icons/io5';

const ModernTechnologies = () => {
  const { t } = useTranslation();
  return (
    //lg:px-0
    <div className="px-4 py-7 2xl:py-16">
      <div className="flex justify-center items-center mx-auto w-full container">
        <Row gutter={[0, 30]}>
          <Col lg={14} xs={24}>
            <div className="w-full lg:h-[792px]">
              <img
                src="/modern-tech.png"
                alt=""
                className="bg-contain bg-no-repeat lg:mt-16 w-full h-full object-contain"
              />
            </div>
          </Col>
          <Col
            lg={10}
            xs={24}
            className="flex justify-center items-center mx-auto w-full h-full container"
          >
            <div className="flex justify-center items-center lg:mt-28 md:h-[80%] min-h-[500px]">
              <div className="flex flex-col items-start gap-6 md:gap-10 bg-[#020626] px-5 2xl:px-20 py-10 2xl:py-28 w-full h-full text-white">
                <span className="text-5xl text-blue-600 md:text-8xl">
                  <IoLayersOutline />
                </span>
                <h1 className="font-bold text-xl md:text-3xl">
                  {t('modern technologies')}
                </h1>
                <p className="text-[#999] text-[11px] md:text-base">
                  {t('modern_technologies_desc')}.
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
