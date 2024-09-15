import logo from '../assets/logo.svg';
import light_icon from '../assets/light_icon.png';

import classes from '../styles/header.module.scss'; 

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      <button
        className={classes.lightmode_button}
        onClick={() => document.body.classList.toggle('light')}
      >
        <img className={classes.lightmode_icon} src={light_icon} alt="light icon"/>
      </button>
    </header>
  );
};

export default Header;
