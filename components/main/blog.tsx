import useBreakpoint from '@/hooks/use-breakpoint';
import { Button, Card, Col, Divider, Row } from 'antd';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MdChevronRight } from 'react-icons/md';

const Blog = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const bigScreens = useMemo(() => ['lg', 'xl', '2xl'], []);
  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        date: `${t('October'.toLowerCase())} 25, 2023`,
        title: t('blog name'),
        image: '/group-team.png',
      },
      {
        id: 2,
        date: `${t('October'.toLowerCase())} 25, 2023`,
        title: t('blog name'),
        image: '/group-team-2.jpg',
      },
      {
        id: 3,
        date: `${t('October'.toLowerCase())} 25, 2023`,
        title: t('blog name'),
        image: '/group-team-3.jpg',
      },
      {
        id: 4,
        date: `${t('October'.toLowerCase())} 25, 2023`,
        title: t('blog name'),
        image: '/group-team-4.jpg',
      },
    ],
    [t]
  );

  return (
    <div className="py-16 px-5 lg:px-72" data-aos="fade-right">
      <div className={'text-center'}>
        <h4 className="text-blue-500 text-xl font-bold">{t('blogs')}</h4>
        <h2 className="text-4xl font-bold mt-4 mb-14">{t('Read Blogs')}</h2>
      </div>

      <div className="mt-10">
        <Row gutter={[16, 26]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="p-5">
            <div
              className={`relative w-full h-[350px] md:h-full`}
              style={{ backgroundImage: `url(/group-team.png)` }}
            >
              <div className="absolute bottom-0 left-0 p-5 bg-black bg-opacity-25 text-white rounded-b-lg">
                <p className="text-sm">{blogPosts[0].date}</p>
                <h3 className="text-2xl font-semibold mt-2">
                  {blogPosts[0].title}
                </h3>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-400 hover:text-blue-300"
                >
                  {t('read more')}
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            {blogPosts
              .slice(1)
              .map((post: Record<string, any>, index: number) => (
                <div key={index}>
                  {bigScreens.includes(breakpoint) ? (
                    <div className="flex lg:px-10 items-center justify-between w-full">
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
                  ) : (
                    <Card cover={<img alt="example" src={post.image} />}>
                      <p className="text-[#888] mb-2">{post.date}</p>
                      <Card.Meta title={post.title} />
                      <Link href={'/'}>
                        <Button
                          icon={<MdChevronRight />}
                          iconPosition="end"
                          type="link"
                          className="p-0"
                        >
                          Read More
                        </Button>
                      </Link>
                    </Card>
                  )}
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
