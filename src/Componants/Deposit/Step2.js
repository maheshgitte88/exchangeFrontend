import React from 'react';

const Step2 = ({ setSelectedNetwork }) => {
  const networks = ['Ethereum', 'Binance Smart Chain', 'Polygon']; // Sample networks

  return (
    <>
      <h2 className="text-lg font-semibold mb-2 p-6">Step 2: Select Network</h2>
      <div className="space-y-2">
        {networks.map((network) => (
          <button
            key={network}
            className="btn btn-secondary"
            onClick={() => setSelectedNetwork(network)}
          >
            {network}
          </button>
        ))}
      </div>
    </>
  );
};

export default Step2;
