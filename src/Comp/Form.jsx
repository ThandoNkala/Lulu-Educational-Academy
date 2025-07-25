function Form() {
    return (
        <>    
           <div className="flex justify-start items-center mb-2 ml-15 mt-15"> 
                 <h2 className="text-2xl font-bold mb-4 font-playfair text-[#461B36]">APPLICATION FORM</h2>
                <hr className="border border-[#461B36] w-150 ml-5 md:block hidden" />
                 </div>
       <div className="flex flex-wrap  md:ml-10">

        <form action="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="bg-white p-6 ">
              <h2 className="text-2xl font-bold mb-4 font-playfair text-[#461B36]">YOUR DETAILS </h2>
            <div className="mb-4 flex flex-col md:flex-row gap-4">
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name"></label>
                <input className="border border-[#461B36] p-2 w-73 rounded-xl" type="text" id="name" name="name" required placeholder="Full Name*" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email"></label>
                <input className="border border-[#461B36] p-2 w-73 rounded-xl" type="email" id="email" name="email" required placeholder="Email*" />
            </div>
            </div>
             <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="number"></label>
                <input className="border border-[#461B36] p-2 md:w-150 w-73 rounded-xl" type="tel" id="number" name="number" required placeholder="Phone*" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message"></label>
                <textarea className="border border-[#461B36] p-2 md:w-150 w-73 h-50 rounded-xl" id="message" name="message" rows="4" required placeholder="Message*"></textarea>
            </div>
            <button className="bg-gradient-to-r from-[#461B36] to-pink-500 rounded text-white py-2 px-4 rounded md:w-20 w-35 text-2xl md:text-[17px]" type="submit">Submit</button>
        </form>

              <div className="bg-[#461B36] opacity-80 md:h-90 h-95  md:w-100  md:rounded-2xl mt-20 md:ml-25">
                <h1 className="text-white m-5 md:text-2xl text-3xl font-playfair">Our Newsletter</h1>
                 <p className="text-white font-playfair ml-5">Our newsletter is designed to keep our school <br />
                  community informed and engaged. Here’s what you can  <br />
                  expect: <br />
                  - Latest News <br />
                  - Upcoming events <br />
                  - Community involvement e.t.c </p>
                  <p className="text-white font-playfair ml-5 mt-2">
                    We encourage all parents, students, and staff to subscribe and stay connected.
                  </p>
                  <div className="flex justify-around items-center mt-5">
                    <button className="border-1 border-white bg-[#461B36] opacity-100% rounded text-white py-2 px-4 rounded cursor-pointer md:w-20 w-35 " type="email">Email</button>
                    <button className="border-1 border-white  bg-[#461B36] rounded text-white py-2 px-4 rounded cursor-pointer md:w-20 w-35" type="submit">Submit</button>
                  </div>
            </div>

        </div>
        </>

    );
}

export default Form;
