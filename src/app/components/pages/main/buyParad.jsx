import React from "react";
import Container from "../../common/container";
import Image from "next/image";
import Bsc from "../../../assets/svgs/bsc.svg";
import Lbank from "../../../assets/svgs/lbank.svg";

const buyParadCards = [
  {
    title: "LBank",
    description:
      "Trade Parad tokens on LBank, a trusted global cryptocurrency exchange.",
    link: "https://www.lbank.com/trade/prd_usdt",
    img: Lbank,
  },
  {
    title: "BSCscan",
    description:
      "Track Parad tokens and view transactions on BSCscan, Binance Smart Chain's top explorer.",
    link: "https://bscscan.com/token/0xf7fc02De1af32CF162583086ba35397b8B0996f8",
    img: Bsc,
  },
];

const buyParad = () => {
  return (
    <div
      className="buy-parad w-full flex flex-col items-center mb-36 lg:mt-20 mt-5 pt-32"
      id="exchange"
    >
      <Container>
        {/* Başlıklar */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">BUY PARAD TOKENS</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            PARAD EXCHANGE OPTIONS
          </h5>
        </div>

        {/* Kartlar */}
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-20 mt-20">
          {buyParadCards.map((card, index) => (
            <div className="w-full h-auto relative flex flex-col" key={index}>
              <div className="img-container w-full flex items-center justify-center h-[100px]">
                <Image
                  src={card.img}
                  alt={`${card.title} GIF`}
                  className="w-[160px] h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="item-box w-full lg:h-[250px] h-[260px] py-6 relative overflow-hidden flex flex-col justify-center gap-4">
                {/* <div className="mini-glow bg-[#208bdf] absolute right-0 bottom-20 -z-10"></div> */}
                <div className="mini-glow absolute right-0 bottom-20 w-[200px] h-[200px] bg-[#208bdf] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute right-2 bottom-10 w-[150px] h-[150px] bg-[#8fd208] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute left-0 bottom-0 w-[250px] h-[250px] bg-[#a020f0] rounded-full blur-xl opacity-100 -z-10"></div>

                <p className="lg:text-4xl text-3xl font-black text-center text-[#a2cdef]">
                  {card.title.toUpperCase()}
                </p>

                <p className="lg:text-xl text-lg text-center text-[#d0d0d0] px-16">
                  {card.description}
                </p>
                <div className="w-full flex items-center justify-center mt-5">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-center text-[#a9c9e2] hover:text-white border-2 rounded-[30px] w-auto border-blue-200 bg-[#091728] hover:bg-slate-700 px-20 py-[10px] transition-all "
                  >
                    {card.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default buyParad;
