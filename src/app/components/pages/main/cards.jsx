import React from "react";
import Container from "../../common/container";

const cards = [
   {
      title: "Parad Wallet",
      description: "Coming soon",
      link: null,
   },
   {
      title: "Parad Dao",
      description: "Parad Dao",
      link: "https://app.prddao.io",
   },
   {
      title: "Parad Finance",
      description: "Coming soon",
      link: null,
   },
   {
      title: "Parad Cheque",
      description: "Coming soon",
      link: null,
   },
];

const Cards = () => {
   return (
      <div className="cards w-full flex">
         <Container>
            <div className="grid grid-cols-2 justify-center gap-x-8 gap-y-20 mt-20">
               {cards.map((card, index) => (
                  <div
                     className=" w-full h-auto relative flex flex-col"
                     key={index}
                  >
                     <div className="img-container w-full flex items-center justify-center h-[100px]">
                        <img
                           src="https://s13.gifyu.com/images/SJNTk.gif"
                           alt="Card GIF"
                           className="w-[160px] h-auto object-cover"
                        />
                     </div>
                     <div className="item-box w-full h-[240px] py-6 relative overflow-hidden flex flex-col justify-center gap-4">
                        <div className="mini-glow absolute right-0 bottom-20 -z-10"></div>
                        <p className="text-4xl font-black text-center text-[#a2cdef]">
                           {card.title.toUpperCase()}
                        </p>

                        <p className="text-xl text-center text-[#d0d0d0] px-16">
                           {card.link ? (
                              <a
                                 href={card.link}
                                 className="text-blue-500 underline"
                              >
                                 {card.description}
                              </a>
                           ) : (
                              "Your self-custody wallet for ultimate security and control over your digital assets."
                           )}
                        </p>
                        <div className="w-full flex items-center justify-center mt-5">
                           <button className="text-xl text-center text-[#788fa1] border rounded-[30px] w-auto border-white/10 bg-white/[0.03] px-6 py-2">
                              {card.description}
                           </button>
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
