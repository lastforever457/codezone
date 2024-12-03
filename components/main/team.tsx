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
    // 2xl:px-72
    <div className="mx-auto mb-10 px-4 py-10 2xl:py-16 container">
      <h4
        data-aos="fade-up"
        className="font-bold text-blue-500 text-center text-md xl:text-lg 2xl:text-xl"
      >
        {t('Meet Our Team')}
      </h4>
      <h2
        data-aos="fade-up"
        className="mt-2 2xl:mt-4 mb-14 font-bold text-2xl text-center xl:text-3xl 2xl:text-5xl leading-snug lg:leading-tight"
      >
        {t('Weve an Exclusive Team Meet our Professionals')}
      </h2>
      <div className="gap-20 grid grid-cols-1 lg:grid-cols-2 w-full">
        <div data-aos="fade-up">
          <div className="space-y-6 mt-0 lg:mt-8">
            {teamMembers.map((member, index) => (
              <div
                onMouseEnter={() => handleHighlight(member)}
                key={member.id}
                className={`flex items-center transition-all space-x-4 p-4 rounded border-b-2 cursor-pointer ${
                  highlightedMember.id === member.id && 'hover:border-b-black'
                }`}
              >
                <span className="font-bold text-blue-500 text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <button className="bg-[#D2A98E] hover:bg-gray-400 p-2 rounded-full text-white transition duration-300">
                  <LuArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center lg:items-start gap-3 md:gap-8 transition-all">
          <div className="relative">
            <img
              data-aos="zoom-in"
              src={highlightedMember.image}
              alt={highlightedMember.name}
              className="shadow-lg rounded-md w-[400px] h-[380px] transition-all object-cover"
            />
            <div className="right-0 bottom-0 left-0 absolute bg-black/50 backdrop-blur-sm p-4">
              <h3 className="font-semibold text-base text-white md:text-2xl">
                {highlightedMember.name}
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                {highlightedMember.role}
              </p>
            </div>
          </div>
          <div className="gap-2 grid grid-cols-1">
            {otherMembers.map((member) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                onClick={() => handleHighlight(member)}
                className="border-gray-200 border w-[120px] h-[120px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamComponent;
