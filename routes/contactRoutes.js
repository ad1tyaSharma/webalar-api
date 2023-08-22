const express = require('express');
const contactRouter = express.Router();

contactRouter.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

module.exports = contactRouter;
