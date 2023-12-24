import React from "react";
import { FaBurn, FaFire, FaKey, FaTree, FaUsers } from "react-icons/fa";

export default function Card() {
   const dum = [1, 2, 3, 4];
   const cardFunc = (icon, text) => {
      return { icon, text };
   };

   const  cardArr = [
    cardFunc(<FaBurn />, "Burned"),
    cardFunc(<FaKey />, "Liquidity Locked"),
    cardFunc(<FaUsers />, "Strong COmumunity"),
    cardFunc(<FaTree />, "Celebrate"),
   ]
   return (
      <div className="container">
         <div className="row">
            {cardArr.map((i, index) => (
               <div className="col-lg-3 py-5" key={index}>
                  <div className="cards flex flex-col items-center  justify-center py-5 bg-pri shadow-lg">
                     <span className="text-pri-light text-3xl">
                        {i.icon}{" "}
                     </span>
                     <span className="text-neutral-300 font-bold mt-4  text-lg">
                        {i.text}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
