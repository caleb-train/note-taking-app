import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config();

const app = express();

const { PORT } = process.env;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/notes', routes);

app.use('/', [express.static(path.join(__dirname, '../client')), express.static(path.join(__dirname, '../assets'))]);

app.listen(PORT || 3000, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  });
});


