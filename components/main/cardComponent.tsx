import React from 'react';
import { TiTick } from 'react-icons/ti';
import { FaUsers, FaUsersSlash } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdSettingsBrightness } from 'react-icons/md';

function CardComponent() {
  return (
    <div className={'px-16 py-16'}>
      <div className={'mt-[-230px] mb-24 flex justify-center gap-10'}>
        <div
          className={
            'bg-white rounded-xl p-5 w-[450px] border-b-blue-500 border-b-4 h-[350px] py-5 px-16 hover:bg-blue-500 hover:text-white hover:border-b-white'
          }
        >
          <GiReceiveMoney size={80} className={'text-blue-600'} />
          <h3 className={'text-3xl mb-3 font-bold'}>Cost-effectiveness</h3>
          <span className={'mb-3 text-gray-500'}>
            We offer It Solution that help you reduce costs and improve
          </span>
          <br />
          <button
            className={
              'mt-6 py-3 px-16 font-bold border-2 border-gray-200 rounded-xl hover:bg-white hover:text-black'
            }
          >
            Read More
          </button>
        </div>
        <div
          className={
            'bg-white rounded-xl p-5 w-[450px] border-b-blue-500 border-b-4 h-[350px] py-5 px-16 hover:bg-blue-500 hover:text-white hover:border-b-white'
          }
        >
          <MdSettingsBrightness size={80} className={'text-blue-600'} />
          <h3 className={'text-3xl mb-3 font-bold'}>Technology</h3>
          <span className={'mb-3 text-gray-500'}>
            We offer It Solution that help you reduce costs and improve
          </span>
          <br />
          <button
            className={
              'mt-6 py-3 px-16 font-bold border-2 border-gray-200 rounded-xl hover:bg-white hover:text-black'
            }
          >
            Read More
          </button>
        </div>
        <div
          className={
            'bg-white rounded-xl p-5 w-[450px] border-b-blue-500 border-b-4 h-[350px] py-5 px-16 hover:bg-blue-500 hover:text-white hover:border-b-white'
          }
        >
          <FaUsersSlash size={80} className={'text-blue-600'} />
          <h3 className={'text-3xl mb-3 font-bold'}>Industry Expertize</h3>
          <span className={'mb-3 text-gray-500'}>
            We offer It Solution that help you reduce costs and improve
          </span>
          <br />
          <button
            className={
              'mt-6 py-3 px-16 font-bold border-2 border-gray-200 rounded-xl hover:bg-white hover:text-black'
            }
          >
            Read More
          </button>
        </div>
      </div>
      <div className={'mt-20 flex justify-center gap-14'}>
        <div>
          <img
            src="/men.jpg"
            alt=""
            className={'rounded-[70%] w-[800px] h-[600px]'}
          />
        </div>
        <div>
          <h4 className={'font-bold mt-16 mb-5 text-2xl text-blue-500'}>
            About Company
          </h4>
          <h2 className={'text-5xl font-bold mb-3'}>
            Make your life <br /> easier with help from Wiatech
          </h2>
          <br />
          <span
            className={'text-gray-500 flex items-center gap-2 text-[20px] mt-3'}
          >
            <TiTick size={24} className={'text-blue-600'} />
            Professional Team Member
          </span>
          <br />
          <span
            className={'text-gray-500 flex items-center gap-2 text-[20px] mt-3'}
          >
            <TiTick size={24} className={'text-blue-600'} /> Awards Winning IT
            Solutions Company
          </span>
          <br />
          <span
            className={'text-gray-500 flex items-center gap-2 text-[20px] mt-3'}
          >
            <TiTick size={24} className={'text-blue-600'} /> Dedicated Tech
            Services
          </span>
          <br />
          <button
            type="submit"
            className={
              'bg-blue-600 text-white py-4 px-16 text-xl rounded-xl mt-6'
            }
          >
            Read More
          </button>
        </div>
        <div className={'max-w-[450px]'}>
          <h1 className={'text-3xl mt-16 mb-5 font-bold'}>
            We’ve 25+ Years Of Experience In Tech Services
          </h1>
          <span className={'text-gray-500 mt-5 text-xl'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque epsa
            inventore
          </span>
          <div className={'flex justify-between items-center mt-52'}>
            <div>
              <FaUsers size={50} className={'text-blue-600'} />
              <h3 className={'text-5xl font-bold mb-3'}>56k+</h3>
              <span className={'text-gray-500 text-xl'}>
                Satisfied Customers
              </span>
            </div>
            <div>
              <FaUsers size={50} className={'text-blue-600'} />
              <h3 className={'text-5xl font-bold mb-3'}>8m+</h3>
              <span className={'text-gray-500 text-xl'}>Project Complete</span>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="relative group w-80 p-4">*/}
      {/*  <Card className="overflow-hidden rounded-lg shadow-lg">*/}
      {/*    <div className="p-6">*/}
      {/*      <div className="text-blue-600 text-3xl mb-4">💰</div>*/}
      {/*      <h2 className="text-xl font-semibold mb-2">Cost-effectiveness</h2>*/}
      {/*      <p className="text-gray-600">*/}
      {/*        We offer IT Solutions that help you reduce costs and improve.*/}
      {/*      </p>*/}
      {/*      <button className="mt-4 p-2 px-4 bg-transparent text-blue-600 border border-blue-600 rounded">*/}
      {/*        Read More*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </Card>*/}

      {/*  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-500 ease-in-out transform group-hover:h-full opacity-10 group-hover:opacity-30" />*/}
      {/*</div>*/}
    </div>
  );
}

export default CardComponent;
