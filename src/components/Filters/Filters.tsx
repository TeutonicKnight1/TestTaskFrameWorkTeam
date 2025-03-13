import classes from './filters.module.scss';

import close_dark_icon from '@assets/close_dark_icon.png';
import plus_dark_icon from '@assets/expand_plus_dark_icon.png';
import minus_dark_icon from '@assets/expand_minus_dark_icon.png';

import { useState, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

import {
  setFiltersIsOpen,
  setYearFrom,
  setYearTo,
  setLocationId,
  clearFilters,
  setArtistId,
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

  const yearsIcon = yearsIsOpened ? minus_dark_icon : plus_dark_icon;

  const toggleYears = useCallback(() => setYearsIsOpened(prev => !prev), []);
  const handleClearFilters = () => {
    dispatch(clearFilters());
    setYearFromValue('');
    setYearToValue('');
    dispatch(setFiltersIsOpen(false));
  };

  const handleShowResults = useCallback(() => {
    dispatch(setYearFrom(yearFrom));
    dispatch(setYearTo(yearTo));

    dispatch(setFiltersIsOpen(false));
  }, [dispatch, yearFrom, yearTo]);

  const filtersClass = useMemo(
    () =>
      `${classes.filters} ${filtersIsOpened ? classes.filters_open : classes.filters_close}`,
    [filtersIsOpened]
  );

  return (
    <div className={filtersClass}>
      <div className={classes.filters_header}>
        <button
          className={classes.cross_button}
          onClick={() => dispatch(setFiltersIsOpen(!filtersIsOpened))}
        >
          <img src={close_dark_icon} alt="Close filters" />
        </button>
      </div>
      <div className={classes.content}>
        <ul className={classes.list}>
          <li className={classes.list_artist}>
            <FiltersSelect
              name="Authors"
              options={authors}
              labelKey="name"
              idKey="id"
              onSelectOption={id => dispatch(setArtistId(id))}
            />
          </li>
          <li className={classes.list_location}>
            <FiltersSelect
              name="location"
              options={locations}
              labelKey="location"
              idKey="id"
              onSelectOption={id => dispatch(setLocationId(id))}
            />
          </li>
          <li className={classes.list_years}>
            <div className={classes.header}>
              <h4 className={classes.title}>YEARS</h4>
              <button className={classes.expand_button} onClick={toggleYears}>
                <img src={yearsIcon} alt="Expand years filter" />
              </button>
            </div>
            <div
              className={`${classes.content} ${yearsIsOpened ? classes.open : ''}`}
            >
              <div className={classes.form}>
                <input
                  className={classes.input}
                  placeholder="From"
                  value={yearFrom}
                  onChange={e => setYearFromValue(e.target.value)}
                />
                <img className={classes.icon} src={minus_dark_icon} />
                <input
                  className={classes.input}
                  placeholder="To"
                  value={yearTo}
                  onChange={e => setYearToValue(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.footer}>
        <button className={classes.footer_show} onClick={handleShowResults}>
          SHOW THE RESULTS
        </button>
        <button className={classes.footer_clear} onClick={handleClearFilters}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Filters;
