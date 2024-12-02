import classes from '../styles/card.module.scss';

import { ICompletePainting } from '../models/ICompletePaintings';

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
        className={classes.card_image}
        loading="lazy"
        decoding="async"
      />
      <div className={classes.card_content}>
        <div className={classes.card_content_outside}>
          <div className={classes.card_content_outside_text}>
            <h3 className={classes.card_content_outside_text_title}>
              {painting.author.toLocaleUpperCase()}
            </h3>
            <p className={classes.card_content_outside_text_p}>
              {painting.location.toLocaleUpperCase()}
            </p>
          </div>
        </div>
        <div className={classes.card_content_inside}>
          <div className={classes.card_content_inside_text}>
            <h3 className={classes.card_content_inside_text_title}>
              {painting.name.toLocaleUpperCase()}
            </h3>
            <p className={classes.card_content_inside_text_p}>
              {painting.created}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
