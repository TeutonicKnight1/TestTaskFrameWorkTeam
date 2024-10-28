import classes from '../styles/filters.module.scss';

import close_dark_icon from '../assets/close_dark_icon.png';
import plus_dark_icon from '../assets/expand_plus_dark_icon.png';
import { SetStateAction } from 'react';
//import minus_dark_icon from '../assets/expand_minus_dark_icon.png';

import { useState, useEffect } from 'react';

interface FiltersProps {
  setFiltersIsOpened: React.Dispatch<SetStateAction<boolean>>;
  filtersIsOpened: boolean;
}

const Filters: React.FC<FiltersProps> = ({
  setFiltersIsOpened,
  filtersIsOpened,
}) => {
  const [artistIsOpened, setArtistIsOpened] = useState(false);
  const [locationIsOpened, setLocationIsOpened] = useState(false);
  const [yearsIsOpened, setYearsIsOpened] = useState(false);

  const toggleArtist = () => setArtistIsOpened(prev => !prev);
  const toggleLocation = () => setLocationIsOpened(prev => !prev);
  const toggleYears = () => setYearsIsOpened(prev => !prev);

  const handleFiltersIsOpened = () => {
    setFiltersIsOpened(false);
  };

  const [isVisible, setIsVisible] = useState(filtersIsOpened);
  useEffect(() => {
    // функция предотвращающая видимость Фильтров при рендере страницы
    if (filtersIsOpened) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [filtersIsOpened]);

  return isVisible ? (
    <div
      className={`${classes.filters} ${filtersIsOpened ? classes.filters_open : classes.filters_active}`}
    >
      <div className={classes.filters_header}>
        <button
          className={classes.filters_header_button}
          onClick={handleFiltersIsOpened}
        >
          <img src={close_dark_icon} alt="Close filters" />
        </button>
      </div>
      <div className={classes.filters_content}>
        <ul className={classes.filters_list}>
          <li className={classes.filters_list_artist}>
            <div className={classes.filters_list_artist_header}>
              <h4>ARTIST</h4>
              <button
                className={classes.filters_list_artist_header_button}
                onClick={toggleArtist}
              >
                <img src={plus_dark_icon} alt="Expand artist filter" />
              </button>
            </div>
            {/* Плавная анимация для содержимого */}
            <div
              className={`${classes.filters_list_artist_content} ${artistIsOpened ? classes.open : ''}`}
            >
              <select  className={classes.filters_list_artist_content_select}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </li>
          <li className={classes.filters_list_location}>
            <div className={classes.filters_list_location_header}>
              <h4>LOCATION</h4>
              <button
                className={classes.filters_list_location_header_button}
                onClick={toggleLocation}
              >
                <img src={plus_dark_icon} alt="Expand location filter" />
              </button>
            </div>
            <div
              className={`${classes.filters_list_location_content} ${locationIsOpened ? classes.open : ''}`}
            >
              <select className={classes.filters_list_location_content_select}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </li>
          <li className={classes.filters_list_years}>
            <div className={classes.filters_list_years_header}>
              <h4>YEARS</h4>
              <button
                className={classes.filters_list_years_header_button}
                onClick={toggleYears}
              >
                <img src={plus_dark_icon} alt="Expand years filter" />
              </button>
            </div>
            <div
              className={`${classes.filters_list_years_content} ${yearsIsOpened ? classes.open : ''}`}
            >
              <select  className={classes.filters_list_years_content_select}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.filters_footer}>
        <button className={classes.filters_footer_show}>
          SHOW THE RESULTS
        </button>
        <button className={classes.filters_footer_clear}>CLEAR</button>
      </div>
    </div>
  ) : null;
};

export default Filters;
