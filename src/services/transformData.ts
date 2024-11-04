import { IAuthor } from '../models/IAuthor';
import { ILocation } from '../models/ILocation';
import { IPainting } from '../models/IPainting';
import { ICompletePainting } from '../models/ICompletePaintings';

import { useGetAuthorsQuery, useGetLocationsQuery } from '../store/api';

export const transformData = (paintings: IPainting[]) => {
  const authors: IAuthor[] = useGetAuthorsQuery().data || [];
  const locations: ILocation[] = useGetLocationsQuery().data || [];

  const transformedPaintings: ICompletePainting[] = paintings.map(painting => {
    const author = authors.find(author => author.id === painting.authorId);
    const location = locations.find(
      location => location.id === painting.locationId
    );

    return {
      ...painting,
      author: author?.name || 'undefinded',
      location: location?.location || 'undefinded',
    };
  });

  return transformedPaintings;
};
