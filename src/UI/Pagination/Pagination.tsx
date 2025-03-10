import classes from './pagination.module.scss';
import { useAppSelector, useAppDispatch } from '@hooks/redux';

import ArrowPageButton from '@UI/PaginationButtons/ArrowPageButton';

import { setCurrentPage } from '@store/slices/paginationSlice';
import renderPaginationButtons from '@utils/renderPaginationButtons';

const Pagination: React.FC = () => {
  const { currentPage, totalPages: totalCount } = useAppSelector(
    state => state.pagination
  );
  const dispatch = useAppDispatch();

  const handlePageChange = (page: number) => {
    if (page <= 0 || page > totalCount) return;
    dispatch(setCurrentPage(page));
  };

  return (
    <div className={classes.pagination}>
      <ArrowPageButton
        callback={() => handlePageChange(currentPage - 1)}
        styleClass="button_prev"
      />
      <div>
        {renderPaginationButtons(totalCount, currentPage, handlePageChange)}
      </div>
      <ArrowPageButton
        callback={() => handlePageChange(currentPage + 1)}
        styleClass="button_next"
      />
    </div>
  );
};

export default Pagination;
