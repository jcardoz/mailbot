exports.mailHandler = (request, response) => {
  const mailgun = require("mailgun-js");
  const DOMAIN = process.env.MAILGUN_DOMAIN
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN
  });

  // TODO: Handle empty fields
  const messageInformation = {
    from: request.body.from,
    to: request.body.to,
    cc: request.body.cc,
    bcc: request.body.bcc,
    subject: request.body.subject,
    text: request.body.message
  };

  mg.messages().send(messageInformation, function (error, body) {
    response.json(body);
  }, (error) => {
    console.log(error.message);
    response.send(`Something went wrong. ${error.message}`);
  });
};
