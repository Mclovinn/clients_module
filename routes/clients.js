const express = require('express');
const router = express.Router();
const Client = require('../models/client')
const ClientController = require('../controllers/client')(Client)

/* GET clients listing. */
router.get('/', ClientController.getClients);

module.exports = router;
