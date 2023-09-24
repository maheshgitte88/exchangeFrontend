import React, { useEffect, useState } from "react";

const CryptoWithdrwal = () => {
  const [selectedCoin, setSelectedCoin] = useState("btc");
  const [existingAddressChecked, setExistingAddressChecked] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("eth");
  const [withdrawalQuantity, setWithdrawalQuantity] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  // Mock available quantity and fee data
  const availableQuantity = 5.4321;
  const transactionFee = 0.001;

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleExistingAddressChange = () => {
    setExistingAddressChecked(!existingAddressChecked);
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  const handleWithdrawalQuantityChange = (event) => {
    setWithdrawalQuantity(event.target.value);
  };

  const confirmWithdrawal = () => {
    // Handle withdrawal confirmation
  };

  return (
    <>
      <div class={`${theme}-theme grid grid-rows-3 grid-flow-col gap-4`}>
        <div class="row-span-2 col-span-2">
          <div className="min-h-screen p-4 md:p-8">
            <h1 className="text-3xl font-semibold mb-4">
              Crypto Withdrawal Process
            </h1>

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
                <span className="text-gray-500">--</span>
              </div>
              &nbsp;&nbsp;
              <div className="rounded-full bg-green-500 flex items-center justify-center w-8 h-8">
                <span className="text-white">2</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold">Add Address</h5>
              </div>
              &nbsp;&nbsp;
              <div>
                <span className="text-gray-500">--</span>
              </div>
              &nbsp;&nbsp;
              <div className="rounded-full bg-green-500 flex items-center justify-center w-8 h-8">
                <span className="text-white">3</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold">Salect Network</h5>
              </div>
              &nbsp;&nbsp;
              <div>
                <span className="text-gray-500">--</span>
              </div>
              &nbsp;&nbsp;
              <div className="rounded-full bg-purple-500 flex items-center justify-center w-8 h-8">
                <span className="text-white">4</span>
              </div>
              &nbsp;&nbsp;
              <div>
                <h5 className="text-lg font-semibold">
                  Confirm Withdrawal Information
                </h5>
              </div>
            </div>

            {/* Step 1: Select Coin */}
            <div className="p-4 rounded-lg shadow-md">
              <div className="font-semibold">Step 1: Select Coin</div>
              <select
                className="mt-2 p-2 border rounded-md w-full"
                value={selectedCoin}
                onChange={handleCoinChange}
              >
                <option value="btc">Bitcoin (BTC)</option>   
                
                <option value="eth">Ethereum (ETH)</option>
                {/* Add other options */}
              </select>
              <div className="mt-2 text-gray-500">
                Trending Coins: USDT, BTC, ETH
              </div>
            </div>

            {/* Step 2: Add Address */}
            <div className="p-4 rounded-lg shadow-md mt-4">
              <div className="font-semibold">Step 2: Add Address</div>
              <div className="mt-2 p-2 border rounded-md">
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full"
                />
              </div>
              <div className="mt-2">
                <label className="mr-2">
                  <input
                    type="checkbox"
                    checked={existingAddressChecked}
                    onChange={handleExistingAddressChange}
                  />
                  Use Existing Address
                </label>
              </div>
              {existingAddressChecked && (
                <div className="mt-2 p-2 border rounded-md">
                  <select className="w-full">
                    <option value="existing1">Existing Address 1</option>
                    <option value="existing2">Existing Address 2</option>
                    {/* Add other existing addresses */}
                  </select>
                </div>
              )}
            </div>

            {/* Step 3: Select Network */}
            <div className="p-4 rounded-lg shadow-md mt-4">
              <div className="font-semibold">Step 3: Select Network</div>
              <select
                className="mt-2 p-2 border rounded-md w-full"
                value={selectedNetwork}
                onChange={handleNetworkChange}
              >
                <option value="eth">Ethereum (ETH)</option>
                <option value="bnb">Binance Smart Chain (BNB)</option>
                {/* Add other options */}
              </select>
            </div>

            {/* Step 4: Withdrawal Information */}
            <div className="p-4 rounded-lg shadow-md mt-4">
              <div className="font-semibold">
                Step 4: Withdrawal Information
              </div>
              <div className="mt-2 p-2 border rounded-md">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-full"
                  value={withdrawalQuantity}
                  onChange={handleWithdrawalQuantityChange}
                />
              </div>
              <div className="mt-2 text-gray-500">
                Available Quantity: {availableQuantity}{" "}
                {/* Replace with actual available quantity */}
              </div>
              <div className="mt-2 text-gray-500">
                Transaction Fee: {transactionFee}{" "}
                {/* Replace with actual fee */}
              </div>
              <button
                className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded-md ${
                  withdrawalQuantity <= availableQuantity
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={confirmWithdrawal}
                disabled={withdrawalQuantity > availableQuantity}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

        <div class="row-span-3 gap-4">
          {/* <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            FAQ
          </h1> */}
          <div className="p-6">
            <h5 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h5>
            <hr />
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                {" "}
                1) How to Withdrawal crypto?
              </h3>
              <p>Answer to question 1...</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                {" "}
                2) Withdrawal hasn't arrived?
              </h3>
              <p>Answer to question 2...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoWithdrwal;
