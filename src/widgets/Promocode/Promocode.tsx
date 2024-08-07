import React from 'react';
import './Promocode.scss';
import Input from "../../shared/ui/Input/Input";
import Button from "../../shared/ui/Button/Button";

const Promocode = () => {

  return (
    <section className="promocode">
      <div>
        <h2 className="promocode__title">
          Have a Promo Code?
        </h2>
        <span className="promocode__subtitle">Enter promo code here. It will activate a special bonus!</span>
      </div>

      <div className="promocode__controls">
        <Input className="promocode__input" />
        <Button title="Apply" className="promocode__button" />
      </div>
    </section>
  );
};

export default Promocode;