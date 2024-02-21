import {NavLink, useParams} from "react-router-dom"
import Bringing from "../components/Bringing"
import Button from "../components/Button"
import ThreeBox from "../components/ThreeBox"
import ThreeShop from "../components/ThreeShop"
import {useEffect, useState} from "react"
import {nanoid} from "@reduxjs/toolkit"
import ThreeGalery from "../components/ThreeGalery"

function ProductDetail() {
  const [singleData, setSingleData] = useState({})
  const slug = useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/data?slug=${slug.slug}`).then((res) =>
      res.json().then((datas) =>
        datas.forEach((data) => {
          setSingleData(data)
        })
      )
    )
  }, [])
  console.log(singleData.gallery)

  return (
    <div className="max-container">
      <NavLink to={"/"}>Go Back</NavLink>
      <div className="grid grid-cols-2 items-center mt-14 mb-[160px]">
        <div className="max-w-[540px] bg-[#F1F1F1] w-full flex h-[560px]">
          <img
            className="m-auto"
            src={singleData.categoryImage?.desktop}
            alt=""
          />
        </div>
        <div className="ml-[125px]">
          <p className="text-[14px] tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </p>
          <h2 className="text-[#000000] font-bold text-[44px] tracking-[1.43px]">
            {singleData?.name}
          </h2>
          <p className="text-[#000000] mt-8 mb-10 text-[15px] opacity-[50%]">
            {singleData?.description}
          </p>
          <h3 className="text-[#000000] font-bold text-[18px] tracking-[1.29px]">
            $ {singleData?.price}
          </h3>
          <div className="flex gap-x-4 mt-[47px]">
            <div className="w-[120px] h-12 bg-[#F1F1F1] flex justify-between items-center px-6">
              <button className="hover:text-[#FBAF85]">-</button>
              <p>1</p>
              <button className="hover:text-[#FBAF85]">+</button>
            </div>
            <Button
              bgcolor={"#D87D4A"}
              textColor={"#FFFFFF"}
              text={"SEE PRODUCT"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-[32px] mb-8 tracking-[1.14px] text-[#000000]">
            FEATURES
          </h2>
          <p className="text-[15px] text-[#000000] opacity-[50%] max-w-[635px] w-full">
            {singleData?.features}
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-8 text-[32px] tracking-[1.14px] text-[#000000]">
            IN THE BOX
          </h2>
          {singleData.includes?.map((inc) => {
            return (
              <p
                key={nanoid()}
                className="text-[#000000] mb-2 opacity-[50%] text-[15px] flex gap-x-6"
              >
                <span className="text-[#D87D4A] font-bold text-[15px]">
                  {inc.quantity}x
                </span>
                {inc.item}
              </p>
            )
          })}
        </div>
      </div>
      <ThreeGalery
        img1={singleData.gallery?.first.desktop}
        img2={singleData.gallery?.second.desktop}
        img3={singleData.gallery?.third?.desktop}
      />
      <ThreeBox />
      <div className="mt-40">
        <ThreeShop />
      </div>
      <Bringing />
    </div>
  )
}

export default ProductDetail
