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
    <div className="bg-[#0B1120] text-white py-5 lg:py-36 lg:px-72">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="px-5 py-7 md:p-0 flex flex-col gap-3 justify-center items-center md:justify-start md:items-start md:p-0">
            <h3 className="text-blue-500 font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              {t('workInquiry')}
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
              {t('letsWork')}
            </h1>
            <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl">
              {t('description')}
            </p>
            <div className="w-full flex flex-col justify-center items-start md:justify-start md:items-start">
              <div className="flex items-center mb-4 text-[#D2A98E] gap-2 sm:gap-3">
                <PhoneOutlined className="text-2xl sm:text-3xl lg:text-4xl mr-2 sm:mr-4" />
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <p className="text-base sm:text-lg lg:text-xl">
                    {t('callInquiry')}
                  </p>
                  <span className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                    +236 (456) 896 22
                  </span>
                </div>
              </div>
              <div className="flex items-center text-[#D2A98E] gap-2 sm:gap-3">
                <MailOutlined className="text-2xl sm:text-3xl lg:text-4xl mr-2 sm:mr-4" />
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <p className="text-base sm:text-lg lg:text-xl">
                    {t('sendEmail')}
                  </p>
                  <span className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                    infotech@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="px-5 py-7 md:p-0">
            <div className="bg-[#F6F2ED] text-black px-10 py-12 rounded-lg shadow-md flex flex-col justify-center items-center">
              <h2 className="text-3xl font-semibold mb-4">{t('needHelp')}</h2>
              <p className="text-gray-500 text-xl mb-6">
                {t('helpDescription')}
              </p>
              <Form layout="vertical" onFinish={onFinish} className="w-full">
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
                        <Option value="mobileApp">{t('form.mobileApp')}</Option>
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
                        className="text-xl px-6 py-5 rounded-xl"
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
  );
};

export default Contact;
