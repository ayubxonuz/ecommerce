import Bringing from "./Bringing"
import Button from "./Button"
import ThreeShop from "./ThreeShop"

function Home() {
  return (
    <div className="max-[500px]:hidden">
      <div className="bg-[#0E0E0E]">
        <div className="max-container">
          <hr className="bg-[#FFFFFF] z-20 relative opacity-[20%] h-[1px]" />
          <div className="grid grid-cols-2">
            <div className="mt-32 mb-44">
              <h3 className="text-[14px] leading-[19px] tracking-[10px] text-[#FFFFFF] opacity-[50%] mb-6">
                NEW PRODUCT
              </h3>
              <h1 className="text-[#FFFFFF] mb-6 font-bold text-[56px] tracking-[2px]">
                XX99 Mark II Headphones
              </h1>
              <p className="font-medium text-[15px] leading-[25px] text-[#FFFFFF] opacity-[75%] max-w-[349px] mb-10 w-full">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <h1 className="relative z-40">
                <Button
                  slug={"xx99-mark-two-headphones"}
                  bgcolor={"#D87D4A"}
                  textColor={"#FFFFFF"}
                  text={"SEE PRODUCT"}
                />
              </h1>
            </div>
            <div className="absolute">
              <img
                src="/heroImg.svg"
                alt=""
                className="mb-24 ml-[400px] mt-[-100px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-container mb-48 mt-28">
        <ThreeShop />
        <div className="mt-[168px] h-[560px] bg-[#D87D4A] flex">
          <img
            className="ml-[80px] mt-[83px] w-[410px] h-[493px]"
            src="/zx9speaker.svg"
            alt=""
          />
          <div className="max-w-[349px] mt-[118px] w-full ml-[138px] mb-44">
            <h1 className="text-[#FFFFFF] font-bold text-[56px] tracking-[2px]">
              ZX9 SPEAKER
            </h1>
            <p className="text-[#FFFFFF] text-[15px] mt-6 mb-10">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              slug={"zx9-speaker"}
              bgcolor={"#000000"}
              textColor={"#FFFFFF"}
              text={"SEE PRODUCT"}
            />
          </div>
        </div>
        <div className="bg-[url('/zxyspeaker.svg')] h-[320px] mt-[48px] bg-no-repeat">
          <div className="p-24">
            <p className="text-[#000000] font-bold mb-8 text-[28px]">
              ZX7 SPEAKER
            </p>

            <Button
              slug={"zx7-speaker"}
              border={"border"}
              bordercolor={"black"}
              textColor={"#000000"}
              bgcolor={""}
              text={"SEE PRODUCT"}
            />
          </div>
        </div>
        <div className="flex mt-[48px] gap-x-[30px]">
          <div className="max-w-[540px] w-full bg-center h-[320px] bg-[url('/yx1earphones.svg')]"></div>
          <div className="max-w-[540px] w-full bg-center h-[320px] bg-[#F1F1F1]">
            <div className="mt-[101px] ml-[95px]">
              <p className="font-bold text-[28px] mb-8 tracking-[2px]">
                YX1 EARPHONES
              </p>
              <Button
                slug={"yx1-earphones"}
                bgcolor={""}
                text={"SEE PRODUCT"}
                textColor={"#000000"}
                border={"border"}
                bordercolor={"black"}
              />
            </div>
          </div>
        </div>
        <Bringing />
      </div>
    </div>
  )
}

export default Home
