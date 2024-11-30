import useBreakpoint from '@/hooks/use-breakpoint';
import { Button, Card, Col, Divider, Row } from 'antd';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MdChevronRight } from 'react-icons/md';

const Blog = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const bigScreens = useMemo(() => ['md', 'lg', 'xl', '2xl'], []);
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
    // 2xl:px-72
    <div className="mx-auto px-4 py-16 container" data-aos="fade-up">
      <div className={'text-center'}>
        <h4 className="font-bold text-base text-blue-500 md:text-xl">
          {t('blogs')}
        </h4>
        <h2 className="mt-4 mb-5 md:mb-14 font-bold text-2xl md:text-4xl">
          {t('Read Blogs')}
        </h2>
      </div>

      <div className="md:mt-10">
        <Row gutter={[16, 26]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="p-5">
            <div className="relative w-full h-[350px] lg:h-full overflow-hidden">
              <div
                className="absolute w-full h-full"
                style={{
                  backgroundImage: `url(/group-team.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              />
              <div className="bottom-0 left-0 absolute bg-black bg-opacity-25 p-5 rounded-b-lg text-white">
                <p className="text-[11px] md:text-sm">{blogPosts[0].date}</p>
                <h3 className="mt-2 font-semibold text-base md:text-2xl">
                  {blogPosts[0].title}
                </h3>
                <Link
                  href="#"
                  className="inline-block hover:to-blue-600 backdrop-blur-sm mt-3 px-1 py-2 md:p-0 rounded-lg md:text-blue-400 md:hover:text-blue-300"
                >
                  {t('read more')}
                </Link>
              </div>
            </div>
          </Col>{' '}
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {blogPosts
              .slice(1)
              .map((post: Record<string, any>, index: number) => (
                <div key={index}>
                  {bigScreens.includes(breakpoint) ? (
                    <div className="flex flex-row justify-between items-center mb-4 lg:px-10 w-full">
                      <Col span={18}>
                        <div className="hover:text-blue-500 hover:underline cursor-pointer">
                          <p className="text-gray-500 text-sm">{post.date}</p>
                          <h3 className="font-semibold text-lg">
                            {post.title}
                          </h3>
                        </div>
                        <a
                          href="#"
                          className="inline-block mt-1 text-gray-500 text-md hover:text-blue-500 hover:underline cursor-pointer"
                        >
                          {t('read more')}
                        </a>
                      </Col>
                      <Col span={6}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="rounded-lg w-full object-cover"
                        />
                      </Col>
                    </div>
                  ) : (
                    <Card
                      cover={
                        <img
                          alt="example"
                          src={post.image}
                          className="w-full"
                        />
                      }
                    >
                      <p className="mb-2 text-[#888]">{post.date}</p>
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
