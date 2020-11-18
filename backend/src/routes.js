const { Router } = require('express');
const api = require('./services/api');

const routes = Router();

routes.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  try {
    console.log('Consultando user');
    const response = await api.get(`/lol/summoner/v4/summoners/by-name/${username}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

routes.get('/ranking/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log('Consultando ranking de usuario');
    const response = await api.get(`/lol/league/v4/entries/by-summoner/${id}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

routes.get('/history/:userId', async (req, res) => {
  const { userId } = req.params;
  const { endIndex, beginIndex } = req.query;
  try {
    const response = await api.get(`/lol/match/v4/matchlists/by-account/${userId}?endIndex=${endIndex}&beginIndex=${beginIndex}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

routes.get('/match/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await api.get(`/lol/match/v4/matches/${id}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

routes.get('/mastery/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await api.get(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${userId}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = routes;
