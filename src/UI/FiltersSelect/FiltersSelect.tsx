import { useEffect, useState } from 'react';
import classes from './filtersSelect.module.scss';

import plus_dark_icon from '@assets/expand_plus_dark_icon.png';
import minus_dark_icon from '@assets/expand_minus_dark_icon.png';
import ExpandFilterButton from '@UI/ExpandFilterButton/ExpandFilterButton';
import ClearFilterInputButton from '@UI/ClearInputFilterButton/ClearInputFilterButton';

interface IFiltersSelectProps<T> {
  name: string;
  options: T[] | undefined;
  labelKey: string;
  idKey: string;
  onSelectOption: (id: number) => void;
}

const FiltersSelect = <T extends Record<string, any>>({
  name,
  options,
  labelKey,
  idKey,
  onSelectOption,
}: IFiltersSelectProps<T>) => {
  const [filterIsOpened, setFilterIsOpened] = useState(false);
  const [optionIsOpened, setOptionIsOpened] = useState(false);

  const [optionsArray, setOptions] = useState<T[]>(options || []);

  const [inputValue, setInputValue] = useState('');

  const [filterIcon, setFilterIcon] = useState<string>(plus_dark_icon);

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const handleOptionClick = (option: T) => {
    onSelectOption(option[idKey]);
  };

  const toggleFilter = () => {
    setFilterIsOpened(prev => !prev);
    if (filterIsOpened) {
      setFilterIcon(plus_dark_icon);
    } else {
      setFilterIcon(minus_dark_icon);
    }
  };

  const toggleOption = () => {
    setOptionIsOpened(prev => !prev);
  };

  const updateOption = () => {
    if (inputValue.length == 0) {
      setOptions(optionsArray);
      onSelectOption(0);
    } else {
      setOptions(
        optionsArray.filter(option =>
          option[labelKey].toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setOptions(options || []);
  }, [options]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setOptions(options || []);
      onSelectOption(0);
    } else {
      setOptions(
        (options || []).filter(option =>
          option[labelKey].toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue, options]);

  return (
    <div className={classes.filters_select}>
      <div className={classes.header}>
        <h4 className={classes.title}>{name.toLocaleUpperCase()}</h4>
        <button className={classes.expand_button} onClick={toggleFilter}>
          <img src={filterIcon} alt={`Expand ${name} filter}`} />
        </button>
      </div>
      <div
        className={`${classes.content} ${filterIsOpened ? classes.open : ''}`}
      >
        <div className={classes.multiselect}>
          <input
            type="text"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
              updateOption();
            }}
            onFocus={toggleOption}
            className={classes.input}
          ></input>
          {!optionIsOpened ? (
            <ExpandFilterButton callback={toggleOption} />
          ) : (
            <ClearFilterInputButton
              callback={() => {
                setInputValue('');
                setOptionIsOpened(prev => !prev);
              }}
            />
          )}
        </div>
      </div>
      {optionIsOpened && (
        <div className={classes.options}>
          {optionsArray.map((option, index) => (
            <button
              key={option[idKey]}
              className={`${classes.option} ${
                index === highlightedIndex ? classes.selected : ''
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                setInputValue(option[labelKey]);
                handleOptionClick(option);
                toggleOption();
              }}
            >
              {option[labelKey]}
            </button>
          ))}
        </div>
      )}
      {/* компонент выпадающего списка */}
    </div>
  );
};

export default FiltersSelect;
