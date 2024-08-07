import React from 'react';
import './MainPage.scss';
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import Promocode from "../Promocode/Promocode";
import Transactions from "../Transactions/Transactions";

const MainPage = () => {
  return (
    <div className="mainPage">
      <h1 className="mainPage__title">Make a Deposit</h1>
      <PaymentMethod />
      <Promocode />
      <Transactions />
    </div>
  );
};

export default MainPage;