'use client';

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LuArrowUpRight } from 'react-icons/lu';

function TeamComponent() {
  const { t } = useTranslation();
  const teamMembers = useMemo(
    () => [
      {
        id: 1,
        name: 'George C. Anderson',
        role: t('senior manager'),
        image: '/men-1.jpg',
      },
      {
        id: 2,
        name: 'Brandon D. Garcia',
        role: t('IT Consultant'),
        image: '/men-2.jpg',
      },
      {
        id: 3,
        name: 'William A. Rogers',
        role: t('Product Designer'),
        image: '/men-3.jpg',
      },
      {
        id: 4,
        name: 'Matthew R. Howard',
        role: t('IT Manager'),
        image: '/men-4.jpg',
      },
    ],
    [t]
  );

  const [highlightedMember, setHighlightedMember] = useState(teamMembers[0]);

  const handleHighlight = (member: any) => {
    setHighlightedMember(member);
  };

  const otherMembers = teamMembers.filter(
    (member) => member.id !== highlightedMember.id
  );

  return (
    <div className="px-5 2xl:px-72 py-10 2xl:py-16 mb-10">
      <h4
        data-aos="fade-up"
        className="text-md xl:text-lg 2xl:text-xl text-center text-blue-500 font-bold"
      >
        {t('Meet Our Team')}
      </h4>
      <h2
        data-aos="fade-up"
        className="text-2xl xl:text-3xl 2xl:text-5xl font-bold text-center mt-2 2xl:mt-4 mb-14"
      >
        {t('Weve an Exclusive Team Meet our Professionals')}
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div data-aos="fade-up">
          <div className="mt-0 lg:mt-8 space-y-6">
            {teamMembers.map((member, index) => (
              <div
                onMouseEnter={() => handleHighlight(member)}
                key={member.id}
                className={`flex items-center transition-all space-x-4 p-4 rounded border-b-2 cursor-pointer ${
                  highlightedMember.id === member.id && 'hover:border-b-black'
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

        <div className="flex items-center transition-all justify-center gap-3 md:gap-8 lg:items-start">
          <div className="relative">
            <img
              data-aos="zoom-in"
              src={highlightedMember.image}
              alt={highlightedMember.name}
              className="w-[400px] h-[380px] rounded-md transition-all shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
              <h3 className="text-base md:text-2xl font-semibold text-white">
                {highlightedMember.name}
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                {highlightedMember.role}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {otherMembers.map((member) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                onClick={() => handleHighlight(member)}
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
