import logo from '../assets/logo.svg';
import light_icon from '../assets/light_icon.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header-logo" />
      <button
        className="header-button-light-mode"
        onClick={() => document.body.classList.toggle('light')}
      >
        <img className='header-button-light-mode-icon' src={light_icon} alt="light icon"/>
      </button>
    </header>
  );
};

export default Header;
