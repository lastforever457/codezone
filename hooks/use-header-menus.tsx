import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useHeaderMenus = () => {
  const { t } = useTranslation();
  const menus = useMemo(
    () => [
      {
        key: 'home',
        name: t('home'),
        children: [
          {
            key: 'home-1',
            name: 'Home 1',
            link: '/home1',
          },
          {
            key: 'home-2',
            name: 'Home 2',
            link: '/home2',
          },
          {
            key: 'home-3',
            name: 'Home 3',
            link: '/home3',
          },
          {
            key: 'home-4',
            name: 'Home 4',
            link: '/home4',
          },
          {
            key: 'home-5',
            name: 'Home 5',
            link: '/home5',
          },
          {
            key: 'home-6',
            name: 'Home 6',
            link: '/home6',
          },
        ],
      },
      {
        key: 'company',
        name: t('company'),
        children: [
          {
            key: 'about-company',
            name: 'About Company',
            link: '/about-company',
          },
          {
            key: 'team-member',
            name: 'Team member',
            link: '/team-member',
          },
          {
            key: 'team-details',
            name: 'Team details',
            link: '/team-details',
          },
        ],
      },
      {
        key: 'service',
        name: t('service'),
        children: [
          {
            key: 'service-1',
            name: 'Service 1',
            link: '/service1',
          },
        ],
      },
      {
        key: 'project',
        name: t('project'),
        children: [
          {
            key: 'project-1',
            name: 'Project 1',
            link: '/project1',
          },
          {
            key: 'project-2',
            name: 'Project 2',
            link: '/project2',
          },
          {
            key: 'project-details',
            name: 'Project Details',
            link: '/project-details',
          },
        ],
      },
      {
        key: 'page',
        name: t('page'),
        children: [
          {
            key: 'faq',
            name: 'FAQ',
            link: '/faq',
          },
          {
            key: 'pricing',
            name: 'Pricing',
            link: '/pricing',
          },
          {
            key: '404-error',
            name: '404 Error',
            link: '/404',
          },
        ],
      },
      {
        key: 'blog',
        name: t('blog'),
        children: [
          {
            key: 'blog-grid',
            name: 'Blog Grid',
            link: '/blog-grid',
          },
          {
            key: 'blog-list',
            name: 'Blog List',
            link: '/blog-list',
          },
          {
            key: 'blog-details',
            name: 'Blog Details',
            link: '/blog-details',
          },
        ],
      },
      {
        key: 'contact',
        name: t('contact'),
        link: '/contact',
        children: [],
      },
    ],
    [t]
  );

  return { menus };
};

export default useHeaderMenus;
