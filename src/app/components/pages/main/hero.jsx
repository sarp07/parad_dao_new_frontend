import React from "react";
import Container from "../../common/container";
import Cards from "./cards";
import BackGlow from "../../common/backglow";

const Hero = () => {
  return (
    <div className="main-hero w-screen mt-16 h-auto text-white relative">
      <Container>
        {/* Parıltı Efekti */}
        <div className="absolute w-screen flex justify-center items-center z-0">
          <div className="glow w-[500px] h-[500px]"></div>
        </div>

        {/* İçerik */}
        <div className="relative z-10">
          <div className="flex justify-center mb-10">
            <img
              src="https://s7.gifyu.com/images/SJKEh.gif"
              alt="Hero GIF"
              className="w-auto h-96 mt-10"
            />
          </div>
          <div className="flex justify-center">
            <h5 className="w-[1044px] text-8xl font-black text-center text-[#a2cdef]">
              SECURE THE FUTURE OF FINANCE WITH PARAD.
            </h5>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="#"
              className="text-white text-sm bg-[#1f2a3f] px-6 py-2 rounded-full border border-white/[0.15] hover:bg-[#1f2a3f] hover:border-white/[0.5] transition-all"
            >
              Discover PARAD
            </a>
            <a
              href="https://app.prddao.io"
              className="text-white text-sm bg-[#1f2a3f] px-6 py-2 rounded-full border border-white/[0.15] hover:bg-[#1f2a3f] hover:border-white/[0.5] transition-all"
            >
              Buy PARAD
            </a>
          </div>
          <Cards />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
