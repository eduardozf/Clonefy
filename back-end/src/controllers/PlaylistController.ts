import { v4 as uuid } from 'uuid';
import { Request, Response } from 'express';

export interface IPlaylist {
  id: string;
  name: string;
  description: string;
  avatar: string;
  musics: string[];
  genre: string;
  private: boolean;
}

export const Playlists: IPlaylist[] = [
  {
    id: '19a1db08-7e15-448d-966b-0c02d346a944',
    name: 'Playlist Boa',
    description:
      'Os sucessos e novidades do rap internacional para você. Foto: YoungBoy Never Broke Again.',
    avatar: 'https://i.scdn.co/image/ab67706f00000002f6efcb113f84339059c77b35',
    musics: [
      '4ea50d01-c4bc-458e-8af2-6c201e4cb131',
      '15a2ddf6-8515-446b-b0e9-4a21a51a1976',
    ],
    genre: 'RAP',
    private: false,
  },
];
export default module.exports = {
  list(req: Request, res: Response) {
    return res.json(Playlists);
  },
};
