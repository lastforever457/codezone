'use client';

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import useScroll from '@/hooks/use-scroll';
import useHeaderMenus from '@/hooks/use-header-menus';
import { Button, Drawer, Dropdown, Space } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { scrollY } = useScroll();
  const { menus } = useHeaderMenus();

  useEffect(() => {
    if (scrollY > window.innerHeight * 0.5) {
      setIsCollapsed(true);
    }
  }, [scrollY]);

  return (
    <header
      className={
        'w-full h-[100px] px-5 md:pl-20 md:pe-0 flex justify-between items-center bg-cover bg-center absolute left-0 top-0 border-b-gray-200 border-b-2'
      }
    >
      <img src="/logo.png" alt="" width={150} height={80} />
      <div className="hidden md:flex gap-10 h-full bg-white px-16 text-xl justify-center items-center">
        {menus.map((menu: Record<string, any>, index: number) =>
          menu.children ? (
            <Dropdown
              menu={{
                items: menu.children.map((child: any) => ({
                  key: child.id,
                  label: <Link href={child.link}>{child.name}</Link>,
                })),
              }}
              key={index}
            >
              <Space className="">
                <p className="cursor-pointer">{menu.name}</p>
                <IoIosArrowDown />
              </Space>
            </Dropdown>
          ) : (
            <p key={index}>{menu.name}</p>
          )
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className={
            'h-[100px] border-s-2 border-s-gray-200 w-[100px] flex justify-center items-center text-white  py-3'
          }
        >
          <FaSearch size={20} />
        </button>
        <Button
          type="primary"
          className={
            'hidden md:flex w-[10vw] rounded-none text-white h-[98px] flex items-center'
          }
        >
          <RiMenu3Line size={20} />
          <span className={'ml-2'}>Menu</span>
        </Button>
        <button
          className={
            'h-[100px] w-[70px] text-2xl flex justify-center items-center text-white  py-3'
          }
        >
          <RiMenu3Line />
        </button>
      </div>
      <Drawer></Drawer>
    </header>
  );
}

export default Header;
