function StudentTest() {
  return (
    <> <div>
       <div className='container mx-auto font-playfair'>
       <h1 className='flex flex justify-center items-center m-4 text-3xl font-semibold  text-[#461B36]'>Student Testimonials</h1>
         <p className='flex flex justify-center items-center text-center text-3xl m-4 text-lg font-semibold  text-[#461B36]'>Hear from our students about their experiences at<br /> Lulu Academy and how our supportive helped  <br />them thrive. <br /></p>
     </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 gap-5 p-5">
        <div className="flex flex-col shadow-[1px_1px_10px_1px] md:w-100 w-85 md:h-135 rounded-[15px] group overflow-hidden relative font-playfair">
          <img
            className="h-80 w-100 p-5 "
            src="/VestMan.png"
            alt="student 3"
          />
          <div >
            <h2 className="pl-5 text-lg font-semibold text-[#461B36]">
              Mai Momo
            </h2>
            <p className="p-5 text-[#461B36]">
              "The teachers at Lulu Academy go above and beyond to ensure we
              succeed. Their dedication and personalized approach have made my
              learning experience incredibly rewarding. I’m grateful to be a
              part of this community!"
            </p>
         
          </div>
        </div>
        <div className="h-135 w-150 bg-[url('/Arsenal.png')] bg-cover bg-no-repeat bg-center rounded-bl-[200px]"></div>
      </div>
      </div>
    </>
  );
}

export default StudentTest;
