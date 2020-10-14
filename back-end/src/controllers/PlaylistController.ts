import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Playlists from '../database/models/Playlists';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Playlists);
      return res.json(await repo.find());
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const repo = getRepository(Playlists);
      const playlist = await repo.find({
        where: {
          id: req.params.id
        }
      })
      return res.json(playlist);
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async findByBody(req: Request, res: Response) {
    const repo = getRepository(Playlists);
    try {
      const playlists = await repo.createQueryBuilder("playlists")
        .where("id IN (:...ids)", { ids: req.query.playlists })
        .getMany();
      return res.json(playlists);
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Playlists);
      const response = await repo.save(req.body)
      return res.json(response);
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },
};
