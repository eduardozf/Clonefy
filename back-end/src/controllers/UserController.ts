import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../database/models/Users';
import CreateUserService from '../services/CreateUserService';

export default module.exports = {
  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Users);
      return res.json(await repo.find());
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },

  async add(req: Request, res: Response) {
    try {
      const { name, email, password, avatar } = req.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({ name, email, password, avatar });

      delete user.password;

      return res.json(user);
    } catch (err) {
      console.log('⛔ err.message >> ', err.message);
      return res.status(400).json();
    }
  },
};
