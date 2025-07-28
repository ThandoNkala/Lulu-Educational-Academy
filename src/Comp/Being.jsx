function Being() {
  return (
    <>
      <section className="container mx-auto flex flex-wrap justify-between items-center font-playfair ">
        <div className="flex-col  mt-20 justify-between items-center w-161 h-130">
          <h1 className="md:text-4xl md:mt-20 text-2xl font-bold text-[#461B36]  m-6">
            100% of our results are <br />
            obtained within a clearly <br />
            from scratch.
          </h1>
          <p className="text-[#461B36]  m-6">
           Being part of a team teaches important life skills such as leadership, <br />
            discipline, and time management. You’ll learn to set goals and work <br />
            hard to achieve them.
          </p>

          <button className=" w-25 m-6 text-white cursor-pointer bg-gradient-to-r from-[#461B36] to-pink-500 rounded-full p-2">
            Enroll now
          </button>
           <button className=" w-25 m-6 text-white cursor-pointer bg-gradient-to-r from-[#461B36] to-pink-500 rounded-full p-2">
            Help!!!
          </button>
        </div>
        <div className="grid grid-col grid-cols-2 pr-30 ">
            <div className="bg-[#461B36]  h-40 w-40  "></div>
            <div className="bg-[#AC4285] opacity-80 h-40 w-40 rounded-l-full"></div>
            <div className="bg-[#AC4285] opacity-80 h-40 w-40 rounded-tr-full"></div>
            <div className="bg-[#461B36]  h-40 w-40"></div>
        </div>
      </section>
    </>
  );
}

export default Being;
