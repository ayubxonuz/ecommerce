import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../redux/features/ecommerseSlice"
import ThreeShop from "../components/ThreeShop"
import Bringing from "../components/Bringing"
import CategoryLeft from "../components/CategoryLeft"
import CategoryRight from "../components/CategoryRight"

function Earphones() {
  const dispatch = useDispatch()
  const {allData, loading, error} = useSelector((store) => store.ecommerse)
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const earphones =
    allData && allData.filter((data) => data.category == "earphones")

  return (
    <div>
      <div className="bg-[#000000]">
        <div className="max-container">
          <hr className="bg-[#FFFFFF] z-20 relative opacity-[20%] h-[1px]" />
          <h1 className="font-bold text-center mt-[98px] mb-[97px] text-[#FFFFFF] text-[44px] tracking-[1.43px]">
            EARPHONES
          </h1>
        </div>
      </div>
      <div className="max-container">
        <CategoryLeft
          img={earphones && earphones[0].image.desktop}
          title={earphones && earphones[0].name}
          dscr={earphones && earphones[0].description}
        />

        <div className="mb-[160px]">
          <ThreeShop />
        </div>
        <Bringing />
      </div>
    </div>
  )
}

export default Earphones
