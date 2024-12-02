import classes from '../styles/pagination.module.scss';
import { useAppSelector, useAppDispatch } from '../hooks/redux';

import PrevPageButton from '../UI/PaginationButtons/PrevPageButton';
import NextPageButton from '../UI/PaginationButtons/NextPageButton';

import { setCurrentPage } from '../store/slices/paginationSlice';
import renderPaginationButtons from '../utils/renderPaginationButtons';

const Pagination: React.FC = () => {
  const { currentPage, totalPages: totalCount } = useAppSelector(
    state => state.pagination
  );
  const dispatch = useAppDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={classes.pagination}>
      <PrevPageButton
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>
        {renderPaginationButtons(totalCount, currentPage, handlePageChange)}
      </div>
      <NextPageButton
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination;
