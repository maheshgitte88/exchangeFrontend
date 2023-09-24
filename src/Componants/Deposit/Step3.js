import React, { useEffect, useState } from 'react';

const Step3 = ({ depositAddress, setDepositAddress }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleGetAddressClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setDepositAddress('1234567890');
            setIsLoading(false);
        }, 100);
    };

    const handleCopyAddressClick = async () => {
        try {
            await navigator.clipboard.writeText(depositAddress);
            alert('Deposit address copied to clipboard!');
        } catch (error) {
            console.error('Error copying address:', error);
        }
    };

    return (
        <>
            <h2 className="text-lg font-semibold mb-2 p-6">Step 3: Deposit Address</h2>
            {depositAddress ? (
                <div className="mb-4">
                    <p>Deposit Address:</p>
                    <textarea
                        value={depositAddress}
                        style={{color:"black"}}
                        className='w-full bg-gray-100 rounded p-2 resize-none'
                        rows={3}
                        readOnly
                    ></textarea>
                    <button
                        className="btn btn-primary mt-2"
                        onClick={handleCopyAddressClick}
                    >
                        Copy Deposit Address
                    </button>
                </div>
            ) : (
                <div>
                    <p>No Tron (TRC20) deposit address has been previously created.</p>
                    <p>Please first create a deposit address.</p>
                    <button
                        className="btn btn-primary mt-2"
                        onClick={handleGetAddressClick}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Get Address'}
                    </button>
                </div>
            )}
        </>

    );
};

export default Step3;
