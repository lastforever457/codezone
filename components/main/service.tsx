import React from 'react';
import { IoMdLaptop } from 'react-icons/io';

function Service() {
  const services = [
    {
      id: 1,
      title: 'UX/UI Design',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 2,
      title: 'IT Management',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 3,
      title: 'Data Security',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 4,
      title: 'Data Security',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 5,
      title: 'Data Security',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 6,
      title: 'Data Security',
      icon: <IoMdLaptop size={40} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
  ];

  return (
    <div className="bg-[#F6F2ED] mt-24">
      <div className="flex items-center pt-24 justify-center flex-col gap-4 pb-12">
        <h4 className="text-blue-500 text-2xl">Popular Services</h4>
        <h2 className="text-5xl font-bold">Services We Provide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-24">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative p-8 rounded-lg shadow-lg group hover:bg-blue-500 hover:text-white transition duration-300`}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl">
                {service.icon}
                {service.title}
                <br />
                <br />
                {service.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
