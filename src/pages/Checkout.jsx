import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "../assets/icon.svg";
import fezbok from "../assets/Path.svg";
import twiter from "../assets/Path (1).svg";
import instagram from "../assets/Shape.svg";
function Checkout() {
  const selector = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  function handleBack() {
    dispatch({ type: "CARD_DELETE" });
  }
  return (
    <>
      <div className="bg-[#131313]">
        <div className="w-[1109px] mx-auto">
          <div className="header flex items-center justify-between mb-4">
            <div className="logo">
              <Link to="/" className="text-white text-3xl">
                audiophile
              </Link>
            </div>
            <div className="navbar justify-center">
              <ul className="text-white gap-10">
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/"}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/HeadphonesMain"}
                  >
                    HEADPHONES
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Speakers"}
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Earphones"}
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="w-full bg-base-300   pt-[79px] pb-[141px]">
        <div className="checkout_container mb-[100px]  w-[1109px] mx-auto pl-10">
          <Link to="/">Go Back</Link>
          <div className="wrapper flex gap-[100px] mt-[38px] ">
            <div className="wrapper_block1 bg-white py-[54px] px-[48px] rounded-lg w-[634px]">
              <h1 className="text-2xl mb-[41px]">CHECKOUT</h1>
              <p className="text-orange-600 mb-[16px]">BILLING DETAILS</p>
              <div className="flex items-center gap-[16px]">
                <div>
                  <label htmlFor="name" className="mb-[9px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="input input-bordered w-full max-w-xs"
                    id="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-[9px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="alexei@mail.com"
                    className="input input-bordered w-full max-w-xs"
                    id="email"
                  />
                </div>
              </div>
              <div className="w-[271px] mt-[24px]">
                <label htmlFor="number" className="mb-[9px]">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="+1 202-555-0136"
                  className="input input-bordered w-full max-w-xs"
                  id="number"
                />
              </div>

              <p className="text-orange-600 mt-[53px] mb-[16px]">
                BILLING DETAILS
              </p>
              <div className="w-[559px] mt-[24px] flex flex-col mb-[24px]">
                <label htmlFor="adress" className="mb-[9px]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="input input-bordered w-full max-w-[634px] "
                  id="adress"
                />
              </div>
              <div className="flex items-center gap-[16px] ">
                <div className="flex flex-col">
                  <label htmlFor="code" className="mb-[9px] ">
                    ZIP Code
                  </label>
                  <input
                    type="password"
                    placeholder="10001"
                    className="input input-bordered w-[271px] max-w-xs"
                    id="code"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="city" className="mb-[9px]">
                    City
                  </label>
                  <input
                    type="email"
                    placeholder="New York"
                    className="input input-bordered w-[271px] max-w-xs"
                    id="city"
                  />
                </div>
              </div>
              <div className="w-[271px] mt-[24px] flex flex-col mb-[61px]">
                <label htmlFor="country" className="mb-[9px]">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="United States"
                  className="input input-bordered w-full max-w-xs "
                  id="country"
                />
              </div>
              <p className="text-orange-600 mb-[16px]">PAYMENT DETAILS</p>
              <div className="w-[634px] flex gap-[169px] mb-[24px]">
                <p>Payment Method</p>
                <div className="right w-[309px]">
                  <div className="one flex items-center gap-[16px]">
                    <input
                      type="radio"
                      name="radio-8"
                      className="radio radio-error"
                    />
                    <p>e-Money</p>
                  </div>
                  <div className="twoo flex items-center gap-[16px] mt-[16px]">
                    <input
                      type="radio"
                      name="radio-8"
                      className="radio radio-error"
                    />
                    <p>Cash on Delivery</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[16px] ">
                <div className="flex flex-col">
                  <label htmlFor="moneyy" className="mb-[9px]">
                    e-Money Number
                  </label>
                  <input
                    type="password"
                    placeholder="238521993"
                    className="input input-bordered w-[271px] max-w-xs"
                    id="moneyy"
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="pin" className="mb-[9px] ">
                    e-Money PIN
                  </label>
                  <input
                    type="password"
                    placeholder="6891"
                    className="input input-bordered w-[271px] max-w-xs"
                    id="pin"
                  />
                </div>
              </div>
            </div>
            <div className="wrapper_block2 bg-white py-[54px] px-[48px] rounded-lg w-[350px] ">
              <h2 className="text-2xl mb-[31px]">Summary</h2>
              {selector.map((card, index) => {
                return (
                  <div
                    className="flex items-center py-[7px] justify-between mb-[24px] w-[50px]"
                    key={index}
                  >
                    <div className="flex items-center">
                      <div className="w-[200px] mr-[61px]">
                        <h4 className="font-bold">{card.name}</h4>
                        <p className="text-base-400">${card.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center justify-between mb-[8px]">
                <p className="text-[gray]">TOTAL</p>
                <p className="text-lg font-bold">$ 5,396</p>
              </div>

              <div className="flex items-center justify-between mb-[8px]">
                <p className="text-[gray]">SHIPPING</p>
                <p className="text-lg font-bold">$ 50</p>
              </div>

              <div className="flex items-center justify-between mb-[24px]">
                <p className="text-[gray]">VAT (INCLUDED)</p>
                <p className="text-lg font-bold">$ 1,079</p>
              </div>

              <div className="flex items-center justify-between mb-[32px]">
                <p className="text-[gray]">GRAND TOTAL</p>
                <p className="text-orange-600 font-bold">$ 5,446</p>
              </div>
              <button
                className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer w-full mt-[20px] btn btn-warning mt-[46px]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                CONTINUE & PAY
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog" className="flex items-center ">
                    {/* <img src={check} alt="" /> */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                      ✕
                    </button>
                  </form>
                  <h2 className="font-bold text-3xl font-bold mt-[33px]">
                    THANK YOU <br /> FOR YOUR ORDER
                  </h2>
                  <p className="py-4">
                    You will receive an email confirmation shortly.
                  </p>
                  <div className="flex rounded-lg">
                    <div className="bg-[#F1F1F1] w-[222px] rounded-l-2xl">
                      {selector.map((card, index) => {
                        return (
                          <div
                            className="flex items-center py-[7px] justify-between mb-[24px] w-[50px]"
                            key={index}
                          >
                            <div className="flex items-center">
                              <img
                                src={card.image}
                                alt=""
                                className="w-[64px] h-[64px] mr-[16px]"
                              />
                              <div className="w-[200px] mr-[61px] ">
                                <h4 className="font-bold">{card.name}</h4>
                                <p className="text-[gray] ">${card.price}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <p className="text-center text-[gray] mt-4">
                        and {selector.length} other item(s)
                      </p>
                    </div>
                    <div className="bg-[#101010] p-[48px] rounded-r-2xl">
                      <p className="text-base-300 mb-2">GRAND TOTAL</p>
                      <p className="text-white ">$ 5,446</p>
                    </div>
                  </div>
                  <Link
                    onClick={handleBack}
                    to="/"
                    className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer w-[465px] mt-[25px] btn btn-warning "
                  >
                    BACK TO HOME
                  </Link>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131313] mt-[-120px]">
        <div>
          <div className="flex items-center pt-16 justify-between w-[1109px] mx-auto  ">
            <Link className="text-3xl text-white">audiophile</Link>
            <ul className="text-white">
              <li>
                <Link
                  to={"/"}
                  className="mr-8 transition ease-in-out hover:text-[#D77D4A]"
                >
                  HOME
                </Link>
                <Link
                  to={"/HeadphonesMain"}
                  className="mr-8 transition ease-in-out hover:text-[#D77D4A]"
                >
                  HEADPHONES
                </Link>
                <Link
                  to={"/Speakers"}
                  className="mr-8 transition ease-in-out hover:text-[#D77D4A]"
                >
                  SPEAKERS
                </Link>
                <Link
                  to={"/Earphones"}
                  className="transition ease-in-out hover:text-[#D77D4A]"
                >
                  EARPHONES
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mx-auto flex justify-between w-[1109px]">
            <div>
              <p className="w-[510px] mb-12 text-[#636363]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <span className="text-[#636363]">
                Copyright 2021. All Rights Reserved
              </span>
            </div>
            <div className="flex gap-5">
              <img src={fezbok} alt="" />
              <img src={twiter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
