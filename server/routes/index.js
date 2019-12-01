var express = require('express');
var router = express.Router();

const mailGunController = require('../controllers/mailGunController');
const sendGridController = require('../controllers/sendGridController');

// SAMPLE PAGE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: 'this is some sample content' });
});

// Mailgun
router.post('/mailgun', mailGunController.mailHandler);

// Sendgrid
router.post('/sendgrid', sendGridController.mailHandler);

module.exports = router;
