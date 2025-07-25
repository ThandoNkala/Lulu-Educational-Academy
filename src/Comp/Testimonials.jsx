

function Testimonials(){
 
   return(
          <>
          
    <section className='md:mt-27 flex flex-col justify-center align-center h-[100vh] font-playfair '>
        <h1 className='text-3xl font-bold text-[#461B36] text-center'>What people think about <br />
           Lulu Academy</h1>

           <div className='h-80 flex flex-wrap  justify-center align-center mt-10 '>

            <div className='md:block hidden w-100 rounded-3xl shadow-2xl bg-white'>
                <div className=' m-10 flex align-center'>
                <div className='rounded-full w-13 h-13 bg-[url("/src/images/Ba.png")] bg-contain bg-center bg-no-repeat'>
                </div>
                 <h1 className='m-3 text-lg font-semibold text-[#461B36]'>Ba Ewu</h1>
                </div>
                <p className='text-[#461B36] m-10'>"Lulu Academy is a beacon of hope
                     for our community. I appreciate how the school focuses
                      not just on academics but also on character development.
                       It’s essential for our children to grow into responsible
                        and compassionate adults."</p>
            </div>

        <div className='md:w-100 w-85 rounded-3xl shadow-2xl bg-white'>
                <div className=' m-10 flex align-center'>
                <div className='rounded-full w-13 h-13 bg-[url("/src/images/Dylan.png")] bg-contain bg-center bg-no-repeat'>
                </div>
                 <h1 className=' m-3 text-lg font-semibold text-[#461B36]'>Ba Dylan</h1>
                </div>
                <p className='text-[#461B36] m-10'>"As someone who has seen many schools over
                 the years, I can confidently say that Lulu 
                  Academy stands out. The commitment to 
                   integrating cultural heritage into the curriculum 
                    is commendable. Our children need to know 
                     where they come from while striving for 
                     excellence."</p>
            </div>

            <div className='md:block hidden w-100 rounded-3xl shadow-2xl bg-white'>
                <div className=' m-10 flex align-center'>
                <div className='rounded-full w-13 h-13 bg-[url("/src/images/Mai.png")] bg-contain bg-center bg-no-repeat'>
                </div>
                 <h1 className=' m-3 text-lg font-semibold text-[#461B36]'>Mai Momo</h1>
                </div>
                <p className='text-[#461B36] m-10'>"I am genuinely excited about 
                    what Lulu Academy offers. The nurturing environment and emphasis
                     on creativity and critical thinking set it apart from other
                      schools. It’s a place where our children can thrive and
                       become the leaders of tomorrow."</p>
            </div>
           </div>
    </section>
  
   </>





   );
 
}

export default Testimonials