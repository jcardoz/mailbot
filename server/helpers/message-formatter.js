exports.generateMailgunMessageFormat = (request) => {
  let {
    from,
    to,
    cc,
    bcc,
    subject,
    message
  } = request.body;
  // Setup a blank object and then add the fields according to the API spec
  let messageInformation = {};
  // if cc exists
  if (cc) {
    messageInformation.cc = cc;
  }
  // if bcc exists
  if (bcc) {
    messageInformation.bcc = bcc;
  }

  // setup the other fields
  messageInformation.to = to;
  messageInformation.from = from;
  messageInformation.subject = subject;
  messageInformation.text = message;

  return messageInformation;
};

exports.generateSendgridMessageFormat = (request) => {
  let {
    from,
    to,
    cc,
    bcc,
    subject,
    content
  } = request.body;
  // Setup a blank object and then add the fields according to the API spec
  let messageInformation = {};
  // if cc exists
  if (cc) {
    // split on the comma
    messageInformation.cc = cc.split(',');
  }
  // if bcc exists
  if (bcc) {
    // split on the comma
    messageInformation.bcc = bcc.split(',');
  }

  // setup the other fields
  messageInformation.to = to.split(','); // split on the comma
  messageInformation.from = from;
  messageInformation.subject = subject;
  messageInformation.text = content;
  messageInformation.html = content;

  return messageInformation;
};
