import Button from "./Button"

function CategoryRight({img, title, dscr}) {
  return (
    <div className="grid grid-cols-2 items-center my-40">
      <div className="mr-[125px]">
        <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </p>
        <h2 className="text-[#000000] font-bold text-[44px] tracking-[1.43px]">
          {title}
        </h2>
        <p className="text-[#000000] mt-8 mb-10 text-[15px] opacity-[50%]">
          {dscr}
        </p>
        <Button
          bgcolor={"#D87D4A"}
          textColor={"#FFFFFF"}
          text={"SEE PRODUCT"}
        />
      </div>
      <div className="max-w-[540px] bg-[#F1F1F1] w-full flex h-[560px]">
        <img className="m-auto" src={img} alt="" />
      </div>
    </div>
  )
}

export default CategoryRight
