import React from 'react';
import MasterCardLogo from '../../shared/icons/mastercard.svg';
import VisaLogo from '../../shared/icons/visa.svg';
import SkrillLogo from '../../shared/icons/skrill.svg';
import PerfectMoneyLogo from '../../shared/icons/pm.svg';
import PiastrixLogo from '../../shared/icons/piastrix.svg';
import SticPayLogo from '../../shared/icons/sticpay.svg';
import PinLogo from '../../shared/icons/pin.svg';
import BTCLogo from '../../shared/icons/bitcoin.svg';
import ETHLogo from '../../shared/icons/ethereum.svg';
import USDTLogo from '../../shared/icons/tether.svg';

import './PaymentMethod.scss';

const eMoney = [
  { id: 1, logo: MasterCardLogo, title: 'Mastercard', description: 'Comission 3%', isPopular: true },
  { id: 2, logo: VisaLogo, title: 'Visa', description: 'Comission 3%', isTrusted: true },
  { id: 3, logo: SkrillLogo, title: 'Skrill', description: 'Comission 0%' },
  { id: 4, logo: PerfectMoneyLogo, title: 'Perfect Money, EUR', description: 'Comission 0%' },
  { id: 5, logo: PiastrixLogo, title: 'Piastrix, EUR', description: 'Comission 0%' },
  { id: 6, logo: SticPayLogo, title: 'SticPay, EUR', description: 'Comission 0%' },
  { id: 7, logo: PinLogo, title: 'PIN', description: 'Comission 1%' },
];

const crypto = [
  { id: 1, logo: BTCLogo, title: 'BTC', description: 'Comission 0%' },
  { id: 2, logo: ETHLogo, title: 'ETH', description: 'Comission 0%' },
  { id: 3, logo: USDTLogo, title: 'USDT', description: 'Comission 0%' },
]

const Card = ({arr}: {arr: { id: number; logo: string; title: string; description: string; }[]}) => (
  <>
    {arr.map((item) => (
      <div className="paymentMethod__card card" key={item.id}>
        <img className="card__icon" src={item.logo} alt={item.title}/>
        <span className="card__title">{item.title}</span>
        <span className="card__description">{item.description}</span>
      </div>
    ))}
  </>
)

const PaymentMethod = () => {
  return (
    <section className="paymentMethod">
      <h2 className="paymentMethod__title">Choose payment method</h2>
      <p className="paymentMethod__subtitle">Cards, E-Money, PIN</p>
      <div className="paymentMethod__cardBlock">
        <Card arr={eMoney} />
      </div>
      <p className="paymentMethod__subtitle">Cryptocurrency</p>
      <div className="paymentMethod__cardBlock">
        <Card arr={crypto} />
      </div>
    </section>
  );
};

export default PaymentMethod;