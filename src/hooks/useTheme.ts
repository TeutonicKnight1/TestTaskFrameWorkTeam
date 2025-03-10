import { setTheme } from '@store/slices/themeSlice';
import { useAppDispatch } from '@hooks/redux';
import { useEffect } from 'react';

export const useTheme = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(theme));
  }, [dispatch]);
};
