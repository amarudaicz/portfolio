'use client';
import Marquee from '@/app/magic-ui/Marquee';
import Chip from '@/app/shared/Chip';
import { useRef, useState } from 'react';

const HeaderDelitienda = () => {

  const mockSkills = [
    { title: "Angular", icon: "icon-[devicon--angular]" },
    { title: "Tailwind", icon: "icon-[logos--tailwindcss-icon]" },
    { title: "NodeJS", icon: "icon-[logos--nodejs-icon]" },
    { title: "Express", icon: "icon-[skill-icons--expressjs-light]" },
    { title: "MySQL", icon: "icon-[devicon-plain--mysql]" },
  ];

  

  return (
    <div className='px-3 pt-2 gap-3  flex justify-between items-center '>
      <img
        className='w-14'
        alt='delitienda-logo'
        height={100}
        src='/logo-deli.png'
      ></img>

      <div className='flex-1 overflow-x-auto relative after:absolute after:left-0 after:top-0 after:h-full after:w-[10px] after:bg-gradient-to-r after:from-white after:to-transparent before:absolute before:right-0 before:top-0 before:h-full before:w-[10px] before:bg-gradient-to-l before:from-white before:to-transparent'>
        <div
          className='flex gap-2 items-center overflow-x-auto no-scrollbar  '
        >
          <Marquee pauseOnHover className='[--duration:15s]'>
            {mockSkills.map(e=>(
              <Chip key={e.title}
                title={e.title}
                icon={e.icon}
                className='border-neutral-600 text-neutral-600 text-sm'
              ></Chip>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeaderDelitienda;
