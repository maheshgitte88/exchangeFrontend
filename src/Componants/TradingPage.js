
import "../app-191732dc.css";
import TradingViewChart from "./TradingViewChart";
import { useState } from "react";

function TradingPage() {
  const [activeTab, setActiveTab] = useState('spot');
  const [selectedTab, setSelectedTab] = useState(0);
  const [position, setPosition] = useState(0);

  const handleLeftClick = () => {
    setPosition(Math.max(position - 1, 0));
  };

  const handleRightClick = () => {
    setPosition(Math.min(position + 1, 4));
  };

  const handleTabClickBtn = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const iconStyles = {
    margin: "0px",
    minWidth: "0px",
    fontSize: "24px",
    width: "1em",
    height: "1em",
  };

  return (
    <>

      <div id="trade" >
        <div
          style={{ fontFamily: "BinancePlex, Arial, sans-serif !important;" }}
        >
          <div className="containered" style={{ marginTop: "2px" }}>
            <div className="Info border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 relative">
              <div
                className="flex overflow-x-scroll text-xs text-white items-center space-x-1 p-1"
                data-v-bc69ae8c=""
              >
                <div
                  className="image-container px-5 flex items-center relative"
                  data-v-bc69ae8c=""
                >
                  <img
                    className="image-overlap w-9 h-9"
                    lazy="loaded"
                    src={'https://res.cloudinary.com/daricnizg/image/upload/v1692955341/avax_mmrpne.png'}
                  />

                  <img
                    className="image-overlap w-9 h-9 absolute top-50 left-1/2 -translate-x-1/3"
                    data-v-bc69ae8c=""
                    lazy="loaded"
                    src={'https://res.cloudinary.com/daricnizg/image/upload/v1692955341/usdt_qlohnz.png'}
                  />
                </div>
                <div
                  className="flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded"
                  data-v-bc69ae8c=""
                >
                  <div className="text-dark" data-v-bc69ae8c="">
                    Last Price:
                  </div>
                  <div className="text-success" data-v-bc69ae8c="">
                    28,529.20
                  </div>
                </div>
                <div
                  className="flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded"
                  data-v-bc69ae8c=""
                >
                  <div className="text-dark" data-v-bc69ae8c="">
                    24h Change:
                  </div>
                  <div data-v-bc69ae8c="">
                    <span className="text-success" data-v-bc69ae8c="">
                      -2.21 %
                    </span>
                    <i className="bi" data-v-bc69ae8c=""></i>
                  </div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden sm:block"
                  data-v-bc69ae8c=""
                >
                  <div data-v-bc69ae8c="">BTC Volume:</div>
                  <div data-v-bc69ae8c="">2,467.99</div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden sm:block"
                  data-v-bc69ae8c=""
                >
                  <div data-v-bc69ae8c="">USDT Volume:</div>
                  <div data-v-bc69ae8c="">71,096,695.23</div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden lg:block"
                  data-v-bc69ae8c=""
                >
                  <div data-v-bc69ae8c="">24h High:</div>
                  <div data-v-bc69ae8c="">29,234.10</div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden lg:block"
                  data-v-bc69ae8c=""
                >
                  <div data-v-bc69ae8c="">24h Low:</div>
                  <div data-v-bc69ae8c="">28,312.20</div>
                </div>
              </div>
            </div>

            <div className="Orderbook border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 relative">


              <ul className="flex p-1 xs:hidden md:flex" role="tablist">
                <li className="p-1">
                  <button onClick={() => handleTabClickBtn(0)}>
                    <svg

                      viewBox="0 0 24 24"
                      fill="none"
                      className="css-3kwgah"
                      style={iconStyles}
                    >
                      <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
                      <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
                      <path
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li className="p-1">
                  <button onClick={() => handleTabClickBtn(1)} className="text-gray-200 dark:text-gray-600">
                    <svg

                      viewBox="0 0 24 24"
                      fill="none"
                      className="css-3kwgah"
                      style={iconStyles}
                    >
                      <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
                      <path
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li className="p-1">
                  <button onClick={() => handleTabClickBtn(2)} className="text-gray-200 dark:text-gray-600">
                    <svg

                      viewBox="0 0 24 24"
                      fill="none"
                      className="css-3kwgah"
                      style={iconStyles}
                    >
                      <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
                      <path
                        d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>

              {selectedTab === 0 && (
                <div className="Asks">
                  <div className="LastPrice"></div>
                  <div className="Bids"></div>
                </div>
              )}

              {selectedTab === 1 && (
                <div className="Asks">
                  <div className="LastPrice"></div>
                </div>
              )}

              {selectedTab === 2 && (
                <div className="Bids">
                  <div className="LastPrice"></div>
                </div>
              )}



              <div className="OrderbookGrid">
                {selectedTab === 0 && (
                  <>
                    <div className="Asks">
                      <table style={{ overflowX: "hidden" }}>
                        <thead >
                          <th
                            className="text-start"
                            scope="col"
                            style={{ paddingLeft: "5px" }}
                          >
                            Price
                          </th>
                          <th className="text-center if-sm" scope="col">
                            Amount
                          </th>
                          <th
                            className="text-end"
                            scope="col"
                            style={{ paddingRight: "5px" }}
                          >
                            Total
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.8</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.33746996</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                9,628.6{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.2</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>4.75515453</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                135,670.3{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.1</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.00250000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                71.3{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "2.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.10731111</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                3,061.7{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "12.5" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,529.3</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.39484085</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                11,264.5{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "47.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,529.2</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>2.81994823</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                80,450.9{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "337.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="LastPrice xs:hidden md:block">
                      <div className="p-3">
                        <span >Last Price: </span>
                        <span className="text-danger">28529.2</span>
                        <i className="bi bi-arrow-down text-danger"></i>
                      </div>
                    </div>
                    <div className="Bids">
                      <table style={{ overflowX: "hidden" }}>
                        <thead className="xs:flex md:hidden">
                          <th className="pl-2 text-start" scope="col">
                            Price
                          </th>
                          <th className="text-center if-sm" scope="col">
                            Amount
                          </th>
                          <th className="text-end" scope="col">
                            Total
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>1.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>3.68361639</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                3.7{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "400px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>1.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>61,979.46731840</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                61,979.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "400px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,524.3</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.18462701</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                5,266.4{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "22.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,525.9</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.29000000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                8,272.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,526.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.00100000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                28.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "2.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {selectedTab === 1 && (
                  <>
                    <div className="Asks">
                      <table style={{ overflowX: "hidden" }}>
                        <thead >
                          <th
                            className="text-start"
                            scope="col"
                            style={{ paddingLeft: "5px" }}
                          >
                            Price
                          </th>
                          <th className="text-center if-sm" scope="col">
                            Amount
                          </th>
                          <th
                            className="text-end"
                            scope="col"
                            style={{ paddingRight: "5px" }}
                          >
                            Total
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.8</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.33746996</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                9,628.6{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.2</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>4.75515453</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                135,670.3{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.1</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.00250000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                71.3{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "2.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,531.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.10731111</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                3,061.7{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "12.5" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,529.3</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.39484085</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                11,264.5{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "47.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-red-500">
                              <span>28,529.2</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>2.81994823</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                80,450.9{" "}
                                <div
                                  className="percent_ask"
                                  style={{ width: "337.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="LastPrice xs:hidden md:block">
                      <div className="p-3">
                        <span >Last Price: </span>
                        <span className="text-danger">28529.2</span>
                        <i className="bi bi-arrow-down text-danger"></i>
                      </div>
                    </div>

                  </>
                )}


                {selectedTab === 2 && (
                  <>
                    <div className="LastPrice xs:hidden md:block">
                      <div className="p-3">
                        <span >Last Price: </span>
                        <span className="text-danger">28529.2</span>
                        <i className="bi bi-arrow-down text-danger"></i>
                      </div>
                    </div>
                    <div className="Bids">
                      <table style={{ overflowX: "hidden" }}>
                        <thead className="xs:flex md:hidden">
                          <th className="pl-2 text-start" scope="col">
                            Price
                          </th>
                          <th className="text-center if-sm" scope="col">
                            Amount
                          </th>
                          <th className="text-end" scope="col">
                            Total
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>1.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>3.68361639</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                3.7{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "400px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>1.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>61,979.46731840</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                61,979.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "400px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,524.3</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.18462701</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                5,266.4{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "22.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,525.9</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.29000000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                8,272.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "40px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="tdd price text-green-400">
                              <span>28,526.0</span>
                            </td>
                            <td className="tdd quantity if-sm text-dark">
                              <span>0.00100000</span>
                            </td>
                            <td className="tdd btc text-dark">
                              <span>
                                28.5{" "}
                                <div
                                  className="percent_bid"
                                  style={{ width: "2.5px" }}
                                ></div>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>

                )}



              </div>
            </div>




            <div
              className="Markets border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 relative"
              favs="false"
            >



              <div className="mb-4 flex border-gray-200 dark:border-gray-800">
                <button className="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={handleLeftClick}>
                  <i className="bi bi-chevron-left text-warning"></i>
                </button>
                <div className="overflow-hidden">
                  <ul
                    id="myTab"
                    className="nf flex-cols -mb-px flex bg-gray-200 text-center text-sm font-medium dark:bg-gray-800 w-full"
                    role="tablist"
                    style={{ transform: `translateX(-${position * 70}%)` }}
                  >
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300">
                          USDT
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          BTC
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          ETH
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          KCS
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          TRX
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          TUSD
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          DAI
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          USDC
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          DOGE
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          BRL
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          EUR
                        </a>
                      </small>
                    </li>
                    <li>
                      <small>
                        <a className="inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          GBP
                        </a>
                      </small>
                    </li>
                  </ul>
                </div>
                <button className="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700" onClick={handleRightClick} >
                  <i className="bi bi-chevron-right text-warning fs-6"></i>
                </button>
              </div>

              <div id="myTabContent" className="px-3">
                <div >
                  <div>
                    <div className="mb-3 flex items-center">
                      <label for="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          id="simple-search"
                          type="text"
                          className="block w-full rounded border border-gray-300 bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder="          Search"
                        />
                      </div>
                    </div>
                    <div className="mb-2 flex justify-between text-start text-xs">
                      <a className="flex">
                        <span className="mr-1">Market</span>
                        <div className="flex flex-col" style={{ fontSize: "8px" }}>
                          <i
                            className="bi bi-caret-up"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                          <i
                            className="bi bi-caret-down"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                        </div>
                      </a>
                      <a className="flex">
                        <span className="mr-1">Change %</span>
                        <div className="flex flex-col" style={{ fontSize: "8px" }}>
                          <i
                            className="bi bi-caret-up"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                          <i
                            className="bi bi-caret-down"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                        </div>
                      </a>
                      <a className="flex">
                        <span className="mr-1">Price</span>
                        <div className="flex flex-col" style={{ fontSize: "8px" }}>
                          <i
                            className="bi bi-caret-up"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                          <i
                            className="bi bi-caret-down"
                            style={{ lineHeight: "0px !important" }}
                          ></i>
                        </div>
                      </a>
                    </div>
                    <div
                      className="vue-recycle-scroller ready direction-vertical scroller text-xs"
                      style={{ marginRight: "-10px" }}
                    >
                      <div
                        className="vue-recycle-scroller__item-wrapper"
                        style={{ minHeight: "850px" }}
                      >
                        <div
                          className="vue-recycle-scroller__item-view"
                          style={{
                            transform: "translateY(0px) translateX(0px)",
                          }}
                        >
                          <div className="flex justify-between text-start">
                            <div>
                              <button
                                type="button"
                                className="not-watchlisted"
                                style={{
                                  background: "transparent",
                                  border: "transparent",
                                }}
                              >
                                <i className="text-secondary bi bi-star mr-1"></i>
                              </button>
                              <a href="/trade/AVA/USDT" >
                                <span className="text-dark fw-bold">AVA/</span>
                                <span className="text-secondary fw-bold">USDT</span>
                              </a>
                            </div>
                            <span className="text-end text-danger">-1.71</span>
                            <span className="text-end mr-1 text-danger">
                              0.5535570
                            </span>
                          </div>
                        </div>
                        <div
                          className="vue-recycle-scroller__item-view"
                          style={{
                            transform: "translateY(22px) translateX(0px)",
                          }}
                        >
                          <div className="flex justify-between text-start">
                            <div>
                              <button
                                type="button"
                                className="not-watchlisted"
                                style={{
                                  background: "transparent",
                                  border: "transparent",
                                }}
                              >
                                <i className="text-secondary bi bi-star mr-1"></i>
                              </button>
                              <a href="/trade/MTV/USDT" >
                                <span className="text-dark fw-bold">MTV/</span>
                                <span className="text-secondary fw-bold">USDT</span>
                              </a>
                            </div>
                            <span className="text-end text-success">0.15</span>
                            <span className="text-end mr-1 text-danger">
                              0.0011103
                            </span>
                          </div>
                        </div>
                        <div
                          className="vue-recycle-scroller__item-view"
                          style={{
                            transform: "translateY(44px) translateX(0px)",
                          }}
                        >
                          <div className="flex justify-between text-start">
                            <div>
                              <button
                                type="button"
                                className="not-watchlisted"
                                style={{
                                  background: "transparent",
                                  border: "transparent",
                                }}
                              >
                                <i className="text-secondary bi bi-star mr-1"></i>
                              </button>
                              <a href="/trade/KMD/USDT" >
                                <span className="text-dark fw-bold">KMD/</span>
                                <span className="text-secondary fw-bold">USDT</span>
                              </a>
                            </div>
                            <span className="text-end text-danger">-2.60</span>
                            <span className="text-end mr-1 text-danger">
                              0.2096000
                            </span>
                          </div>
                        </div>
                        {/* <div className="vue-recycle-scroller__item-view"
                    style={{ transform: 'translateY(484px) translateX(0px)' }}>
                    <div className="flex justify-between text-start">
                      <div><button type="button" className="not-watchlisted"
                        style={{ background: "transparent", border: "transparent" }} ><i
                          className="text-secondary bi bi-star mr-1"></i></button><a
                            href="/trade/CHZ/USDT" ><span
                              className="text-dark fw-bold">CHZ/</span><span
                                className="text-secondary fw-bold">USDT</span></a></div><span
                                  className="text-end text-danger">-1.00</span><span
                                    className="text-end mr-1 text-danger">0.0691800</span>
                    </div>
                  </div>
                  <div className="vue-recycle-scroller__item-view"
                    style={{ transform: 'translateY(506px) translateX(0px)' }}>
                    <div className="flex justify-between text-start">
                      <div><button type="button" className="not-watchlisted"
                        style={{ background: "transparent", border: "transparent" }}><i
                          className="text-secondary bi bi-star mr-1"></i></button><a
                            href="/trade/NOIA/USDT" ><span
                              className="text-dark fw-bold">NOIA/</span><span
                                className="text-secondary fw-bold">USDT</span></a></div><span
                                  className="text-end text-success">4.65</span><span
                                    className="text-end mr-1 text-danger">0.0266940</span>
                    </div>
                  </div> */}
                      </div>
                      <div
                        className="resize-observer"
                        tabindex="-1"
                        data-v-b329ee4c=""
                      >
                        <object
                          aria-hidden="true"
                          tabindex="-1"
                          type="text/html"
                          data="about:blank"
                        ></object>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <loadingcircles loading="false"></loadingcircles>
            </div>

            <div
              className="Trades border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 relative"
              style={{ overflow: "hidden auto" }}
            >
              <div className="w-full bg-gray-200 dark:bg-gray-800">
                <ul
                  id="myTab"
                  className="nf flex-cols -mb-px flex overflow-x-hidden text-center"
                  role="tablist"
                >
                  <li className="mr-2">
                    <a
                      id="marketTrades-tab"
                      className="inline-block py-2 pl-3 pr-4 text-xs font-medium border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                      type="button"
                      role="tab"
                      aria-controls="marketTrades"
                      aria-selected="false"
                    >
                      Market Trades
                    </a>
                  </li>
                </ul>
              </div>
              <div id="tradesContent">
                <div id="marketTrades" className="px-3 pt-3">
                  <table>
                    <thead>
                      <th className="text-start" scope="col">
                        Price
                      </th>
                      <th className="text-end" scope="col">
                        Amount
                      </th>
                      <th
                        className="text-end"
                        scope="col"
                        style={{ paddingRight: "5px" }}
                      >
                        Time
                      </th>
                    </thead>
                    <tbody>
                      <tr className="tdd">
                        <td
                          className="price"
                          style={{ color: "rgb(14, 203, 129)" }}
                        >
                          28,529.2
                        </td>
                        <td className="amount text-dark text-end">0.00036580</td>
                        <td className="time text-dark text-end">11:36:01</td>
                      </tr>
                      <tr className="tdd">
                        <td className="price" style={{ color: "rgb(246, 70, 93)" }}>
                          28,529.1
                        </td>
                        <td className="amount text-dark text-end">0.00071894</td>
                        <td className="time text-dark text-end">11:35:59</td>
                      </tr>
                      <tr className="tdd">
                        <td
                          className="price"
                          style={{ color: "rgb(14, 203, 129)" }}
                        >
                          28,529.2
                        </td>
                        <td className="amount text-dark text-end">0.00006950</td>
                        <td className="time text-dark text-end">11:35:58</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <loadingcircles loading="false"></loadingcircles>
            </div>

            {/* <div id="creatable"
          className="Chart border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900">
          <div id="tv_chart_container" style={{height:"100%"}}><iframe id="tradingview_56271"
          name="tradingview_56271"
          src="/charting_library/static/en-tv-chart.c63b141fec55a3c31066.html#symbol=BTC%2FUSDT&amp;interval=60&amp;toolbarbg=1F2937&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%22W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%22W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_56271&amp;clientId=chart&amp;userId=0&amp;chartsStorageVer=1.1&amp;debug=false&amp;timezone=Asia%2FCalcutta&amp;theme=Dark"
          width="100%" height="100%" frameborder="0" allowtransparency="true" scrolling="no"
          allowfullscreen="" style={{display:"block"}}></iframe></div>
          </div> */}

            <div
              id="creatable"
              className="Chart border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
            >
              <div>
                <TradingViewChart />
              </div>
            </div>

            <div
              className="Order border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
              data-v-8f71af4b=""
            >

              <div className="w-full bg-gray-200 dark:bg-gray-800">
                <ul className="nf flex-cols -mb-px flex overflow-x-hidden text-center">
                  <li>
                    <button
                      className={`inline-block py-2 pl-3 pr-4 text-xs font-medium ${activeTab === 'spot' ? 'active-tab' : 'inactive-tab'
                        }`}
                      onClick={() => handleTabClick('spot')}
                    >
                      Spot
                    </button>
                  </li>
                  <li>
                    <button
                      className={`inline-block py-2 pl-3 pr-4 text-xs font-medium ${activeTab === 'limit' ? 'active-tab' : 'inactive-tab'
                        }`}
                      onClick={() => handleTabClick('limit')}
                    >
                      Limit
                    </button>
                  </li>
                </ul>
              </div>



              <div id="myTabContent" className="px-3 py-3" data-v-8f71af4b="">
                {activeTab === 'spot' ?

                  <div
                    id="spot"

                    role="tabpanel"
                    aria-labelledby="spot-tab"
                    data-v-8f71af4b=""
                  >
                    <div className="grid grid-cols-2 gap-5" data-v-8f71af4b="">
                      <form className="space-y-5 text-center" data-v-8f71af4b="">
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                <button
                                  className="order-btn bg-gray-900 dark:bg-gray-50"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                0%{" "}
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="MarketBuy order-input disabled:opacity-50"
                              min="0.00001"
                              max="10000000000"
                              step="0.00001"
                              required=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2"> BTC</span>
                          </div>
                        </div>
                        <div disabled="true">
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Taker Fee: <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <a href="/app">
                          <button
                            className="text-green-700 border-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 px-3 py-1.5 w-full mt-5 text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 text-sm px-3 py-1.5 w-full mt-5 marketType"
                            id="marketOrderBtnBuy"
                            type="button"
                          >
                            <span >Login To Trade</span>
                          </button>
                        </a>
                      </form>
                      <form className="space-y-5 text-center" data-v-8f71af4b="">
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                <button
                                  className="order-btn bg-gray-900 dark:bg-gray-50"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                0%{" "}
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="MarketSell order-input disabled:opacity-50"
                              min="0.00001"
                              max="10000000000"
                              step="0.00001"
                              required=""
                              aria-label="Amount (to the nearest dollar)"
                            />

                            <span className="order-span-2"> BTC</span>
                          </div>
                        </div>
                        <div disabled="true">
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Maker Fee: <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <a href="/app">
                          <button
                            className="text-red-700 border-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 px-3 py-1.5 w-full mt-5 text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 text-sm px-3 py-1.5 w-full mt-5 marketType"
                            id="marketOrderBtnSell"
                            type="button"
                          >
                            <span >Login To Trade</span>
                          </button>
                        </a>
                      </form>
                    </div>
                  </div> : null}

                {activeTab === 'limit' ?
                  <div
                    id="limit"
                    role="tabpanel"
                    aria-labelledby="limit-tab"
                    data-v-8f71af4b=""
                  >
                    <div className="grid grid-cols-2 gap-5" data-v-8f71af4b="">
                      <form className="space-y-5 text-center" data-v-8f71af4b="">
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Price</span>
                            <a className="text-warning">Best Ask</a>
                          </label>
                          <div className="flex">
                            <input
                              id="price"
                              type="number"
                              className="priceNowAsk order-input disabled:opacity-50"
                              min="0.1"
                              step="0.1"
                              required=""
                              placeholder="Price"
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                <button
                                  className="order-btn bg-gray-900 dark:bg-gray-50"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                0%{" "}
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="MarketBuy order-input disabled:opacity-50"
                              min="0.00001"
                              max="10000000000"
                              step="0.00001"
                              required=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2"> BTC</span>
                          </div>
                        </div>
                        <div disabled="true">
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Taker Fee: <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <a href="/app">
                          <button
                            className="text-green-700 border-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 px-3 py-1.5 w-full mt-5 text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 text-sm px-3 py-1.5 w-full mt-5 limitType"
                            id="limitOrderBtnBuy"
                            type="button"
                          >
                            <span >Login To Trade</span>
                          </button>
                        </a>
                      </form>
                      <form className="space-y-5 text-center" data-v-8f71af4b="">
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Price</span>
                            <a className="text-warning">Best Bid</a>
                          </label>
                          <div className="flex">
                            <input
                              id="price"
                              type="number"
                              className="priceNowAsk order-input disabled:opacity-50"
                              min="0.1"
                              step="0.1"
                              required=""
                              placeholder="Price"
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <div>
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                <button
                                  className="order-btn bg-gray-900 dark:bg-gray-50"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                                <button
                                  className="order-btn bg-gray-300 dark:bg-gray-500"
                                  type="button"
                                ></button>
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                0%{" "}
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="MarketSell order-input disabled:opacity-50"
                              min="0.00001"
                              max="10000000000"
                              step="0.00001"
                              required=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2"> BTC</span>
                          </div>
                        </div>
                        <div disabled="true">
                          <label
                            for="basic-url"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Maker Fee: <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <a href="/app">
                          <button
                            className="text-red-700 border-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 px-3 py-1.5 w-full mt-5 text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 text-sm px-3 py-1.5 w-full mt-5 limitType"
                            id="limitOrderBtnSell"
                            type="button"
                          >
                            <span >Login To Trade</span>
                          </button>
                        </a>
                      </form>
                    </div>
                  </div>
                  : null}


              </div>
            </div>
          </div>

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
                  Open Orders
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
                  Order History
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
                        <div >
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
      </div>
    </>
  );
}

export default TradingPage;
