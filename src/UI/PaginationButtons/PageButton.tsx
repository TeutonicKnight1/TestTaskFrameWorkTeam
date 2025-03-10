import classes from './paginationButtons.module.scss';

interface PageButtonProps {
  children: JSX.Element | number;
  callback: () => void;
  styleClass: string;
}
const PageButton = ({ children, callback, styleClass }: PageButtonProps) => {
  return (
    <button
      className={classes[styleClass] || classes.button}
      onClick={callback}
    >
      {children}
    </button>
  );
};

export default PageButton;
