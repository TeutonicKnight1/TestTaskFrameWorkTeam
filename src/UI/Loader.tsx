import classes from '../styles/loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
