import React from 'react';
import classes from './clearInputFilterButton.module.scss';

import { useAppSelector } from '@hooks/redux';

interface ClearFilterInputButtonProps {
  callback: () => void;
}
const ClearFilterInputButton: React.FC<ClearFilterInputButtonProps> = ({
  callback,
}: ClearFilterInputButtonProps) => {
  const currentTheme = useAppSelector(state => state.theme.theme);

  return (
    <button className={classes.button} onClick={callback}>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.963679 0.16834C0.743224 -0.0561134 0.385796 -0.0561134 0.165341 0.16834C-0.0551138 0.392794 -0.0551138 0.756705 0.165341 0.981158L3.20166 4.07255L0.307854 7.01884C0.0873987 7.2433 0.0873991 7.60721 0.307854 7.83166C0.528309 8.05611 0.885737 8.05611 1.10619 7.83166L4 4.88537L6.89381 7.83166C7.11426 8.05611 7.47169 8.05611 7.69215 7.83166C7.9126 7.60721 7.9126 7.2433 7.69215 7.01884L4.79834 4.07255L7.83466 0.981158C8.05511 0.756705 8.05511 0.392794 7.83466 0.16834C7.6142 -0.0561134 7.25678 -0.0561134 7.03632 0.16834L4 3.25973L0.963679 0.16834Z"
          fill={
            currentTheme === 'dark'
              ? import.meta.env.VITE_LIGHT_SVG_THEME
              : import.meta.env.VITE_DARK_SVG_THEME
          }
          transform="scale(1.6)"
        />
      </svg>
    </button>
  );
};

export default ClearFilterInputButton;
