import React from "react";

export default function Header() {
   const menuFunc = (link, title) => {
      return { link, title };
   };
   const menuArr = [
      menuFunc("/home", "About"),
      menuFunc("/apply", "Tokenomics"),
      menuFunc("/apply", "Socials"),
   ];
   return (
      <div className="hidden lg:block">
         <div className="header bg-black py-3 flex items-center justify-between px-10">
         <div className="logo-con flex items-center gap-3 font-extrabold text-pri-light text-lg">
            <img src="/asset/logo.jpeg" width={50} alt="NFTng" /> <span>Solana Xmas</span>
         </div>
         <div className="menu-con text-lg">
            {menuArr.map((menu, index) => (
               <a
                  to={menu.link}
                  className="capitalize text-lg decoration-none md:mx-4 lg:mx-4 text-slate-50"
                  key={index}
               >
                  {menu.title}
               </a>
            ))}
             <button className="btn bg-pri-light font-bold text-white">Buy $XMAS</button>
         </div>
      </div>
      </div>
   );
}