import React from 'react'
import { FaBars } from 'react-icons/fa'
import About from './components/About'
import Card from './components/Card'
import Socials from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import MbHeader from './components/MbHeader'
import Tokenomics from './components/Tokenomics'

export default function Home() {
  return (
    <div className='text-vq'>
 {/* <div className="logo-con flex justify-between py-3 bg-black px-4 sticky-top lg:">
            <div className="img-wrap">
               <img src="/logo.png" alt="NFTng" className="w-[50px]" />
            </div>
            <span
               className="flex text-white items-center gap-2 text-2xl"
            //    onClick={() => setToggle(!toggle)}
            >
               <FaBars />
            </span>
         </div> */}
         <MbHeader />
        <Header />
        <Intro />
        <About />
        <Card />
        <Tokenomics />
        <Socials />
    </div>
  )
}
