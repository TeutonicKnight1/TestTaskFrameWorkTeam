import logo_dark_large from '../assets/logo_dark_large.svg';
import logo_dark_medium from '../assets/logo_dark_medium.svg';
import logo_light_large from '../assets/logo_light_large.svg';
import logo_light_medium from '../assets/logo_light_medium.svg';

import { useAppSelector } from '../hooks/redux';

import classes from '../styles/header.module.scss';
import ThemeSwitcher from '../UI/themeSwithcer';

const Header: React.FC = () => {
  const currentTheme = useAppSelector(state => state.theme.theme);

  const logoLarge =
    currentTheme === 'dark' ? logo_dark_large : logo_light_large;
  const logoMedium =
    currentTheme === 'dark' ? logo_dark_medium : logo_light_medium;

  return (
    <header className={classes.header}>
      <img
        src={logoLarge}
        srcSet={`${logoLarge} 1440w, ${logoMedium} 1023w`}
        alt="logo"
        className={classes.logo}
      />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
