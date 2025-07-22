import { Link } from "react-router-dom";


function Footer(){

    return(
      <>
       <section className='flex justify-center items-center font-playfair'>
        <div className="ml-5 ">
            <img src="src/images/logo lulu.png" alt="Lulu Academy Logo" />
            <p className='text-[#461B36] mt-5'>Lulu Academy is committed to nurturing well-rounded learners through academic <br />
             excellence, leadership, and innovation — empowering every student to thrive in a <br />
              changing world.</p>
              <div className="h-10 w-60 flex justify-between mt-5">
                <img className="[#461B36]" src="src/images/youtube.svg" alt="" />
                 <img src="src/images/youtube.svg" alt="" /> 
                  <img src="src/images/instagram.svg" alt="" />
                   <img src="src/images/facebook.svg" alt="" />
              </div>
        </div>
        <div className="flex justify-between w-120 h-90 items-center mt-10 container mx-auto">
          <div>
            <ul className="flex flex-col justify-between h-40">
              <li className='text-[#461B36] font-bold text-2xl'>Company</li>
              <li className='text-[#461B36]'><Link to="/aboutus">About Us</Link></li>
              <li className='text-[#461B36]'><Link to="">Academics</Link></li>
              <li className='text-[#461B36]'><Link to="">Sport</Link></li>
              <li className='text-[#461B36]'><Link to="">Our Mission</Link></li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col justify-between h-40">
              <li className='text-[#461B36] font-bold text-2xl'>Quick Links</li>
              <li className='text-[#461B36]'><a href="">Our Mission</a></li>
              <li className='text-[#461B36]'><a href="">Testimonials</a></li>
              <li className='text-[#461B36]'><a href="">Get Help</a></li>
              <li className='text-[#461B36]'><a href="">Academics</a></li>
            </ul>
          </div>

             <div>
            <ul className="flex flex-col justify-between h-40">
              <li className='text-[#461B36] font-bold text-2xl'>Quick Links</li>
              <li className='text-[#461B36]'><a href="">+263 786 543 77</a></li>
              <li className='text-[#461B36]'><a href="">luluacademy@gmail.com</a></li>
              <li className='text-[#461B36]'><a href="">5467 Smart Corner </a></li>
              
            </ul>
          </div>

        </div>
       
       </section>
        <hr className="border border-[#461B36] font-playfair " />
        <div className="py-5 flex justify-around items-center">
          <p className='text-center text-[#461B36]'>© 2023 Lulu Academy. All rights reserved.</p>
          <div>
             <ul className="flex justify-between w-110 underline">
              <li className='text-[#461B36]'><a href="">Privacy Policy </a></li>
              <li className='text-[#461B36]'><a href="">Terms of Service </a></li>
              <li className='text-[#461B36]'><a href="">Cookies Settings</a></li>
            </ul>
           
          </div>
        </div>
      </>
    );
}

export default Footer;  