import {useDispatch, useSelector} from "react-redux"
import Bringing from "../components/Bringing"
import CategoryLeft from "../components/CategoryLeft"
import CategoryRight from "../components/CategoryRight"
import ThreeShop from "../components/ThreeShop"
import {useEffect} from "react"
import {fetchData} from "../redux/features/ecommerseSlice"

function HeadPhones() {
  const dispatch = useDispatch()
  const {allData, loading, error} = useSelector((store) => store.ecommerse)
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const headphones =
    allData && allData.filter((data) => data.category == "headphones")

  return (
    <div>
      <div className="bg-[#000000]">
        <div className="max-container">
          <hr className="bg-[#FFFFFF] z-20 relative opacity-[20%] h-[1px]" />
          <h1 className="font-bold text-center mt-[98px] mb-[97px] text-[#FFFFFF] text-[44px] tracking-[1.43px]">
            HEADPHONES
          </h1>
        </div>
      </div>
      <div className="max-container">
        <CategoryLeft
          img={headphones && headphones[2].image.desktop}
          title={headphones && headphones[2].name}
          dscr={headphones && headphones[2].description}
        />
        <CategoryRight
          img={headphones && headphones[1].image.desktop}
          title={headphones && headphones[1].name}
          dscr={headphones && headphones[1].description}
        />
        <CategoryLeft
          img={headphones && headphones[0].image.desktop}
          title={headphones && headphones[0].name}
          dscr={headphones && headphones[0].description}
        />
        <div className="mb-[160px]">
          <ThreeShop />
        </div>
        <Bringing />
      </div>
    </div>
  )
}

export default HeadPhones
