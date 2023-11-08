import { useState } from "react";

const PaymentPage = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="w-[100vw] min-h-[100vh] flex overflow-auto">
      <div className="w-3/5 h-full lg:w-full">
        <div className="flex flex-col">
          <img
            className="max-w-[400px]"
            src="../../../public/images/logo/pdglogo.png"
            alt=""
          />
          <div className="max-w-[70%] lg:max-w-full mt-[-100px] mx-auto flex flex-col">
            <div className="hidden lg:flex flex-col">
              <div className="border-t border-b p-4" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} order summary</div>
              {show && 
              <div className="w-full h-[100vh] bg-[#f48029] text-white flex flex-col">
                <div className="w-3/4 mx-auto mt-[120px]">
                  <div className="flex items-center justify-between border-b border-[rgba(248,172,116,0.34)] pb-2">
                    <img src="../../../public/images/payment/pay2.png" alt="" />
                    <div className="">
                      <div>D28 Compact | Reading Glasses</div>
                      <div>Camo / frq Blue-Light Filtering / 3.00</div>
                    </div>
                    <div>1 $130.00</div>
                  </div>
                  <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
                    <input
                      type="text"
                      className="!bg-white outline-none rounded border-0 h-[50px]"
                      placeholder="Discount code or gift card"
                    />
                    <button className="bg-[#f7a05f] h-[50px] w-[80px]">
                      {" "}
                      Apply
                    </button>
                  </div>
                  <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
                    <div className="flex justify-between">
                      <div>Subtotal</div>
                      <div>$130.00</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Shipping</div>
                      <div>Calculated at next step</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mt-6">
                      <div>Total</div>
                      <div className="text-lg">USD $130.00</div>
                    </div>
                  </div>
                </div>
              </div>
              }

            </div>

            <div>
              Cart {">"} Information {">"} Shipping {">"} Payment
            </div>
            <div className="mx-auto text-xs font-semibold mt-6">
              Express checkout
            </div>
            <div className="border-b">
              <img src="../../../public/images/payment/pay.png" alt="" />
            </div>
            <div className="mx-auto text-sm mt-4 border-b w-full text-center">
              OR
            </div>
            <div className="flex justify-between mt-[50px]">
              <div>Contact</div>
              <div>Have an account? Have an account?Log in</div>
            </div>
            <input
              placeholder="Email"
              className="border h-[46px] rounded p-1 px-3 mt-4"
            />
            <div className="mt-6 text-base">Shipping address</div>
            <input
              placeholder="Country"
              className="border h-[46px] rounded p-1 px-3 mt-4"
            />
            <div className="flex gap-2">
              <input
                placeholder="First name"
                className="border w-1/2 h-[46px] rounded p-1 px-3 mt-4"
              />
              <input
                placeholder="Last name"
                className="border w-1/2  h-[46px] rounded p-1 px-3 mt-4"
              />
            </div>
            <input
              placeholder="Address"
              className="border h-[46px] rounded p-1 px-3 mt-4"
            />
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="border h-[46px] rounded p-1 px-3 mt-4"
            />
            <div className="flex gap-2">
              <input
                placeholder="City"
                className="border w-1/3 h-[46px] rounded p-1 px-3 mt-4"
              />
              <input
                placeholder="State"
                className="border w-1/3  h-[46px] rounded p-1 px-3 mt-4"
              />
              <input
                placeholder="Zip code"
                className="border w-1/3  h-[46px] rounded p-1 px-3 mt-4"
              />
            </div>
            <input
              placeholder="Phone"
              className="border h-[46px] rounded p-1 px-3 mt-4"
            />
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" /> <div> Text me with news and offers</div>
            </div>
            <div className="flex justify-between items-center mt-4 border-b mb-4 pb-12">
              <div> {"< "}Return to cart</div>
              <button className="bg-black text-white w-[188px] h-[60px] rounded">
                Continue to shipping
              </button>
            </div>
            <div className="text-sm mb-6">Refund policy</div>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-[100vh] bg-[#f48029] text-white flex flex-col lg:hidden">
        <div className="w-3/4 mx-auto mt-[120px]">
          <div className="flex items-center justify-between border-b border-[rgba(248,172,116,0.34)] pb-2">
            <img src="../../../public/images/payment/pay2.png" alt="" />
            <div className="">
              <div>D28 Compact | Reading Glasses</div>
              <div>Camo / frq Blue-Light Filtering / 3.00</div>
            </div>
            <div>1 $130.00</div>
          </div>
          <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
            <input
              type="text"
              className="!bg-white outline-none rounded border-0 h-[50px]"
              placeholder="Discount code or gift card"
            />
            <button className="bg-[#f7a05f] h-[50px] w-[80px]"> Apply</button>
          </div>
          <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>$130.00</div>
            </div>
            <div className="flex justify-between">
              <div>Shipping</div>
              <div>Calculated at next step</div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-6">
              <div>Total</div>
              <div className="text-lg">USD $130.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
