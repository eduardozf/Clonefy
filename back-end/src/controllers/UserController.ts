import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

/* UUID'S
 * 0e4369e0-f17f-4a10-8a6f-17aefb18b3e0
 * d0c48f28-b068-4d66-bf93-221c30499b2e
 *
 *
 */

const users = [
  {
    id: '0e4369e0-f17f-4a10-8a6f-17aefb18b3e0',
    name: 'EduardoZF',
    email: 'eduardo@gmail.com',
    password: '1234',
    avatar: 'https://i.imgur.com/VdCushb.jpg',
    likedMusics: [],
    playlists: [],
  },
  {
    id: 'd0c48f28-b068-4d66-bf93-221c30499b2e',
    name: 'Test User',
    email: 'user@gmail.com',
    password: '4321',
    avatar:
      'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
    likedMusics: ['4ea50d01-c4bc-458e-8af2-6c201e4cb131'],
    playlists: [],
  },
];

export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(users);
  },

  add(req: Request, res: Response) {
    const { name, email, password, avatar } = req.body;
    const user = {
      id: uuid(),
      name,
      email,
      password,
      avatar,
      likedMusics: [],
      playlists: [],
    };
    users.push(user);
    return res.json(user);
  },

  edit(req: Request, res: Response) {
    const { id } = req.params;
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
    res.json(users[userIndex]);
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const userIndex = users.findIndex(music => music.id === id);

    users.splice(userIndex, 1);
    return res.status(204).json();
  },
};
