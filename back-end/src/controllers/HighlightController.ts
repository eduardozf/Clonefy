import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

export interface IHighlights {
  id: string;
  title: string;
  playlists: string[];
}

const Highlights: IHighlights[] = [
  {
    id: '19a1db08-7e15-448d-966b-0c02d346a944',
    title: 'Bons Sonhos',
    playlists: [
      '4ea50d01-c4bc-458e-8af2-6c201e4cb131',
      '4ea50d01-c4bc-458e-8af2-6c201e4cb131',
      '4ea50d01-c4bc-458e-8af2-6c201e4cb131',
    ],
  },
];

export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(Highlights);
  },
};
