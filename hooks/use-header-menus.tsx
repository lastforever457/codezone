import React, { useMemo } from 'react';

const useHeaderMenus = () => {
  const menus = useMemo(
    () => [
      {
        name: 'Home',
        children: [
          {
            name: 'Home 1',
            link: '/home1',
          },
          {
            name: 'Home 2',
            link: '/home2',
          },
          {
            name: 'Home 3',
            link: '/home3',
          },
          {
            name: 'Home 4',
            link: '/home4',
          },
          {
            name: 'Home 5',
            link: '/home5',
          },
          {
            name: 'Home 6',
            link: '/home6',
          },
        ],
      },
      {
        name: 'Company',
        children: [
          {
            name: 'About Company',
            link: '/about-company',
          },
          {
            name: 'Team member',
            link: '/team-member',
          },
          {
            name: 'Team details',
            link: '/team-details',
          },
        ],
      },
      {
        name: 'Service',
        children: [
          {
            name: 'Service 1',
            link: '/service1',
          },
        ],
      },
      {
        name: 'Project grid',
        children: [
          {
            name: 'Project 1',
            link: '/project1',
          },
          {
            name: 'Project 2',
            link: '/project2',
          },
          {
            name: 'Project Details',
            link: '/project-details',
          },
        ],
      },
      {
        name: 'Page',
        children: [
          {
            name: 'FAQ',
            link: '/faq',
          },
          {
            name: 'Pricing',
            link: '/pricing',
          },
          {
            name: '404 Error',
            link: '/404',
          },
        ],
      },
      {
        name: 'Blog',
        children: [
          {
            name: 'Blog Grid',
            link: '/blog-grid',
          },
          {
            name: 'Blog List',
            link: '/blog-list',
          },
          {
            name: 'Blog Details',
            link: '/blog-details',
          },
        ],
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    []
  );

  return { menus };
};

export default useHeaderMenus;
