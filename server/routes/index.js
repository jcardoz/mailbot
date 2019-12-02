var express = require('express');
var router = express.Router();

const mailGunController = require('../controllers/mailGunController');
const sendGridController = require('../controllers/sendGridController');

router.get('/', (req, res, next) => {
  res.send('hello');
});

// Mailgun
router.post('/mailgun', mailGunController.mailHandler);

// Sendgrid
router.post('/sendgrid', sendGridController.mailHandler);

module.exports = router;
