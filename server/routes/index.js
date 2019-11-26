var express = require('express');
var router = express.Router();

const mailGunController = require('../controllers/mailGunController');
const sendGridController = require('../controllers/sendGridController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', content: 'this is some sample content' });
});

// Mailgun
router.get('/mailgun/:subject/:content/:from/:to/:cc/:bcc', mailGunController.mail);
// Sendgrid
router.get('/sendgrid/:subject/:content/:from/:to/:cc/:bcc', sendGridController.mail);

module.exports = router;
