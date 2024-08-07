import React, {ButtonHTMLAttributes, FC} from 'react';
import './Button.scss';
import {classNames} from "../../../helpers/funcs/classname";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
}

const Button: FC<ButtonProps> = ({ title, className, ...otherProps }) => {
  return (
    <button className={classNames('button', {}, [className])} {...otherProps}>{title}</button>
  );
};

export default Button;