import React from 'react';
import ReactDOM from 'react-dom';
import MailForm from './mailForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MailForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
