'use client';

import React, { useState } from 'react';
import {
  FaAngleRight,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function TeamComponent() {
  const teamMembers = [
    {
      id: 1,
      name: 'George C. Anderson',
      role: 'Senior Manager',
      image: '/men-1.jpg',
    },
    {
      id: 2,
      name: 'Brandon D. Garcia',
      role: 'IT Consultant',
      image: '/men-2.jpg',
    },
    {
      id: 3,
      name: 'William A. Rogers',
      role: 'Product Designer',
      image: '/men-3.jpg',
    },
    {
      id: 4,
      name: 'Matthew R. Howard',
      role: 'IT Manager',
      image: '/men-4.jpg',
    },
  ];

  const [highlightedMember, setHighlightedMember] = useState(teamMembers[0]);

  const handleHighlight = (member: any) => {
    setHighlightedMember(member);
  };

  const otherMembers = teamMembers.filter(
    (member) => member.id !== highlightedMember.id
  );

  return (
    <div className="px-16 py-16 mb-14" data-aos="zoom-in-down">
      <h4 className="text-xl text-center text-blue-500 font-bold">
        Meet Our Team
      </h4>
      <h2 className="text-5xl font-bold text-center mt-4 mb-14">
        We’ve an Exclusive Team <br /> Meet our Professionals
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <div className="mt-8 space-y-6">
            {teamMembers.map((member, index) => (
              <div
                onClick={() => handleHighlight(member)}
                key={member.id}
                className={`flex items-center space-x-4 p-4 rounded cursor-pointer ${
                  highlightedMember.id === member.id
                    ? 'border-b-2 border-b-blue-600 shadow-lg'
                    : 'hover:border-b-2 hover:border-b-blue-600 shadow py-3 px-5'
                }`}
              >
                <span className="text-blue-500 font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition duration-300">
                  <FaAngleRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 lg:items-start">
          <div>
            <img
              src={highlightedMember.image}
              alt={highlightedMember.name}
              className="w-[400px] h-[380px] rounded-md shadow-lg object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">{highlightedMember.name}</h3>
            <p className="text-gray-500 mb-6">{highlightedMember.role}</p>
            <div className="flex items-center justify-start px-5 space-x-4 mt-[-150px]">
              <div className={'bg-blue-600 flex gap-3 px-5 py-2 rounded'}>
                <a
                  href="#"
                  className="text-white hover:text-blue-800 transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-600 transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-900 transition duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-red-800 transition duration-300"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {otherMembers.map((member) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                className="w-[120px] h-[120px] object-cover border border-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamComponent;
