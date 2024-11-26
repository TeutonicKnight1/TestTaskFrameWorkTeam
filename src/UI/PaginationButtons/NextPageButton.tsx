import { useAppSelector } from '../../hooks/redux';
import classes from '../../styles/pagination.module.scss';

import arrow_dark_icon from '../../assets/arrow_dark_icon.png';
import arrow_light_icon from '../../assets/arrow_light_icon.png';

interface NextPageButtonProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const NextPageButton: React.FC<NextPageButtonProps> = ({
  currentPage,
  handlePageChange,
}) => {
  const currentTheme = useAppSelector(state => state.theme.theme);
  const totalPages = useAppSelector(state => state.pagination.totalPages);
  
  return (
    <button
      className={classes.pagination_button_next}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <img
        src={currentTheme === 'dark' ? arrow_dark_icon : arrow_light_icon}
        className={classes.pagination_button_next_icon}
        alt="next page icon"
      />
    </button>
  );
};

export default NextPageButton;
