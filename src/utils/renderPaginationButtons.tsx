import ActiveNumberPageButton from '../UI/PaginationButtons/ActiveNumberPageButton';
import NumberPageButton from '../UI/PaginationButtons/NumberPageButton';
import classes from '../styles/pagination.module.scss';

const renderPaginationButtons = (
  totalCount: number,
  currentPage: number,
  handlePageChange: (page: number) => void
) => {
  let pages: JSX.Element[] = [];

  const startPage = 1;
  const endPage = totalCount;
  const shouldShowDotsLeft = startPage + 1 != currentPage - 1;
  const shouldShowDotsRight = endPage - 1 != currentPage + 1;

  if (totalCount > 4) {
    if (currentPage === 1 || currentPage === 2) {
      // 1 2 3 ... 8
      for (let i = 1; i <= 3; i++) {
        if (i === currentPage) {
          pages.push(
            <ActiveNumberPageButton
              key={i}
              numberPage={i}
              handlePageChange={handlePageChange}
            />
          );
        } else {
          pages.push(
            <NumberPageButton
              key={i}
              numberPage={i}
              handlePageChange={handlePageChange}
            />
          );
        }
      }
      pages.push(
        <span key="dots_1" className={classes.pagination_span}>
          ...
        </span>,
        <NumberPageButton
          key={totalCount}
          numberPage={totalCount}
          handlePageChange={handlePageChange}
        />
      );
    } else if (currentPage === totalCount || currentPage === totalCount - 1) {
      // 1 ... 6 7 8
      pages.push(
        <NumberPageButton
          key={1}
          numberPage={1}
          handlePageChange={handlePageChange}
        />,
        <span key="dots_1" className={classes.pagination_span}>
          ...
        </span>
      );
      for (let i = totalCount - 2; i <= totalCount; i++) {
        if (i === currentPage) {
          pages.push(
            <ActiveNumberPageButton
              key={i}
              numberPage={i}
              handlePageChange={handlePageChange}
            />
          );
        } else {
          pages.push(
            <NumberPageButton
              key={i}
              numberPage={i}
              handlePageChange={handlePageChange}
            />
          );
        }
      }
    } else {
      pages.push(
        <NumberPageButton
          key={1}
          numberPage={1}
          handlePageChange={handlePageChange}
        />
      );
      if (shouldShowDotsLeft) {
        pages.push(
          <span key="dots_1" className={classes.pagination_span}>
            ...
          </span>
        );
      }

      pages.push(
        <NumberPageButton
          key={currentPage - 1}
          numberPage={currentPage - 1}
          handlePageChange={handlePageChange}
        />,
        <ActiveNumberPageButton
          key={currentPage}
          numberPage={currentPage}
          handlePageChange={handlePageChange}
        />,
        <NumberPageButton
          key={currentPage + 1}
          numberPage={currentPage + 1}
          handlePageChange={handlePageChange}
        />
      );

      if (shouldShowDotsRight) {
        pages.push(
          <span key="dots_2" className={classes.pagination_span}>
            ...
          </span>
        );
      }

      pages.push(
        <NumberPageButton
          key={totalCount}
          numberPage={totalCount}
          handlePageChange={handlePageChange}
        />
      );
    }
  } else {
    for (let i = 1; i <= totalCount; i++) {
      if (i === currentPage) {
        pages.push(
          <ActiveNumberPageButton
            key={i}
            numberPage={i}
            handlePageChange={handlePageChange}
          />
        );
      } else {
        pages.push(
          <NumberPageButton
            key={i}
            numberPage={i}
            handlePageChange={handlePageChange}
          />
        );
      }
    }
  }

  return pages;
};

export default renderPaginationButtons;
