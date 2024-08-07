import React, {useState} from 'react';
import './Transactions.scss';
import SticPayLogo from '../../shared/icons/sticpay.svg';
import MasterCardLogo from '../../shared/icons/mastercard.svg';
import FilterLogo from '../../shared/icons/filter.svg';
import Input from "../../shared/ui/Input/Input";
import Button from "../../shared/ui/Button/Button";
import Modal from "../../shared/ui/Modal/Modal";

const transactionsData = [
  {
    id: 1,
    method: 'SticPay, USD',
    transactionNumber: '142354',
    date: '02.01 at 12:34PM',
    amount: 23.05,
    status: 'Processing',
    statusClass: 'processing',
    icon: SticPayLogo,
  },
  {
    id: 2,
    method: 'SticPay, USD',
    transactionNumber: '142354',
    date: '05.12 at 3:40PM',
    amount: 123.27,
    status: 'Active',
    statusClass: 'active',
    icon: SticPayLogo,
  },
  {
    id: 3,
    method: 'Mastercard, USD',
    transactionNumber: '23561',
    date: '24.11 at 4:20AM',
    amount: 80.00,
    status: 'Performed',
    statusClass: 'performed',
    icon: MasterCardLogo,
  }]

const Transactions = () => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const sortTransactions = () => {
    const sorted = [...transactions].sort((a, b) =>
      isAscending ? a.amount - b.amount : b.amount - a.amount
    );
    setTransactions(sorted);
    setIsAscending(!isAscending); // переключение порядка сортировки
  };


  const openModal = (transaction: any) => {
    document.body.classList.add('modal-open');
    setSelectedTransaction(transaction);
  };


  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setSelectedTransaction(null);
  };

  return (
    <section className="transactions">
      <div className="transactions__header">
        <h2 className="transactions__title">
          Last Transactions
        </h2>
        <button className="transactions__filter" onClick={sortTransactions}>
          <img src={FilterLogo} />
        </button>
      </div>

      <div className="transaction-items">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-item"
            onClick={() => openModal(transaction)}
          >
            <div className="transaction-item__header">
              <img src={transaction.icon} alt={transaction.method} className="transaction-icon"/>
              <div className="status-block">
                <div className={`status ${transaction.statusClass}`}>{transaction.status}</div>
                <span className='info__subtitle'>Operation Status</span>
              </div>
            </div>

            <div className="info">
              <div className="mobileHide">
                <img src={transaction.icon} alt={transaction.method} className="transaction-icon"/>
              </div>
              <div className="info__block">
                <p className="info__status">By {transaction.method}</p>
                <span className='info__subtitle'>Withdraw</span>
              </div>
              <div className="info__block">
                <p className="info__status">{transaction.transactionNumber}</p>
                <span className='info__subtitle'>Transaction Number</span>
              </div>
              <div className="info__block">
                <p className="info__status">{transaction.date}</p>
                <span className='info__subtitle'>Payment Date</span>
              </div>
              <div className="info__block">
                <p className="info__status">{`${transaction.amount}$`}</p>
                <span className='info__subtitle'>Amount Payed</span>
              </div>
              <div className="info__block mobileHide">
                <p className={`info__status status ${transaction.statusClass}`}>{transaction.status}</p>
                <span className='info__subtitle'>Operation Status</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTransaction && (
        <Modal>
          <div className="deposit-modal">
            <header className="deposit-modal__header">
              <button className="deposit-modal__back-button">&#60; Back to Payment Method</button>
              <button className="close-button" onClick={closeModal}></button>
            </header>
            <div className="deposit-modal__balance">Current Balance: <span className="deposit-modal__amount">$ 0.00</span></div>
            <div className="deposit-modal__comission comission">
              <div className="comission__main">
                <img className="comission__logo" src={MasterCardLogo} alt="payment system logo" />
                <div className="comission__details">
                  <div className="comission__title">
                    <span className="comission__system">MasterCard</span>
                    <span className="comission__amount">Comission 3%</span>
                  </div>
                  <span className="comission__subtitle">Please notice that you will send money in the USD</span>
                </div>
              </div>
              <button className="comission__button">&#8744;</button>
            </div>
            <div className="deposit-modal__amount amount">
              <p className="amount__title">Amount</p>
              <div className="amount__current-amount">
                <span>21</span>
              </div>
              <div className="amount__add-buttons">
                <button>+ $10</button>
                <button>+ $20</button>
                <button>+ $30</button>
                <button>+ $50</button>
                <button>+ $100</button>
              </div>
              <span className="amount__subtitle"> From 21.00 to 906.00 USD at a time</span>
            </div>

            <div className="deposit-modal__promocode-form promocode-form">
              <p className="promocode-form__title">Promo Code</p>
              <div className="promocode-form__block">
                <Input className="promocode-form__input" />
                <Button title="Apply" className="promocode-form__apply" />
              </div>
              <Button className="promocode-form__deposit" title="Deposit" />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Transactions;