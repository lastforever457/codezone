import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { t } from 'i18next';
import { FaUser } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdOutlineMailOutline } from 'react-icons/md';

const Contact = () => {
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
              <h1 className="mb-2 sm:mb-4 max-w-[90%] font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl leading-snug sm:leading-tight">
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
                      +998 (97) 888 10 27
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
                <form className="w-full">
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        className="px-4 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="top-1/2 right-4 absolute text-gray-400 -translate-y-1/2">
                        <FaUser />
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        className="px-4 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="top-1/2 right-4 absolute text-gray-400 -translate-y-1/2">
                        <MdOutlineMailOutline />
                      </span>
                    </div>
                  </div>
                  <div className="relative mt-4">
                    <select
                      required
                      className="bg-white px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 w-full appearance-none focus:outline-none"
                    >
                      <option value="" selected>
                        Choose Services
                      </option>
                      <option value="webDevelopment">Web Development</option>
                      <option value="mobileApp">Mobile App</option>
                      <option value="uiUxDesign">UI/UX Design</option>
                    </select>
                    <span className="top-1/2 right-4 absolute text-gray-400 -translate-y-1/2 pointer-events-none">
                      <MdKeyboardArrowRight className="rotate-90" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <textarea
                      rows={4}
                      placeholder="Message"
                      className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white"
                    >
                      Send Message Us
                      <MdKeyboardArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
