import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../common/container";

const footer = () => {
  return (
    //<div className="footer w-full h-[350px] bg-red-400 flex items-center justify-center"></div>
    <footer className="w-full bg-[#070a13] text-white py-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo ve Açıklama */}
          <div className="flex flex-col items-center lg:items-start">
            <h5 className="text-2xl font-bold mb-2">PARAD</h5>
            <p className="text-sm text-gray-400 text-center lg:text-left">
              Empowering the future of decentralized finance. Join us today and
              secure your financial freedom.
            </p>
          </div>

          {/* Sosyal Medya Linkleri */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/prddao?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-all"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/prddao/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-all"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://t.me/paraddao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
            <a
              href="https://t.me/prddaoofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-all"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2024 Parad. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default footer;
