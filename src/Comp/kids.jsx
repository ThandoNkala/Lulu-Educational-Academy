


function Kids() {
  return (
    <>
     <section className='container mx-auto flex flex-wrap justify-between items-center font-playfair'>
      <div className='mt-25  flex-col justify-between items-center w-161 h-130'>
        <h1 className='text-4xl font-bold text-[#461B36]  m-6'>
          100% of our results are <br />
          obtained within a clearly <br />
          defined time frame, even <br /> 
          from scratch.
        </h1>
        <p className='text-[#461B36]  m-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />
         sollicitudin est in rutrum sagittis. Fusce eu mi vehicula lacus rutrum <br />
         fringilla. Mauris vel suscipit felisLorem </p>

         <button className= '  m-6 text-white cursor-pointer bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2'>Enroll now</button>

             <div className="bg-[#461B36] w-161 h-35 rounded-2xl m-6">
          <h1 className='text-3xl text-white m-6 pt-5'>1500 + balances</h1>
          <p className='text-white ml-6 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />
          sollicitudin est in rutrum sa</p>
        </div>
      </div>
      <div className='mt-25  flex-col justify-between items-center w-141 h-130'>
        <img className='h-130 w-150 mt-7 object-cover rounded-3xl' src="src/images/hug.png" alt="kids" />
      </div>
     </section>
    </>
  );
}

export default Kids; 