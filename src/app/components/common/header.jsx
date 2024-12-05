import React from "react";
import Container from "./container";
import Image from "next/image";
import Logo from "../../assets/logo/logo_text_right.png";

const Header = () => {
   return (
      <div className="w-screen h-[80px] bg-[#070a13]/[0.5] border-0 border-white/[0.15] flex items-center justify-between fixed top-0 z-50 backdrop-blur-md">
         <Container>
            <div className="flex w-full h-full items-center justify-between">
               <Image src={Logo} alt="Logo" className="h-[40px] w-auto" />
               <div className="links lg:flex hidden">
                  <a href="#" className="text-white text-md mx-7">
                     Ecosystem
                  </a>
                  <a href="#" className="text-white text-md mx-7">
                     About
                  </a>
                  <a href="#" className="text-white text-md mx-7">
                     Dao
                  </a>
                  <a href="#" className="text-white text-md mx-7">
                     Community
                  </a>
               </div>
               <div className="button-and-menu flex items-center">
                  <div className="button-container">
                     <a
                        href="https://app.prddao.io"
                        target="_blank"
                        className="text-[#a9c9e2] hover:text-white text-sm px-6 py-2 rounded-full border border-blue-200 bg-[#091728] hover:bg-slate-700 transition-all"
                     >
                        Buy PARAD
                     </a>
                  </div>
                  <div className="menu-container"></div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Header;
