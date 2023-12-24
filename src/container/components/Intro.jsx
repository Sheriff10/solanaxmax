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
                        <span className="text-2xl font-bold">
                           HE DIED FOR YOUR $SOL; CELEBRRATE XMAS
                        </span>
                     </div>
                     <div className="btn-wrap flex gap-3 text-center">
                        <a
                           href="#"
                           className="p-1 rounded-3xl py-3 col bg-pri-light"
                        >
                           BUY
                        </a>
                        <a
                           href="#"
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
