import classes from '../styles/filters.module.scss';

import close_dark_icon from '../assets/close_dark_icon.png';
import plus_dark_icon from '../assets/expand_plus_dark_icon.png';
import { SetStateAction } from 'react';
import minus_dark_icon from '../assets/expand_minus_dark_icon.png';

import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';

import { useGetAuthorsQuery, useGetLocationsQuery } from '../store/api';

import {
  setArtistId,
  setLocationId,
  setYearFrom,
  setYearTo,
  clearFilters,
} from '../store/slices/filtersSlice';

interface FiltersProps {
  setFiltersIsOpened: React.Dispatch<SetStateAction<boolean>>;
  filtersIsOpened: boolean;
}

const Filters: React.FC<FiltersProps> = ({
  setFiltersIsOpened,
  filtersIsOpened,
}) => {
  const {
    data: authors,
    error: authorsError,
    isLoading: authorsIsLoading,
  } = useGetAuthorsQuery();
  const {
    data: locations,
    error: locationsError,
    isLoading: locationsIsLoading,
  } = useGetLocationsQuery();

  const dispatch = useAppDispatch();

  const [artistIcon, setArtistIcon] = useState<string>(plus_dark_icon);
  const [locationIcon, setLocationIcon] = useState<string>(plus_dark_icon);
  const [yearsIcon, setYearsIcon] = useState<string>(plus_dark_icon);

  const [artistIsOpened, setArtistIsOpened] = useState(false);
  const [locationIsOpened, setLocationIsOpened] = useState(false);
  const [yearsIsOpened, setYearsIsOpened] = useState(false);

  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [yearFromValue, setYearFromValue] = useState('');
  const [yearToValue, setYearToValue] = useState('');

  const toggleArtist = () => {
    setArtistIsOpened(prev => !prev);
    if (artistIsOpened) {
      setArtistIcon(plus_dark_icon);
    } else {
      setArtistIcon(minus_dark_icon);
    }
  };
  const toggleLocation = () => {
    setLocationIsOpened(prev => !prev);
    if (locationIsOpened) {
      setLocationIcon(plus_dark_icon);
    } else {
      setLocationIcon(minus_dark_icon);
    }
  };
  const toggleYears = () => {
    setYearsIsOpened(prev => !prev);
    if (yearsIsOpened) {
      setYearsIcon(plus_dark_icon);
    } else {
      setYearsIcon(minus_dark_icon);
    }
  };
  const handleFiltersIsOpened = () => {
    setFiltersIsOpened(false);
  };

  const changeArtist = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArtist(e.target.value);
  };
  const changeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };
  const changeYearFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearFromValue(e.target.value);
  };
  const changeYearTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearToValue(e.target.value);
  };

  const hanldeClearFilters = () => {
    dispatch(clearFilters());
    setYearFromValue('');
    setYearToValue('');
    handleFiltersIsOpened();
  };

  const handleShowResultsButtonClick = () => {
    dispatch(setArtistId(selectedArtist));
    dispatch(setLocationId(selectedLocation));
    dispatch(setYearFrom(yearFromValue));
    dispatch(setYearTo(yearToValue));
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
              <h4 className={classes.filters_list_artist_header_title}>
                ARTIST
              </h4>
              <button
                className={classes.filters_list_artist_header_button}
                onClick={toggleArtist}
              >
                <img src={artistIcon} alt="Expand artist filter" />
              </button>
            </div>
            <div
              className={`${classes.filters_list_artist_content} ${artistIsOpened ? classes.open : ''}`}
            >
              <select
                className={classes.filters_list_artist_content_select}
                onChange={changeArtist}
              >
                <option value="" key={""}></option>
                {authors &&
                  authors.map(author => (
                    <option key={author.id} value={author.id}>
                      {author.name}
                    </option>
                  ))}
              </select>
            </div>
          </li>
          <li className={classes.filters_list_location}>
            <div className={classes.filters_list_location_header}>
              <h4 className={classes.filters_list_location_header_title}>
                LOCATION
              </h4>
              <button
                className={classes.filters_list_location_header_button}
                onClick={toggleLocation}
              >
                <img src={locationIcon} alt="Expand location filter" />
              </button>
            </div>
            <div
              className={`${classes.filters_list_location_content} ${locationIsOpened ? classes.open : ''}`}
            >
              <select
                className={classes.filters_list_location_content_select}
                onChange={changeLocation}
              >
                <option value="" key={""}></option>
                {locations &&
                  locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.location}
                    </option>
                  ))}
              </select>
            </div>
          </li>
          <li className={classes.filters_list_years}>
            <div className={classes.filters_list_years_header}>
              <h4 className={classes.filters_list_years_header_title}>YEARS</h4>
              <button
                className={classes.filters_list_years_header_button}
                onClick={toggleYears}
              >
                <img src={yearsIcon} alt="Expand years filter" />
              </button>
            </div>
            <div
              className={`${classes.filters_list_years_content} ${yearsIsOpened ? classes.open : ''}`}
            >
              <div className={classes.filters_list_years_content_form}>
                <input
                  className={classes.filters_list_years_content_form_input}
                  placeholder="From"
                  type="text"
                  value={yearFromValue}
                  onChange={changeYearFrom}
                />
                <img className={classes.filters_list_years_content_form_icon} src={minus_dark_icon} />
                <input
                  placeholder="To"
                  type="text"
                  value={yearToValue}
                  className={classes.filters_list_years_content_form_input}
                  onChange={changeYearTo}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.filters_footer}>
        <button
          className={classes.filters_footer_show}
          onClick={handleShowResultsButtonClick}
        >
          SHOW THE RESULTS
        </button>
        <button
          className={classes.filters_footer_clear}
          onClick={hanldeClearFilters}
        >
          CLEAR
        </button>
      </div>
    </div>
  ) : null;
};

export default Filters;
