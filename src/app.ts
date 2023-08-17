import express from 'express';
import 'dotenv/config';
import openaiRoutes from './routes/openai';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/openai', openaiRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
