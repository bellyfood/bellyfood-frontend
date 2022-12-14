import React, { SetStateAction } from "react";
import { Basket } from "../../pages/Home";
import BellyfoodBaskets from "../../assets/images/bellyfood-baskets.jpeg";

interface Props {
  setShowModal: (value: SetStateAction<Basket>) => void;
}
function Baskets({ setShowModal }: Props) {
  return (
    <div
      id="baskets"
      className="bg-white rounded-md py-8 flex flex-col items-center my-20"
    >
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center px-3 mb-5">
        <h1 className="text-5xl text-purple-600 font-bold mb-5">BASKETS</h1>
        <img
          src={BellyfoodBaskets}
          className="w-full md:max-w-xl border"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 place-items-center">
        <div className="flex flex-col items-center bg-white rounded-sm shadow-md shadow-gray-500 px-7 py-2">
          <h2 className="text-2xl font-bold mb-8">NANO</h2>
          <h1 className="text-5xl font-bold text-amber-700 my-6">₦11,500</h1>
          <button
            className="bg-gray-50 text-green-400 rounded-md py-1 px-3 mb-8"
            onClick={() => setShowModal({ open: true, name: "NANO" })}
          >
            View Basket Contents
          </button>
          <a
            href="https://wa.me/2347082223332?text=I'm%20interested%20in%20the%20NANO%20package%20for%20sale"
            target="_blank"
          >
            <button className="bg-gray-50 text-green-400 rounded-xl py-1 px-8 mb-4">
              Buy
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center bg-white rounded-sm shadow-md shadow-gray-500 px-7 py-2">
          <h2 className="text-2xl font-bold mb-8">MICRO</h2>
          <h1 className="text-5xl font-bold text-gray-300 my-6">₦20,500</h1>
          <button
            className="bg-gray-50 text-green-400 rounded-md py-1 px-3 mb-8"
            onClick={() => setShowModal({ open: true, name: "MICRO" })}
          >
            View Basket Contents
          </button>
          <a
            href="https://wa.me/2347082223332?text=I'm%20interested%20in%20the%20MICRO%20package%20for%20sale"
            target="_blank"
          >
            <button className="bg-gray-50 text-green-400 rounded-xl py-1 px-8 mb-4">
              Buy
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center bg-white rounded-sm shadow-md shadow-gray-500 px-7 py-2">
          <h2 className="text-2xl font-bold mb-8">MEGA</h2>
          <h1 className="text-5xl font-bold text-yellow-400 my-6">₦30,000</h1>
          <button
            className="bg-gray-50 text-green-400 rounded-md py-1 px-3 mb-8"
            onClick={() => setShowModal({ open: true, name: "MEGA" })}
          >
            View Basket Contents
          </button>
          <a
            href="https://wa.me/2347082223332?text=I'm%20interested%20in%20the%20MEGA%20package%20for%20sale"
            target="_blank"
          >
            <button className="bg-gray-50 text-green-400 rounded-xl py-1 px-8 mb-4">
              Buy
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center bg-white rounded-sm shadow-md shadow-gray-500 px-7 py-2">
          <h2 className="text-2xl font-bold mb-8">GIGA</h2>
          <h1 className="text-5xl font-bold text-blue-300 my-6">₦75,000</h1>
          <button
            className="bg-gray-50 text-green-400 rounded-md py-1 px-3 mb-8"
            onClick={() => setShowModal({ open: true, name: "GIGA" })}
          >
            View Basket Contents
          </button>
          <a
            href="https://wa.me/2347082223332?text=I'm%20interested%20in%20the%20GIGA%20package%20for%20sale"
            target="_blank"
          >
            <button className="bg-gray-50 text-green-400 rounded-xl py-1 px-8 mb-4">
              Buy
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center bg-white rounded-sm shadow-md shadow-gray-500 px-7 py-2">
          <h2 className="text-2xl font-bold mb-8">OGA NA BOSS</h2>
          <h1 className="text-5xl font-bold text-green-500 my-6">₦99,000</h1>
          <button
            className="bg-gray-50 text-green-400 rounded-md py-1 px-3 mb-8"
            onClick={() => setShowModal({ open: true, name: "OGA NA BOSS" })}
          >
            View Basket Contents
          </button>
          <a
            href="https://wa.me/2347082223332?text=I'm%20interested%20in%20the%20OGA%20NA%BOSS%20package%20for%20sale"
            target="_blank"
          >
            <button className="bg-gray-50 text-green-400 rounded-xl py-1 px-8 mb-4">
              Buy
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Baskets;
