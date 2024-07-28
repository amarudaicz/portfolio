
const MainContact = () => { 
  return (
    <div className='w-full h-full bg-gradient-to-br from-neutral-900 to-transparent shadow-2xl rounded-2xl container-contact'>

      <div className='p-4 flex flex-col  gap-3'>

        <h4 className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-700 font-bold'>Envíame un email</h4>

        <div className='flex flex-col md:flex-row justify-center items-center gap-6 '>

          <div className='flex-1 w-full md:w-fit '>
              <div className='grid grid-cols-1 gap-4 '>
                <div className='flex flex-col gap-1'>
                  <label className='font-medium' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='p-2 bg-transparent rounded-md w-full border border-neutral-300'
                    id='email'
                    type='email'
                    placeholder='Ingresa tu email'
                  />
                </div>
 
                <div className='flex flex-col gap-1'>
                  <label className='font-medium' htmlFor='message'>
                    Mensaje
                  </label>
                  <textarea 
                    className='resize-none  p-2 bg-transparent rounded-md w-full border border-neutral-300'
                    id='message'
                    rows={3}
                    placeholder='Escribe tu message'
                  />
                </div>

                <button
                  type='button'
                  className='w-full p-2 flex items-center justify-center gap-2 bg-black font-medium rounded-md'
                >
                  Enviar
                  <i className='icon-[mdi--email-fast-outline] text-xl'></i>
                </button>
              </div>
          </div>

          <div className="h-[3px] w-[100px] md:w-[3px] md:h-[100px] bg-white rounded-full"></div>

          <div className='flex justify-center items-center'>

            <div className="flex items-center gap-2">
                <a href="https://github.com/amarudaicz" target="_blank" className="w-[50px] h-[50px] rounded-md bg-black flex items-center justify-center"> 
                    <i className='icon-[mdi--github] text-[30px]'></i>
                </a> 

                <a href="https://linkedin.com/in/amaru-daicz" target="_blank" className="w-[50px] h-[50px] rounded-md bg-black flex items-center justify-center"> 
                
                <i className='icon-[mdi--linkedin] text-[30px]'></i>

                </a>
                <a href="https://wa.me/3543655547" target="_blank" className="w-[50px] h-[50px] rounded-md bg-black flex items-center justify-center"> 
                <i className='icon-[mdi--whatsapp] text-[30px]'></i>
                    
                </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
