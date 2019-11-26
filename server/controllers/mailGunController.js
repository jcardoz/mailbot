exports.mail = (request, response) => {
  const mailgun = require("mailgun-js");
  const DOMAIN = process.env.MAILGRID_DOMAIN
  const mg = mailgun({
    apiKey: process.env.MAILGRID_API_KEY,
    domain: DOMAIN
  });
  const data = {
    from: request.params.from,
    to: request.params.to,
    cc: request.params.cc,
    bcc: request.params.bcc,
    subject: request.params.subject,
    text: request.params.content
  };
  mg.messages().send(data, function (error, body) {
    response.json(body);
  }, (error) => {
    response.send(`Something went wrong. ${error.message}`);
  });

};
