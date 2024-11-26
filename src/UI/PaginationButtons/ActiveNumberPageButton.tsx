import classes from '../../styles/pagination.module.scss';

interface ActiveNumberPageButtonProps {
  numberPage: number;
  handlePageChange: (page: number) => void;
}

const ActiveNumberPageButton: React.FC<ActiveNumberPageButtonProps> = ({
  numberPage,
  handlePageChange,
}) => {
  return (
    <button
      className={classes.pagination_button_active}
      onClick={() => handlePageChange(numberPage)}
    >
      {numberPage}
    </button>
  );
};

export default ActiveNumberPageButton;