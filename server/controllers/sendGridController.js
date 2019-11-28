exports.mailHandler = (request, response) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // HACK: Hack to run without certificate error

  // TODO: Handle empty fields
  const messageInformation = {
    to: request.body.to.split(','), // Provide an array of comma separated email addresses
    cc: request.body.cc.split(','), // Provide an array of comma separated email addresses
    bcc: request.body.bcc.split(','), // Provide an array of comma separated email addresses
    from: request.body.from,
    subject: request.body.subject,
    text: request.body.content,
    html: request.body.content,
  };

  sgMail.send(messageInformation).then((body, error) => {
    response.json(body);
  }, (error) => {
    console.log(error.message);
    response.send(`Something went wrong. ${error.message}`);
  });
};
