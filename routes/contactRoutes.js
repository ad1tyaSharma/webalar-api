const express = require('express');
const contactController = require('../controllers/contactController')
const contactRouter = express.Router();

contactRouter.post('/allContacts', contactController.getallContacts)
contactRouter.get('/:id', contactController.getContact)
contactRouter.post('/create', contactController.createContact)
contactRouter.put('/edit/:id', contactController.editContact)
contactRouter.delete('/delete/:id', contactController.deleteContact)



module.exports = contactRouter;
