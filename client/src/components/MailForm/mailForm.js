import React from 'react';
import axios from 'axios';

import './mailForm.css';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to:'',
      cc: '',
      bcc: '',
      subject: '',
      message: ''
    };

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
    // TODO: move to helper
    const from = 'cardoz.jonathan@gmail.com';
    // TODO: set in axios helper
    const baseURL = 'http://localhost:7000';

    let {
      to,
      cc,
      bcc,
      subject,
      message
    } = this.state;

    let mailInformation = {
      to,
      from,
      cc,
      bcc,
      subject,
      content: message
    };

    console.log(mailInformation);
    axios.post(`${baseURL}/sendgrid`, mailInformation)
      .then(res => {
        console.log('success from Sendgrid');
        console.log(res);
      }, (error) => {
        console.log(error.message);
      });

  }
  
  handleMailGun(event) {
    // TODO: move to helper
    const from = 'cardoz.jonathan@gmail.com';
    // TODO: set in axios helper
    const baseURL = 'http://localhost:7000';

    let {
      to,
      cc,
      bcc,
      subject,
      message
    } = this.state;

    let mailInformation = {
      to,
      from,
      cc,
      bcc,
      subject,
      message
    };

    console.log(mailInformation);
    axios.post(`${baseURL}/mailgun`, mailInformation)
      .then(res => {
        console.log('success from Mailgun');
        console.log(res);
      }, (error) => {
        console.log(error.message);
      });
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
            <div className="formControl">
              <label>To</label>
              <input type="text" name="to" value={this.state.to} onChange={this.handleChange} />
            </div>

            {/* cc */}
            <div className="formControl">
              <label>CC</label>
              <input type="text" name="cc" value={this.state.cc} onChange={this.handleChange} />
            </div>
            
            {/* bcc */}
            <div className="formControl">
              <label>BCC</label>
              <input type="text" name="bcc" value={this.state.bcc} onChange={this.handleChange} />
            </div>

            {/* Subject */}
            <div className="formControl">
              <label>Subject</label>
              <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
            </div>
            
            {/* Message */}
            <div className="formControl">
              <label>Message</label>
              <textarea name="message" value={this.state.message} onChange={this.handleChange}/>
            </div>

            {/* Send Buttons */}
            <div className="formControl">
              <input type="button" className="button" value="Send Email via MailGun" onClick={this.handleMailGun} />
              <input type="button" className="button" value="Send Email via SendGrid" onClick={this.handleSendGrid} />
            </div>
          </form>
        </div>
      </div>  
    );
  }

}

export default MailForm;
