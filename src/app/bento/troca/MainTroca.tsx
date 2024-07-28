import Marquee from '@/app/magic-ui/Marquee';
import Chip from '@/app/shared/Chip';

const MainTroca = () => {
  const images = [
    'mock-home-troca.png',
    'mock-explore-troca.png',
    'mock-search-troca.png',
    'mock-detail-troca.png',
  ];

  const mockSkills = [
    { title: 'React Native', icon: 'icon-[logos--react]' },
    { title: 'Nativewind', icon: 'icon-[logos--tailwindcss-icon]' },
    { title: 'NodeJS', icon: 'icon-[logos--nodejs-icon]' },
    { title: 'Express', icon: 'icon-[skill-icons--expressjs-light]' },
    { title: 'MySQL', icon: 'icon-[devicon-plain--mysql]' },
    { title: 'Web Socket', icon: 'icon-[devicon--socketio]' },
  ];

  return (
    <div className='bg-white rounded-2xl w-full h-full overflow-hidden'>
      <div className='p-3 relative flex w-full h-full'>
        <div className='flex h-full flex-col gap-4 flex-1 overflow-hidden'>
          <h3 className='text-4xl  bg-clip-text bg-gradient bg-gradient-to-r text-transparent from-green-500  to-green-800  font-black'>
            Troca
          </h3>

          <p className='text-black font-medium text-balance '>
            Innovadora aplicación mobile que permitirá a sus usuarios <br />{' '}
            intercambiar bienes y/o servicios.
          </p>

          <div className='w-full'>
            <div className='hidden xl:flex flex-wrap w-full gap-2'>
            {mockSkills.map((e) => (
                  <Chip
                    key={e.title}
                    title={e.title}
                    icon={e.icon}
                    className='border-neutral-600 text-gray-700 text-sm'
                  ></Chip>
                ))}
            </div>

            <div className='xl:hidden'>
              <Marquee>
                {mockSkills.map((e) => (
                  <Chip
                    key={e.title}
                    title={e.title}
                    icon={e.icon}
                    className='border-neutral-600 text-gray-700 text-sm'
                  ></Chip>
                ))}
              </Marquee>
            </div>
          </div>

          <div className='bg-black w-fit p-3 mt-3 flex items-center flex-col gap-1 rounded-xl border border-neutral-800'>
            <span className='text-white text-sm'>Próximamente</span>

            <div className='flex items-center justify-center gap-2 flex-wrap'>
              <div className='flex gap-1 items-center'>
                <img src='google-play-icon.png' width={30} alt='' />
                <span className='text-sm text-white'>Play Store</span>
              </div>

              <div className='flex gap-1 items-center'>
                <i className='icon-[mdi--apple] text-4xl text-white'></i>
                <span className='text-sm text-white'>Apple Store</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <div className='grid grid-cols-2 right-1/2 top-[-50%] absolute translate-x-[100%] lg:translate-x-[110%]  '>
            <div className='mr-[-.5rem]'>
              <Marquee vertical pauseOnHover>
                {images.slice(0, 2).map((i) => (
                  <img key={i} src={i} alt={i} className='w-[200px]' />
                ))}
              </Marquee>
            </div>
            <div className='mt-[12rem] ml-[-.5rem]'>
              <Marquee vertical pauseOnHover reverse>
                {images.slice(2, 4).map((i) => (
                  <img key={i} src={i} alt={i} className='w-[200px]' />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTroca;
