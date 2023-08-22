const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

module.exports = authRouter;
