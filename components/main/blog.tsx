import { Col, Divider, Row } from 'antd';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: 'October 25, 2023',
      title: 'IT Service Case Accelerating to Business Fly Success Tech',
      image: '/group-team.png',
    },
    {
      id: 2,
      date: 'October 25, 2023',
      title: 'IT Service Case Studies Accelerating Business Fly Success Tech',
      image: '/group-team-2.jpg',
    },
    {
      id: 3,
      date: 'October 25, 2023',
      title: 'IT Service Case Studies Accelerating Business Fly Success Tech',
      image: '/group-team-3.jpg',
    },
    {
      id: 4,
      date: 'October 25, 2023',
      title: 'IT Service Case Studies Accelerating Business Fly Success Tech',
      image: '/group-team-4.jpg',
    },
  ];

  return (
    <div className="py-16 px-5 lg:px-72" data-aos="fade-right">
      <div className={'text-center'}>
        <h4 className="text-blue-500 text-xl font-bold">Latest News & Blog</h4>
        <h2 className="text-4xl font-bold mt-4 mb-14">
          Read Our Latest News & Blog
        </h2>
      </div>

      <div className="mt-10">
        <Row>
          <Col span={12}>
            <div
              className={`w-full h-full`}
              style={{ backgroundImage: `url(/group-team.png)` }}
            >
              <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-25 text-white rounded-b-lg">
                <p className="text-sm">{blogPosts[0].date}</p>
                <h3 className="text-2xl font-semibold mt-2">
                  {blogPosts[0].title}
                </h3>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-400 hover:text-blue-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </Col>
          <Col span={12}>
            {blogPosts
              .slice(1)
              .map((post: Record<string, any>, index: number) => (
                <div key={index}>
                  <div className="flex px-10 items-center justify-between w-full">
                    <Row>
                      <Col span={18}>
                        <div
                          className={
                            'hover:underline hover:text-blue-500 cursor-pointer '
                          }
                        >
                          <p className="text-sm text-gray-500">{post.date}</p>
                          <h3 className="text-lg font-semibold">
                            {post.title}
                          </h3>
                        </div>
                        <a
                          href="#"
                          className=" cursor-pointer text-gray-500 hover:text-blue-500 hover:underline mt-1 inline-block text-md"
                        >
                          Read More
                        </a>
                      </Col>
                      <Col span={6}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-[180px]  rounded-lg object-cover me-40"
                        />
                      </Col>
                    </Row>
                  </div>
                  {index !== blogPosts.slice(1).length - 1 && (
                    <Divider style={{ margin: '24px 0' }} />
                  )}
                </div>
              ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
