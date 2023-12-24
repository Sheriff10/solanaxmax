import React from "react";
import { FaSquare } from "react-icons/fa";

export default function Tokenomics() {
   const dum = ["Digital Marketing", "Content Marketing", "Social Media", "Email Marketing"];
   return (
      <div className="tk my-32 px-4">
         <div className="container  text-white">
            <div className="row p-5 align-items-center justify rounded-2xl shadow-xl">
                <div className="col-12 mb-4">
                    <span className="text-5xl text-left">$SXMAX Tokenomics</span>
                </div>
               <div className="col-lg-4 col-6 flex items-center justify-center">
                  <img
                     src="/asset/tokenomics.png"
                     alt="img"
                     className="img-fluid"
                  />
               </div>
               <div className="col-lg-4 col-6 mb-5">
                  <ul>
                     {dum.map((i, index) => (
                        <li className="flex gap-3 items-center justify-center text-lg" key={index}>
                           <FaSquare /> <span>{i}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-lg-4 col-md-6 my-4 text-center">
                  <div className="text-wrap leading-10">
                     <span className="text-5xl font-bold">SUPPLY</span> <br />
                     <span className="text-3xl">1.000.000 M</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
