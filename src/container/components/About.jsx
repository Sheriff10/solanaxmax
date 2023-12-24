import React from "react";

export default function About() {
   return (
      <div className="container py-32">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic quod nihil ipsa dolor odio quas, ipsum
                        exercitationem unde nulla magni modi. Alias, officia.
                        Voluptas veritatis pariatur officiis quos cum nesciunt.{" "}
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Inventore soluta maiores aut ipsa
                        commodi. Aspernatur inventore commodi laboriosam
                        adipisci debitis cupiditate sed, nemo dolorem vel
                        veritatis officiis, sequi asperiores esse?
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
                  <div className="text-wrap leading-9 text-lg mt-3 text-neutral-400">
                     <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic quod nihil ipsa dolor odio quas, ipsum
                        exercitationem unde nulla magni modi. Alias, officia.
                        Voluptas veritatis pariatur officiis quos cum nesciunt.{" "}
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
