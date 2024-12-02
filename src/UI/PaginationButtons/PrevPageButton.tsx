import { useAppSelector } from '../../hooks/redux';
import classes from '../../styles/pagination.module.scss';

import arrow_dark_icon from '../../assets/arrow_dark_icon.png';
import arrow_light_icon from '../../assets/arrow_light_icon.png';

interface PrevPageButtonProps {
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const PrevPageButton: React.FC<PrevPageButtonProps> = ({
  currentPage,
  handlePageChange,
}) => {
  const currentTheme = useAppSelector(state => state.theme.theme);

  return (
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
  );
};

export default PrevPageButton;
