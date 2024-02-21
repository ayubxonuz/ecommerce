import {NavArrowRight} from "iconoir-react"
import {Link} from "react-router-dom"
function ThreeShop() {
  return (
    <div className="grid grid-cols-3 gap-x-8 ">
      <Link
        to={"/headphones"}
        className="bg-[#F1F1F1] transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px]"
          width={122}
          height={160}
          src="/headphones.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px] text-[#000000]">
          HEADPHONES
        </p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] text-[#000000] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
      <Link
        to={"/speakers"}
        className="bg-[#F1F1F1] transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px]"
          width={122}
          height={160}
          src="/zx9speaker.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px] text-[#000000]">
          HEADPHONES
        </p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] text-[#000000] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
      <Link
        to={"/earphones"}
        className="bg-[#F1F1F1] transition-all hover:opacity-50 grid justify-items-center max-w-[350px] w-full h-[204px]"
      >
        <img
          className="mt-[-74px]"
          width={122}
          height={160}
          src="/earphones.svg"
          alt=""
        />
        <p className="font-bold text-[18px] tracking-[1.29px] text-[#000000]">
          HEADPHONES
        </p>
        <div className="flex items-center mb-4">
          <p className="font-bold text-[13px] tracking-[1px] text-[#000000] opacity-[50%]">
            SHOP
          </p>
          <NavArrowRight width={20} height={20} color="#D87D4A" />
        </div>
      </Link>
    </div>
  )
}

export default ThreeShop
