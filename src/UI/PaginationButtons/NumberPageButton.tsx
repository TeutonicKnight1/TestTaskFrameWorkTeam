import classes from '../../styles/pagination.module.scss';

interface NumberPageButtonProps {
  numberPage: number;
  handlePageChange: (page: number) => void;
}

const NumberPageButton: React.FC<NumberPageButtonProps> = ({
  numberPage,
  handlePageChange,
}) => {
  return (
    <button
      className={classes.pagination_button}
      onClick={() => handlePageChange(numberPage)}
    >
      {numberPage}
    </button>
  );
};

export default NumberPageButton;
