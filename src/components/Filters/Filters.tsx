import classes from './filters.module.scss';

import close_dark_icon from '@assets/close_dark_icon.png';
import plus_dark_icon from '@assets/expand_plus_dark_icon.png';
import minus_dark_icon from '@assets/expand_minus_dark_icon.png';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

import {
  setFiltersIsOpen,
  setYearFrom,
  setYearTo,
  setLocationId,
  clearFilters,
  setArtistId,
  setFindString,
} from '@store/slices/filtersSlice';

import FiltersSelect from '@UI/FiltersSelect/FiltersSelect';
import { useGetAuthorsQuery, useGetLocationsQuery } from '@store/api';

const Filters: React.FC = () => {
  const { data: authors } = useGetAuthorsQuery();
  const { data: locations } = useGetLocationsQuery();

  const filtersIsOpened = useAppSelector(state => state.filters.filtersIsOpen);
  const dispatch = useAppDispatch();

  const [yearsIsOpened, setYearsIsOpened] = useState(false);

  const [yearFrom, setYearFromValue] = useState('');
  const [yearTo, setYearToValue] = useState('');
  const [isVisible, setIsVisible] = useState(filtersIsOpened);

  const yearsIcon = yearsIsOpened ? minus_dark_icon : plus_dark_icon;

  useEffect(() => {
    if (filtersIsOpened) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [filtersIsOpened]);

  const toggleYears = useCallback(() => setYearsIsOpened(prev => !prev), []);
  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
    setYearFromValue('');
    setYearToValue('');
    dispatch(setFiltersIsOpen(false));
  }, [dispatch]);

  const handleShowResults = useCallback(() => {
    dispatch(setYearFrom(yearFrom));
    dispatch(setYearTo(yearTo));
  }, [dispatch, yearFrom, yearTo]);

  const filtersClass = useMemo(
    () =>
      `${classes.filters} ${filtersIsOpened ? classes.filters_open : classes.filters_active}`,
    [filtersIsOpened]
  );

  if (!isVisible) return null;
  return (
    <div className={filtersClass}>
      <div className={classes.filters_header}>
        <button
          className={classes.filters_header_button}
          onClick={() => dispatch(setFiltersIsOpen(!filtersIsOpened))}
        >
          <img src={close_dark_icon} alt="Close filters" />
        </button>
      </div>
      <div className={classes.filters_content}>
        <ul className={classes.filters_list}>
          <li className={classes.filters_list_artist}>
            <FiltersSelect
              name="Authors"
              options={authors}
              labelKey="name"
              idKey="id"
              onSelectOption={id => dispatch(setArtistId(id))}
            />
          </li>
          <li className={classes.filters_list_location}>
            <FiltersSelect
              name="location"
              options={locations}
              labelKey="location"
              idKey="id"
              onSelectOption={id => dispatch(setLocationId(id))}
            />
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
                  value={yearFrom}
                  onChange={e => setYearFromValue(e.target.value)}
                />
                <img
                  className={classes.filters_list_years_content_form_icon}
                  src={minus_dark_icon}
                />
                <input
                  className={classes.filters_list_years_content_form_input}
                  placeholder="To"
                  value={yearTo}
                  onChange={e => setYearToValue(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.filters_footer}>
        <button
          className={classes.filters_footer_show}
          onClick={handleShowResults}
        >
          SHOW THE RESULTS
        </button>
        <button
          className={classes.filters_footer_clear}
          onClick={handleClearFilters}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Filters;
