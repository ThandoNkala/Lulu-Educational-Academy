
function WhyLulu() {
  return (
    <>
    <section>
      <div className='ml-10 mt-20 w-90 h-20 '>
    <h1 className='text-4xl text-[#461B36] font-playfair'>Why Lulu Academy ?</h1>
   </div>
   <div className=' flex justify-around align-center p-5'>  
      <div className=' flex justify-center text-start mt-10 w-250'>
        <p className="text-[#461B36] text-lg font-playfair">At Lulu Academy, we strive for all-round excellence. Our strong academic program empowers learners <br />
         with knowledge and critical thinking skills. Through sport, we promote teamwork, discipline, and 
          physical well-being. We also uphold high standards of cleanliness, creating a safe, healthy, and 
           respectful environment for all.</p>
    </div>
    </div>
    </section>
    <section>
        <div className='mt-10 flex gap-10  flex-wrap justify-around align-center '>
            <div className="bg-[#461B36] h-45 md:w-100 w-90 rounded-2xl">
                <h1 className="text-white m-5 text-2xl font-playfair">Convenient <br />
                 class schedule</h1>
                 <p className="text-white font-playfair ml-5">Our classes have schedules to balance off <br />
                  lessons, break-times, study periods and practice. </p>
            </div>

             <div className="bg-[url('./src/images/tennis.png')] bg-cover bg-center h-45 md:w-100 w-90 rounded-2xl"></div>
            <div className="bg-[#461B36] h-45 md:w-100 w-90 rounded-2xl">
                <h1 className="text-white m-5 text-2xl font-playfair">Team of  <br />trainers </h1>
                 <p className="text-white font-playfair ml-5">Through sport, we promote teamwork, <br />
                  discipline, and physical well-being.  </p>
            </div>
        </div>
        <div className='mt-10 flex flex-wrap justify-around align-center '>
          <div className="bg-[url('./src/images/Raket.png')] bg-cover bg-center h-45 md:w-100 w-90 rounded-2xl"></div>
             <div className="bg-[#461B36] h-45 w-210 rounded-2xl flex justify-between md:block hidden">
                <div>
                  <h1 className="text-white m-5 text-2xl font-playfair">Lorem ipsum dolor <br />
                                  sit amet Lorem ipsum <br />
                   Hygiene</h1>
                  <p className="text-white font-playfair ml-5">We uphold high standards of cleanliness, <br />
                   creating a safe, healthy, and respectful environment for all.</p>
                </div>
                <div>
                    <h1 className="text-white mr-20 mt-20 text-8xl font-playfair">
                      + 48
                    </h1>
                </div>
             </div>
        </div>
    </section>
    </>
  );
}
 
export default WhyLulu;