import classes from './filtersButton.module.scss';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setFiltersIsOpen } from '@store/slices/filtersSlice';

const FiltersButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(state => state.theme.theme);

  const theme =
    currentTheme === 'dark'
      ? import.meta.env.VITE_LIGHT_SVG_THEME
      : import.meta.env.VITE_DARK_SVG_THEME;

  const handleFiltersIsOpened = () => {
    dispatch(setFiltersIsOpen(true));
  };

  return (
    <button className={classes.filters_button} onClick={handleFiltersIsOpened}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={theme}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2 3.5C15.3 3.5 14.7 4 14.5 4.7H2.6C2.2 4.7 2 4.9 2 5.3C2 5.7 2.2 5.9 2.6 5.9H14.4C14.6 6.6 15.4 7.1 16.1 7.1C17.1 7.1 17.9 6.3 17.9 5.3C18 4.3 17.1 3.5 16.2 3.5ZM16.2 5.9C15.8 5.9 15.6 5.7 15.6 5.3C15.6 4.9 15.8 4.7 16.2 4.7C16.6 4.7 16.8 4.9 16.8 5.3C16.8 5.7 16.5 5.9 16.2 5.9Z"
          fill={theme}
        />
        <path
          d="M16.2 9.40001H9.3C9 8.70001 8.4 8.20001 7.5 8.20001C6.6 8.20001 6 8.70001 5.8 9.40001H2.6C2.2 9.40001 2 9.60001 2 10C2 10.4 2.2 10.6 2.6 10.6H5.8C6 11.3 6.8 11.8 7.5 11.8C8.2 11.8 9 11.3 9.3 10.6H16.2C16.6 10.6 16.8 10.4 16.8 10C16.8 9.60001 16.5 9.40001 16.2 9.40001ZM7.5 10.6C7.2 10.6 6.9 10.4 6.9 10C6.9 9.60001 7.1 9.40001 7.5 9.40001C7.9 9.40001 8.1 9.60001 8.1 10C8.1 10.4 7.9 10.6 7.5 10.6Z"
          fill={theme}
        />
        <path
          d="M16.2 14.1H14.2C14 13.4 13.3 12.9 12.5 12.9C11.6 12.9 11 13.4 10.8 14.1H2.6C2.2 14.1 2 14.3 2 14.7C2 15.1 2.2 15.3 2.6 15.3H10.7C10.9 16 11.7 16.5 12.4 16.5C13.1 16.5 13.9 16 14.1 15.3H16.1C16.5 15.3 16.7 15.1 16.7 14.7C16.8 14.4 16.5 14.1 16.2 14.1ZM12.5 15.3C12.1 15.3 11.9 15.1 11.9 14.7C11.9 14.3 12.1 14.1 12.5 14.1C12.9 14.1 13.1 14.3 13.1 14.7C13.1 15.1 12.8 15.3 12.5 15.3Z"
          fill={theme}
        />
      </svg>
    </button>
  );
};

export default FiltersButton;
