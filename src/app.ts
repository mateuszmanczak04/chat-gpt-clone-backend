import express from 'express';
import 'dotenv/config';
import openaiRoutes from './routes/openai';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/api/openai', openaiRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
