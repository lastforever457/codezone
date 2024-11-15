'use client';

import { useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { LuArrowUpRight } from 'react-icons/lu';

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
    <div className="px-5 lg:px-72 py-10 lg:py-16 mb-10">
      <h4
        data-aos="fade-up"
        className="text-md lg:text-xl text-center text-blue-500 font-bold"
      >
        Meet Our Team
      </h4>
      <h2
        data-aos="fade-up"
        className="text-2xl lg:text-5xl font-bold text-center mt-2 lg:mt-4 mb-14"
      >
        We’ve an Exclusive Team <br /> Meet our Professionals
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="mt-0 lg:mt-8 space-y-6">
            {teamMembers.map((member, index) => (
              <div
                data-aos="fade-up"
                onMouseEnter={() => handleHighlight(member)}
                key={member.id}
                className={`flex items-center space-x-4 p-4 rounded border-b-2 cursor-pointer ${
                  highlightedMember.id === member.id &&
                  'hover:border-b-black hover:underline'
                }`}
              >
                <span className="text-blue-500 font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <button className="bg-[#D2A98E] p-2 rounded-full text-white hover:bg-gray-400 transition duration-300">
                  <LuArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center transition-all justify-center gap-8 lg:items-start">
          <div>
            <img
              data-aos="zoom-in"
              src={highlightedMember.image}
              alt={highlightedMember.name}
              className="w-[400px] h-[380px] rounded-md transition-all shadow-lg object-cover mb-4"
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
