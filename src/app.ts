import { Request, Response } from 'express';

import express from 'express';
import 'dotenv/config';

const app = express();

app.use('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
