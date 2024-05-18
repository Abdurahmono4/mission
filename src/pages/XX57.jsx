import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import icon from "../assets/icon.svg";
import group from "../assets/Group 3.png";
import group1 from "../assets/Group 12 (4).png";
import group2 from "../assets/Group 12 (1).png";
import group3 from "../assets/Group 12 (3).png";
import group4 from "../assets/Group 3 (2).png";
import bitmap5 from "../assets/Bitmap (20).png";
import quloqchin from "../assets/quloqchin.png";
import bitmap2 from "../assets/Bitmap (2).png";
import bitmap7 from "../assets/Bitmap (18).png";
import bitmap8 from "../assets/Bitmap (19).png";
import fezbok from "../assets/Path.svg";
import twiter from "../assets/Path (1).svg";
import instagram from "../assets/Shape.svg";
import Path from "../assets/Path 2.svg";
import kalonka from "../assets/kalonka.png";
import airpots from "../assets/airpots.png";
function XX57() {
  const navigate = useNavigate();
  const [mark, setMark] = useState([]);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.cards.cards);
  const [storeDataa, setStoreData] = useState([]);
  fetch("http://localhost:3000/xx59-headphones")
    .then((res) => res.json())
    .then((data) => {
      setMark(data);
    })
    .catch((err) => {
      console.log(err);
    });
  function decrement() {
    dispatch({ type: "DECREMENT", payload: 1 });
  }
  function increment() {
    dispatch({ type: "INCREMENT", payload: 1 });
  }
  function handelShop() {
    navigate("/Headphones");
  }
  function handleCard(e) {
    e.preventDefault();
    alert("Save");
    const dataBase = {
      name: mark.name,
      price: mark.price,
      image: group,
    };
    dispatch({ type: "CARD_ADD", payload: dataBase });
  }
  function decrement() {
    dispatch({ type: "DECREMENT", payload: 1 });
  }
  function increment() {
    dispatch({ type: "INCREMENT", payload: 1 });
  }

  function handleRemove() {
    localStorage.removeItem("storeData");
    dispatch(remove([]));
    setStoreData([]);
  }
  return (
    <div>
      <div className="bg-[#131313]">
        <div className=" w-[1109px] mx-auto pt-2 pb-1">
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
                    // to={"/"}
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
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Speakers"}
                  >
                    SPEAKERS
                  </Link>
                </li>
                <li>
                  <Link
                    className=" transition ease-in-out hover:text-[#D77D4A]"
                    to={"/Earphones"}
                  >
                    EARPHONES
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icon">
              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <img src={icon} alt="" />
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div
                    tabIndex={0}
                    className="mt-3 p-5 z-[1] card card-compact dropdown-content w-[470px] bg-[white]  shadow"
                  >
                    <span className="text-black font-semibold uppercase flex items-center justify-between">
                      <span>Card ({myData.length})</span>
                      {myData.length > 0 ? (
                        <span
                          className="text-[10px] capitalize  underline cursor-pointer"
                          onClick={handleRemove}
                        >
                          Remove All
                        </span>
                      ) : (
                        <></>
                      )}
                    </span>{" "}
                  </div>
                  {myData.map((el, index) => {
                    return (
                      <div className="mt-10 mb-7">
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex gap-6 items-center">
                            <div className="w-[64px] h-[64px] bg-[#F1F1F1] flex justify-center rounded-lg">
                              <img
                                className="w-[35px] my-auto h-[40px]"
                                src={el.image}
                                alt=""
                              />
                            </div>
                            <div>
                              <p className="text-black font-semibold">
                                {el.name}
                              </p>
                              <p>$ {el.price}</p>
                            </div>
                          </div>
                          <div>
                            <span className=" rounded-lg w-[100px] flex justify-center text-center text-black">
                              <span
                                onClick={decrement}
                                className="w-1/3 p-2 cursor-pointer bg-[#F1F1F1]"
                              >
                                -
                              </span>
                              <span className="w-1/3 p-2 bg-[#F1F1F1]">
                                {el.number}
                                {counter.counter}
                              </span>
                              <span
                                onClick={increment}
                                className="w-1/3 p-2 cursor-pointer bg-[#F1F1F1]"
                              >
                                +
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="w-full flex flex-col">
                    <span className="text-black font-semibold flex items-center justify-between p-2">
                      <span>TOTAL</span>
                      <span>$5,396</span>
                    </span>
                    <div className="w-[full] px-16 mt-6">
                      {myData.length > 0 ? (
                        <Link
                          to={"/checkout"}
                          className="btn mx-auto bg-orange-500 border-none text-white rounded-none w-[300px]    hover:bg-orange-300"
                        >
                          CHECKOUT
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1109px] pt-[90px] mx-auto">
        <Link className=" pt-[90px]" to={"/"}>
          Go Back
        </Link>
        <div className=" flex items-center justify-between">
          <div className="mt-20">
            <img src={group4} alt="" />
          </div>
          <div>
            <h2>NEW PRODUCT</h2>
            <h1 className="w-[445px] text-5xl">{mark.name}</h1>
            <p className="w-[435px]">{mark.description}</p>
            <span className="text-xl">${mark.price / 1000}</span>
            <div className="flex mt-10">
              <button className="w-[100px] p-2 bg-[#F1F1F1] tetx-xl">
                <button className="tetx-2xl mr-3" onClick={decrement}>
                  -
                </button>
                {counter.counter}{" "}
                <button className="tetx-2xl ml-3" onClick={increment}>
                  +
                </button>
              </button>
              <button
                onClick={handleCard}
                className="w-[120xp] p-2 bg-[#D87D4A] ml-5"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[140px]">
          <div className="flex ">
            <h1 className="text-3xl mb-7">FEATURES</h1>
            <h2 className="uppercase ml-[670px] text-3xl">in the box</h2>
          </div>
          <div className="flex ">
            <p className="w-[615px]">{mark.features}</p>
            <div>
              <p className="ml-[210px]">
                <p className="flex gap-2">
                  <p className="text-[#D87D4A]">1x</p> <p>Headphone Unit</p>
                </p>
                <p className="flex gap-2">
                  <p className="text-[#D87D4A]"> 2x</p>{" "}
                  <p>Replacement Earcups</p>
                </p>
                <p className="flex gap-2">
                  <p className="text-[#D87D4A]">1x</p> <p>User Manual</p>
                </p>
                <p className="flex gap-2">
                  <p className="text-[#D87D4A]">1x</p>{" "}
                  <p>3.5mm 5m Audio Cable</p>
                </p>
                <p className="flex gap-2">
                  <p className="text-[#D87D4A]"> 1x</p> <p>Travel Bag</p>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[150px]">
          <div>
            <div className="w-[445px] h-[280px] mb-7">
              {/* <img src={bitmap6} alt="" /> */}
              <img src={bitmap8} alt="" />
            </div>
            <div className="w-[445px] h-[280px]">
              <img src={bitmap7} alt="" />
            </div>
          </div>
          <div>
            <img src={bitmap5} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-center text-3xl uppercase mt-[140px] mb-16">
            you may also like
          </h1>
          <div className="flex justify-between">
            <div className="w-[350px] h-[471px]">
              <img src={group1} alt="" />
              <h1 className="text-center mt-10">XX99 MARK I</h1>
              <button
                onClick={handelShop}
                className="bg-[#D87D4A] p-2 w-[120px] ml-[115px] mt-6 text-white"
              >
                See Product
              </button>
            </div>
            <div className="w-[350px] h-[471px]">
              <img src={group2} alt="" />
              <h1 className="text-center mt-10">XX59</h1>
              <button className="bg-[#D87D4A] p-2 w-[120px] ml-[115px] mt-6 text-white">
                See Product
              </button>
            </div>
            <div className="w-[350px] h-[471px]">
              <img src={group3} alt="" />
              <h1 className="text-center mt-10">ZX9 SPEAKER</h1>
              <button className="bg-[#D87D4A] p-2 w-[120px] ml-[115px] mt-6 text-white">
                See Product
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="cards mb-[130px] mt-[120px] w-[1109px] mx-auto flex justify-between ">
            <div className="cart w-[350px] h-[284px]  mb-5">
              <div className="h-[80px]">
                <img className="mx-auto" src={quloqchin} alt="" />
              </div>
              <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
                <h1 className="text-center pt-[120px] text-2xl">HEADPHONES</h1>
                <p className=" flex ml-[150px] gap-2 text-center">
                  {" "}
                  <p>SHOP</p>
                  <img src={Path} alt="" />
                </p>
              </div>
            </div>
            <div className="cart w-[350px] h-[284px]  mb-5">
              <div className="h-[80px]">
                <img className="mx-auto" src={kalonka} alt="" />
              </div>
              <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
                <h1 className="text-center pt-[120px] text-2xl">SPEAKERS</h1>
                <p className=" flex ml-[150px] gap-2 text-center">
                  {" "}
                  <p>SHOP</p>
                  <img src={Path} alt="" />
                </p>
              </div>
            </div>
            <div className="cart w-[350px] h-[294px]  mb-5">
              <div className="h-[80px]">
                <img
                  className="mx-auto w-[135px] h-[146px] pt-2 "
                  src={airpots}
                  alt=""
                />
              </div>
              <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
                <h1 className="text-center pt-[120px] text-2xl">EARPHONES</h1>
                <p className=" flex ml-[150px] gap-2 text-center">
                  {" "}
                  <p>SHOP</p>
                  <img src={Path} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-[150px] w-[1109px] mb-20 mx-auto  h-[588px]">
            <div className="">
              <h1 className="w-[445px] text-6xl">
                Bringing you the best audio gear
              </h1>
              <p className="w-[445px] mt-8">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <div className="W-[540px] h-[588px]">
              <img src={bitmap2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131313]">
        <div>
          <div className="flex items-center pt-16 justify-between w-[1109px] mb-10 mx-auto  ">
            <Link className="text-3xl text-white">audiophile</Link>
            <ul className="text-white">
              <li>
                <Link className="mr-8">HOME</Link>
                <Link className="mr-8">HEADPHONES</Link>
                <Link className="mr-8">SPEAKERS</Link>
                <Link>EARPHONES</Link>
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
    </div>
  );
}

export default XX57;
