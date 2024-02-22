import ButtonBrown from "./ButtonBrown"

function CategoryLeft({img, title, dscr, slug}) {
  return (
    <div className="grid grid-cols-2 items-center my-40 max-[984px]:my-[120px] max-[984px]:grid-cols-1">
      <div className="max-w-[540px] max-[984px]:max-w-full bg-[#F1F1F1] w-full flex h-[560px]">
        <img className="m-auto" src={img} height={300} width={300} alt="" />
      </div>
      <div className="ml-[125px] max-[984px]:text-center max-[984px]:ml-0 max-[984px]:mt-[52px]">
        <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </p>
        <h2 className="text-[#000000] font-bold text-[44px] tracking-[1.43px]">
          {title}
        </h2>
        <p className="text-[#000000] max-[984px]:mx-10 mt-8 mb-10 text-[15px] opacity-[50%]">
          {dscr}
        </p>
        <ButtonBrown slug={slug} textColor={"#FFFFFF"} text={"SEE PRODUCT"} />
      </div>
    </div>
  )
}

export default CategoryLeft
