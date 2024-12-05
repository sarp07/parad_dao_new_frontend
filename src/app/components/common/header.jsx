import React from "react";
import Container from "./container";
import Image from "next/image";
import Logo from "../../assets/logo/logo_text_right.png";

const Header = () => {
   return (
      <div className="w-full h-[80px] bg-[#070a13]/[0.5] border-0 border-white/[0.15] flex items-center justify-between fixed top-0 z-50">
         <Container>
            <div className="flex w-full h-full items-center justify-between">
               <Image src={Logo} alt="Logo" className="h-[40px] w-auto" />
               <div className="links flex">
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
               <div className="button-container">
                  <a
                     href="https://app.prddao.io"
                     className="text-white text-sm bg-[#1f2a3f] px-6 py-2 rounded-full border border-white/[0.15] hover:bg-[#1f2a3f] hover:border-white/[0.5] transition-all"
                  >
                     Buy PARAD
                  </a>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Header;
