'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineBulb,
  AiOutlineCloudServer,
  AiOutlineSafety,
} from 'react-icons/ai';
import { FaHandsHelping, FaLayerGroup } from 'react-icons/fa';

const Provide = () => {
  const { t } = useTranslation();
  const services = useMemo(
    () => [
      {
        id: 1,
        icon: <FaHandsHelping />,
        title: t('IT Consultancy'),
      },
      {
        id: 2,
        icon: <FaLayerGroup />,
        title: t('Software Development'),
      },
      {
        id: 3,
        icon: <AiOutlineCloudServer />,
        title: t('Data Service'),
      },
      {
        id: 4,
        icon: <AiOutlineSafety />,
        title: t('Cyber Security Solutions'),
      },
      {
        id: 5,
        icon: <AiOutlineBulb />,
        title: t('Collaborative Partnership'),
      },
    ],
    [t]
  );
  return (
    <div className="py-10 px-5 lg:px-72">
      <div
        className={
          'text-center flex flex-col justify-center items-center mb-10'
        }
      >
        <h4 className="text-blue-500 text-xl font-bold">
          {t('What We Provide')}
        </h4>
        <h2 className="text-5xl max-w-[950px] text-center font-bold mt-4">
          {t('We Run all kinds of IT services that vow your success')}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {services.map((service: Record<string, any>, index: number) => (
          <div
            className="custom-second-card p-5 rounded-[25vw] lg:rounded-[7vw] shadow-2xl lg:shadow-xl"
            key={index}
          >
            <div className="border-dashed border-2 rounded-[25vw] lg:rounded-[7vw] px-6 py-14 lg:py-20 text-center">
              <div className="flex justify-center mb-3">
                <div className="text-4xl">{service.icon}</div>
              </div>
              <h2 className="text-lg font-semibold h-24 text-center flex justify-center items-center">
                {service.title}
              </h2>
              <button className="custom-second-button text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
