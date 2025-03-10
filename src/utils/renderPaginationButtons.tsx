import PageButton from '@UI/PaginationButtons/PageButton';
import classes from '../UI/PaginationButtons/paginationButtons.module.scss';

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
            <PageButton
              key={i}
              children={i}
              callback={() => handlePageChange(i)}
              styleClass="button_active"
            />
          );
        } else {
          pages.push(
            <PageButton
              key={i}
              children={i}
              callback={() => handlePageChange(i)}
              styleClass="button"
            />
          );
        }
      }
      pages.push(
        <span key="dots_1" className={classes.pagination_span}>
          ...
        </span>,
        <PageButton
          key={totalCount}
          children={totalCount}
          callback={() => handlePageChange(totalCount)}
          styleClass="button"
        />
      );
    } else if (currentPage === totalCount || currentPage === totalCount - 1) {
      // 1 ... 6 7 8
      pages.push(
        <PageButton
          key={1}
          children={1}
          callback={() => handlePageChange(1)}
          styleClass="button"
        />,
        <span key="dots_1" className={classes.pagination_span}>
          ...
        </span>
      );
      for (let i = totalCount - 2; i <= totalCount; i++) {
        if (i === currentPage) {
          pages.push(
            <PageButton
              key={i}
              children={i}
              callback={() => handlePageChange(i)}
              styleClass="button_active"
            />
          );
        } else {
          pages.push(
            <PageButton
              key={i}
              children={i}
              callback={() => handlePageChange(i)}
              styleClass="button"
            />
          );
        }
      }
    } else {
      pages.push(
        <PageButton
          key={1}
          children={1}
          callback={() => handlePageChange(1)}
          styleClass="button"
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
        <PageButton
          key={currentPage - 1}
          children={currentPage - 1}
          callback={() => handlePageChange(currentPage - 1)}
          styleClass="button"
        />,
        <PageButton
          key={currentPage}
          children={currentPage}
          callback={() => handlePageChange(currentPage)}
          styleClass="button_active"
        />,
        <PageButton
          key={currentPage + 1}
          children={currentPage + 1}
          callback={() => handlePageChange(currentPage + 1)}
          styleClass="button"
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
        <PageButton
          key={totalCount}
          children={totalCount}
          callback={() => handlePageChange(totalCount)}
          styleClass="button"
        />
      );
    }
  } else {
    for (let i = 1; i <= totalCount; i++) {
      if (i === currentPage) {
        pages.push(
          <PageButton
            key={i}
            children={i}
            callback={() => handlePageChange(i)}
            styleClass="button_active"
          />
        );
      } else {
        pages.push(
          <PageButton
            key={i}
            children={i}
            callback={() => handlePageChange(i)}
            styleClass="button"
          />
        );
      }
    }
  }

  return pages;
};

export default renderPaginationButtons;
