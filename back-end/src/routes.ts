import { Router } from 'express';

import MusicController from './controllers/MusicController';
import UserController from './controllers/UserController';
import PlaylistController from './controllers/PlaylistController';
import AlbumController from './controllers/AlbumController';
import HighlightController from './controllers/HighlightController';

const routes = Router();

// Musics
routes.get('/musics', MusicController.list);
routes.post('/musics', MusicController.add);
routes.put('/musics/:id/edit', MusicController.edit);
routes.delete('/musics/:id/delete', MusicController.delete);
// Users
routes.get('/users', UserController.list);
routes.post('/users', UserController.add);
routes.put('/users/:id/edit', UserController.edit);
routes.delete('/users/:id/delete', UserController.delete);
// Playlists
routes.get('/playlists', PlaylistController.list);
// Album
routes.get('/albums', AlbumController.list);
// Highlights
routes.get('/highlights', HighlightController.list);

export default routes;
