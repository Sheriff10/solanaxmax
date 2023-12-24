import React from "react";

export default function About() {
   return (
      <div className="container py-32 text-vq">
         <div className="row items-center">
            <div className="col-lg-6">
               <div className="img-wrap">
                  <img
                     src="/asset/logo.jpeg"
                     alt="solana xmas"
                     className="img-fluid"
                  />
               </div>
            </div>
            <div className="col-lg-6">
               <div className="text-wrap">
                  <span className="text-3xl font-extrabold text-pri-light uppercase">
                     Solana Xmas - $XMAX{" "}
                  </span>
                  <div className="text-wrap leading-9 text-lg mt-3 text-neutral-400">
                     <span>
                        Welcome to Solana Xmas, where joy, laughter, and
                        blockchain creativity collide! 🎅🚀 Dive into the
                        festive spirit as we merge the magic of the holiday
                        season with the innovation of Solana. <br /> <br /> Our
                        meme project is here to spread smiles and bring a touch
                        of humor to the blockchain world. Join us in the
                        celebration of Solana Xmas - the most wonderful time of
                        the year, now with a crypto twist! 🌟🎄
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <div className="row flex-col-reverse md:flex-row">
            <div className="col-lg-6 flex items-center">
               <div className="text-wrap">
                  <span className="text-3xl font-extrabold text-pri-light uppercase">
                     Solana Xmas - $XMAX{" "}
                  </span>
                  <div className="text-wrap leading-9 text-lg mt-3 text-neutral-400 text-vq">
                     <span>
                        Cheers to the Solana Xmas community! Your laughter,
                        creativity, and blockchain spirit have made this project
                        truly special. As we wrap up, let's carry the joy
                        forward. Here's to more memes, more fun, and more
                        unforgettable moments ahead. Happy holidays, Solana Xmas
                        crew! 🌟🚀🎄
                        <br />
                     </span>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="img-wrap">
                  <img
                     src="/asset/abt.png"
                     alt="solana xmas"
                     className="img-fluid"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
