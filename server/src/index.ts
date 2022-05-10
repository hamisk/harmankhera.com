import express from 'express';
require('dotenv').config(); // dotenv to read port number and jsonWebToken secret key from .env file
const cors = require('cors');
const app = express();

const port: string | number = process.env.PORT || 8080;

app.use(express.json()); // if reading json - through requests or from json files (clarify which case it applies to
app.use(cors()); // if needing to communicate with local server with local front end
app.use(express.static('public')); // if serving files from a folder '/public'

// Routes
const routeARoutes = require('./routes/routeA');
const routesWithAuthViaCon = require('./routes/routeWithAuthViaController');

// Use routes
app.use('/routeA', routeARoutes);
app.use('/authRoute', routesWithAuthViaCon);

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
