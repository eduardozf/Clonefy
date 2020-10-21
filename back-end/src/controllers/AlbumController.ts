import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Albums from '../database/models/Albums';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Albums);
      return res.json(await repo.find());
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Albums);
      const response = await repo.save(req.body);
      return res.json(response);
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },
};
