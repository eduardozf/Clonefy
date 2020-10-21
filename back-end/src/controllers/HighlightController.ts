import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Highlights from '../database/models/Highlights';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Highlights);
      return res.json(await repo.find());
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Highlights);
      const response = await repo.save(req.body);
      return res.json(response);
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },
};
