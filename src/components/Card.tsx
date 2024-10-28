import classes from '../styles/card.module.scss';

import { IPainting } from '../models/IPainting';

interface ICardProps {
  painting: IPainting;
}

const Card: React.FC<ICardProps> = ({ painting }) => {
  const imgURL = import.meta.env.VITE_BASE_URL_API + painting.imageUrl;

  return (
    <article className={classes.card}>
      <img src={imgURL} alt={painting.name} className={classes.card_image} />
      <div className={classes.card_content}>
        <div className={classes.card_content_text}>
          <h3 className={classes.card_content_text_title}>
            {painting.name.toLocaleUpperCase()}
          </h3>
          <p className={classes.card_content_text_created}>
            {painting.created}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
