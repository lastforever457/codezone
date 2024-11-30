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
    // 2xl:px-72
    <div className="mx-auto px-4 py-0 md:py-10 container">
      <div
        className={
          'text-center flex flex-col justify-center items-center mb-10'
        }
      >
        <h4 className="font-bold text-base text-blue-500 md:text-xls">
          {t('What We Provide')}
        </h4>
        <h2 className="mt-4 max-w-[950px] font-bold text-2xl text-center md:text-4xl 2xl:text-5xl">
          {t('We Run all kinds of IT services that vow your success')}
        </h2>
      </div>
      <div className="gap-4 gap-y-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {services.map((service: Record<string, any>, index: number) => (
          <div key={index}>
            <div className="shadow-2xl lg:shadow-xl custom-second-card p-5 rounded-[25vw] lg:rounded-[7vw]">
              <div className="border-2 px-6 py-14 lg:py-20 border-dashed rounded-[25vw] lg:rounded-[7vw] text-center">
                <div className="flex justify-center mb-3">
                  <div className="text-4xl">{service.icon}</div>
                </div>
                <h2 className="flex justify-center items-center h-16 md:h-24 font-semibold text-center text-lg">
                  {service.title}
                </h2>
                <button className="hover:bg-blue-600 custom-second-button p-2 rounded-full text-white focus:outline-none">
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
          </div>
        ))}
      </div>{' '}
    </div>
  );
};

export default Provide;
