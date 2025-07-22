

function Browse() {
  return (
  <>
  <section className='mt-25 container mx-auto'>
  <div>
    <h1 className='flex flex justify-center items-center m-4 text-3xl font-semibold font-playfair text-[#461B36]'>Browse Subjects</h1>
  </div>
   <div className="search  flex justify-center items-center">
    <input type="text" placeholder='Search...'  className='w-100 h-12 rounded-lg border-2 border-gray-300 p-2 m-4 shadow-xl/30' />
    {/* <button className='bg-gradient-to-r from-[#461B36] to-pink-500 text-white rounded-lg p-2 m-4 cursor-pointer'>Search</button> */}
   </div>
   <div className="flex flex-wrap justify-around mt-10 items-center">
   <div className="border-2 rounded-[50px] border-dotted p-3 w-100 h-107 ">
    <div className="imgz grid grid-cols-2 ">
        <img className='h-50' src="src/sub-pics/pic1.png" alt="pic 1" />
        <img className='h-50' src="src/sub-pics/pic2.png" alt="pic 2" />
        <img className='h-50' src="src/sub-pics/pic3.png" alt="pic 3" />
        <img className='h-50' src="src/sub-pics/pic4.png" alt="pic 4" />
    </div>
   </div>
   <div className="p-3 w-100 h-80 y-hidden overflow-y-scroll scrollbar-hidden">
      <ul className='font-playfair'>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Mathematics</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> English</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Literature</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Biology</li> 
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Physics</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Geography</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> History</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Religious Studies</li>
      <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Shona or Ndebele / Indigenous Language</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> French / Foreign Language</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Computer Science / ICT</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Agriculture</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Commerce / Business Studies</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Accounts</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Economics</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Technical Graphics / Design & Technolgy</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Art & Design</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Music</li>  
       <li className="flex items-center"><div className="bg-[#461B36] m-3 h-5 w-5 rounded-full"></div> Physical Education(P.E)</li>  
          
    </ul>
   </div>
    </div>
</section>
<hr className="border border-[#461B36] mt-15" />


  </>
  );
}

export default Browse;