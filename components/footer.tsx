import { Col, Row } from 'antd';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#ECE8E3] py-5 lg:py-16 pl-5 lg:pl-72 pr-10">
      <Swiper navigation={true} className="w-full" loop spaceBetween={20}>
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 bg-blue-200 text-2xl font-bold">
            Slide 1 - Data Security
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 bg-blue-300 text-2xl font-bold">
            Slide 2 - Cyber Security
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-56 bg-blue-400 text-2xl font-bold">
            Slide 3 - IT Services
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Footer */}
      <footer className="bg-white py-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <Row gutter={[24, 16]}>
            {/* Company Info */}
            <Col xs={24} sm={12} lg={6}>
              <h2 className="text-xl font-bold">WiaTech</h2>
              <p className="text-gray-500">
                Sed ut perspiciatis unde omnis natus voluptatem accusantium
                dolore.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </Col>

            {/* IT Services */}
            <Col xs={24} sm={12} lg={6}>
              <h2 className="text-xl font-bold">IT Services</h2>
              <ul className="space-y-2 text-gray-600">
                <li>IT Consultancy</li>
                <li>IT Management</li>
                <li>IT Support</li>
                <li>Cloud Computing</li>
                <li>Cyber Security</li>
              </ul>
            </Col>

            {/* Support */}
            <Col xs={24} sm={12} lg={6}>
              <h2 className="text-xl font-bold">Support</h2>
              <ul className="space-y-2 text-gray-600">
                <li>Forum Support</li>
                <li>Help & FAQ</li>
                <li>Contact Us</li>
                <li>Pricing and Plans</li>
                <li>Cookies Policy</li>
              </ul>
            </Col>

            {/* Newsletter */}
            <Col xs={24} sm={12} lg={6}>
              <h2 className="text-xl font-bold">Newsletter</h2>
              <p className="text-gray-500">
                Subscribe to our newsletter for updates.
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Sign Up
                </button>
              </form>
            </Col>
          </Row>
          <div className="mt-8 text-center text-gray-500">
            © 2023 WiaTech - IT Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
