import axios from "axios";
import "../app-191732dc.css";
import TradingViewChart from "./TradingViewChart";
import { useEffect, useRef, useState } from "react";
import DepthChart from "./DepthChart/DepthChart";


const HtableHeaders = ['Date', 'Symbol', 'TxHash', 'Side', 'Price', 'Amount', 'Filled', 'Status'];
const tableHeaders = ['Date', 'Symbol', 'TxHash', 'Side', 'Price', 'Amount', 'Filled', 'Order Status'];
const coinSymbols = ['USDT', 'BTC', 'ETH', 'KCS', 'TRX', 'TUSD', 'DAI', 'USDC', 'DOGE', 'BRL', 'EUR', 'GBP'];
const sampleData = [
  { date: '2022-01-01', symbol: 'BTC', txHash: '0xabc123', side: 'Buy', price: 43864.99, amount: 2, filled: 1, status: 'Completed' },
  { date: '2022-01-02', symbol: 'ETH', txHash: '0xyz789', side: 'Sell', price: 2250, amount: 8, filled: 6, status: 'Pending' },
];

function TradingPage() {
  const [activeTab, setActiveTab] = useState("spot");
  const [activeTabOrders, setActiveTabOrders] = useState("O-Orders");
  const [allcoinData, setCoinAllData] = useState([])
  const [coinData, setCoinData] = useState([]);
  const [coinPrice, setCoinPrice] = useState(null)
  const [askData, setAskData] = useState([]);
  const [bidData, setBidsData] = useState([])
  const [selectedTab, setSelectedTab] = useState(0);
  const [position, setPosition] = useState(0);
  const [selectedSymbol, setSelectedSymbol] = useState("BTC");
  const [arrIndex, setArrIndex] = useState(0)
  const [selectedRow, setSelectedRow] = useState(null);
  const [manualQuantity, setManualQuantity] = useState(0);
  const intervalRef = useRef(null);
  const maxBidQuantity = Math.max(...bidData.map((item) => item.quantity));
  const [tradeHistory, setTradeHistory] = useState([]);
  const [pair, setPair] = useState('USDT'); // Initialize pair state
  const [waitlistItems, setWaitlistItems] = useState([]);

  const handelPairChnage = (selectedSymbol) => {
    setPair(selectedSymbol);
  };
  const handleInputChange = (e) => {
    setManualQuantity(parseFloat(e.target.value));
  };

  const handleTrade = () => {
    const tradeEntry = {
      price: selectedRow?.price || 0,
      amount: manualQuantity,
      time: new Date().toLocaleTimeString(),
    };

    setTradeHistory([tradeEntry, ...tradeHistory]);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await axios.get(
          'https://api.coincap.io/v2/assets?limit=18'
        );
        console.log(resData);
        const initialPrice = parseFloat(resData.data.data[arrIndex].priceUsd);
        setCoinAllData(resData.data.data[arrIndex]);
        setCoinData(resData.data.data);
        setCoinPrice(initialPrice);
        setAskData(generateRandomData(initialPrice));
        setBidsData(generateRandomBidsData(initialPrice))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [arrIndex]);

  useEffect(() => {
    // Start updating data every 1 to 10 seconds after initial fetch
    intervalRef.current = setInterval(() => {
      setAskData((prevData) => {
        const updatedData = [...prevData];
        const randomFactor = Math.random() * 0.1 - 0.05;
        const randomPrice = coinPrice + coinPrice * randomFactor;
        const randomQuantity = Math.random() * 1;
        const randomBTC = randomQuantity * randomPrice;

        updatedData[Math.floor(Math.random() * prevData.length)] = {
          price: randomPrice.toFixed(2),
          quantity: randomQuantity.toFixed(8),
          btc: randomBTC.toFixed(2),
        };

        return updatedData;
      });

      setBidsData((prevData) => {
        const updatedData = [...prevData];
        const randomFactor = Math.random() * 0.1 - 0.05;
        const randomPrice = coinPrice + coinPrice * randomFactor;
        const randomQuantity = Math.random() * 1;
        const randomBTC = randomQuantity * randomPrice;

        updatedData[Math.floor(Math.random() * prevData.length)] = {
          price: randomPrice.toFixed(2),
          quantity: randomQuantity.toFixed(8),
          btc: randomBTC.toFixed(2),
        };

        return updatedData;
      });
    }, Math.floor(Math.random() * 1000) + 300); // Random time between 1 to 5 seconds
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [coinPrice]);

  const generateRandomData = (basePrice) => {
    return Array.from({ length: 14 }, (_, index) => {
      const randomFactor = Math.random() * 0.1 - 0.05;
      const randomPrice = basePrice + basePrice * randomFactor;
      const randomQuantity = Math.random() * 1;
      const randomBTC = randomQuantity * randomPrice;

      return {
        price: randomPrice.toFixed(2),
        quantity: randomQuantity.toFixed(8),
        btc: randomBTC.toFixed(2),
      };
    });
  };

  const generateRandomBidsData = (basePrice) => {
    return Array.from({ length: 14 }, (_, index) => {
      const randomFactor = Math.random() * 0.1 - 0.05;
      const randomPrice = basePrice + basePrice * randomFactor;
      const randomQuantity = Math.random() * 1;
      const randomBTC = randomQuantity * randomPrice;

      return {
        price: randomPrice.toFixed(2),
        quantity: randomQuantity.toFixed(8),
        btc: randomBTC.toFixed(2),
      };
    });
  };


  const hamdelCoinIndex = (indexofapiArray) => {
    setArrIndex(indexofapiArray - 1)
  }

  const handleCoinPrice = (price) => {
    setCoinPrice(price);
  }

  const handleSymbolRowClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  const maxQuantity = Math.max(...askData.map((item) => item.quantity));


  const handleRowClick = (index) => {
    setSelectedRow(askData[index]);
    setManualQuantity(askData[index].quantity);
  };

  const handleButtonClick = (percent) => {
    const newQuantity = (percent / 100) * maxQuantity;
    setManualQuantity(newQuantity);
  };

  const [selectedBidRow, setSelectedBidRow] = useState(null);
  const [manualBidQuantity, setManualBidQuantity] = useState(0);

  const handleBidRowClick = (index) => {
    setSelectedBidRow(bidData[index]);
    setManualBidQuantity(bidData[index].quantity);
  };

  const handleBidInputChange = (event) => {
    setManualBidQuantity(event.target.value);
  };

  const handleBidButtonClick = (percent) => {
    const newBidQuantity = (percent / 100) * maxBidQuantity;
    setManualBidQuantity(newBidQuantity);
  };

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
  const handleOrderTabClick = (tab) => {
    setActiveTabOrders(tab);
  };
  const iconStyles = {
    margin: "0px",
    minWidth: "0px",
    fontSize: "24px",
    width: "1em",
    height: "1em",
  };


  useEffect(() => {
    const storedWaitlistItems = JSON.parse(localStorage.getItem('waitlistItems')) || [];
    setWaitlistItems(storedWaitlistItems);
  }, []);

  const handleStarClick = (symbol) => {
    // Toggle waitlist status
    const updatedWaitlistItems = waitlistItems.includes(symbol)
      ? waitlistItems.filter(item => item !== symbol)
      : [...waitlistItems, symbol];

      console.log(updatedWaitlistItems, 227)
    // Update local storage
    localStorage.setItem('waitlistItems', JSON.stringify(updatedWaitlistItems));

    // Update state
    setWaitlistItems(updatedWaitlistItems);
  };

  const isWaitlisted = (symbol) => waitlistItems.includes(symbol);

 


  return (
    <>
      <div id="trade">
        <div
          style={{ fontFamily: "BinancePlex, Arial, sans-serif !important;" }}
        >

          <div className="containered" style={{ marginTop: "2px" }}>
            <div className="Info border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900 relative">


              <div
                className="flex overflow-x-scroll text-xs text-white items-center space-x-1 p-1"

              >
                <div
                  className="image-container px-5 flex items-center relative"

                >
                  <img
                    className="image-overlap w-9 h-9"
                    lazy="loaded"
                    src={
                      "https://res.cloudinary.com/daricnizg/image/upload/v1704629719/btc_mae7w3.png"
                    }
                  />

                  <img
                    className="image-overlap w-9 h-9 absolute top-50 left-2 -translate-x-1/3"

                    lazy="loaded"
                    src={
                      "https://res.cloudinary.com/daricnizg/image/upload/v1692955341/usdt_qlohnz.png"
                    }
                  />
                </div>
                <div
                  className="flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded"

                >
                  <div className="text-dark" >
                    Last Price:
                  </div>
                  <div className="text-success" >
                    {Number(allcoinData.priceUsd).toFixed(4)}
                  </div>
                </div>
                <div
                  className="flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded"

                >
                  <div className="text-dark" >
                    24h Change:
                  </div>
                  <div >
                    {allcoinData.changePercent24Hr > 0 ? <>  <span className="text-success" >
                      {Number(allcoinData.changePercent24Hr).toFixed(4)} %
                    </span></> : <>  <span className="text-danger" >
                      {Number(allcoinData.changePercent24Hr).toFixed(4)} %
                    </span></>}

                    <i className="bi" ></i>
                  </div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden sm:block"

                >
                  <div >BTC Volume:</div>
                  <div > {Number(allcoinData.volumeUsd24Hr).toFixed(4)} % </div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden sm:block"

                >
                  <div >USDT Volume:</div>
                  <div >{Number(allcoinData.volumeUsd24Hr).toFixed(4)} </div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden lg:block"

                >
                  <div >24h High:</div>
                  <div >{Number(allcoinData.priceUsd).toFixed(4) + 1} </div>
                </div>
                <div
                  className="text-dark flex-1 shadow p-2 bg-white dark:bg-gray-800 rounded xs:hidden lg:block"

                >
                  <div >24h Low:</div>
                  <div >{Number(allcoinData.priceUsd).toFixed(4) - 0.99} </div>
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
                  <button
                    onClick={() => handleTabClickBtn(2)}
                    className="text-gray-200 dark:text-gray-600"
                  >
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
                  <button
                    onClick={() => handleTabClickBtn(1)}
                    className="text-gray-200 dark:text-gray-600"
                  >
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
              <div className="OrderbookGrid">
                {selectedTab === 0 && (
                  <>
                    <div className="Asks">
                      <table style={{ overflowX: "hidden" }}>
                        <thead>
                          <tr>
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
                          </tr>
                        </thead>
                        <tbody>
                          {askData.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => handleRowClick(index)}
                            >
                              <td className="tdd price text-red-500">
                                <span>{item.price}</span>
                              </td>
                              <td className="tdd quantity if-sm text-dark">
                                <span>{item.quantity}</span>
                              </td>
                              <td className="tdd btc text-dark">
                                <span>
                                  {item.btc}{" "}
                                  <div
                                    className="percent_ask"
                                    style={{
                                      width: `${(item.quantity / maxQuantity) * 100 * 4
                                        }px`,
                                    }}
                                  ></div>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="LastPrice xs:hidden md:block">
                      <div className="p-3">
                        <span>Last Price: </span>
                        <span className="text-danger">{coinPrice}</span>
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
                          {bidData.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => handleBidRowClick(index)}
                            >
                              <td className="tdd price text-green-400">
                                <span>{item.price}</span>
                              </td>
                              <td className="tdd quantity if-sm text-dark">
                                <span>{item.quantity}</span>
                              </td>
                              <td className="tdd btc text-dark">
                                <span>
                                  {item.btc}{" "}
                                  <div
                                    className="percent_bid"
                                    style={{
                                      width: `${(item.quantity / maxQuantity) *
                                        100 *
                                        4
                                        }px`,
                                    }}
                                  ></div>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {selectedTab === 1 && (
                  <>
                    <div className="Asks">
                      <table style={{ overflowX: "hidden" }}>
                        <thead>
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
                          {askData.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => handleRowClick(index)}
                            >
                              <td className="tdd price text-red-500">
                                <span>{item.price}</span>
                              </td>
                              <td className="tdd quantity if-sm text-dark">
                                <span>{item.quantity}</span>
                              </td>
                              <td className="tdd btc text-dark">
                                <span>
                                  {item.btc}{" "}
                                  <div
                                    className="percent_ask"
                                    style={{
                                      width: `${(item.quantity / maxQuantity) * 100 * 4
                                        }px`,
                                    }}
                                  ></div>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="LastPrice xs:hidden md:block">
                      <div className="p-3">
                        <span>Last Price: </span>
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
                        <span>Last Price: </span>
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
                          {bidData.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => handleBidRowClick(index)}
                            >
                              <td className="tdd price text-green-400">
                                <span>{item.price}</span>
                              </td>
                              <td className="tdd quantity if-sm text-dark">
                                <span>{item.quantity}</span>
                              </td>
                              <td className="tdd btc text-dark">
                                <span>
                                  {item.btc}{" "}
                                  <div
                                    className="percent_bid"
                                    style={{
                                      width: `${(item.quantity / maxQuantity) *
                                        100 *
                                        4
                                        }px`,
                                    }}
                                  ></div>
                                </span>
                              </td>
                            </tr>
                          ))}
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
              {/* salect market pair slider */}

              <div className="mb-4 flex border-gray-200 dark:border-gray-800">
                <button
                  className="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={handleLeftClick}
                >
                  <i className="bi bi-chevron-left text-warning"></i>
                </button>

                <div className="overflow-hidden">
                  <ul
                    id="myTab"
                    className="nf flex-cols -mb-px flex bg-gray-200 text-center text-sm font-medium dark:bg-gray-800 w-full"
                    role="tablist"
                    style={{ transform: `translateX(-${position * 70}%)` }}
                  >
                    {coinSymbols.map((symbol, index) => (
                      <li key={index}>
                        <small>
                          <a
                            onClick={() => handelPairChnage(symbol)}
                            className={`inline-block px-2 py-1 text-gray-600 dark:text-gray-300 cursor-pointer 
                            border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 
                            hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 
                            dark:hover:text-gray-300 ${pair === symbol ? 'selected' : ''}`}
                          >
                            {symbol}
                          </a>
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={handleRightClick}
                >
                  <i className="bi bi-chevron-right text-warning fs-6"></i>
                </button>
              </div>
              {/*sarch section & trade paris */}

              <div id="myTabContent" className="px-3 flex">
                <div>
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
                        <span className="mr-1">Market </span>
                      </a>
                      <a className="flex">
                        <span>Price</span>
                      </a>
                      <a className="flex">
                        <span>%</span>
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
                          style={{ transform: "translateY(0px) translateX(0px)" }}
                        >
                          {coinData.map((item, index) => (
                            <div
                              key={index}
                              className="flex justify-between"
                            >
                              <div className="flex" style={{ fontSize: '11px' }}>
                                <button
                                  type="button"
                                  className="not-watchlisted"
                                  style={{
                                    background: 'transparent',
                                    border: 'transparent',
                                  }}
                                  onClick={() => handleStarClick(item.symbol)}
                                >
                                  {isWaitlisted(item.symbol) ?<i className='waitlisted-star bi bi-star-fill' ></i> :  <i className='bi bi-star mr-1' ></i> }
                                </button>
                                <a onClick={() => {
                                  handleSymbolRowClick(item.symbol);
                                  hamdelCoinIndex(item.rank);
                                }}>
                                  <span className="text-dark fw-bold">{item.symbol}/</span>
                                  <span className="text-secondary fw-bold">{pair}</span>
                                </a>
                              </div>

                              {Number(item.changePercent24Hr) > 0 ? (
                                <>
                                  <span className="text-danger justify-items-start">{Number(item.priceUsd).toFixed(2)}</span>

                                  <span className="text-danger">
                                    {Number(item.changePercent24Hr).toFixed(2)}
                                  </span>

                                </>
                              ) : (
                                <>
                                  <span className="text-success justify-items-start">
                                    {Number(item.priceUsd).toFixed(2)}
                                  </span>
                                  <span
                                    className="text-center"
                                    onClick={() =>
                                      handleCoinPrice(Number(item.changePercent24Hr).toFixed(2))
                                    }
                                  >
                                    {Number(item.changePercent24Hr).toFixed(2)}
                                  </span>

                                </>
                              )}
                            </div>
                          ))}
                        </div>

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
            </div>

            {/* market trades */}
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
                      Market Depth & Trades
                    </a>
                  </li>
                </ul>
              </div>
              <DepthChart selectedSymbol={selectedSymbol} askData={askData} bidData={bidData} />
              <div id="tradesContent">
                <div id="marketTrades" className="px-3 pt-3">
                  <table>
                    <thead>
                      <tr>
                        <th className="text-start" scope="col">
                          Price
                        </th>
                        <th className="text-end" scope="col">
                          Amount
                        </th>
                        <th className="text-end" scope="col">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tradeHistory.map((trade, index) => (
                        <tr key={index} className="tdd">
                          <td className="price">
                            <span style={{ color: trade.amount > { coinPrice } ? 'text-success' : 'text-danger' }}>{trade.price}</span>
                          </td>

                          <td className="amount text-dark text-end">{trade.amount}</td>
                          <td className="time text-dark text-end">{trade.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              id="creatable"
              className="Chart border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
            >
              <div>
                <TradingViewChart selectedSymbol={selectedSymbol} salectedPair={pair} />
              </div>
            </div>

            {/* spot and Limit order place section */}
            <div
              className="Order border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
              data-v-8f71af4b=""
            >
              <div className="w-full bg-gray-200 dark:bg-gray-800">
                <ul className="nf flex-cols -mb-px flex overflow-x-hidden text-center">
                  <li>
                    <button
                      className={`inline-block py-2 pl-3 pr-4 text-xs font-medium ${activeTab === "spot" ? "active-tab" : "inactive-tab"
                        }`}
                      onClick={() => handleTabClick("spot")}
                    >
                      Spot
                    </button>
                  </li>
                  <li>
                    <button
                      className={`inline-block py-2 pl-3 pr-4 text-xs font-medium ${activeTab === "limit" ? "active-tab" : "inactive-tab"
                        }`}
                      onClick={() => handleTabClick("limit")}
                    >
                      Limit
                    </button>
                  </li>
                </ul>
              </div>

              <div id="myTabContent" className="px-3 py-3" data-v-8f71af4b="">
                {activeTab === "spot" ? (
                  <div
                    id="spot"
                    role="tabpanel"
                    aria-labelledby="spot-tab"
                    data-v-8f71af4b=""
                  >
                    <div className="grid grid-cols-2 gap-5" data-v-8f71af4b="">
                      <form className="space-y-5 text-center">
                        <div>
                          <label
                            htmlFor="amount"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={(manualQuantity / maxQuantity) * 100}
                                onChange={handleInputChange}
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                {[0, 25, 50, 75, 100].map((percent) => (
                                  <button
                                    key={percent}
                                    onClick={() => handleButtonClick(percent)}
                                    className="order-btn bg-gray-300 dark:bg-gray-500"
                                    type="button"
                                  ></button>
                                ))}
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                {((manualQuantity / maxQuantity) * 100).toFixed(
                                  2
                                )}
                                %
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={manualQuantity}
                              onChange={handleInputChange}
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
                            htmlFor="cost"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Maker Fee:{" "}
                              <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={manualQuantity * selectedRow?.price || 0}
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        <button
                          className="text-green-700 border-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 px-3 py-1.5 w-full mt-5 text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800 hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600 text-sm px-3 py-1.5 w-full mt-5 limitType"
                          id="limitOrderBtnBuy"
                          onClick={handleTrade}
                          type="button"
                        >
                          <span>Trade</span>
                        </button>
                      </form>
                      <form
                        className="space-y-5 text-center"
                        data-v-8f71af4b=""
                      >
                        <div>
                          <label
                            htmlFor="amount"
                            className="border-1 order-label peer"
                          >
                            <span>Amount </span>
                            <div className="group relative">
                              <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={
                                  (manualBidQuantity / maxBidQuantity) * 100
                                }
                                onChange={handleBidInputChange}
                                className="w-full"
                                style={{
                                  background:
                                    "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                                }}
                              />
                              <div className="mt-1 flex w-full justify-between px-1">
                                {[0, 25, 50, 75, 100].map((percent) => (
                                  <button
                                    key={percent}
                                    onClick={() =>
                                      handleBidButtonClick(percent)
                                    }
                                    className="order-btn bg-gray-300 dark:bg-gray-500"
                                    type="button"
                                  ></button>
                                ))}
                              </div>
                              <div
                                className="hidden bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                style={{
                                  top: "-30px",
                                  left: "-10%",
                                }}
                              >
                                {(
                                  (manualBidQuantity / maxBidQuantity) *
                                  100
                                ).toFixed(2)}
                                %
                              </div>
                            </div>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={manualBidQuantity}
                              onChange={handleBidInputChange}
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
                            htmlFor="cost"
                            className="border-1 order-label peer"
                          >
                            <span>Cost</span>
                            <span>
                              Maker Fee:{" "}
                              <span className="text-warning">0.03%</span>
                            </span>
                          </label>
                          <div className="flex">
                            <input
                              type="number"
                              value={
                                manualBidQuantity * selectedBidRow?.price || 0
                              }
                              className="order-input"
                              disabled=""
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="order-span-2">USDT</span>
                          </div>
                        </div>
                        {/* <a href="/app"> */}
                        <button
                          className="text-red-700 border-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 px-3 py-1.5 w-full mt-5 text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900 hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600 text-sm px-3 py-1.5 w-full mt-5 marketType"
                          id="marketOrderBtnSell"
                          onClick={handleTrade}
                          type="button"
                        >
                          <span>Trade</span>
                        </button>
                        {/* </a> */}
                      </form>
                    </div>
                  </div>
                ) : null}

                {activeTab === "limit" ? (
                  <div
                    id="limit"
                    role="tabpanel"
                    aria-labelledby="limit-tab"
                    data-v-8f71af4b=""
                  >
                    <div className="grid grid-cols-2 gap-5" data-v-8f71af4b="">
                      <form
                        className="space-y-5 text-center"
                        data-v-8f71af4b=""
                      >
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
                              Taker Fee:{" "}
                              <span className="text-warning">0.03%</span>
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
                            <span>Login To Trade</span>
                          </button>
                        </a>
                      </form>
                      <form
                        className="space-y-5 text-center"
                        data-v-8f71af4b=""
                      >
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
                              Maker Fee:{" "}
                              <span className="text-warning">0.03%</span>
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
                            <span>Login To Trade</span>
                          </button>
                        </a>
                      </form>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* second row */}

          <div className="border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900">
            <ul
              id="myTab"
              className="nf flex-cols -mb-px flex overflow-x-hidden bg-gray-200 dark:bg-gray-800"
              role="tablist"
            >
              <li>
                <a
                  id="open-orders-tab"
                  className={`inline-block py-2 pl-3 pr-4 text-xs font-medium border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 ${activeTabOrders === "O-Orders"
                    ? "active-tab"
                    : "inactive-tab"
                    }`}
                  type="button"
                  role="tab"
                  aria-controls="open-orders"
                  aria-selected="false"
                  onClick={() => handleOrderTabClick("O-Orders")}
                >
                  Open Orders
                </a>
              </li>
              <li>
                <a
                  id="closed-orders-tab"
                  className={`inline-block py-2 pl-3 pr-4 text-xs font-medium cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 ${activeTabOrders === "H-Orders"
                    ? "active-tab"
                    : "inactive-tab"
                    }`}
                  type="button"
                  role="tab"
                  aria-controls="closed-orders"
                  aria-selected="false"
                  onClick={() => handleOrderTabClick("H-Orders")}
                >
                  Order History
                </a>
              </li>
            </ul>

            {/* open order sections */}

            {activeTabOrders === "O-Orders" ? (
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
                        {HtableHeaders.map((header, index) => (
                          <th key={index} className="v-th p-1" scope="col">
                            <div>
                              <span>
                                <div className="flex items-center">
                                  {header}{' '}
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
                        ))}
                        <th scope="col" className="p-1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.length === 0 ? (
                        <tr>
                          <td colSpan={HtableHeaders.length + 1} className="text-center">
                            <div className="flex w-full justify-center">
                              <img
                                height="128"
                                width="128"
                                src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                alt=""
                              />
                            </div>{' '}
                            No Data Found
                          </td>
                        </tr>
                      ) : (
                        sampleData.map((trade, index) => (
                          <tr key={index}>
                            <td>{trade.date}</td>
                            <td>{trade.symbol}</td>
                            <td>{trade.txHash}</td>
                            <td>{trade.side}</td>
                            <td>{trade.price}</td>
                            <td>{trade.amount}</td>
                            <td>{trade.filled}</td>
                            <td>
                              <span className={`text-end ${trade.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                                {trade.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            ) : null}

            {/* Histry order section */}
            {activeTabOrders === "H-Orders" ? (
              <div
                id="closed-orders"
                className="pt-3"
                role="tabpanel"
                style={{ minHeight: "300px" }}
              >
                <div className="overflow-x-auto">
                  <table className="v-table w-full text-left text-gray-500 dark:text-gray-400">
                    <thead>
                      <tr className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        {tableHeaders.map((header, index) => (
                          <th key={index} className="v-th p-1" scope="col">
                            <div>
                              <span>
                                <div className="flex items-center">
                                  {header}{' '}
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
                        ))}
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
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default TradingPage;
