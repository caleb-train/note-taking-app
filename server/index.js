import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import routes from './routes';


dotenv.config();

const app = express();

const { PORT, NODE_ENV } = process.env;

if (NODE_ENV == 'development') {
  const compiler = Webpack(webpackConfig);
  app.use(
      WebpackDevMiddleware(compiler, {
          hot: true,
          publicPath: webpackConfig.output.publicPath
      })
  );

  app.use(WebpackHotMiddleware(compiler));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/notes', routes);

app.use('/', [express.static(path.join(__dirname, '../client-prod')), express.static(path.join(__dirname, '../assets'))]);

app.listen(PORT || 3000, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client-prod/index.html'))
  });
});


