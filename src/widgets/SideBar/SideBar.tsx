import React from 'react';
import {classNames} from "../../helpers/funcs/classname";
import LogoIcon from "../../shared/icons/logo.svg";
import CloseIcon from "../../shared/icons/close.svg";
import {useSidebar} from "../../helpers/hooks/useSidebar";
import './SideBar.scss';

interface SideBarProps {
  className?: string;
}

const routing = [
  {link: '',title: 'Casino Games'},
  {link: '',title: 'Live Games'},
  {link: '',title: 'TV-Bet'},
  {link: '',title: 'Sport Games'},
  {link: '',title: 'Virtual'},
  {link: '',title: 'Tournaments'},
  {link: '',title: 'Spin Shop'},
  {link: '',title: 'FAQ'},
  {link: '',title: 'Support Chat'},
]

const SideBar = ({ className }: SideBarProps) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className={classNames('sideBar', {'isOpen': isOpen}, [className])}>
      <div className="sideBar__layout">
        <div className="sideBar__title">
          <img className="icon" src={LogoIcon} alt="logo"/>
          <button className="sideBar__closeButton" onClick={toggleSidebar}>
            <img src={CloseIcon} />
          </button>
        </div>
        <div className="sideBar__content">
          <ul>
            {routing.map(item => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;