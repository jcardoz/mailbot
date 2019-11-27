exports.mail = (request, response) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // HACK: Hack to run without certificate error
  
  // TODO: Handle empty fields
  const messageInformation = {
    to: request.params.to.split(','), // Provide an array of comma separated email addresses
    cc: request.params.cc.split(','), // Provide an array of comma separated email addresses
    bcc: request.params.bcc.split(','), // Provide an array of comma separated email addresses
    from: request.params.from,
    subject: request.params.subject,
    text: request.params.content,
    html: request.params.content,
  };
  
  sgMail.send(messageInformation).then((body, error) => {
    response.json(body);
  }, (error) => {
    response.send(`Something went wrong. ${error.message}`);
  });

};