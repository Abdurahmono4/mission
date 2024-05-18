import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import icon from "../assets/icon.svg";
import Bitmap from "../assets/Bitmap.png";
import quloqchin from "../assets/quloqchin.png";
import Path from "../assets/Path 2.svg";
import kalonka from "../assets/kalonka.png";
import kalonka2 from "../assets/kalonka2.svg";
import airpots from "../assets/airpots.png";
import group from "../assets/group.png";
import bitmap from "../assets/Bitmap (1).png";
import bitmap2 from "../assets/Bitmap (2).png";
import Group from "../assets/Group 12.png";
import fezbok from "../assets/Path.svg";
import twiter from "../assets/Path (1).svg";
import instagram from "../assets/Shape.svg";
function Home() {
  const dispatch = useDispatch();
  const [mark, setMark] = useState([]);
  const [zx, setZx] = useState([]);
  const [zx7, setZx7] = useState([]);
  const [yx1, setYx1] = useState([]);
  const navigate = useNavigate();
  const myData = useSelector((state) => state.cards.cards);
  const counter = useSelector((state) => state.counter);
  const [storeDataa, setStoreData] = useState([]);
  const [marks, setMarks] = useState(
    JSON.parse(localStorage.getItem("marks")) || []
  );
  fetch("http://localhost:3000/xx99-mark-two-headphones")
    .then((res) => res.json())
    .then((data) => {
      setMark(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://localhost:3000/zx9-speaker")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setZx(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://localhost:3000/zx7-speaker")
    .then((res) => res.json())
    .then((data) => {
      setZx7(data);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://localhost:3000/yx1-earphones")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setYx1(data);
    })
    .catch((err) => {
      console.log(err);
    });
  function handelHeadphones() {
    navigate("/headphones");
  }
  function handelShop() {
    navigate("/Wireles");
  }
  function handelShop2() {
    navigate("/Shop2");
  }
  function handelClickk() {
    navigate("/Shop2");
  }
  function handelZx() {
    navigate("/ZxSpeaker");
  }
  function handelSpeaker2() {
    navigate("/Headphones");
  }
  function handelYx() {
    navigate("/Wireles");
  }
  function handelShop1() {
    navigate("/Shop1");
  }
  function handelAdd() {
    const storedMarks = localStorage.getItem("marks");

    if (storedMarks) {
      const parsedMarks = JSON.parse(storedMarks);

      const updatedMarks = [...parsedMarks, mark];

      localStorage.setItem("marks", JSON.stringify(updatedMarks));
    } else {
      localStorage.setItem("marks", JSON.stringify([mark]));
    }
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
   
    <div className="w-full  mx-auto">
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
            <button
              className=""
              onClick={() => document.getElementById("my_modal_1").showModal()}
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
                      {/* <div className="flex">
                        <h1>{el.name}</h1>
                        <span>{el.price / 1000}</span>
                        <img
                          width={"64px"}
                          height={"64px"}
                          className="roundex-2xl"
                          src={el.image}
                          alt=""
                        />
                        <button className="w-[100px] p-2 bg-[#F1F1F1] tetx-xl">
                          <button className="tetx-2xl mr-3" onClick={decrement}>
                            -
                          </button>
                          {counter.counter}{" "}
                          <button className="tetx-2xl ml-3" onClick={increment}>
                            +
                          </button>
                        </button>
                      </div> */}

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
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            ;
          </div>
          <hr />
          <div className="hero flex justify-between">

            <div
              data={mark}
              setMark={setMark}
              className="headphones-desc w-[398px] h-[346px]"
            >
              <span className="text-[#898989] text-xl line-3">NEW PRODUCT</span>
              <h1 className="text-6xl mt-5 mb-5 text-white uppercase ">
                {mark.name}
              </h1>
              <p className="text-[#C4C4C4] w-[349px] h-[75px] mb-11">
                {mark.description}
              </p>
              <button
                onClick={handelSpeaker2}
                className="hover:bg-[#F1F1F1] transition decoration-slice hover:text-[#D77D4A] bg-[#D77D4A] mt-10 text-white text-[17px] uppercase w-[160px] h-[48px]"
              >
                See Product
              </button>
            </div>

            <div className="headphone-img">
              <img className="w-[708px]" src={Bitmap} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="cards mb-[130px] mt-[120px] w-[1109px] mx-auto flex justify-between ">
        <div className="cart w-[350px] h-[284px]  mb-5">
          <div className="h-[80px]">
            <img className="mx-auto" src={quloqchin} alt="" />
          </div>
          <div className="w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg ">
            <h1 className="text-center pt-[120px] text-2xl">HEADPHONES</h1>
            <p
              onClick={handelShop1}
              className=" flex ml-[150px] gap-2 text-center"
            >
              <p className="hover:text-[#D77D4A] transition duration-slice">
                SHOP
              </p>
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
            <p
              onClick={handelShop2}
              className=" flex ml-[150px] gap-2 text-center"
            >
              <p className="hover:text-[#D77D4A] transition duration-slice">
                SHOP
              </p>
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
            <p
              onClick={handelShop}
              className=" flex ml-[150px] gap-2 text-center"
            >
              {" "}
              <p className="hover:text-[#D77D4A] transition duration-slice">
                SHOP
              </p>
              <img src={Path} alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className="zx flex justify-between  bg-[#D87D4A] w-[1109px] mx-auto h-[560px]">
        <img className="absolute w-[800px] h-[600px]" src={group} alt="" />
        <div>
          {" "}
          <img
            className="w-[410px] mt-[70px] ml-[90px] absolute h-[493px]"
            src={kalonka2}
            alt=""
          />
        </div>
        <div className="w-[300px]  absolute ml-[600px]">
          <h1 className="text-6xl  text-white mt-[120px] w-[261px]   ">
            {zx.name}
          </h1>
          <p className="w-[349px]  text-[#F5DED2] ">{zx.description}</p>
        </div>
        <button
          onClick={handelClickk}
          className=" hover:bg-[#F1F1F1] transition decoration-slice hover:text-[#D77D4A] ml-[600px] absolute mt-[400px] w-[160px] h-[48px]  bg-black text-white"
        >
          See Product
        </button>
      </div>
      <div className="bitmap w-[1109px] mx-auto mt-[30px] mb-14 h-[320px] ">
        <img className="absolute " src={bitmap} alt="" />
        <h1 className="absolute text-3xl ml-[100px] mt-[100px]">{zx7.name}</h1>
        <button
          onClick={handelZx}
          className=" hover:bg-[#F1F1F1] transition decoration-slice hover:text-[#D77D4A] absolute border border-black p-2 mt-[160px] ml-[100px] w-[120px]"
        >
          See Product
        </button>
      </div>
      <div className=" flex w-[1109px] mb-20 mx-auto justify-between">
        <div>
          <img className="w-[540px] h-[320px]" src={Group} alt="" />
        </div>
        <div className="bg-[#F1F1F1] rounded-lg w-[540px] h-[320px]">
          <h1 className="text-2xl ml-[100px] mt-[90px]">{yx1.name}</h1>
          <button
            onClick={handelYx}
            className="hover:bg-[#F1F1F1] transition decoration-slice hover:text-[#D77D4A] border ml-[100px] mt-4 border-black p-2 pl-3 pr-3  w-[160xp]"
          >
            See Product
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[150px] w-[1109px] mb-20 mx-auto  h-[588px]">
        <div className="">
          <h1 className="w-[445px] text-6xl">
            Bringing you the best audio gear
          </h1>
          <p className="w-[445px] mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="W-[540px] h-[588px]">
          <img src={bitmap2} alt="" />
        </div>
      </div>
      <div className="bg-[#131313]">
        <div>
          <div className="flex items-center pt-16 justify-between w-[1109px] mb-10 mx-auto  ">
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
    </div>
  );
}

export default Home;
