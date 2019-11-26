exports.mail = (request, response) => {
  const mailgun = require("mailgun-js");
  const DOMAIN = process.env.MAILGUN_DOMAIN
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN
  });
  
  // TODO: Handle empty fields
  const messageInformation = {
    from: request.params.from,
    to: request.params.to,
    cc: request.params.cc,
    bcc: request.params.bcc,
    subject: request.params.subject,
    text: request.params.content
  };
  
  mg.messages().send(messageInformation, function (error, body) {
    response.json(body);
  }, (error) => {
    response.send(`Something went wrong. ${error.message}`);
  });

};
