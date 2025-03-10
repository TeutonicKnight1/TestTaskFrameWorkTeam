import classes from './card.module.scss';

import { ICompletePainting } from '@models/ICompletePaintings';

interface ICardProps {
  painting: ICompletePainting;
}

const Card: React.FC<ICardProps> = ({ painting }) => {
  const imgURL = import.meta.env.VITE_BASE_URL_API + painting.imageUrl;

  return (
    <article className={classes.card}>
      <img
        src={imgURL}
        alt={painting.name}
        className={classes.image}
        loading="lazy"
        decoding="async"
      />
      <div className={classes.content}>
        <div className={classes.outside}>
          <div className={classes.text}>
            <h3 className={classes.title}>
              {painting.author.toLocaleUpperCase()}
            </h3>
            <p className={classes.p}>{painting.location.toLocaleUpperCase()}</p>
          </div>
        </div>
        <div className={classes.inside}>
          <div className={classes.text}>
            <h3 className={classes.title}>
              {painting.name.toLocaleUpperCase()}
            </h3>
            <p className={classes.p}>{painting.created}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
