export function formatMail(to, cc='', bcc='%20', from, subject, message) {
  let emailString ='';
  emailString = `sendgrid/${subject}/${message}/${from}/${to}/${cc}/${bcc}/`;
  console.log(emailString);
  return emailString;
}
