
function StudentTest(){
    return(
      <>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-10 gap-5 p-5">
  <div className="flex flex-col border md:w-100 w-85 md:h-150 h-135 rounded-[15px] group overflow-hidden relative hover:shadow-lg hover:border-none font-playfair">
    <img className="h-100 w-100 p-5 transition-opacity duration-1000 group-hover:opacity-0" src="/Simba.png" alt="student 3"/>
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
</>
    )
}

export default StudentTest;