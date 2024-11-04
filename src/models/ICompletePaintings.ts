import { IPainting } from './IPainting';

export interface ICompletePainting extends IPainting {
  author: string;
  location: string;
}
