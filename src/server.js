import express from 'express';
import next from 'next';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const dev = process.env.NODE_ENV !== 'development'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express();

    const {
      PORT
    } = process.env;

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: true
    }));

    server.listen(PORT || 3500, () => {
      server.get('*', (req, res) => {
        return handle(req, res)
      })
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })