import {NavLink} from "react-router-dom"

function Footer() {
  return (
    <div className="w-full bg-[#101010] h-[365px]">
      <footer className="max-container mt-16">
        <div className="flex justify-between">
          <NavLink to={"/"}>
            <img src="/logo.svg" alt="" />
          </NavLink>
          <nav className="flex text-[#FFFFFF] gap-x-[34px] font-bold text-[13px] tracking-[2px]">
            <NavLink className={"hover:text-[#D87D4A] transition"} to={"/"}>
              HOME
            </NavLink>
            <NavLink className={"hover:text-[#D87D4A] transition"} to={"/"}>
              HEADPHONES
            </NavLink>
            <NavLink className={"hover:text-[#D87D4A] transition"} to={"/"}>
              SPEAKERS
            </NavLink>
            <NavLink className={"hover:text-[#D87D4A] transition"} to={"/"}>
              EARPHONES
            </NavLink>
          </nav>
        </div>
        <div className="items-center flex justify-between">
          <div>
            <p className="max-w-[540px] w-full mt-9 mb-14 text-[15px] text-[#FFFFFF] opacity-[50%]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <p className="font-bold text-[15px] text-[#FFFFFF] opacity-[50%]">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-x-4">
            <img src="/facebook.svg" alt="" />
            <img src="/twitter.svg" alt="" />
            <img src="/instagram.svg" alt="" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
