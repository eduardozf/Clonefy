import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../database/models/Users';

export default module.exports = {

  async list(req: Request, res: Response) {
    try {
      const repo = getRepository(Users);
      return res.json(await repo.find());
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message)
    }
  },

  async add(req: Request, res: Response) {
    try {
      const repo = getRepository(Users);
      const response = await repo.save(req.body)
      return res.json(response);
    }
    catch (err) {
      console.log('⛔ err.message >> ', err.message)
    }
  },

  edit(req: Request, res: Response) {
    /* const { id } = req.params;
    const { name, email, password, avatar } = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    users[userIndex] = {
      id,
      name,
      email,
      password,
      avatar,
      likedMusics: users[userIndex].likedMusics,
      playlists: users[userIndex].playlists,
    };
    res.json(users[userIndex]); */
  },

  delete(req: Request, res: Response) {
    /* const { id } = req.params;
    const userIndex = users.findIndex(music => music.id === id);

    users.splice(userIndex, 1);
    return res.status(204).json(); */
  },
};
