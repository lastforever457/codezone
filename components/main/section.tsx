"use client";

import React from "react";
import { Col, Row } from "antd";

function Section() {
  return (
    <div
      style={{ minHeight: "calc(100vh + 80px)" }}
      className={
        "bg-[url('/main.jpg')] bg-cover bg-center bg-black bg-opacity-50 py-52"
      }
    >
      <Row>
        <Col span={24} className={"h-full"}>
          <div className={"flex items-center justify-between px-20"}>
            <div className={"py-16"}>
              <h1
                className={"text-white font-bold text-6xl max-w-[550px] mb-8"}
              >
                Modern & Digital It Solutions For Your Tech Business
              </h1>
              <span className={"text-white text-xl"}>
                25+ Years Of Experience In Teach Services
              </span>
              <br />
              <button
                className={
                  "bg-blue-500 text-white rounded-full px-12 py-3 mt-5"
                }
              >
                Explore Our Services
              </button>
            </div>
            <div className={"mask"}>
              <img src="/mask.png" alt="" />
            </div>
          </div>
        </Col>
        <Col span={12} className={"h-full"}>
          davsd
        </Col>
      </Row>
    </div>
  );
}

export default Section;
