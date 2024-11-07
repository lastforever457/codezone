import { Button, Col, Row } from 'antd';
import { FaStar } from 'react-icons/fa';
import { IoMdLaptop } from 'react-icons/io';
import { LuArrowUpRight } from 'react-icons/lu';

function Service() {
  const stars = [
    {
      id: 1,
      icon: <FaStar />,
    },
    {
      id: 2,
      icon: <FaStar />,
    },
    {
      id: 3,
      icon: <FaStar />,
    },
    {
      id: 4,
      icon: <FaStar />,
    },
    {
      id: 5,
      icon: <FaStar />,
    },
  ];
  const services = [
    {
      id: 1,
      title: 'UX/UI Design',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 2,
      title: 'IT Management',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 3,
      title: 'Data Security',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 4,
      title: 'Data Security',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 5,
      title: 'Data Security',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
    {
      id: 6,
      title: 'Data Security',
      icon: <IoMdLaptop size={50} />,
      description:
        'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium',
    },
  ];

  return (
    <div className="bg-[#F6F2ED] mt-24 mb-14">
      <div className="flex items-center pt-24 justify-center flex-col gap-4 pb-12">
        <h4 className="text-blue-500 text-2xl">Popular Services</h4>
        <h2 className="text-5xl font-bold">Services We Provide</h2>
      </div>

      <div className="gap-6 pb-24 px-72">
        <Row gutter={[2, 2]}>
          {services.map((service: Record<string, any>, index: number) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} key={service.id}>
              <div
                key={service.id}
                className={`relative bg-white p-8 shadow-lg group hover:bg-blue-500 hover:text-white transition duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-2">
                        <span className="text-blue-600 font-bold">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Button className="py-16 rounded-3xl bg-[#F6F2ED]">
                      <LuArrowUpRight />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className={''}>
        <Row>
          <Col xs={24} sm={24} md={11} lg={11}>
            <div className="py-16 pl-72 pr-10">
              <h4 className="text-2xl text-blue-500 font-bold">
                Best IT Solutions
              </h4>
              <h2 className="text-5xl font-bold mt-6">
                We Prominent Truly IT Your solutions
              </h2>
              <p className="text-gray-500 mt-8 text-[22px]">
                We denounce with righteous indignation and like men who are so
                beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire foresee the pain
              </p>
              <div className="flex items-center mt-10 space-x-8">
                <div className="text-center">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="lightgray"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="blue"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray="251"
                        strokeDashoffset="80"
                        className="transition-all duration-500 ease-in-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                      68%
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">Business Strategy</p>
                </div>
                <div className="text-center">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="lightgray"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        stroke="blue"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray="251"
                        strokeDashoffset="18"
                        className="transition-all duration-500 ease-in-out"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                      93%
                    </span>
                  </div>
                  <p className="mt-2 font-semibold">Technology Solutions</p>
                </div>
              </div>
              <div className="flex items-center mt-10 space-x-4">
                <button className="px-12 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
                <div className="flex -space-x-2">
                  {Array.from({ length: 4 }, (_, index) => (
                    <img
                      key={index}
                      src={`/customer-${index + 1}.jpg`}
                      alt="Customer"
                      className="hover:scale-110 w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="ml-4 text-md font-medium">10m+ Customers</span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={11} lg={13}>
            <div
              className={
                'bg-[url(/feature.jpg)] bg-center bg-cover object-contain px-16 pt-64 pb-32 mb-10'
              }
            >
              <div className="flex justify-start items-end w-full h-full">
                <div
                  className={'bg-blue-600 w-[350px] py-16 px-16 text-white'}
                  data-aos="fade-right"
                >
                  <h1 className={'text-6xl font-bold mb-2'}>25+</h1>
                  <h4 className={'border-b-2 border-b-white'}>
                    Years of Experience
                  </h4>
                  <div className={'flex items-center gap-3 pt-6'}>
                    {stars.map((item) => (
                      <div key={item.id}>
                        <span>{item.icon}</span>
                      </div>
                    ))}
                    <span>Trustpoint</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Service;
