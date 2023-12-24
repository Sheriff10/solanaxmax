import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function MbHeader() {
   const [toggle, setToggle] = useState(false);
   const menuFunc = (link, title) => {
      return { link, title };
   };
   const menuArr = [
      menuFunc("/home", "About"),
      menuFunc("/apply", "Tokenomics"),
      menuFunc("/apply", "Socials"),
   ];
   return (
      <>
         <div className="logo-con flex justify-between py-3 bg-black px-4 sticky-top lg:hidden">
            <div className="img-wrap">
               <img src="/asset/logo.jpeg" width={50} alt="NFTng" className="w-[50px]" />
            </div>
            <span
               className="flex text-white items-center gap-2 text-2xl"
               onClick={() => setToggle(!toggle)}
            >
               <FaBars />
            </span>
         </div>

         <div
            className={`mb-header trans overflow-auto bg-black bottom-0 fixed top-0 left-0 right-0 z-[1022] ${
               toggle === false ? "slide" : ""
            } lg:hidden`}
         >
            <div className="container">
               <div className="logo-con flex justify-between  py-5 bg-black px-4 mb-5">
                  <div className="img-wrap">
                     <img src="/asset/logo.jpeg" alt="NFTng" className="w-[50px]" />
                  </div>
                  <span
                     className="flex text-lg text-white text-ng-primary items-center gap-2"
                     onClick={() => setToggle(!toggle)}
                  >
                     close <FaCircleXmark />
                  </span>
               </div>
               <div
                  className={`menu-link absolute left-0 right-0 px-3 text-white `}
               >
                  <ul>
                     {menuArr.map((menu, index) => (
                        <li
                           key={index}
                           className="flex my-3 text-center"
                           onClick={() => setToggle(!toggle)}
                        >
                           <a
                              to={menu.link}
                              className="bg-ng-secondary-dark py-3 col-12"
                           >
                              {" "}
                              {menu.title}{" "}
                           </a>{" "}
                        </li>
                     ))}
                  </ul>
                  <div className="rights text-center w-full  bottom-0 text-xs text-white py-4">
                     <span>Copyright © 2022 <span>Solana Xmas</span></span> <br />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
