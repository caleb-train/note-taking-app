import jsonServer from 'json-server';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const router = jsonServer.router('../db.json');
const middlewares = jsonServer.defaults();
const app = jsonServer.create();

app.use(middlewares);
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
  });
});


