const express = require('express');
require('dotenv').config();
const apiRoutes = require('./routes/index');
const errorRoutes =require('./routes/errors.routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

apiRoutes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${3000}`);
});