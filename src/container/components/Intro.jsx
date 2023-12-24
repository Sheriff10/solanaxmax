import React from "react";

export default function Intro() {
   return (
      <div className="intro">
         <div className="bg-grad backdrop-blur-md">
            <div className="container">
               <div className="row items-center justify-center min-h-screen">
                  <div className="col-lg-6">
                     <div className="text-wrap leading-10">
                        <span className="text-7xl font-bold text-white">SOLANA XMAS</span>{" "}
                        <br />
                        <span className="text-2xl font-bold text-white">
                           HE DIED FOR YOUR $SOL <br /> CELEBRRATE XMAS
                        </span>
                     </div>
                     <div className="btn-wrap flex gap-3 text-center font-bold">
                        <a
                           href="https://birdeye.so/token/4rQMDp8HnVrCu6tJVsvWPFDK6zFeK4WbNfo4nAU9GzHt?chain=solana"
                           className="p-1 rounded-3xl py-3 col bg-pri-light" target={"_blank"}
                        >
                           BUY
                        </a>
                        <a
                           href="https://dexscreener.com/solana/GGZwdESREwx5Vex5rLy4DncZPYBYZN8GBzDCBvNAJaGu"
                           className="p-1 rounded-3xl py-3 col  bg-pri-light"
                        >
                           CHART
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
