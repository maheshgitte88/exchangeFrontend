import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TransactionHistory() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <>
      <div className={`${theme}-theme grid grid-rows-3 grid-flow-col gap-4 mt-4`}>
        <div className="row-span-2 col-span-2 ...">
          <div className="min-h-screen p-4 md:p-8">
            <div className="flex justify-between p-4 rounded-lg shadow-md">
              <div className="text-2xl font-semibold mb-4">Funds Overview</div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  <Link to={'/DepositeCrypto'}>Deposit</Link>
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  <Link to={'/WithdrawCrypto'}>Withdraw</Link>
                </button>
                <button className="px-4 py-2 bg-pink-400 text-white rounded-md">
                  <Link to={'/'}> Buy Crypto</Link>
                </button>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-8">
              <div className=" p-4 rounded-lg shadow-md">
                <div className="font-semibold mb-2">Total Assets Value</div>
                <div className="text-3xl font-bold">$1,234,567</div>
              </div>
              <div className="p-4 rounded-lg shadow-md">
                <div className="font-semibold mb-2">Today's PNL</div>
                <div className="text-3xl font-bold text-green-500">
                  +$12,345
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xl font-semibold mb-4">Classic Account</div>
              <div className="flex justify-between p-4 rounded-lg shadow-md">
                <div className="font-semibold">Sport Account</div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    <Link to={'/DepositeCrypto'}>Deposit</Link>
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    <Link to={'/WithdrawCrypto'}>Withdraw</Link>
                  </button>
                  <button className="px-4 py-2 bg-pink-400 text-white rounded-md">
                    <Link to={'/'}>Trade</Link>
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 rounded-lg shadow-md">
                <div className="font-semibold">Payment</div>
                <div className="space-x-4">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 rounded-lg shadow-md">
                <div className="font-semibold">Futures</div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Transfer
                  </button>
                  <button className="px-4 py-2 bg-gray-400 text-white rounded-md">
                    Trade
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-4 rounded-lg shadow-md">
                <div className="font-semibold">Margin</div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Transfer
                  </button>
                  <button className="px-4 py-2 bg-gray-400 text-white rounded-md">
                    Trade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionHistory;
