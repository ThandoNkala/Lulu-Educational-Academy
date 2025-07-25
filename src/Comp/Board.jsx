
function Board(){
  
 

    return(
        <> 
        <section>
          <h1 className='text-4xl text-[#461B36] font-playfair m-10'>Our Board</h1>
          <div className=" flex justify-between items-center  flex-wrap ">
            <div className="group border-[#461B36] h-70 w-90 bg-[url('./src/images/woman1.png')] bg-cover bg-center rounded-3xl hover:visible md:block hidden">
               <div className="p-2 bg-[#461B36] w-40 font-playfair text-center font-xl text-white mt-50 hidden group-hover:block"><h1>Deputy Head</h1></div>
            </div>

            <div className="border border-dotted border-[#461B36] h-120 w-120 flex justify-center items-center rounded-3xl">
                 <div className=" bg-[url('./src/images/MAN.png')] group bg-cover bg-center md:h-110 h-90 md:w-110 w-90 bg-cover rounded-3xl">
                   <div className="bg-[#461B36] w-40  flex text-center justify-center align-middle font-playfair font-xl text-white mt-80  ml-25 md:ml-0 hidden group-hover:block p-2">Head Master</div>
                  </div>
            </div>

            <div className="border group border-[#461B36] h-70 w-90 bg-[url('./src/images/woman2.png')] bg-cover bg-center rounded-3xl md:block hidden">
               <div className="bg-[#461B36] w-40 font-playfair text-center font-xl text-white mt-50 hidden group-hover:block p-2">Head of Department</div>
            </div>
          </div>  
      </section>
      </>
     
    );
}

export default Board;