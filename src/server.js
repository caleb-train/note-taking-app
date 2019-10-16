import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use('/', [express.static(`${__dirname}`), express.static(path.join(__dirname, '../assets'))]);

app.listen(PORT || 3000, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  });
});


