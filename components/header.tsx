'use client';

import useBreakpoint from '@/hooks/use-breakpoint';
import useHeaderMenus from '@/hooks/use-header-menus';
import useScroll from '@/hooks/use-scroll';
import i18n from '@/i18n/i18n';
import { CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Drawer,
  Dropdown,
  Menu,
  MenuProps,
  Space,
  Tooltip,
} from 'antd';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaSearch } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMenu3Line } from 'react-icons/ri';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [openSm, setOpenSm] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const { menus } = useHeaderMenus();
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > window.innerHeight * 0.2) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollY]);
  const screens = useMemo(() => ['xs', 'sm', 'md', 'lg', 'xl'], []);

  const menuItems = useMemo(() => {
    return menus.map((menu: Record<string, any>) => {
      return {
        key: menu.key,
        label: <span>{menu.name}</span>,
        children: menu.children
          ? menu.children.map((child: Record<string, any>) => ({
              key: child.link,
              label: <Link href={child.link}>{child.name}</Link>,
            }))
          : [],
      };
    });
  }, [menus]);

  const items: MenuProps['items'] = [
    {
      key: 'uz',
      label: (
        <div
          className="flex items-center gap-2"
          onClick={() => i18n.changeLanguage('uz')}
        >
          <img src="/uzb.png" alt="Uzbek" width={20} height={20} />
          <span>O'zbek</span>
        </div>
      ),
    },
    {
      key: 'ru',
      label: (
        <div
          className="flex items-center gap-2"
          onClick={() => i18n.changeLanguage('ru')}
        >
          <img src="/rus.png" alt="Russian" width={20} height={20} />
          <span>Русский</span>
        </div>
      ),
    },
  ];

  const navigationLinks = useMemo(
    () => [
      { label: t('Company'), href: '/' },
      { label: t('IT Management'), href: '/' },
      { label: t('Help Center'), href: '/' },
      { label: t('Portfolio'), href: '/' },
      { label: t('Blog'), href: '/' },
    ],
    [t]
  );

  return (
    <>
      <header
        className={`w-full sticky md:static top-0 h-[80px] bg-black ${
          isCollapsed ? 'md:sticky' : ''
        } transition-all bg-cover bg-center`}
        style={{ zIndex: 150, borderBottom: '1px solid #999' }}
      >
        <div className="flex justify-between items-center pl-5 md:pl-10 w-full h-full">
          <img
            src="/logo.png"
            alt=""
            width={screens.includes(breakpoint) ? 120 : 150}
            height={80}
          />
          <div
            className={`hidden 2xl:flex lg:gap-5 gap-10 h-full bg-black text-white px-16 text-lg justify-center items-center`}
          >
            {menus.map((menu: Record<string, any>, index: number) =>
              menu.children.length > 0 ? (
                <Dropdown
                  menu={{
                    items: menu.children.map((child: any) => ({
                      key: child.id,
                      label: <Link href={child.link}>{child.name}</Link>,
                    })),
                  }}
                  key={index}
                >
                  <Space className="cursor-pointer">
                    <p className="text-md md:text-[15px]">{menu.name}</p>
                    <IoIosArrowDown />
                  </Space>
                </Dropdown>
              ) : (
                <p key={index} className="text-sm">
                  {menu.name}
                </p>
              )
            )}
          </div>
          <div className="flex justify-center items-center h-full">
            <button
              style={{ borderLeft: '1px solid #999' }}
              className={
                'h-full w-[90px] lg:w-[100px] flex justify-center items-center text-white p-0 m-0'
              }
            >
              <FaSearch size={20} />
            </button>
            <Dropdown className="2xl:flex hidden" menu={{ items }}>
              <button
                style={{ borderLeft: '1px solid #999' }}
                className={
                  'h-full w-[90px] lg:w-[100px] flex justify-center items-center text-white p-0 m-0'
                }
              >
                <GrLanguage size={20} />
              </button>
            </Dropdown>
            <Button
              onClick={() => {
                if (screens.includes(breakpoint)) {
                  setOpenSm(true);
                } else {
                  setOpen(true);
                }
              }}
              type={screens.includes(breakpoint) ? 'text' : 'primary'}
              className={
                'flex lg:w-[10vw] rounded-none text-white h-full items-center'
              }
            >
              <RiMenu3Line className="text-2xl" />
              <p className={'ml-2 hidden lg:block'}>Menu</p>
            </Button>
          </div>
        </div>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-2 pl-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                className="hover:pl-2 hover:font-bold text-base text-md hover:text-blue-600 transition-all"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col mt-10 pl-5 text-[#444]">
            <h2 className="font-bold text-2xl text-black">{t('contact')}</h2>
            <p className="mt-1.5 text-base">{t('Uzbekistan, Tashkent')}</p>
            <p className="mt-1.5 text-base">algorismic@gmail.com</p>
            <p className="mt-1.5 text-base">+998 (97) 888 10 27</p>
          </div>
          <div className="flex flex-col mt-10 pl-5">
            <p className="font-bold text-lg">{t('follow us')}</p>
            <div className="flex gap-3 mt-3">
              <Tooltip title="Facebook">
                <Link href="https://facebook.com" target="_blank">
                  <Button
                    className="bg-blue-600 text-white"
                    shape="circle"
                    type="link"
                  >
                    <FaFacebook />
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="Twitter">
                <Link href="https://twitter.com" target="_blank">
                  <Button
                    className="bg-blue-600 text-white"
                    shape="circle"
                    type="link"
                  >
                    <FaTwitter />
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <Link href="https://linkedin.com" target="_blank">
                  <Button
                    className="bg-blue-600 text-white"
                    shape="circle"
                    type="link"
                  >
                    <FaLinkedinIn />
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="Instagram">
                <Link href="https://instagram.com" target="_blank">
                  <Button
                    className="bg-blue-600 text-white"
                    shape="circle"
                    type="link"
                  >
                    <FaInstagram />
                  </Button>
                </Link>
              </Tooltip>
            </div>{' '}
          </div>
        </Drawer>
        <Drawer
          title={<img width={150} src="/logo.png" alt="logo" />}
          className={'custom-drawer'}
          placement="left"
          onClose={() => setOpenSm(false)}
          open={openSm}
          closeIcon={<CloseOutlined className="text-white" />}
        >
          <div className="flex justify-around items-center mb-5 w-full">
            <div
              className="flex justify-center items-center gap-1 hover:bg-gray-800 hover:shadow-md p-5 rounded-lg transition-colors duration-300 cursor-pointer"
              onClick={() => i18n.changeLanguage('uz')}
            >
              <img src="/uzb.png" width={30} alt="uzbek" />
              <span>O'zbekcha</span>
            </div>
            <div
              className="flex justify-center items-center gap-1 hover:bg-gray-800 hover:shadow-md p-5 rounded-lg transition-colors duration-300 cursor-pointer"
              onClick={() => i18n.changeLanguage('ru')}
            >
              <img src="/rus.png" width={30} alt="russian" />
              <span>Русский</span>
            </div>
          </div>
          <Menu theme="dark" mode="inline" items={menuItems} />
        </Drawer>
      </header>
    </>
  );
};

export default Header;
