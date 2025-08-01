import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-[#461B36] text-white md:rounded-t-[80px] mt-10 flex flex-col justify-center items-center">
        <section className="flex h-auto flex-wrap justify-center items-center font-playfair text-center md:text-left w-full container mx-auto">
          <div className="md:ml-5 m-5">
            <img src="/logo-white.png" alt="Lulu Academy Logo" />
            <p className="text-white mt-5">
              Lulu Academy is committed to nurturing well-rounded learners
              through academic <br />
              excellence, leadership, and innovation — empowering every student
              to thrive in a <br />
              changing world.
            </p>
            <div className="flex justify-center mt-5 ">
              <div className="h-10 w-50 flex justify-between ">
                <img src="/line-md_youtube.png" alt="" />
                <img src="/linkedin.png" alt="" />
                <img src="/hugeicons_instagram.png" alt="" />
                <img src="/ic_round-facebook.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex  flex-wrap justify-between md:w-95 w-90 h-90 items-center md:mt-10 -mt-30 container mx-auto ">
            <div className="md:block hidden">
              <ul className="flex flex-col justify-between h-40 ">
                <li className="text-white font-bold text-2xl">Company</li>
                <li className="text-white list-disc">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="text-white list-disc">
                  <Link to="/academics">Academics</Link>
                </li>
                <li className="text-white list-disc">
                  <Link to="/athletics">Sport</Link>
                </li>
                <li className="text-white list-disc">
                  <Link to="/aboutus">Our Mission</Link>
                </li>
              </ul>
            </div>

            <div className=" w-full">
              <ul className="flex flex-col md:justify-between justify-center h-40 ">
                <li className="text-white font-bold text-2xl">Contact Us</li>
                <li className="text-white md:list-disc">
                  <a href="">+263 786 543 77</a>
                </li>
                <li className="text-white md:list-disc">
                  <a href="">luluacademy@gmail.com</a>
                </li>
                <li className="text-white md:list-disc">
                  <a href="">5467 Smart Corner </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="border border-white font-playfair md:w-280 w-100 md:ml-25 -mt-20 " />
        <div className="py-5 flex md:flex-row flex-col justify-around items-center  ">
          <p className="text-center text-white ">
            © 2023 Lulu Academy. All rights reserved.
          </p>
          <div className="md:w-120 w-35">
            <ul className="flex md:flex-row flex-col justify-around  md:w-120 w-40 underline ">
              <li className="text-white">
                <a href="">Privacy Policy </a>
              </li>
              <li className="text-white">
                <a href="">Terms of Service </a>
              </li>
              <li className="text-white">
                <a href="">Cookies Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
