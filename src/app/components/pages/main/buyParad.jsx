import React from "react";
import Container from "../../common/container";

const buyParadCards = [
  {
    title: "PancakeSwap",
    description:
      "Swap your Parad tokens with ease on PancakeSwap, the most popular decentralized exchange on Binance Smart Chain.",
    link: "https://pancakeswap.finance/?inputCurrency=0xf7fc02De1af32CF162583086ba35397b8B0996f8",
    img: "https://s13.gifyu.com/images/SFTYG.gif",
  },
  {
    title: "BSCscan",
    description:
      "Track your Parad tokens and check transaction details on BSCscan, the leading blockchain explorer for Binance Smart Chain.",
    link: "https://bscscan.com/token/0xf7fc02De1af32CF162583086ba35397b8B0996f8",
    img: "https://s13.gifyu.com/images/SJRZL.gif",
  },
];

const buyParad = () => {
  return (
    <div className="buy-parad w-full flex flex-col items-center my-52">
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
                <img
                  src={card.img}
                  alt={`${card.title} GIF`}
                  className="w-[160px] h-auto object-cover"
                />
              </div>
              <div className="item-box w-full h-[240px] py-6 relative overflow-hidden flex flex-col justify-center gap-4">
                {/* <div className="mini-glow bg-[#208bdf] absolute right-0 bottom-20 -z-10"></div> */}
                <div className="mini-glow absolute right-0 bottom-20 w-[200px] h-[200px] bg-[#208bdf] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute right-2 bottom-10 w-[150px] h-[150px] bg-[#8fd208] rounded-full blur-xl opacity-50 -z-10"></div>
                <div className="mini-glow absolute left-0 bottom-0 w-[250px] h-[250px] bg-[#a020f0] rounded-full blur-xl opacity-100 -z-10"></div>

                <p className="text-4xl font-black text-center text-[#a2cdef]">
                  {card.title.toUpperCase()}
                </p>

                <p className="text-xl text-center text-[#d0d0d0] px-16">
                  {card.description}
                </p>
                <div className="w-full flex items-center justify-center mt-5">
                  <a
                    href={card.link}
                    className="text-xl text-center text-white border rounded-[30px] w-auto border-white/10 bg-white/[0.03] px-20 py-[10px] transition-all hover:text-blue-300"
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
