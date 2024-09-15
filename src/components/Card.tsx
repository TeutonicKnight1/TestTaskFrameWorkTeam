import classes from '../styles/card.module.scss';

import { Painting } from '../types';

const Card = ({ painting, imageUrls }: { painting: Painting, imageUrls: { [key: string]: string } }) => {
  return (
    <article className={classes.card}>
      <div className={classes.card_content}>
        <h3 className={classes.card_title}>{painting.name}</h3>
        <img src={painting.imgUrl} alt={imageUrls[painting.name]} className={classes.card_image}/>
      </div>
    </article>
  );
};


const CardGrid = ({ paintings, imageUrls }: { paintings: Painting[], imageUrls: { [key: string]: string } }) => {
  return (
    <div className={classes.card_grid}>
      {paintings.map((painting) => (
        <Card key={painting.id} painting={painting} imageUrls={imageUrls} />
      ))}
    </div>
  );
};

export default CardGrid;
