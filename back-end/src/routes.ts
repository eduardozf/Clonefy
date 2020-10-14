import { Router } from 'express';

import MusicController from './controllers/MusicController';
import UserController from './controllers/UserController';
import PlaylistController from './controllers/PlaylistController';
import AlbumController from './controllers/AlbumController';
import HighlightController from './controllers/HighlightController';

const routes = Router();


// Users
routes.get('/users', UserController.list);
routes.post('/users', UserController.add);
routes.put('/users/:id/edit', UserController.edit);
routes.delete('/users/:id/delete', UserController.delete);
// Musics
routes.get('/musics', MusicController.list);
routes.post('/musics', MusicController.add);
routes.put('/musics/:id/edit', MusicController.edit);
routes.delete('/musics/:id/delete', MusicController.delete);
// Playlists
routes.get('/playlists', PlaylistController.list);
routes.get('/playlists/list', PlaylistController.findByBody);
routes.get('/playlists/:id/list', PlaylistController.findById);
routes.post('/playlists', PlaylistController.add);
// Albums
routes.get('/albums', AlbumController.list);
routes.post('/albums', AlbumController.add);
// Highlights
routes.get('/highlights', HighlightController.list);
routes.post('/highlights', HighlightController.add);

export default routes;

/* Emojis que funcionam no console (windows)
 *♈⛎♉♊♋♌♍♎♏♐♓♒♑
 *⛔❌⭕❗❕❓❔
 *❎✅⏸⏯⏹⏺⏭⏮⏩⏪⏫⏬
 * ➰➕➖➗⚫⚪⬛⬜
 */
