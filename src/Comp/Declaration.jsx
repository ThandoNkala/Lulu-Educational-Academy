function Declaration (){
    return(
       <div>
        <form className="bg-white p-6 ml-10 mt-10">
          <div className="mb-4">
            <h1 className="text-[#461B36] font-playfair text-2xl">I,</h1>
                <label className="block text-gray-700 mb-2" htmlFor="email"></label>
                <input className="border border-[#461B36] p-2 w-100" type="email" id="email" name="email" required placeholder="Your Name*" />
                <p className="text-[#461B36] font-playfair text-xl mt-4">
                    uderstands that full school fees are due and payable on the first day of term and that one term notice or a term fees in lieu there of must be paid if <br /> the child is being removed/transferred from the college 
                  </p>
            </div>

             <div className="mb-4 mt-10">
             <h1 className="text-[#461B36] font-playfair text-2xl">Declaration</h1>   
            <h1 className="text-[#461B36] font-playfair text-2xl">I,</h1>
                <label className="block text-gray-700 mb-2" htmlFor="email"></label> 
                <input className="border border-[#461B36] p-2 w-100" type="email" id="email" name="email" required placeholder="Your Name*" />
                <p className="text-[#461B36] font-playfair text-xl mt-4">
                 understands that full school fees are due and payable on the first day of term and that one term notice or a term fees in lieu there of must be paid if <br /> the child is being removed/transferred from the college uderstands that full school fees are due and payable on the first day of term and that one <br /> term notice or a term fees in lieu there of must be paid if the child is being removed/transferred from the college  </p>
            </div>
              <button className="bg-gradient-to-r from-[#461B36] to-pink-500 rounded text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
       </div>
    );
}

export default Declaration