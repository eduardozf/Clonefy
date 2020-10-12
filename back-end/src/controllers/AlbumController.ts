import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

const Albums = [
  {
    id: '966e3261-1bc3-4a3a-a5cb-2d071ad10542',
    name: 'A volta',
    description: 'Album do tue mc',
    artist: '',
    musics: ['4ea50d01-c4bc-458e-8af2-6c201e4cb131'],
    genre: 'RAP',
  },
];

export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(Albums);
  },
};
