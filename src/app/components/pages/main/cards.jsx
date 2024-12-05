import React from "react";

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
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-[695px] h-[365px] bg-[#1f2a3f] rounded-lg p-4"
        >
          <img
            src="https://s13.gifyu.com/images/SJNTk.gif"
            alt="Card GIF"
            className="absolute w-[70px] h-[70px] top-4 left-4 object-cover"
          />
          <p className="absolute top-4 left-20 text-4xl font-black text-center text-[#a2cdef]">
            {card.title.toUpperCase()}
          </p>
          <div className="absolute bottom-4 left-4 w-[267px] h-[52px] rounded-[30px] bg-white/[0.03] border border-white/10 flex items-center justify-center">
            <p className="text-xl text-center text-[#788fa1]">
              {card.description}
            </p>
          </div>
          <p className="absolute bottom-20 left-4 w-[454.2px] text-xl text-center text-[#d0d0d0]">
            {card.link ? (
              <a href={card.link} className="text-blue-500 underline">
                {card.description}
              </a>
            ) : (
              "Your self-custody wallet for ultimate security and control over your digital assets."
            )}
          </p>
          <svg
            width={695}
            height={349}
            viewBox="0 0 695 349"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            <g filter="url(#filter0_b_2257_12)">
              <path
                d="M665 0.00012207C681.569 0.00012207 695 13.4316 695 30.0001V319C695 335.569 681.569 349 665 349H30C13.4314 349 0 335.569 0 319V263.859C0 254.624 4.25377 245.903 11.5318 240.218L310.901 6.35849C316.176 2.23825 322.677 0.00012207 329.37 0.00012207H665Z"
                fill="white"
                fillOpacity="0.01"
              />
              <path
                d="M694.5 30.0001V319C694.5 335.293 681.292 348.5 665 348.5H30C13.7076 348.5 0.5 335.293 0.5 319V263.859C0.5 254.778 4.68287 246.203 11.8396 240.612L311.209 6.75252C316.396 2.70095 322.788 0.500122 329.37 0.500122H665C681.292 0.500122 694.5 13.7077 694.5 30.0001Z"
                stroke="white"
                strokeOpacity="0.28"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2257_12"
                x="-22.8"
                y="-22.7999"
                width="740.6"
                height="394.6"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2257_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2257_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Cards;
