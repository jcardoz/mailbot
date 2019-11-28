import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MailForm from './mailForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MailForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('MailForm component', () => {
  it('contains a heading', () => {
    const wrapper = shallow(<MailForm />);
    const text = wrapper.find('h3').text();
    expect(text).toEqual('Mailbot');
  });
});

describe('MailForm component', () => {
  it('contains a form', () => {
    const wrapper = shallow(<MailForm />);
    const name = wrapper.find('form').prop('name');
    expect(name).toEqual('mailForm');
  });
});
