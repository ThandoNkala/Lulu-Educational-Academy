import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className="">  
        <div className="banner">
          <div className="h-screen bg-w-1/2 bg-[url('./src/images/game-icons_graduate-cap.png')] bg-contain bg-center bg-no-repeat">
            <div className="flex-wrap justify-between items-center container mx-auto">
              <div className="heading text-[#461B36]">
                <h2 className="md:text-6xl text-3xl  italic font-euphoria">
                  Welcome to
                </h2>
                <h1 className="text-8xl font-normal font-euphoria">
                  Lulu Academy
                </h1>
              </div>
              <div className="border-40 rounded-full h-120 w-120 position relative top-25 border-[#461B36] bg-white">
                <img
                  className="h-139 w-[100%] relative top-[-115px] rounded-full "
                  src="src/images/kid2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="text-white w-130 flex justify-evenly items-center shadow-xl/30 rounded-lg bg-white position relative bottom-30 left-100">
              <button className=" font-semibold cursor-pointer w-25 border-2 border-[#461B36] text-[#461B36] rounded  p-2 m-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                1000+
              </button>
              <Link
                to="/admission"
                className=" font-semibold cursor-pointer w-20 bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2 m-2"
              >
                Enroll
              </Link>
            </div>
            <div className="bg-[#461B36] h-25 text-white mt-20 flex-col justify-center items-center ">
              <h2 className="p-1 flex justify-center items-center text-xl text-semibold ">
                OUR MISSION
              </h2>
              <p className="flex justify-center text-center font-judson">
                At LULU Academy, our mission is to foster a nurturing and
                inclusive environment that empowers every student to reach their
                full potential. We are <br />
                dedicated to providing a high-quality education that emphasizes
                academic excellence, critical thinking, and creativity
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
