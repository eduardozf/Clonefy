import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import path from 'path';
import Musics from '../database/models/Musics';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      return res.json(await repo.find());
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async getMusicFile(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      const music: any = await repo.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.sendFile(
        `${path.resolve(__dirname, '..', '..')}${music.path}`,
      );
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async Info(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      const music: any = await repo.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.json({
        id: music.id,
        name: music.name,
        avatar: music.avatar,
        artist: music.artist,
        genre: music.genre,
        views: music.views,
      });
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Musics);
      const response = await repo.save(req.body);
      return res.json(response);
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },
};
