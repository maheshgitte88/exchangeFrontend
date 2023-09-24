import React from 'react';

const Step1 = ({ setSelectedCoin }) => {
  const coins = ['Bitcoin', 'Ethereum', 'Litecoin']; // Sample coins

  return (
    <>
      <h2 className="text-lg font-semibold mb-2 p-6">Step 1: Select Coin</h2>
      <div className="space-y-2">
        {coins.map((coin) => (
          <button
            key={coin}
            className="btn btn-secondary"
            onClick={() => setSelectedCoin(coin)}
          >
            {coin}
          </button>
        ))}
      </div>
    </>
  );
};

export default Step1;
