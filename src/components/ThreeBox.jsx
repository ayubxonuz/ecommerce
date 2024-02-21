import Button from "./Button"

function ThreeBox() {
  return (
    <>
      <h1 className="text-center font-bold text-[32px] tracking-[1.14px] text-[#000000]">
        YOU MAY ALSO LIKE YOU
      </h1>
      <div className="grid grid-cols-3 mt-[100px] gap-x-[30px]">
        <div className="">
          <div className="max-w-[350px] w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img className="w-[50%] h-full m-auto" src="/XX99Mark.svg" alt="" />
          </div>
          <div className="grid justify-center">
            <p className="text-[#000000] mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              XX99 MARK I
            </p>
            <Button
              bgcolor={"#D87D4A"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
        <div>
          <div className="max-w-[350px] w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img className="w-[50%] h-full m-auto" src="/XX99Mark.svg" alt="" />
          </div>
          <div className="grid justify-center">
            <p className="text-[#000000] mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              XX99 MARK I
            </p>
            <Button
              bgcolor={"#D87D4A"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
        <div className="">
          <div className="max-w-[350px] w-full h-[318px] bg-[#F1F1F1] rounded-lg">
            <img className="w-[50%] h-full m-auto" src="/XX99Mark.svg" alt="" />
          </div>
          <div className="grid justify-center">
            <p className="text-[#000000] mb-8 mt-10 font-bold text-[24px] tracking-[1.71px]">
              XX99 MARK I
            </p>
            <Button
              bgcolor={"#D87D4A"}
              text={"SEE PRODUCT"}
              textColor={"#FFFFFF"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeBox
