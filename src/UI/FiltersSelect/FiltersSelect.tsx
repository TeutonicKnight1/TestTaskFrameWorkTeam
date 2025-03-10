import { useEffect, useState } from 'react';
import classes from './filtersSelect.module.scss';

import plus_dark_icon from '@assets/expand_plus_dark_icon.png';
import minus_dark_icon from '@assets/expand_minus_dark_icon.png';

import { useDebounce } from '@hooks/useDebounce';

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
    console.log(inputValue);
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
    setOptions(options || []); // Если options обновляются, обновляем optionsArray
  }, [options]);

  useEffect(() => {
    if (inputValue.length === 0) {
      setOptions(options || []); // Восстанавливаем исходный массив при очистке инпута
      onSelectOption(0);
    } else {
      setOptions(
        (options || []).filter(option =>
          option[labelKey].toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue, options]); // Теперь updateOption работает автоматически

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
              console.log(e.target.value.length);
              setInputValue(e.target.value);
              updateOption();
            }}
            onFocus={toggleOption}
            //onBlur={toggleOption}
            className={classes.input}
          ></input>
          <button
            className={classes.select_expand_button}
            onClick={toggleOption}
          ></button>
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
                console.log(options);
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
