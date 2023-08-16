import { Request, Response } from 'express';

const express = require('express');

const app = express();

app.use('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
