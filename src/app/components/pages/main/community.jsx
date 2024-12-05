import React from "react";
import Container from "../../common/container";
import { FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const communityLinks = [
  {
    title: "Twitter",
    link: "https://x.com/prddao?s=09",
    icon: <FaTwitter size={30} />,
    description: "Follow us on Twitter for updates and announcements.",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/prddao/",
    icon: <FaInstagram size={30} />,
    description: "Follow us on Instagram for behind-the-scenes and more.",
  },
  {
    title: "Telegram",
    link: "https://t.me/paraddao",
    icon: <FaTelegramPlane size={30} />,
    description: "Join our Telegram group to stay in touch with the community.",
  },
  {
    title: "Telegram Community",
    link: "https://t.me/prddaoofficial",
    icon: <FaTelegramPlane size={30} />,
    description: "Be part of the Parad DAO community on Telegram.",
  },
];

const community = () => {
  return (
    <div className="community w-full flex flex-col items-center my-52">
      <Container>
        {/* Başlıklar */}
        <div className="text-center mt-10 mb-10">
          <p className="text-xl text-white mb-2">FOLLOW US</p>
          <h5 className="w-full text-4xl lg:text-8xl font-black text-center text-[#a2cdef]">
            JOIN THE COMMUNITY
          </h5>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-x-8 gap-y-20 mt-20">
          {communityLinks.map((link, index) => (
            <div
              key={index}
              className="w-full h-auto relative flex flex-col bg-[#1f2a3f] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#a2cdef] p-3 rounded-full">{link.icon}</div>
              </div>
              <p className="text-3xl font-black text-center text-[#a2cdef]">
                {link.title}
              </p>
              <p className="text-xl text-center text-[#d0d0d0] mt-4">
                {link.description}
              </p>
              <div className="w-full flex items-center justify-center mt-6">
                <a
                  href={link.link}
                  className="text-xl text-center text-white border rounded-[30px] w-auto border-white/[0.15] bg-[#1f2a3f] px-12 py-[10px] transition-all hover:text-blue-300"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default community;
