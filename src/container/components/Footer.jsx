import React from "react";
import {
    FaDiscord,
   FaEnvelope,
   FaFacebook,
   FaInstagram,
   FaTelegram,
   FaTwitter,
} from "react-icons/fa";

export default function Socials() {
   const sFunc = (icon, name, link) => {
      return { icon, name, link };
   };
   const sArr = [
      sFunc(<FaTelegram />, "Telegram", "https://t.me/+dCH1RXyBm-BkZWQ0"),
      sFunc(<FaTwitter />, "Twitter", "https://x.com/solanaxmas_"),
      sFunc(<FaDiscord />, "Discord", "twitter.com/defitigertoken"),
      sFunc(<FaEnvelope />, "Email", "contact@defitigertoken.com"),
   ];
   return (
      <div className="socials text-white" id="socials">
         <div className="container text-center">
            <div className="s-head py-5 col-lg-8 mx-auto">
               <h1 className="fw-bold text-5xl">Socials</h1> <br />
               <span className="fs-6">
                  Join our Solana Xmas community, where festive cheer meets <br />
                  blockchain innovation! Celebrate the holiday season with us
                  and stay in the loop. Follow our social platforms for the
                  latest updates and Solana Xmas magic! 🎄✨
               </span>
            </div>
            <div className="s-con d-flex flex-wrap gap-5 justify-content-center py-4">
               {sArr.map((i, index) => (
                  <div className="box" key={index}>
                     <a
                        href={i.name === "Email" ? `mailto:${i.link}` : i.link}
                        className="fs-2 text-pri-light  trans rounded-circle text-center "
                     >
                        {i.icon}
                     </a>
                     <br />
                     <small className="text-gray fw-bold">{i.name}</small>
                  </div>
               ))}
            </div>
         </div>
         <div className="copyright font-bold text-lg p-3 text-center border-top border-light">
            {" "}
            Powered by{" "}
            <span className="text-pri-light fw-bold ">Solana Xmas</span> © 2022
         </div>
      </div>
   );
}
