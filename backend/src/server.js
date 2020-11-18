/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Static Files
app.use('/files/emblem', express.static(path.join(__dirname, 'assets/ranked-emblems')));
app.use('/files/public', express.static(path.join(__dirname, 'assets/public')));
app.use('/files/positions', express.static(path.join(__dirname, 'assets/positions')));
app.use('/files/profileicon', express.static(path.join(__dirname, 'assets/profileicon')));
app.use('/files/item', express.static(path.join(__dirname, 'assets/item')));
app.use('/files/perk-images/Styles/', express.static(path.join(__dirname, 'assets/runes')));
app.use('/files/spell/', express.static(path.join(__dirname, 'assets/spell')));
// Champions Images
app.use('/files/champion/loading', express.static(path.join(__dirname, 'assets/champion/loading')));
app.use('/files/champion/splash', express.static(path.join(__dirname, 'assets/champion/splash')));
app.use('/files/champion/tiles', express.static(path.join(__dirname, 'assets/champion/tiles')));

// Start Listen
app.listen(3333, () => {
  console.clear();
  console.log('✅ Server started on port 3333');
});
