import { Request, Response } from 'express';
import Musics from '../database/models/Musics';
import { getRepository } from 'typeorm';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      return res.json(await repo.find());
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message)
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      const response = await repo.save(req.body)
      return res.json(response);
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message)
    }
  },

  edit(req: Request, res: Response) {
    /* const { id } = req.params;
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
    res.json(musics[musicIndex]); */
  },

  delete(req: Request, res: Response) {
    /* const { id } = req.params;
    const musicIndex = musics.findIndex(music => music.id === id);

    musics.splice(musicIndex, 1);
    return res.status(204).json(); */
  },
};
