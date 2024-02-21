import {useState} from "react"
import {Link, NavLink} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"

function Navbar() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="bg-[#0E0E0E]">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <header className="max-container z-20 relative flex justify-between py-9 items-center">
        <NavLink to={"/"}>
          <img src="/logo.svg" alt="" />
        </NavLink>
        <nav className="flex text-[#FFFFFF] gap-x-[34px] font-bold text-[13px] tracking-[2px]">
          <Link
            className={"hover:text-[#D87D4A]"}
            onClick={() => setProgress(100)}
            to={"/"}
          >
            HOME
          </Link>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/headphones"}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/speakers"}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            className={"hover:text-[#D87D4A] transition"}
            to={"/earphones"}
          >
            EARPHONES
          </NavLink>
        </nav>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <img src="/shop.svg" alt="" />
          </div>
          <div
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[377px] h-[488px]"
          >
            <div className="mx-8">
              <div className="flex justify-between my-8 items-center">
                <p className="text-[#000000] font-bold text-[18px] tracking-[1.29px]">
                  CART (3)
                </p>
                <p className="text-[#000000] hover:text-[#D87D4A] transition text-[15px] opacity-[50%]">
                  Remove all
                </p>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/XX99Mark.svg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/XX99Mark.svg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 mb-6 items-center">
                <div className="flex items-center">
                  <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                    <img
                      className="w-[50%] h-full m-auto"
                      src="/XX99Mark.svg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[#000000] font-bold text-[15px]">
                      XX99 MK II
                    </p>
                    <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                      $ 2,999
                    </p>
                  </div>
                </div>
                <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                  <button className="hover:text-[#FBAF85]">-</button>
                  <p className="font-bold text-[#000000] text-[13px]">1</p>
                  <button className="hover:text-[#FBAF85]">+</button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#000000] opacity-[50%] text-[15px]">
                  TOTAL
                </p>
                <p className="text-[#000000] text-[18px] font-bold">$ 5,396</p>
              </div>
              <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
