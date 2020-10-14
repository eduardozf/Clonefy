import express from 'express';
import cors from 'cors';
import logs from './middlewares/logs';

import './database';

import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', logs.logMiddleware)

app.use(routes);

app.listen(3333, () => {
  console.clear();
  console.log('✅ Server launched on 3333');
});

export default app;
