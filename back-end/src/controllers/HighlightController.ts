import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';
import { IPlaylist } from './PlaylistController';

export interface IHighlights {
  id: string;
  title: string;
  playlists: IPlaylist[];
}

const Highlights: IHighlights[] = [];

export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(Highlights);
  },
  add(req: Request, res: Response) {
    const { title, playlistsID } = req.body;
    const Highlight = {
      id: uuid(),
      title,
      playlists: [],
    };
    Highlights.push(Highlight);
    return res.json(Highlight);
  },
};
