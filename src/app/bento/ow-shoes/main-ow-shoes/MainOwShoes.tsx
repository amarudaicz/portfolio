import './main.css';

const MainOwShoes = () => {
  return (
    <a
      href='https://owshoes.netlify.app'
      className='group relative '
      target='_blank'
    >
      <div className='overflow-y-scroll no-scrollbar md:overflow-x-hidden bg-white bg-gradient-to-tr from-white via-white to-transparent rounded-2xl w-full h-[250px] md:h-full flex justify-center items-center relative overflow-hidden'>
        <img
          src='/Home-ow-shoes.png'
          alt=''
          className='w-full full-page-ow top-0 left-0 absolute'
        />

      </div>

      <div className=' rounded-2xl overflow-hidden overlay w-full h-full bg-neutral-900 bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 transition-all duration-500 absolute top-0 left-0 flex justify-center items-center z-[1] flex-col'>
        <span className='text-white text-xl font-medium flex items-center gap-1'>
          Visitar
          <img
            src='/ow-logo-rm.png'
            alt=''
            className='brightness-100 invert object-cover logo-ow h-[35px] block w-[70px] -ml-4 -mr-4'
          />
          Shoes
          <i className='icon-[iconamoon--link-external]'></i>
        </span>
      </div>
    </a>
  );
};

export default MainOwShoes;
