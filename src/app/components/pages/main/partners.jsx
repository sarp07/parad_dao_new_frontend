import React from "react";
import Container from "../../common/container";
import ThirdWebLogo from "../../../assets/svgs/thirdweblogo.svg";
import TrustLogo from "../../../assets/svgs/trustlogo.svg";
import BinanceLogo from "../../../assets/svgs/binancelogo.svg";
import PancakeSwapLogo from "../../../assets/svgs/pancakeswaplogo.svg";
import LBankLogo from "../../../assets/svgs/lbanklogo.svg";
import Image from "next/image";

const partnerLogos = [
  ThirdWebLogo,
  TrustLogo,
  BinanceLogo,
  PancakeSwapLogo,
  LBankLogo,
];

const partners = () => {
  return (
    <div className="partners w-full flex flex-col items-center lg:mt-20 mt-5">
      <Container>
        {/* Başlık */}
        <div className="text-center mb-10">
          <p className="text-xl text-white mb-2">SUPPORTED BY</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            PARTNERS
          </h5>
        </div>

        {/* Logo Grid */}
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 justify-center items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-auto max-h-[80px] w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default partners;
