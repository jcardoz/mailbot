# mailbot
A simple application to send email, built using ReactJS as a client side framework and NodeJS as the server.

## Setup

### installation

#### client setup

1. Clone or copy the project from github.
2. run the following command from the project root directory
```
npm run client-install
```

**Note:** The client react application will run on port **3000**. Ensure that no other application is currently using that port.

#### server setup

1. run the following command from the project root directory
```
npm run server-install
```

**Note:** The server application will run on port **7000**. Ensure that no other application is currently using that port.

### API integration setup

The server project uses Sendgrid and Mailgun APIs for email sending.

#### Sendgrid
Make sure to update the file variables.env with the Sendgrid API Key. This will be available to you once you sign up with Sendgrid.
See [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys)

#### Mailgun
Make sure to update the file variables.env with the Mailgun Domain and Mailgun API Keys. This will be available to you once you sign up with Mailgun.
See [https://app.mailgun.com/app/account/security/api_keys](https://app.mailgun.com/app/account/security/api_keys) for your API key.
See [https://app.mailgun.com/app/sending/domains](https://app.mailgun.com/app/sending/domains) to add your custom domain.

### running both client and server applications


run the following command from the project root directory
```
npm start
```
