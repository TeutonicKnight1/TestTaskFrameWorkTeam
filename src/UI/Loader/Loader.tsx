import classes from './loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
