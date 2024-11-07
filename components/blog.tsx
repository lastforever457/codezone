import React from 'react';

function Blog() {
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
    <div className="py-16 px-16" data-aos="fade-right">
      <div className={'text-center'}>
        <h4 className="text-blue-500 text-xl font-bold">Latest News & Blog</h4>
        <h2 className="text-4xl font-bold mt-4 mb-14">
          Read Our Latest News & Blog
        </h2>
      </div>

      <div className="mt-10 grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-[700px] h-[500px] rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-black bg-opacity-25 w-[700px] text-white rounded-b-lg">
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
        </div>

        <div className="space-y-6">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-center gap-10"
            >
              <div>
                <div
                  className={
                    'hover:underline hover:text-blue-500 cursor-pointer min-w-[400px]'
                  }
                >
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                </div>
                <a
                  href="#"
                  className=" cursor-pointer text-gray-500 hover:text-blue-500 hover:underline mt-1 inline-block text-[18px]"
                >
                  Read More
                </a>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-[180px] h-[150px] rounded-lg object-cover me-40"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
