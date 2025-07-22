

function Student(){
     
    return(
    <>
  
     <div className='mt-25 container mx-auto font-playfair'>
       <h1 className='flex flex justify-center items-center m-4 text-3xl font-semibold  text-[#461B36]'>Student Perspective</h1>
         <p className='flex flex justify-center items-center text-center text-3xl m-4 text-lg font-semibold  text-[#461B36]'>Hear from our students about their experiences at <br /> Lulu Academy and how our supportive <br /> environment and innovative programs have <br />helped them thrive.</p>
     </div>

      <div className="flex flex-wrap justify-around items-center mt-10 container mx-auto">

         <div className="flex flex-col border w-100 h-150 rounded-[15px] group overflow-hidden relative hover:shadow-lg hover:border-none font-playfair">
  
  <img className="h-100 w-100 p-5 transition-opacity duration-1000 group-hover:opacity-0" src="src/images/Charlie.png" alt="student 3"/>
  <div className="transition-all duration-900 group-hover:-translate-y-70 ">
    <h2 className="pl-5 text-lg font-semibold text-[#461B36]">Ask Charlie</h2>
    <p className="p-5 text-[#461B36]">
     "Attending Lulu Academy has truly changed my life. 
     The supportive environment and engaging curriculum have 
     helped me discover my passion and develop my skills.
      I’m excited about my future!"
    </p>
    <button className='cursor-pointer w-25 bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2 m-30 text-white'>Enroll</button>
  </div>
</div>

           <div className="flex flex-col border w-100 h-150 rounded-[15px] group overflow-hidden relative hover:shadow-lg hover:border-none font-playfair">
  
  <img className="h-100 w-100 p-5 transition-opacity duration-1000 group-hover:opacity-0" src="src/images/Oli.png" alt="student 3"/>
  <div className="transition-all duration-900 group-hover:-translate-y-70">
    <h2 className="pl-5 text-lg font-semibold text-[#461B36]">Ask Olivia</h2>
    <p className="p-5 text-[#461B36]">
     "Lulu Academy offers a unique blend of academic rigor and creative exploration.
      I’ve had the chance to work on projects that really inspire me and challenge my thinking.
       It’s a place where ideas come to life!"
       </p>
    <button className='cursor-pointer w-25 bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2 m-30 text-white'>Enroll</button>
  </div>
</div>


      <div className="flex flex-col border w-100 h-150 rounded-[15px] group overflow-hidden relative hover:shadow-lg hover:border-none font-playfair">
  
  <img className="h-100 w-100 p-5 transition-opacity duration-1000 group-hover:opacity-0" src="src/images/Simba.png" alt="student 3"/>
  <div className="transition-all duration-900 group-hover:-translate-y-70">
    <h2 className="pl-5 text-lg font-semibold text-[#461B36]">Ask Simba</h2>
    <p className="p-5 text-[#461B36]">
      "The teachers at Lulu Academy go above and beyond to ensure we succeed.
      Their dedication and personalized approach have made my learning
      experience incredibly rewarding. I’m grateful to be a part of this
      community!" 
      </p>
    <button className='cursor-pointer w-25 bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2 m-30 text-white'>Enroll</button>
  </div>
</div>
      </div>
  
     <hr className="border border-[#461B36] mt-15" />
    </>
    
    );
}

export default Student;