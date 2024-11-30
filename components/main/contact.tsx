import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { t } from 'i18next';
import { BiChevronRight } from 'react-icons/bi';

const Contact = () => {
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    // lg:px-5 2xl:px-72
    <div className="bg-[#0B1120] 2xl:py-36 text-white">
      <div className="mx-auto px-4 container">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3 py-7 lg:p-0">
              <h3 className="mb-2 sm:mb-4 font-semibold text-base text-blue-500 sm:text-lg lg:text-base">
                {t('workInquiry')}
              </h3>
              <h1 className="mb-2 sm:mb-4 max-w-[90%] font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl">
                {t('letsWork')}
              </h1>
              <p className="mb-4 sm:mb-6 text-base text-gray-400 sm:text-lg md:text-base">
                {t('description')}
              </p>
              <div className="flex flex-col justify-center md:justify-start items-start md:items-start w-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 text-[#D2A98E]">
                  <PhoneOutlined className="mr-2 sm:mr-4 text-2xl sm:text-3xl lg:text-4xl" />
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <p className="text-base sm:text-lg">{t('callInquiry')}</p>
                    <span className="font-semibold text-white text-xl sm:text-2xl lg:text-2xl">
                      +236 (456) 896 22
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-[#D2A98E]">
                  <MailOutlined className="mr-2 sm:mr-4 text-2xl sm:text-3xl lg:text-4xl" />
                  <div className="flex flex-col gap-0.5 sm:gap-1">
                    <p className="text-base sm:text-lg">{t('sendEmail')}</p>
                    <span className="font-semibold text-white text-xl sm:text-2xl lg:text-2xl">
                      infotech@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div className="py-7 lg:p-0">
              <div className="flex flex-col justify-center items-center bg-[#F6F2ED] shadow-md px-5 md:px-7 lg:px-10 py-7 md:py-10 lg:py-12 rounded-lg text-black">
                <h2 className="mb-4 font-semibold text-2xl md:text-3xl">
                  {t('needHelp')}
                </h2>
                <p className="mb-6 text-base text-gray-500 lg:text-xl">
                  {t('helpDescription')}
                </p>
                <Form onFinish={onFinish} className="w-full">
                  <Row gutter={[16, 10]}>
                    <Col span={12}>
                      <Form.Item name="name" rules={[{ required: true }]}>
                        <Input placeholder={t('form.name')} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="email"
                        rules={[{ required: true, type: 'email' }]}
                      >
                        <Input placeholder={t('form.email')} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="service" rules={[{ required: true }]}>
                        <Select placeholder={t('form.service')}>
                          <Option value="webDevelopment">
                            {t('form.webDevelopment')}
                          </Option>
                          <Option value="mobileApp">
                            {t('form.mobileApp')}
                          </Option>
                          <Option value="uiUxDesign">
                            {t('form.uiUxDesign')}
                          </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="message">
                        <Input.TextArea rows={4} />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <div className="flex justify-center items-center w-full">
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="px-4 md:px-6 py-3 md:py-5 rounded-xl text-sm md:text-base lg:text-xl"
                          icon={<BiChevronRight />}
                          iconPosition="end"
                        >
                          {t('form.sendButton')}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
