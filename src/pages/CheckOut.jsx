import Button from "../components/Button"

function CheckOut() {
  return (
    <div className="w-full h-full bg-[#F1F1F1]">
      <div className="max-container">
        <p className="text-[#000000] mt-[79px] text-[16px] mb-[38px]">
          Go Back
        </p>
        <div className="flex gap-x-7">
          <div className="max-w-[730px] w-full h-[1126px] bg-[#FFFFFF] rounded-lg pt-[54px] pl-6">
            <h1 className="font-bold text-[32px] text-[#000000] tracking-[1.14px]">
              CHECKOUT
            </h1>
            <p className="text-[#D87D4A] mt-[41px] font-bold text-[13px]">
              BILLING DETAILS
            </p>
            <form>
              <div className="grid grid-cols-2 mt-4">
                <label className="form-control mt-2 w-full max-w-[309px] font-bold text-[#0000000] text-[12px] tracking-[-0.21px]">
                  <span className="label-text mb-1">Name</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-[309px]"
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control mt-2 w-full max-w-[309px] font-bold text-[#0000000] text-[12px] tracking-[-0.21px]">
                  <span className="label-text mb-1">Email Address</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-[309px]"
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                  <span className="label-text mb-1">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-[309px]"
                  />
                  <div className="label"></div>
                </label>
              </div>
              <p className="text-[#D87D4A] mt-[41px] font-bold mb-4 text-[13px]">
                SHOPPING INFO
              </p>
              <div>
                <label className="form-control font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                  <span className="label-text mb-1">Address</span>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered mr-5"
                  />
                  <div className="label"></div>
                </label>
                <div className="grid grid-cols-2">
                  <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                    <span className="label-text mb-1">ZIP Code</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-[309px]"
                    />
                    <div className="label"></div>
                  </label>
                  <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                    <span className="label-text mb-1">City</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-[309px]"
                    />
                    <div className="label"></div>
                  </label>
                  <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                    <span className="label-text mb-1">Country</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-[309px]"
                    />
                    <div className="label"></div>
                  </label>
                </div>
                <p className="text-[#D87D4A] mt-[61px] font-bold mb-4 text-[13px]">
                  PAYMENT DETAILS
                </p>
                <div className="grid grid-cols-2">
                  <p className="font-bold text-[12px] tracking-[-0.21px] text-[#000000]">
                    Payment Method
                  </p>
                  <div>
                    <div className="max-w-[309px] w-full h-[56px] border border-[#D87D4A] rounded-lg mb-4"></div>
                    <div className="max-w-[309px] w-full h-[56px] border border-[#D87D4A] rounded-lg"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-6">
                  <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                    <span className="label-text mb-1">e-Money Number</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-[309px]"
                    />
                    <div className="label"></div>
                  </label>
                  <label className="form-control w-full max-w-[309px] font-bold text-[#0000000] text-[12px] mt-2 tracking-[-0.21px]">
                    <span className="label-text mb-1">e-Money PIN</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-[309px]"
                    />
                    <div className="label"></div>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-[350px] pt-8 px-[33px] rounded-lg w-full h-[612px] bg-[#FFFFFF]">
            <p className="text-[#000000] mb-[31px] font-bold text-[18px] tracking-[1.29px]">
              SUMMARY
            </p>
            <div className="grid w-full grid-cols-2 mb-6 items-center">
              <div className="flex items-center">
                <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                  <img
                    className="w-[50%] h-full m-auto"
                    src="/XX99Mark.svg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[#000000] font-bold text-[15px]">
                    XX99 MK II
                  </p>
                  <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                    $ 2,999
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 ml-auto">
                <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                  x1
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 mb-6 items-center">
              <div className="flex items-center">
                <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                  <img
                    className="w-[50%] h-full m-auto"
                    src="/XX99Mark.svg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[#000000] font-bold text-[15px]">
                    XX99 MK II
                  </p>
                  <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                    $ 2,999
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 ml-auto">
                <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                  x1
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 mb-6 items-center">
              <div className="flex items-center">
                <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                  <img
                    className="w-[50%] h-full m-auto"
                    src="/XX99Mark.svg"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <p className="text-[#000000] font-bold text-[15px]">
                    XX99 MK II
                  </p>
                  <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                    $ 2,999
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 ml-auto">
                <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                  x1
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] mb-3 opacity-[50%] text-[15px]">
                TOTAL
              </p>
              <p className="text-[#000000] font-bold text-[18px]">$ 5,396</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] mb-3 opacity-[50%] text-[15px]">
                SHIPPING
              </p>
              <p className="text-[#000000] font-bold text-[18px]">$ 50</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#000000] opacity-[50%] text-[15px]">
                VAT (INCLUDED)
              </p>
              <p className="text-[#000000] font-bold text-[18px]">$ 1,079</p>
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-[#000000] opacity-[50%] text-[15px]">
                GRAND TOTAL
              </p>
              <p className="text-[#D87D4A] font-bold text-[18px]">$ 5,446</p>
            </div>
            <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
