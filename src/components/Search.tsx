import classes from '../styles/search.module.scss';

import search_dark_icon from '../assets/search_dark_icon.png';
import search_light_icon from '../assets/search_light_icon.png';
import filters_dark_icon from '../assets/filters_dark_icon.png';
import filters_light_icon from '../assets/filters_light_icon.png';

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { useState, FormEvent, ChangeEvent } from 'react';

import { setFindString } from '../store/slices/filtersSlice';

import Filters from './Filters';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector(state => state.theme.theme);
  const [filtersIsOpened, setFiltersIsOpened] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const searchIcon =
    currentTheme === 'dark' ? search_dark_icon : search_light_icon;
  const filtersIcon =
    currentTheme === 'dark' ? filters_dark_icon : filters_light_icon;

  const handleFiltersIsOpened = () => {
    setFiltersIsOpened(!filtersIsOpened);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(setFindString(e.target.value));
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <form className={classes.search_form} onSubmit={handleSearchSubmit}>
          <button className={classes.search_form_button} type="submit">
            <img src={searchIcon} alt="search icon" />
          </button>
          <input
            aria-label="Search for painting"
            type="text"
            placeholder="Painting title"
            className={classes.search_form_input}
            value={query}
            onChange={handleQueryChange}
          />
        </form>
      </div>
      <button
        className={classes.filters_button}
        onClick={handleFiltersIsOpened}
      >
        <img
          className={classes.filters_button_icon}
          src={filtersIcon}
          alt="filters icon"
        />
      </button>
      <Filters
        setFiltersIsOpened={setFiltersIsOpened}
        filtersIsOpened={filtersIsOpened}
      />
    </div>
  );
};

export default Search;
