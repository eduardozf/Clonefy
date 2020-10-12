import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

export interface IMusics {
  id: string;
  name: string;
  avatar: string;
  artist: string;
  album: string;
  genre: string;
  views: number;
}

const musics: IMusics[] = [
  {
    id: '15a2ddf6-8515-446b-b0e9-4a21a51a1976',
    name: 'Musica Test',
    avatar:
      'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg',
    artist: 'id-artist-uid-123456789',
    album: 'id-album-uid-123456789',
    genre: 'POP',
    views: 5,
  },
  {
    id: '4ea50d01-c4bc-458e-8af2-6c201e4cb131',
    name: '777-666',
    avatar:
      'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg',
    artist: 'id-user-uid-1289',
    album: 'id-album-uid-1289',
    genre: 'TRAP',
    views: 1000,
  },
];

export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(musics);
  },

  add(req: Request, res: Response) {
    const { name, avatar, artist, album, genre } = req.body;
    const music = {
      id: uuid(),
      name,
      avatar,
      artist,
      album,
      genre,
      views: 0,
    };
    musics.push(music);
    return res.json(music);
  },

  edit(req: Request, res: Response) {
    const { id } = req.params;
    const { name, avatar, artist, album, genre } = req.body;
    const musicIndex = musics.findIndex(music => music.id === id);

    musics[musicIndex] = {
      id,
      name,
      avatar,
      artist,
      album,
      genre,
      views: musics[musicIndex].views,
    };
    res.json(musics[musicIndex]);
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const musicIndex = musics.findIndex(music => music.id === id);

    musics.splice(musicIndex, 1);
    return res.status(204).json();
  },
};
