"use client";

import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

function MainHeader() {
  return (
    <header
      className={
        "w-full h-[100px] flex justify-between items-center bg-cover bg-center fixed top-0 border-b-gray-200 border-b-2"
      }
    >
      <img src="/logo.png" alt="" width={150} height={80} />
      <div className={"flex justify-center items-center gap-10"}>
        <div>
          <ul className={"flex items-center space-x-10 font-bold text-xl"}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Project grid</a>
            </li>
            <li>
              <a href="">Page</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className={"text-white  py-3"}>
            <FaSearch size={20} />
          </button>
        </div>
        <div>
          <button
            className={
              "bg-white text-black px-5 py-3 rounded-full flex items-center"
            }
          >
            <RiMenu3Line size={20} />
            <span className={"ml-2"}>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
