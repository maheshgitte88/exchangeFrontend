import React from "react";

function TransactionHistory() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 flex bg-white shadow dark:border-gray-700 dark:bg-gray-900 flex-wrap">
        <div className="col-start-1 col-end-7	text-4xl font-semibold pl-6 m-2">Transaction History</div>
        <div className="flex col-start-1 col-end-7	text-2xl 	font-normal pl-6 m-2">
          <div className="mr-2 hover:border-gray-300">
            All
          </div>
          <div className="ml-4 hover:border-gray-300">
            Spot
          </div>
          <div className="ml-4 hover:border-gray-300">
            Future
          </div>
        </div>
      </div>

      <div id="trade">
        <div
          style={{ fontFamily: "BinancePlex, Arial, sans-serif !important;" }}
        ></div>
        <div className="border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900">
          <ul
            id="myTab"
            className="nf flex-cols -mb-px flex overflow-x-hidden bg-gray-200 dark:bg-gray-800"
            role="tablist"
          >
            <li>
              <a
                id="open-orders-tab"
                className="inline-block py-2 pl-3 pr-4 text-xs font-medium border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                type="button"
                role="tab"
                aria-controls="open-orders"
                aria-selected="false"
              >
                All
              </a>
            </li>
            <li>
              <a
                id="closed-orders-tab"
                className="inline-block py-2 pl-3 pr-4 text-xs font-medium cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                type="button"
                role="tab"
                aria-controls="closed-orders"
                aria-selected="false"
              >
                Spot
              </a>
            </li>
          </ul>
          <div
            id="open-orders"
            className="pt-3"
            role="tabpanel"
            style={{ minHeight: "300px" }}
          >
            <div className="overflow-x-auto">
              <table className="v-table w-full text-left text-gray-500 dark:text-gray-400">
                <thead>
                  <tr className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            No{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Date & Time{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Account Type{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Order Id{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Change Amount{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Avaiable Amount{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                          Remarks{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="p-1"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colspan="100%" className="text-center">
                      <div className="flex w-full justify-center">
                        <img
                          height="128"
                          width="128"
                          src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                          alt=""
                        />
                      </div>{" "}
                      No Data Found
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
          <div
            id="closed-orders"
            className="pt-3 hidden"
            role="tabpanel"
            style={{ minHeight: "300px" }}
          >
            <div className="overflow-x-auto">
              <table className="v-table w-full text-left text-gray-500 dark:text-gray-400">
                <thead>
                  <tr className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Date{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Symbol{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            TxHash{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Side{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Price{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Amount{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Filled{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                    <th className="v-th p-1" scope="col">
                      <div>
                        <span>
                          <div className="flex items-center">
                            Status{" "}
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1 h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                              >
                                <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                              </svg>
                            </a>
                          </div>
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="100%" className="text-center">
                      <div className="flex w-full justify-center">
                        <img
                          height="128"
                          width="128"
                          src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                          alt=""
                        />
                      </div>{" "}
                      No Data Found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionHistory;
