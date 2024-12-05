import React from "react";
import Container from "../../common/container";
import Image from "next/image";
import Logo1 from "../../../assets/logo/logo_text_right.png";
import Logo2 from "../../../assets/logo/White_Logo_With_Text.png";
import Logo3 from "../../../assets/logo/logo.png";
import Logo4 from "../../../assets/logo/Default_Logo_Text_Right.png";
import Logo5 from "../../../assets/logo/Default_Logo_With_Text.png";
import Logo6 from "../../../assets/logo/Default_Logo.png";

const mediaLogos = [
  { src: Logo1, bgColor: "#091728" },
  { src: Logo2, bgColor: "#091728" },
  { src: Logo3, bgColor: "#091728" },
  { src: Logo4, bgColor: "#ffffff" },
  { src: Logo5, bgColor: "#ffffff" },
  { src: Logo6, bgColor: "#ffffff" },
];

const Media = () => {
  return (
    <div className="media w-full flex flex-col items-center lg:my-20 my-5">
      <Container>
        {/* Başlık */}
        <div className="text-center mb-10">
          <p className="text-xl text-white mb-2">OUR BRAND</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            PARAD LOGOS
          </h5>
        </div>

        {/* Logo Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center items-center">
          {mediaLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow lg:w-full w-full h-[200px]"
              style={{
                backgroundColor: logo.bgColor,
              }}
            >
              <Image
                src={logo.src}
                alt={`Media Logo ${index + 1}`}
                className="h-auto max-h-[100px] w-auto max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Media;
