import classes from './search.module.scss';

import { useAppDispatch } from '@hooks/redux';
import { useDebounce } from '@hooks/useDebounce';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';

import { setFindString } from '@store/slices/filtersSlice';

import Filters from '@components/Filters/Filters';
import FiltersButton from '@UI/FiltersButton/FiltersButton';
import SearchButton from '@UI/SearchButton/SearchButton';
import ClearFilterInputButton from '@UI/ClearInputFilterButton/ClearInputFilterButton';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (query.length === 0) {
      dispatch(setFindString(''));
    }
  }, [debouncedQuery]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchButtonClick = () => {
    dispatch(setFindString(query));
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <form className={classes.search_form} onSubmit={handleSearchSubmit}>
          <SearchButton handleButtonClick={handleSearchButtonClick} />
          <input
            aria-label="Search for painting"
            type="text"
            placeholder="Painting title"
            className={classes.search_form_input}
            value={query}
            onChange={handleQueryChange}
          />
          {query.length !== 0 && (
            <ClearFilterInputButton callback={() => setQuery('')} />
          )}
        </form>
        <FiltersButton />
      </div>

      <Filters />
    </div>
  );
};

export default Search;
