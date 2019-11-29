import React from 'react';
import InputField from '../InputField/inputField';
import TextArea from '../TextArea/textArea';
import './mailForm.css';
import { generateMailGunRequest, generateSendGridRequest } from '../../helpers/mailHelpers';
import { makePOSTcall } from '../../helpers/serviceCallHelper';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '', // Stores the to field
      cc: '', // Stores the cc field
      bcc: '', // Stores the bcc field
      subject: '', // Stores the subject field
      message: '', // Stores the message field
      output: '' // Console output from the mail server
    };

    // Setup the event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleMailGun = this.handleMailGun.bind(this);
    this.handleSendGrid = this.handleSendGrid.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSendGrid(event) {
    this.setState({
      output: ``
    });
    // Format the information
    let mailInformation = generateSendGridRequest(this.state);

    const successHandler = (res) => {
      console.log('success from Sendgrid');
      this.setState({
        output: `mail sent successfully`
      });
    };

    const errorHandler = (error) => {
      console.log(error.message);
      this.setState({
        output: `Something went wrong. ${error.message}`
      });
    };
    // Make the call to send the mail
    makePOSTcall('sendgrid', mailInformation, successHandler, errorHandler);

  }
  
  handleMailGun(event) {

    this.setState({
      output: ``,
    });

    // Format the information
    let mailInformation = generateMailGunRequest(this.state);

    const successHandler = (res) => {
      console.log('success from Mailgun');
      this.setState({
        output: `mail sent successfully`
      });
    };

    const errorHandler = (error) => {
      console.log(error.message);
      this.setState({
        output: `Something went wrong. ${error.message}`
      });
    };
    // Make the call to send the mail
    makePOSTcall('mailgun', mailInformation, successHandler, errorHandler);
  }

  render() {
    return (
      // Begin Container element
      <div className="formContainer">
        <div className="mailForm">
          <h3>Mailbot</h3>
          {/* Begin form here */}
          <form method="post" name="mailForm" >
            {/* To */}
            <InputField
              label={"To"}
              name={'to'}
              onChangeHandler={this.handleChange}
              value={this.state.to}
              placeholder={''} />

            {/* cc */}
            <InputField
              label={"CC"}
              name={'cc'}
              onChangeHandler={this.handleChange}
              value={this.state.cc}
              placeholder={''} />

            {/* bcc */}
            <InputField
              label={"BCC"}
              name={'bcc'}
              onChangeHandler={this.handleChange}
              value={this.state.bcc}
              placeholder={''} />

            {/* Subject */}
            <InputField
              label={"Subject"}
              name={'subject'}
              onChangeHandler={this.handleChange}
              value={this.state.subject}
              placeholder={''} />

            {/* Message */}
            <TextArea 
              label={"Message"} 
              name={"message"} 
              value={this.state.message} 
              onChangeHandler={this.handleChange}
              placeholder={''}
              />

            {/* Send Buttons */}
            <div className="formControl">
              <input type="button" className="button" value="Send Email via MailGun" onClick={this.handleMailGun} />
              <input type="button" className="button" value="Send Email via SendGrid" onClick={this.handleSendGrid} />
            </div>
          </form>
          {/* End form */}
          {/* Output Console: Show the response of the form here */}
          <div className={this.state.output?'console':'hide'}>
            {this.state.output}
          </div>
        </div>
      </div>  
    );
  }

}

export default MailForm;
