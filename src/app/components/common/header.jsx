"use client";
import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Logo from "../../assets/logo/logo_text_right.png";
import Hamburger from "hamburger-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Header = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <div className="w-screen lg:h-[80px] h-[60px] bg-[#070a13]/[0.5] border-0 border-white/[0.15] flex items-center justify-between fixed top-0 z-50 backdrop-blur-md">
         <div
            className={`menu absolute ${
               isOpen ? "active" : ""
            } h-svh overflow-hidden bg-[#070a13] flex flex-col pt-28`}
         >
            <div className="links w-full flex flex-col gap-3 px-6">
               <a href="#" className="text-white text-[18px]">
                  Ecosystem
               </a>
               <a href="#" className="text-white text-[18px]">
                  About
               </a>
               <a href="#" className="text-white text-[18px]">
                  Dao
               </a>
               <a href="#" className="text-white text-[18px]">
                  Community
               </a>
            </div>
            <div className="socials flex gap-3 items-center px-6 mt-12">
               <a href="#">
                  <FaXTwitter className="text-2xl" />
               </a>
               <a href="#">
                  <FaInstagram className="text-2xl" />
               </a>
               <a href="#">
                  <FaTelegramPlane className="text-2xl" />
               </a>
               <a href="#">
                  <FaTelegramPlane className="text-2xl" />
               </a>
            </div>
         </div>
         <Container>
            <div className="flex w-full h-full items-center justify-between">
               <Image
                  src={Logo}
                  alt="Logo"
                  className="lg:h-[40px] h-[32px] w-auto"
               />
               <div className="links lg:flex hidden">
                  <a href="#ecosystem" className="text-white text-md mx-7">
                     Ecosystem
                  </a>
                  <a href="#about" className="text-white text-md mx-7">
                     About
                  </a>
                  <a href="#exchange" className="text-white text-md mx-7">
                     Exchange
                  </a>
                  <a href="#community" className="text-white text-md mx-7">
                     Community
                  </a>
               </div>
               <div className="button-and-menu flex items-center gap-2">
                  <div className="button-container">
                     <a
                        href="https://app.prddao.io"
                        target="_blank"
                        className="text-[#a9c9e2] hover:text-white text-sm lg:px-6 lg:py-2 px-4 py-[6px] rounded-full border border-blue-200 bg-[#091728] hover:bg-slate-700 transition-all"
                     >
                        Buy PARAD
                     </a>
                  </div>
                  <div className="menu-container lg:hidden flex">
                     <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Header;
