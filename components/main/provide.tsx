import { useMemo } from 'react';
import {
  AiOutlineBulb,
  AiOutlineCloudServer,
  AiOutlineSafety,
} from 'react-icons/ai';
import { FaHandsHelping, FaLayerGroup } from 'react-icons/fa';

const Provide = () => {
  const services = useMemo(
    () => [
      {
        id: 1,
        icon: <FaHandsHelping />,
        title: 'IT Consultancy',
      },
      {
        id: 2,
        icon: <FaLayerGroup />,
        title: 'Software Development',
      },
      {
        id: 3,
        icon: <AiOutlineCloudServer />,
        title: 'Data Service',
      },
      {
        id: 4,
        icon: <AiOutlineSafety />,
        title: 'Cyber Security Solutions',
      },
      {
        id: 5,
        icon: <AiOutlineBulb />,
        title: 'Collaborative Partnership',
      },
    ],
    []
  );
  return (
    <div className="py-16 px-72">
      <div className={'text-center'}>
        <h4 className="text-blue-500 text-xl font-bold">What We Provide</h4>
        <h2 className="text-4xl font-bold mt-4 mb-14">
          We Run all kinds of IT services that vow your success
        </h2>
      </div>
      <div className="flex gap-5">
        {services.map((service: Record<string, any>, index: number) => (
          <div className="bg-white transition-all hover:bg-blue-600 hover:text-white rounded-[7vw] shadow-xl px-6 py-20 w-64 text-center">
            <div className="flex justify-center mb-4">
              <div className="text-4xl">{service.icon}</div>
            </div>
            <h2 className="text-lg font-semibold h-24 text-center flex justify-center items-center">
              {service.title}
            </h2>
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
