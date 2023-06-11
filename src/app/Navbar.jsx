'use client';
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <>
      <NavbarHeader></NavbarHeader>
     
    </>
  );
};

const NavbarHeader = () => {
  const [Toggle, setToggle] = useState(false);
  const [Show, setShow] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShow(false);
      setToggle(false);
    } else {
      setShow(true);
      setToggle(false);
    }
  }, [windowWidth]);

  function handleClick() {
    {
      Toggle ? setToggle(false) : setToggle(true);
    }
  }
 

  return (
    <header className="bg-[#0400ff]">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
          <img
            className="md:w-22 w-20 border-8 border-[#0400ff] rounded-2xl cursor-pointer"
            src={"/logo.png"}
          ></img>
          </Link>
          <h1 className="text-5xl pl-4 text-white">Kjaas</h1>
        </div>

        <div className={Show ? "hidden" : ""}>
          <NavList></NavList>
        </div>
        <div>
          <img
            src={"/menu.png"}
            className={Show ? "" : "hidden"}
            onClick={handleClick}
            style={{ height: "40px", width: "40px" }}
          ></img>
        </div>
      </nav>

      <div className={Show && Toggle ? "" : "hidden"}>
        <NavList></NavList>
      </div>
    </header>
  );
};

function NavList() {
  return (
    <>
      <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[2vw] gap-6 lg:p-0 p-6">
        <li>
          <Link
            className="hover:text-2xl  text-xl text-white ease-in-out duration-300"
            href="/AlterationPricing"
          >
            AlterationPricing
          </Link>
        </li>
        <li>
          <a
            className="hover:text-2xl text-xl text-white ease-in-out duration-300"
            href="#"
          >
            Get Quote
          </a>
        </li>
        <li>
          <a
            className="hover:text-2xl text-xl text-white ease-in-out duration-300"
            href="#"
          >
            Book Appointment
          </a>
        </li>
        <li>
          <a
            className="hover:text-2xl text-xl text-white ease-in-out duration-300"
            href="#"
          >
            WhatsApp Us
          </a>
        </li>
        <li>
          <a
            className="hover:text-2xl text-xl text-white ease-in-out duration-300"
            href="#"
          >
            About Us
          </a>
        </li>
        <li>
          <Link
            className=" hover:text-2xl text-xl text-white ease-in-out duration-300"
            href="/Auth"
          >
            DashBoard
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
