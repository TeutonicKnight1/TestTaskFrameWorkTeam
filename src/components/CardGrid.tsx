import { ICompletePainting } from '../models/ICompletePaintings';

import Card from './Card';

import classes from '../styles/cardGrid.module.scss';

interface ICardGridProps {
  paintings: ICompletePainting[];
}
const CardGrid: React.FC<ICardGridProps> = ({ paintings }) => {
  return (
    <div className={classes.card_grid}>
      {paintings.length > 0 ? (
        paintings.map(painting => (
          <Card key={painting.id} painting={painting} />
        ))
      ) : (
        <p>No paintings available</p> // TODO: Add loading state
      )}
    </div>
  );
};
export default CardGrid;
