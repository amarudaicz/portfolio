import Chip from '@/app/shared/Chip';
import HeaderDelitienda from '../HeaderDelitienda';
import './mainDelitienda.css';

const MainDelitienda = () => {
  return (
    <div className=' h-full relative container-box'>
      <div className='h-full w-full relative rounded-2xl bg-white  overflow-hidden  '>
        <div className='h-full w-full flex flex-col overflow-hidden '>
          <HeaderDelitienda></HeaderDelitienda>

          <div className='pl-3 z-[1]'>
            <span className='text-xs font-medium mb-1 text-gray-600'>
              Software
            </span>
            <h3 className='text-4xl font-black bg-clip-text bg-gradient bg-gradient-to-r text-transparent from-[#450AE8]  via-[#6d3fe9] to-[#450AE8]'>
              Delitienda
            </h3>

            <p className='text-black font-medium text-balance  lg:w-1/2'>
              Delitienda es un Software de ventas, actualmente utilizado por distintos tipos de comercios online.
            </p>

            <div className='mt-4'>
              <a
                href='https://delitienda.app'
                target='_blank'
                className='hover:translate-x-1 transition-all px-4 py-2 rounded-full bg-[#450AE8] text-white overflow-hidden relative text-sm font-medium shadow-sm shadow-[#6d3fe9] flex items-center gap-2 w-fit'
              >
                <span>Ver sitio</span>
                <i className='icon-[iconamoon--link-external] text-sm'></i>
              </a>
            </div>
          </div>

          <div className='flex relative justify-center items-end flex-1 '>
            <div className='relative w-4/5 lg:w-[450px] image-laptop'>
              <div className='absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white via-transparent to-transparent'></div>
              <div className='absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white via-transparent to-transparent'></div>
              <img
                className='rounded-b-2xl '
                alt='delitienda-logo'
                src='/mock-deli.png'
              ></img>
            </div>

            <div className='absolute bottom-2 right-2 self-end w-1/2  max-w-[350px] image-mockup'>
              <img
                className='rounded-b-2xl'
                alt='delitienda-logo'
                src='/deli-mock-blob.png'
              ></img>
            </div>


          </div>

        </div>
      </div>

      <div className='blob-blue absolute right-1/2 translate-x-2/3 top-1/2 -translate-y-1/2 blur-3xl rounded-full w-[80%] h-[80%] z-[-2]  bg-[#4751D3]'></div>
    </div>
  );
};

export default MainDelitienda;
