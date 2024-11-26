import { ICompletePainting } from '../models/ICompletePaintings';

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { useGetPicturesQuery } from '../store/api';
import { useEffect } from 'react';

import { transformData } from '../services/transformData';
import { setTheme } from '../store/slices/themeSlice';
import { setTotalPages } from '../store/slices/paginationSlice';

import Card from './Card';
import Loader from '../UI/Loader';

import classes from '../styles/cardGrid.module.scss';
import Pagination from './Pagination';

const CardGrid: React.FC = () => {
  const dispatch = useAppDispatch();

  const { currentPage, limit } = useAppSelector(state => state.pagination);
  const { findString, locationId, authorId, yearFrom, yearTo } = useAppSelector(
    state => state.filters
  );

  const { data, error, isLoading } = useGetPicturesQuery({
    _page: currentPage,
    _limit: limit,
    findString,
    locationId: locationId || undefined,
    authorId: authorId || undefined,
    yearFrom: yearFrom || undefined,
    yearTo: yearTo || undefined,
  });

  const paintings: ICompletePainting[] = transformData(data?.data || []);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(theme));
    if (data) {
      dispatch(setTotalPages(data.totalCount || 0));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className={classes.card_grid}>
        {paintings.length > 0 ? (
          paintings.map(painting => (
            <Card key={painting.id} painting={painting} />
          ))
        ) : (
          <p>No paintings available</p> // TODO: Add loading state
        )}
      </div>
      <Pagination />
    </>
  );
};
export default CardGrid;
