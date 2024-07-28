'use client';
import { useEffect, useState } from 'react';
import './main.css'

const MainGithub = () => {
  const [allRepository, setAllRepository] = useState<any[]>([]);

  const getRepos = async () => {
    const allRepos = await fetch(
      'https://api.github.com/users/amarudaicz/repos'
    ).then((res) => res.json());

    const repositoryNames = [
      'delivery-app',
      'delivery-app-backend',
      'troca',
      'ow-shoes-ng',
      'conceptos-JS',
    ];

    const filteredRepos = allRepos.filter((repo: any) =>
      repositoryNames.includes(repo.name)
    );
    console.log(filteredRepos);

    setAllRepository(filteredRepos);
  };

  const indexIcons = [
    {
      icon: 'icon-[lets-icons--lamp-light] text-yellow-300',
      background: 'bg-yellow-500',
    },
    {
      icon: 'icon-[material-symbols--code] text-green-300',
      background: 'bg-green-500',
    },
    {
      icon: 'icon-[circum--server] text-orange-400',
      background: 'bg-orange-500',
    },
    {
      icon: 'icon-[carbon--chip] text-blue-400',
      background: 'bg-blue-500',
    },
    {
      icon: 'icon-[radix-icons--mobile] text-pink-300',
      background: ' bg-pink-500',
    },
  ];

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className='w-full h-full container-git rounded-2xl  bg-neutral-900 '>
      <div className='w-full h-full flex flex-col relative'>
        <div className='p-2 flex justify-between items-center '>
          <a
            href='https://github.com/amarudaicz'
            className='flex items-center gap-2 '
          >
            <i className='icon-[mdi--github] text-[40px]'></i>
            <span className=''>amarudaicz</span>
          </a>
        </div>

        <div className='flex flex-col flex-1 justify-between'>
          {allRepository.map((e: any, i: number) => (
            <a
              key={e.name}
              className='py-3 px-2 relative flex items-center gap-2 group '
              href={e.html_url}
              target='_blank'
            >
              <span
                className={`absolute left-[27px]  w-[3px] bg-gradient-to-b from-transparent via-white to-white rounded-full ${
                  i > 0 ? 'h-1/2 top-[-30px]' : 'hidden'
                }`}
              ></span>

              <div className='relative'>
                <i
                  className={`${indexIcons[i].icon} z-[1] text-[42px] relative `}
                ></i>
                <div
                  className={`absolute block w-[19px] h-[19px] rounded-full ${indexIcons[i].background} blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-60 group-hover:bg-opacity-100 group-hover:h-[25px] group-hover:w-[25px] transition-all duration-300`}
                ></div>
              </div>

              <div className='flex-1 p-2 relative block backdrop-blur-md group-hover:backdrop-blur-0 transition-all duration-300 bg-black bg-opacity-50 rounded-md border border-slate-200 border-opacity-45 overflow-hidden'>
                <span className='flex justify-between items-center overflow-hidden gap-2'>
                  <span className='flex flex-col overflow-hidden'>
                    
                    <span className='w-full text-sm overflow-hidden text-nowrap text-ellipsis mb-[4px]'>
                      {e.name}
                    </span>

                    <span className='flex items-center gap-1'>
                      <span
                        className={`w-[10px] h-[10px] rounded-full ${
                          e.language === 'JavaScript'
                            ? 'bg-yellow-300'
                            : 'bg-blue-400'
                        }`}
                      ></span>
                      <span className='text-xs'>{e.language}</span>
                    </span>
                  </span>

                  <i className='icon-[iconamoon--link-external] text-xl'></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainGithub;
