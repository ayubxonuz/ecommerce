import {useSelector} from "react-redux"
import Bringing from "./Bringing"
import ButtonBlack from "./ButtonBlack"
import ButtonBrown from "./ButtonBrown"
import ButtonWhite from "./ButtonWhite"
import Loader from "./Loader"
import ThreeShop from "./ThreeShop"

function Home() {
  const {loading} = useSelector((store) => store.ecommerse)
  return (
    <>
      {loading && (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}
      <div>
        <div className="bg-[#0E0E0E]">
          <div className="max-container max-[1224px]:bg-[url('/heroImg.svg')] bg-no-repeat bg-right max-[710px]:bg-center">
            <hr className="bg-[#FFFFFF] z-0 relative opacity-[20%] h-[1px]" />
            <div className="flex max-[710px]:justify-center max-[710px]:text-center">
              <div className="mt-32 mb-44 w-[519px]">
                <h3 className="text-[14px] leading-[19px] tracking-[10px] text-[#FFFFFF] opacity-[50%] mb-6">
                  NEW PRODUCT
                </h3>
                <h1 className="text-[#FFFFFF] mb-6 font-bold text-[56px] tracking-[2px]">
                  XX99 Mark II Headphones
                </h1>
                <p className="font-medium text-[15px] leading-[25px] text-[#FFFFFF] opacity-[75%] max-w-[349px] mb-10 max-[710px]:max-w-full">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <h1 className="relative z-40">
                  <ButtonBrown
                    slug={"xx99-mark-two-headphones"}
                    textColor={"#FFFFFF"}
                    text={"SEE PRODUCT"}
                  />
                </h1>
              </div>
              <div className="absolute max-[1224px]:hidden">
                <img
                  src="/heroImg.svg"
                  alt=""
                  className="mb-24 ml-[400px] mt-[-100px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-container mb-[200px] max-[1027px]:mb-[96px] mt-28">
          <ThreeShop />
          <div className="mt-[168px] h-[560px] bg-[#D87D4A] grid grid-cols-2 max-[1110px]:grid-cols-1 max-[1110px]:h-[840px] max-[1110px]:pt-[52px]">
            <img
              className="ml-[80px] mt-[100px] w-[410px] max-[1110px]:w-[197px] max-[1110px]:max-w-full max-[1110px]:mx-auto max-[1110px]:mt-[52px]"
              src="/zx9speaker.svg"
              alt=""
            />
            <div className="max-[1110px]:w-[349px] max-[1110px]:max-w-full max-[1110px]:mx-auto max-[1110px]:text-center max-w-[349px] mt-[118px] w-full ml-[138px] mb-44 max-[1110px]:mt-[64px]">
              <h1 className="text-[#FFFFFF] font-bold text-[56px] tracking-[2px]">
                ZX9 SPEAKER
              </h1>
              <p className="text-[#FFFFFF] text-[15px] mt-6 mb-10">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <ButtonBlack slug={"zx9-speaker"} text={"SEE PRODUCT"} />
            </div>
          </div>
          <div className="bg-[url('/zxyspeaker.svg')] bg-center h-[320px] mt-[48px] bg-no-repeat p-24 max-[710px]:pl-[24px]">
            <p className="text-[#000000] font-bold mb-8 text-[28px]">
              ZX7 SPEAKER
            </p>
            <ButtonWhite slug={"zx7-speaker"} text={"SEE PRODUCT"} />
          </div>
          <div className="grid grid-cols-2 mt-[48px] gap-x-[30px] max-[910px]:grid-cols-1 max-[910px]:gap-y-[24px] justify-items-center">
            <div className=" w-full bg-center h-[320px] bg-[url('/yx1earphones.svg')]"></div>
            <div className="w-full bg-center h-[320px] bg-[#F1F1F1]">
              <div className="mt-[101px] pl-[95px] max-[600px]:pl-[24px]">
                <p className="font-bold text-[28px] mb-8 tracking-[2px]">
                  YX1 EARPHONES
                </p>
                <ButtonWhite slug={"yx1-earphones"} text={"SEE PRODUCT"} />
              </div>
            </div>
          </div>
          <Bringing />
        </div>
      </div>
    </>
  )
}

export default Home
