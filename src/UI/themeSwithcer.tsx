import dark_icon from '../assets/switchTheme_dark_icon.png';
import light_icon from '../assets/switchTheme_light_icon.png';

import classes from '../styles/themeSwitcher.module.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setTheme } from '../store/slices/themeSlice';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.theme);

  const icon = theme === 'light' ? light_icon : dark_icon;

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <button className={classes.theme_switcher} onClick={handleThemeSwitch}>
      <img
        className={classes.theme_switcher_icon}
        src={icon}
        alt="light icon"
      />
    </button>
  );
};

export default ThemeSwitcher;
