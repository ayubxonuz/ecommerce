import {useEffect, useState} from "react"
import CashCheck from "../components/CashCheck"
import InputShort from "../components/InputShort"
import ButtonBrown from "../components/ButtonBrown"
import {useSelector} from "react-redux"
import {data} from "autoprefixer"
import Loader from "../components/Loader"
import {animateScroll} from "react-scroll"

function CheckOut() {
  const {allData, loading, error, allSelectData, allCount, allPrice} =
    useSelector((store) => store.ecommerse)
  const [selectedOption, setSelectedOption] = useState("e-Money")

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }, [])

  return (
    <>
      {loading && (
        <div className="bg-white z-40 opacity-50 justify-center items-center flex fixed top-0 left-0 right-0 bottom-0">
          <Loader />
        </div>
      )}
      {allData && (
        <div className="w-full h-full bg-[#F1F1F1]">
          <div className="max-container">
            <p className="text-[#000000] mt-[79px] text-[16px] mb-[38px]">
              Go Back
            </p>
            <div className="flex gap-x-7 max-[930px]:block">
              <div className="max-w-full max-[930px]:max-w-full max-h-[1476px] h-auto bg-[#FFFFFF] rounded-lg pt-[54px] p-6 max-[530px]:p-[18px]">
                <h1 className="font-bold max-[530px]:text-[20px] text-[32px] text-[#000000] tracking-[1.14px]">
                  CHECKOUT
                </h1>
                <p className="text-[#D87D4A] mt-[41px] font-bold text-[13px]">
                  BILLING DETAILS
                </p>
                <form>
                  <div className="grid grid-cols-2 max-[530px]:grid-cols-1 mt-4 gap-x-4 max-w-full w-full">
                    <label className="form-control mt-2 w-full font-bold text-[#0000000] text-[12px] tracking-[-0.21px]">
                      <span className="label-text mb-1">Name</span>
                      <InputShort />
                      <div className="label"></div>
                    </label>
                    <label className="form-control mt-2 w-full font-bold text-[#0000000] text-[12px] tracking-[-0.21px]">
                      <span className="label-text mb-1">Email Address</span>
                      <InputShort />
                      <div className="label"></div>
                    </label>
                    <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                      <span className="label-text mb-1">Phone Number</span>
                      <InputShort />
                      <div className="label"></div>
                    </label>
                  </div>
                  <p className="text-[#D87D4A] mt-[41px] font-bold mb-4 text-[13px]">
                    SHOPPING INFO
                  </p>
                  <div className="max-w-full w-full">
                    <label className="form-control font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                      <span className="label-text mb-1">Your Address</span>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered"
                      />
                      <div className="label"></div>
                    </label>
                    <div className="grid grid-cols-2 max-[530px]:grid-cols-1 gap-x-4">
                      <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                        <span className="label-text mb-1">ZIP Code</span>
                        <InputShort />
                        <div className="label"></div>
                      </label>
                      <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                        <span className="label-text mb-1">City</span>
                        <InputShort />
                        <div className="label"></div>
                      </label>
                      <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                        <span className="label-text mb-1">Country</span>
                        <InputShort />
                        <div className="label"></div>
                      </label>
                    </div>
                    <p className="text-[#D87D4A] max-[530px]:mt-[41px] mt-[61px] font-bold mb-4 text-[13px]">
                      PAYMENT DETAILS
                    </p>
                    <div className="grid grid-cols-2 max-[530px]:grid-cols-1">
                      <p className="font-bold text-[12px] tracking-[-0.21px] text-[#000000] max-[530px]:mb-4">
                        Payment Method
                      </p>
                      <div className="ml-2 max-[530px]:ml-0">
                        <CashCheck
                          text={"e-Money"}
                          checked={selectedOption === "e-Money"}
                          onChange={() => handleOptionChange("e-Money")}
                        />
                        <CashCheck
                          text={"Cash on Delivery"}
                          checked={selectedOption === "Cash on Delivery"}
                          onChange={() =>
                            handleOptionChange("Cash on Delivery")
                          }
                        />
                      </div>
                    </div>

                    {selectedOption == "e-Money" ? (
                      <div className="grid grid-cols-2 max-[530px]:grid-cols-1 mt-6 mb-5 gap-x-4">
                        <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                          <span className="label-text mb-1">
                            e-Money Number
                          </span>
                          <InputShort />
                          <div className="label"></div>
                        </label>
                        <label className="form-control w-full font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                          <span className="label-text mb-1">e-Money PIN</span>
                          <InputShort />
                        </label>
                      </div>
                    ) : (
                      <div className="flex max-w-[620px] w-full gap-x-8 mb-5 mt-6">
                        <img src="/shape.svg" alt="" />
                        <p className="text-[#000000] opacity-[50%] text-[15px]">
                          The 'Cash on Delivery' option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="max-w-full pt-8 px-[33px] max-[530px]:px-[18px] rounded-lg w-full h-min pb-5 bg-[#FFFFFF] max-[930px]:max-w-full max-[930px]:mt-8">
                <p className="text-[#000000] mb-[31px] font-bold text-[18px] tracking-[1.29px]">
                  SUMMARY
                </p>
                {allSelectData &&
                  allSelectData.map((data) => {
                    return (
                      <div className="grid w-full grid-cols-2 mb-6 items-center">
                        <div className="flex items-center">
                          <div className="max-w-16 ruby w-full h-16 bg-[#F1F1F1]">
                            <img
                              className="w-full h-full m-auto"
                              src={data?.image?.desktop}
                              alt=""
                            />
                          </div>
                          <div className="ml-4 max-[530px]:ml-2">
                            <p className="text-[#000000] ruby w-full max-[530px]:text-[12px] font-bold text-[15px]">
                              {data?.name.slice(0, 9) + "..."}
                            </p>
                            <p className="text-[#000000] ruby opacity-[50%] font-bold text-[14px]">
                              $ {data?.price.toLocaleString("en-US")}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center ml-auto">
                          <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                            x{data?.amount}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                <div className="flex justify-between">
                  <p className="text-[#000000] mb-3 opacity-[50%] text-[15px] max-[530px]:text-[13px]">
                    TOTAL
                  </p>
                  <p className="text-[#000000] font-bold text-[18px] max-[530px]:text-[16px]">
                    $ {allPrice.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#000000] mb-3 opacity-[50%] text-[15px] max-[530px]:text-[13px]">
                    SHIPPING
                  </p>
                  <p className="text-[#000000] font-bold text-[18px] max-[530px]:text-[16px]">
                    $ 50
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#000000] opacity-[50%] text-[15px] max-[530px]:text-[13px]">
                    VAT (INCLUDED)
                  </p>
                  <p className="text-[#000000] font-bold text-[18px] max-[530px]:text-[16px]">
                    $ 1,079
                  </p>
                </div>
                <div className="flex justify-between mt-6">
                  <p className="text-[#000000] opacity-[50%] text-[15px] max-[530px]:text-[13px]">
                    GRAND TOTAL
                  </p>
                  <p className="text-[#D87D4A] font-bold text-[18px] max-[530px]:text-[16px]">
                    $ {allPrice.toLocaleString("en-US")}
                  </p>
                </div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                  className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6 max-[930px]:max-w-full"
                >
                  CONTINUE & PAY
                </button>
                <dialog id="my_modal_4" className="modal p-2">
                  <div className="modal-box w-full max-w-[540px] p-12 max-[530px]:p-5">
                    <div>
                      <img
                        className="mb-[33px] max-[530px]:mb-[20px]"
                        src="/modalTrue.png"
                        alt=""
                      />
                      <div className="text-[#000000] font-bold text-[32px] tracking-[1.14px] max-[530px]:text-[24px]">
                        <span>THANK YOU</span>
                        <br />
                        <span>FOR YOUR ORDER</span>
                      </div>
                      <p className="text-[#000000] text-[15px] opacity-[50%] mt-[24px] max-[530px]:mt-[10px]">
                        You will receive an email confirmation shortly.
                      </p>
                      <div className="grid grid-cols-2 max-[530px]:grid-cols-1 w-full mt-[33px] max-[530px]:mt-[20px]">
                        <div className="w-full bg-[#F1F1F1] p-6">
                          <div className="flex justify-between items-center max-[530px]:justify-evenly max-[438px]:justify-between">
                            <img
                              width={35}
                              height={35}
                              src="/XX99Mark.svg"
                              alt=""
                            />
                            <div className="text-center">
                              <p className="text-[#000000] font-bold text-[15px]">
                                XX99 MK II
                              </p>
                              <p className="text-[14px] text-[#000000] font-bold opacity-[50%] mt-1">
                                $ 2,999
                              </p>
                            </div>
                            <p className="text-[14px] text-[#000000] font-bold opacity-[50%]">
                              x1
                            </p>
                          </div>
                          <p className="w-full bg-[#000000] h-[1px] opacity-[8%] my-3"></p>
                          <p className="text-[12px] tracking-[0.21px] font-bold text-[#000000] opacity-[50%] text-center">
                            and 2 other item(s)
                          </p>
                        </div>
                        <div className="w-full bg-[#000000] py-10 pl-8">
                          <p className="text-[#FFFFFF] opacity-[50%] text-[15px]">
                            GRAND TOTAL
                          </p>
                          <p className="text-[#FFFFFF] font-bold text-[18px] mt-2">
                            $ 5,446
                          </p>
                        </div>
                      </div>
                    </div>
                    <form method="dialog">
                      <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] w-full h-12 mt-[46px]">
                        BACK TO HOME
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CheckOut
