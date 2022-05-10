import express from 'express';
const router = express.Router();

const routeAuthController = require('../controllers/routeAuthController');
const authorize = require('../middleware/authorize');

router.get('/', routeAuthController.getData);

router.post('/add-data', authorize, routeAuthController.addData);

module.exports = router;
