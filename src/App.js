import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TradingPage from "./Componants/TradingPage";
import CryptoDepositPage from "./Componants/Deposit/CryptoDepositPage"
import Header from "./Componants/Header";
import UserKycForm from "./Forms/UserKycForm";
import TransactionHistory from "./Componants/Wallet/TransactionHistory";
import FundOverviewPage from "./Componants/Wallet/FundOverviewPage";
import CryptoWithdrwal from "./Componants/Withdraw/CryptoWithdrwal";


function App() {

  return (
    <>
    <div style={{marginTop:"60px"}}>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route exact path="/Trade" element={<TradingPage />} />
          <Route exact path="/DepositeCrypto" element={<CryptoDepositPage />} />
          <Route exact path="/TransactionHistory" element={<TransactionHistory />} />
          <Route exact path="/fundOverview" element={<FundOverviewPage />} />
          <Route exact path="/WithdrawCrypto" element={<CryptoWithdrwal />} />
          <Route exact path="/userkyc" element={<UserKycForm />} />
        </Routes>
      </BrowserRouter>
    </div>
     
    </>
  );
}

export default App;
