import React from 'react';
import './BurgerButton.scss';
import {classNames} from "../../../helpers/funcs/classname";

interface BurgerButtonProps {
  className?: string;
  onClick: () => void;
}

const BurgerButton = ({ className, onClick }: BurgerButtonProps) => {

  return (
    <button className={classNames('burger-button', {}, [className])} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton;