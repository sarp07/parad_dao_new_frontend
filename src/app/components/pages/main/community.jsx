import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Container from "../../common/container";

const communityLinks = [
  {
    platform: "Twitter",
    link: "https://x.com/prddao?s=09",
    icon: <FaXTwitter className="text-4xl" />,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/prddao/",
    icon: <FaInstagram className="text-4xl" />,
  },
  {
    platform: "Telegram",
    link: "https://t.me/paraddao",
    icon: <FaTelegramPlane className="text-4xl" />,
  },
  {
    platform: "Telegram Community",
    link: "https://t.me/prddaoofficial",
    icon: <FaTelegramPlane className="text-4xl" />,
  },
];

const Community = () => {
  return (
    <div className="community w-full flex flex-col items-center my-20">
      <Container>
        {/* Başlık */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">FOLLOW US</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            JOIN OUR COMMUNITY
          </h5>
        </div>

        {/* Kartlar */}
        <div className="flex lg:grid lg:grid-cols-4 gap-8 overflow-x-auto lg:overflow-hidden scroll-smooth scrollbar-hide">
          {communityLinks.map((link, index) => (
            <div
              className="min-w-[240px] bg-[#1f2a3f] p-6 rounded-lg flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all"
              key={index}
            >
              {link.icon}
              <p className="text-xl text-center text-white font-bold mt-4">
                {link.platform}
              </p>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline mt-2"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Community;
