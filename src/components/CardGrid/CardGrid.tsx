import { ICompletePainting } from '@models/ICompletePaintings';

import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { useGetPicturesQuery } from '@store/api';
import { useEffect } from 'react';

import { transformData } from '../../services/transformData';
import { setTotalPages } from '@store/slices/paginationSlice';

import Card from '@UI/Card/Card';
import Loader from '@UI/Loader/Loader';
import Pagination from '@UI/Pagination/Pagination';

import classes from './cardGrid.module.scss';
import { useTheme } from '@hooks/useTheme';

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
    if (data) {
      dispatch(setTotalPages(data.totalCount || 0));
    }
  }, [data, dispatch]);

  useTheme();

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
