import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const CryptoDepositPage = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [depositAddress, setDepositAddress] = useState(null);
  const [theme, setTheme] = useState("dark");

  const Handelbackpage = () => {
    window.history.back();
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <>
      <div className={`${theme}-theme p-6`}>
        <h1 className="text-2xl font-semibold mb-4">
          {" "}
          <i
            onClick={Handelbackpage}
            className="bi bi-chevron-left cursor-pointer px-2"
          ></i>{" "}
          Crypto Deposit
        </h1>

        <div className={`flex h-screen`}>
          <div className="w-full p-8 border-r border-gray-300 ">
            <hr />
            <p className="py-4 px-2">
              Get the deposit address for BTC, ETH, or any other crypto and
              deposit <br /> via the blockchain.
            </p>
            <div className="flex items-center space-x-4 py-4 px-2 p-6 ">
              <div className="rounded-full bg-blue-500 flex items-center justify-center w-8 h-8 ">
                <span className="text-white">1</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold ">Select Coin</h5>
              </div>
              &nbsp;&nbsp;
              <div>
                <span className="text-gray-500">---</span>
              </div>
              &nbsp;&nbsp;
              <div className="rounded-full bg-green-500 flex items-center justify-center w-8 h-8">
                <span className="text-white">2</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold">Select Network</h5>
              </div>
              &nbsp;&nbsp;
              <div>
                <span className="text-gray-500">---</span>
              </div>
              &nbsp;&nbsp;
              <div className="rounded-full bg-purple-500 flex items-center justify-center w-8 h-8">
                <span className="text-white">3</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold">Deposit Address</h5>
              </div>
            </div>

            <div className="items-center space-x-4 py-4 px-2 p-6">
              <Step1 setSelectedCoin={setSelectedCoin} />
              {selectedCoin && (
                <Step2 setSelectedNetwork={setSelectedNetwork} />
              )}
              {selectedNetwork && (
                <Step3
                  depositAddress={depositAddress}
                  setDepositAddress={setDepositAddress}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-8 ">
        <div className="p-6">
          <h5 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h5>
          <hr />
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              {" "}
              1) How to deposit crypto?
            </h3>
            <p>Answer to question 1...</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              {" "}
              2) Deposit hasn't arrived?
            </h3>
            <p>Answer to question 2...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDepositPage;
