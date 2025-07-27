import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="flex flex-wrap justify-center items-center font-playfairmt-100 text-center md:text-left container mx-auto">
        <div className="md:ml-5">
          <img src="/logo lulu.png" alt="Lulu Academy Logo" />
          <p className="text-[#461B36] mt-5">
            Lulu Academy is committed to nurturing well-rounded learners through
            academic <br />
            excellence, leadership, and innovation — empowering every student to
            thrive in a <br />
            changing world.
          </p>
          <div className="h-10 w-50 flex justify-between mt-5">
            <img
              className="[#461B36]"
              src="/line-md_youtube.png"
              alt=""
            />
            <img src="/linkedin.png" alt="" />
            <img src="/hugeicons_instagram.png" alt="" />
            <img src="/ic_round-facebook.png" alt="" />
          </div>
        </div>
        <div className="flex  flex-wrap justify-between md:w-120 w-90 h-90 items-center md:mt-10 -mt-15 container mx-auto ">
          <div className="md:block hidden">
            <ul className="flex flex-col justify-between h-40">
              <li className="text-[#461B36] font-bold text-2xl">Company</li>
              <li className="text-[#461B36]">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="text-[#461B36]">
                <Link to="/academics">Academics</Link>
              </li>
              <li className="text-[#461B36]">
                <Link to="/athletics">Sport</Link>
              </li>
              <li className="text-[#461B36]">
                <Link to="/aboutus">Our Mission</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col justify-between h-40">
              <li className="text-[#461B36] font-bold text-2xl">Quick Links</li>
              <li className="text-[#461B36]">
                <a href="">Our Mission</a>
              </li>
              <li className="text-[#461B36]">
                <a href="">Testimonials</a>
              </li>
              <li className="text-[#461B36]">
                <a href="">Get Help</a>
              </li>
              <li className="text-[#461B36]">
                <a href="">Academics</a>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="flex flex-col justify-between h-40">
              <li className="text-[#461B36] font-bold text-2xl">Contact Us</li>
              <li className="text-[#461B36]">
                <a href="">+263 786 543 77</a>
              </li>
              <li className="text-[#461B36]">
                <a href="">luluacademy@gmail.com</a>
              </li>
              <li className="text-[#461B36]">
                <a href="">5467 Smart Corner </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border border-[#461B36] font-playfair " />
      <div className="py-5 flex md:flex-row flex-col justify-around items-center ">
        <p className="text-center text-[#461B36] ">
          © 2023 Lulu Academy. All rights reserved.
        </p>
        <div className="md:w-120 w-35">
          <ul className="flex md:flex-row flex-col justify-around  md:w-120 w-40 underline ">
            <li className="text-[#461B36]">
              <a href="">Privacy Policy </a>
            </li>
            <li className="text-[#461B36]">
              <a href="">Terms of Service </a>
            </li>
            <li className="text-[#461B36]">
              <a href="">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
