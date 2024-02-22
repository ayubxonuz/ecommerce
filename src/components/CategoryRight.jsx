import ButtonBrown from "./ButtonBrown"

function CategoryRight({img, title, dscr, slug}) {
  return (
    <div className="grid grid-cols-2 items-center my-40 max-[984px]:my-[120px] max-[984px]:grid-cols-1">
      <div className="max-w-full max-h-full h-[560px] hidden max-[984px]:block bg-[#F1F1F1] pt-[140px] w-full">
        <img className="m-auto" src={img} height={300} width={300} alt="" />
      </div>
      <div className="mr-[125px] max-[984px]:text-center max-[984px]:mr-0 max-[984px]:mt-[52px]">
        <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </p>
        <h2 className="text-[#000000] font-bold text-[44px] tracking-[1.43px]">
          {title}
        </h2>
        <p className="text-[#000000] mt-8 mb-10 text-[15px] opacity-[50%]">
          {dscr}
        </p>
        <ButtonBrown slug={slug} textColor={"#FFFFFF"} text={"SEE PRODUCT"} />
      </div>
      <div className="max-w-[540px] max-[984px]:hidden bg-[#F1F1F1] w-full flex h-[560px]">
        <img className="m-auto" src={img} height={300} width={300} alt="" />
      </div>
    </div>
  )
}

export default CategoryRight
