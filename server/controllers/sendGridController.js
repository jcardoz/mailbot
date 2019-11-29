exports.mailHandler = (request, response) => {
  const sgMail = require('@sendgrid/mail');
  const { generateSendgridMessageFormat }  = require("../helpers/message-formatter");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // HACK: Hack to run without certificate (self-signed cert) error
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

  // parse the message information
  const messageInformation = generateSendgridMessageFormat(request);
  
  sgMail.send(messageInformation).then((body, error) => {
    console.log(body);
    response.json(body);
  }, (error) => {
    console.log(error.message);
    response.send(`Something went wrong. ${error.message}`);
  });
};
