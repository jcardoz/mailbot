
exports.mailHandler = (request, response) => {
  const mailgun = require("mailgun-js");
  const { generateMailgunMessageFormat }  = require("../helpers/message-formatter");

  const DOMAIN = process.env.MAILGUN_DOMAIN;

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN
  });

  // parse the message information
  const messageInformation = generateMailgunMessageFormat(request);
  
  mg.messages().send(messageInformation, function (error, body) {
    console.log(body);
    response.json(body);
  }, (error) => {
    console.log(error.message);
    response.send(`Something went wrong. ${error.message}`);
  });
};
