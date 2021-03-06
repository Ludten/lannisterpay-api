const compression = require('compression');

const express = require("express");

const IndexRouter = require("./controllers/v1/index.router");

const bodyParser = require('body-parser');

(async () => {
  const app = express();

  app.use(compression());

  //port listen
  const port = process.env.PORT || 3000;

  app.use(bodyParser.urlencoded({ extended: false }))
      .use(bodyParser.json())
      .use('/', IndexRouter);



  // Start the Server
  app.listen( port, () => {  } );
})();