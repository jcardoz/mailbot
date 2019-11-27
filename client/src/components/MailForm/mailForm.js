import React from 'react';
import './mailForm.css';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  render() {
    return (
      <div className="container">
        <div className="mailForm">
          <h3>Mailbot</h3>
          <form method="post" name="mailForm" onSubmit={this.handleSubmit} >
            <label>To:</label>
            <input type="text" name="to" value={this.state.fields.to} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.to}</div>

            <label>CC:</label>
            <input type="text" name="cc" value={this.state.fields.cc} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.cc}</div>
            
            <label>BCC:</label>
            <input type="text" name="bcc" value={this.state.fields.bcc} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.bcc}</div>

            <label>Subject:</label>
            <input type="text" name="subject" value={this.state.fields.subject} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.subject}</div>

            <label>Message</label>
            <textarea name="message" value={this.state.fields.message} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.message}</div>

            <input type="submit" className="button" value="Send Email via MailGun" />
            <input type="submit" className="button" value="Send Email via SendGrid" />
          </form>
        </div>
      </div>
    );
  }

}

export default MailForm;
