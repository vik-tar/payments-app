import React from 'react';
import {classNames} from "../../helpers/funcs/classname";
import LogoIcon from '../../shared/icons/logo.svg';
import BurgerButton from "../../shared/ui/BurgerButton/BurgerButton";

import './Header.scss';
import {useSidebar} from "../../helpers/hooks/useSidebar";

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className={classNames('header', {}, [className])}>
      <div className="header__layout">
        <div className="left-container">
          <BurgerButton onClick={toggleSidebar}/>
          <img className="icon" src={LogoIcon} alt="logo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;