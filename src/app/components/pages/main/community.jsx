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
    <div
      className="community w-full flex flex-col items-center lg:my-20 mt-5 mb-20 pt-20"
      id="community"
    >
      <Container>
        {/* Başlık */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">FOLLOW US</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            JOIN OUR COMMUNITY
          </h5>
        </div>

        {/* Kartlar */}
        <div className="grid lg:grid-cols-4 gap-8 grid-cols-2">
          {communityLinks.map((link, index) => (
            <a
              href={link.link}
              className="flex-1 w-full bg-[#091728] p-6 rounded-lg flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 duration-500 transition-all"
              key={index}
            >
              {link.icon}
              <p className="text-xl text-center text-white font-bold mt-4">
                {link.platform}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Community;
