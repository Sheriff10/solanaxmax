import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-grad backdrop-blur-md">
            <div className="container">
               <div className="row items-center justify-center min-h-screen">
                  <div className="col-lg-6">
                     <div className="text-wrap leading-10">
                        <span className="text-7xl font-bold text-white text-vq"><span className="text-pri-light">SOLANA</span> <span className="text-red-500">XMAS</span></span>{" "}
                        <br />
                        <span className="text-2xl font-bold text-neutral-100 bg-black px-2 text-v">
                           HE DIED FOR YOUR $SOL CELEBRRATE XMAS
                        </span>
                     </div>
                     <div className="btn-wrap flex gap-3 text-center font-bold mt-10">
                        <a
                           href="https://birdeye.so/token/4rQMDp8HnVrCu6tJVsvWPFDK6zFeK4WbNfo4nAU9GzHt?chain=solana"
                           className="p-1 rounded-3xl py-3 col bg-pri-light font-bold text-white text-lg flex justify-center items-center gap-3" target={"_blank"}
                        >
                           <FaCartShopping/> BUY
                        </a>
                        <a
                           href="https://dexscreener.com/solana/GGZwdESREwx5Vex5rLy4DncZPYBYZN8GBzDCBvNAJaGu"
                           className="p-1 rounded-3xl py-3 col  bg-red-500 font-bold text-white text-lg flex justify-center items-center gap-3"
                        >
                           CHART <FaChartBar />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
