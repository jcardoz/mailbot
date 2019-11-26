exports.mail = (request, response) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // TODO: Hack to run without certificate error
    const msg = {
        to: request.params.to.split(','),
        cc: request.params.cc.split(','),
        bcc: request.params.bcc.split(','),
        from: request.params.from,
        subject: request.params.subject,
        text: request.params.content,
        html: request.params.content,
    };
    sgMail.send(msg).then((body, error) => {
        response.json(body);
    }, (err) => {
      response.send('Something went wrong. '+err.message);
    });

};
