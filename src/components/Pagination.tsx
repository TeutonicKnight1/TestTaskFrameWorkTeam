import classes from '../styles/pagination.module.scss';

import arrow_dark_icon from '../assets/arrow_dark_icon.png';
import arrow_light_icon from '../assets/arrow_light_icon.png';

import { useAppSelector } from '../hooks/redux';

interface PaginationProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
}) => {
  const totalCount = useAppSelector(state => state.pagination.totalPages);
  const currentTheme = useAppSelector(state => state.theme.theme);

  const renderPageButtons = () => {
    let pages: JSX.Element[] = [];

    if (currentPage === 1) {
      pages = [
        <button
          key={1}
          className={classes.pagination_button_active}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>,
        <button
          key={2}
          className={classes.pagination_button}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>,
        <button
          key={3}
          className={classes.pagination_button}
          onClick={() => handlePageChange(3)}
        >
          3
        </button>,
        <span key="dots1" className={classes.pagination_span}>
          ...
        </span>,
        <button
          key={totalCount}
          className={classes.pagination_button}
          onClick={() => handlePageChange(totalCount)}
        >
          {totalCount}
        </button>,
      ];
    } else if (currentPage === totalCount) {
      pages = [
        <button
          key={1}
          className={classes.pagination_button}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>,
        <span key="dots2" className={classes.pagination_span}>
          ...
        </span>,
        <button
          key={totalCount - 2}
          className={classes.pagination_button}
          onClick={() => handlePageChange(totalCount - 2)}
        >
          {totalCount - 2}
        </button>,
        <button
          key={totalCount - 1}
          className={classes.pagination_button}
          onClick={() => handlePageChange(totalCount - 1)}
        >
          {totalCount}
        </button>,
        <button
          key={totalCount}
          className={classes.pagination_button_active}
          onClick={() => handlePageChange(totalCount)}
        >
          {totalCount}
        </button>,
      ];
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalCount - 1, currentPage + 1);

      pages.push(
        <button
          key={1}
          className={classes.pagination_button}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(
          <span key="dots3" className={classes.pagination_span}>
            ...
          </span>
        );
      }

      for (let page = startPage; page <= endPage; page++) {
        pages.push(
          <button
            key={page}
            className={
              page === currentPage
                ? classes.pagination_button_active
                : classes.pagination_button
            }
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      }

      if (endPage < totalCount - 1) {
        pages.push(
          <span key="dots4" className={classes.pagination_span}>
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalCount}
          className={classes.pagination_button}
          onClick={() => handlePageChange(totalCount)}
        >
          {totalCount}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={classes.pagination}>
      <button
        className={classes.pagination_button_prev}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img
          src={currentTheme === 'dark' ? arrow_dark_icon : arrow_light_icon}
          className={classes.pagination_button_prev_icon}
          alt="previous page icon"
        />
      </button>
      <div>{renderPageButtons()}</div>
      <button
        className={classes.pagination_button_next}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalCount}
      >
        <img
          src={currentTheme === 'dark' ? arrow_dark_icon : arrow_light_icon}
          className={classes.pagination_button_next_icon}
          alt="previous page icon"
        />
      </button>
    </div>
  );
};

export default Pagination;
