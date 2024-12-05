import React from "react";
import Container from "../../common/container";
import Image from "next/image";
import WalletGif from "../../../assets/gifs/wallet.gif";
import DaoGif from "../../../assets/gifs/ddao.gif";
import FinanceGif from "../../../assets/gifs/finance.gif";
import ChequeGif from "../../../assets/gifs/cheque.gif";

const cards = [
  {
    title: "Parad Wallet",
    description:
      "Your self-custody wallet for ultimate security and control over your digital assets.",
    link: null,
    img: WalletGif,
  },
  {
    title: "Parad Dao",
    description:
      "Join the Parad DAO to participate in decentralized decision-making and governance.",
    link: "https://app.prddao.io",
    img: DaoGif,
  },
  {
    title: "Parad Finance",
    description:
      "Revolutionizing finance with decentralized and transparent solutions for everyone.",
    link: null,
    img: FinanceGif,
  },
  {
    title: "Parad Cheque",
    description:
      "Experience the future of secure digital transactions with blockchain-powered cheques.",
    link: null,
    img: ChequeGif,
  },
];

const Cards = () => {
  return (
    <div
      className="cards w-full flex flex-col items-center mt-20 pt-32"
      id="ecosystem"
    >
      <Container>
        {/* Başlıklar */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">DISCOVER OUR PRODUCTS</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            PARAD ECOSYSTEM
          </h5>
        </div>

        {/* Kartlar */}
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-20 mt-20">
          {cards.map((card, index) => (
            <div className="w-full h-auto relative flex flex-col" key={index}>
              <div className="img-container w-full flex items-center justify-center h-[100px]">
                <Image
                  src={card.img}
                  alt="Card GIF"
                  className="w-[160px] h-auto object-cover"
                />
              </div>
              <div className="item-box w-full lg:h-[250px] h-[260px] py-6 relative overflow-hidden flex flex-col justify-center gap-4">
                {/* <div className="mini-glow absolute right-0 bottom-20 -z-10"></div> */}
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
                  {card.link ? (
                    <a
                      href={card.link}
                      target="_blank"
                      className="lg:text-xl text-lg text-center text-[#a9c9e2] hover:text-white transition-colors border-2 rounded-full w-auto border-blue-200 bg-[#091728] hover:bg-slate-700 px-20 py-[10px]"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button
                      className="lg:text-xl text-lg text-center text-[#788fa1] border rounded-[30px] w-auto border-white/10 bg-white/[0.03] px-20 py-[10px]"
                      disabled
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cards;
