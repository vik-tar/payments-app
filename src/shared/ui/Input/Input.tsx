import React from 'react';
import './Input.scss';
import {classNames} from "../../../helpers/funcs/classname";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({className, ...otherProps}: InputProps) => {
  return (
    <input className={classNames('input', {}, [className])} {...otherProps} placeholder="Enter promo code here" />
  );
};

export default Input;