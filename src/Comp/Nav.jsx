import { Link } from "react-router-dom";
import React, { useState } from "react";

function nav() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="nav-items flex justify-between items-center  shadow-lg/30 p-4 bg-white">
      <div className="logo">
        <Link to="/">
          <img src="/logo lulu.png" alt="logo" />
        </Link>
      </div>

      <div className="nav-list text-[#461B36] text-lg font-semibold">
        <ul className="md:flex hidden justify-between space-x-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen(!open)}
              className="flex bg-transparent border border-[#461B36] text-[#461B36]  rounded "
            >
              {" "}
              Additional info{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200 z-10 text-[#461B36]">
                <Link
                  to="/newsroom"
                  className="block px-4 py-2 text-sm text-[#461B36] hover:bg-[#461B30]/25"
                >
                  Newsroom
                </Link>
                <Link
                  to="/athletics"
                  className="block px-4 py-2 text-sm text-[#461B36] hover:bg-[#461B36]/25"
                >
                  Athletics
                </Link>
                <Link
                  to="/admission"
                  className="block px-4 py-2 text-sm text-[#461B36] hover:bg-[#461B36]/25"
                >
                  Admission
                </Link>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="btn md:flex hidden md:block">
        <Link
          to="/admission"
          className="text-white cursor-pointer bg-gradient-to-r from-[#461B36] to-pink-500 rounded p-2 font-semibold"
        >
          Enroll now
        </Link>
      </div>
      <div className="md:hidden block">
        <button
          onClick={() => setMenu(!menu)}
          className="text-[#461B36] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {menu && (
            <div className="absolute mt-2 -ml-35 w-40  h-45  rounded-md shadow-lg bg-white border border-gray-200 z-10 text-[#461B36]">
              <Link
                to="/"
                className="block  text-2xl font-playfair font-semi-bold text-[#461B36] hover:bg-[#461B30]/25"
              >
                Home
              </Link> 

                 <Link
                to="/aboutus"
                className="block  text-2xl font-playfair font-semi-bold text-[#461B36] hover:bg-[#461B30]/25"
              >
                About Us
              </Link>

              <Link
                to="/newsroom"
                className="block  text-2xl font-playfair font-semi-bold text-[#461B36] hover:bg-[#461B30]/25"
              >
                Newsroom
              </Link>

               <Link
                to="/athletics"
                className="block  text-2xl font-playfair font-semi-bold text-[#461B36] hover:bg-[#461B36]/25"
              >
                Athletics
              </Link>
              <Link
                to="/admission"
                className="block  text-2xl font-playfair font-semi-bold text-[#461B36] hover:bg-[#461B36]/25"
              >
                Admission
              </Link>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default nav;
