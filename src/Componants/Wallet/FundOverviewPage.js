import React from "react";

const FundOverviewPage = () => {
  return (
    <>
      <div class="grid grid-rows-3 grid-flow-col gap-4 mt-4">
        <div class="row-span-2 col-span-2 ...">
          <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <div className="flex justify-between p-4 rounded-lg shadow-md">
              <div className="text-2xl font-semibold mb-4">Funds Overview</div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Deposit
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Withdraw
                </button>
                <button className="px-4 py-2 bg-gray-400 text-white rounded-md">
                  Trade
                </button>
                <button className="px-4 py-2 bg-pink-400 text-white rounded-md">
                  Buy Crypto
                </button>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-semibold mb-2">Total Assets Value</div>
                <div className="text-3xl font-bold">$1,234,567</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-semibold mb-2">Today's PNL</div>
                <div className="text-3xl font-bold text-green-500">
                  +$12,345
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-xl font-semibold mb-4">Classic Account</div>
              <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="font-semibold">Sport Account</div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Deposit
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Withdraw
                  </button>
                  <button className="px-4 py-2 bg-gray-400 text-white rounded-md">
                    Trade
                  </button>
                </div>
              </div>
              <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
                <div className="font-semibold">Payment</div>
                <div className="space-x-4">
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                    Transfer
                  </button>
                </div>
              </div>
              <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
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
              <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
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
        <div class="row-span-3 mt-4">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
              <div className="ml-2 text-lg font-semibold">Profile</div>
            </div>
            <div className="text-sm mb-2">maheshgitte88</div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              more
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-semibold">All Schemes</div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-semibold">Announcements</div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-xs">Posted 2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundOverviewPage;
