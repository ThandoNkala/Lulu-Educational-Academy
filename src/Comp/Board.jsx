
function Board(){
  
 

    return(
        <> 
        <section>
          <h1 className='text-4xl text-[#461B36] font-playfair m-10'>Our Board</h1>
          <div className=" flex justify-between items-center  flex-wrap">
            <div className="group border-[#461B36] h-70 w-90 bg-[url('./src/images/woman1.png')] bg-cover bg-center rounded-3xl hover:visible">
               <div className="p-2 bg-[#461B36] w-40 font-playfair text-center font-xl text-white mt-50 hidden group-hover:block"><h1>Deputy Head</h1></div>
            </div>

            <div className="border border-dotted border-[#461B36] h-120 w-120 flex justify-center items-center rounded-3xl">
                 <div className=" bg-[url('./src/images/MAN.png')] group bg-cover bg-center h-110 w-110 bg-cover rounded-3xl">
                   <div className="bg-[#461B36] w-40  flex text-center justify-center align-middle font-playfair font-xl text-white mt-80 hidden group-hover:block p-2">Head Master</div>
                  </div>
            </div>

            <div className="border group border-[#461B36] h-70 w-90 bg-[url('./src/images/woman2.png')] bg-cover bg-center rounded-3xl">
               <div className="bg-[#461B36] w-40 font-playfair text-center font-xl text-white mt-50 hidden group-hover:block p-2">Head of Department</div>
            </div>
          </div>  
      </section>
      </>
     
    );
}

export default Board;