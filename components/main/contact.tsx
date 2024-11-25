import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
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
          <div className="max-w-[80%]">
            <h3 className="text-blue-500 font-semibold text-lg mb-4">
              Work Inquiry
            </h3>
            <h1 className="text-6xl font-bold mb-4">
              Let's Work For Your Next Projects?
            </h1>
            <p className="text-gray-400 mb-6 text-xl">
              We denounce with righteous indignation and like men beguiled and
              demoralized by the charms
            </p>
            <div className="flex items-center mb-4 text-[#D2A98E] gap-3">
              <PhoneOutlined className="text-4xl mr-4" />
              <div className="flex flex-col gap-1">
                <p className="text-xl">Call For Inquiry</p>
                <span className="text-3xl text-white font-semibold">
                  +236 (456) 896 22
                </span>
              </div>
            </div>
            <div className="flex items-center text-[#D2A98E] gap-3">
              <MailOutlined className="text-4xl mr-4" />
              <div className="flex flex-col gap-1">
                <p className="text-xl">Send Us Email</p>
                <span className="text-3xl text-white font-semibold">
                  infotech@gmail.com
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="bg-[#F6F2ED] text-black px-10 py-12 rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold mb-4">
              Need Help For Project!
            </h2>
            <p className="text-gray-500 text-xl mb-6">
              We are ready to help your next projects, let's work together
            </p>
            <Form layout="vertical" onFinish={onFinish} className="w-full">
              <Row gutter={[16, 10]}>
                <Col span={12}>
                  <Form.Item name="name" rules={[{ required: true }]}>
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="service" rules={[{ required: true }]}>
                    <Select placeholder="Choose Services">
                      <Option value="webDevelopment">Web Development</Option>
                      <Option value="mobileApp">Mobile App</Option>
                      <Option value="uiUxDesign">UI/UX Design</Option>
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
                      Send Message Us
                    </Button>
                  </div>
                </Col>
              </Row>{' '}
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
