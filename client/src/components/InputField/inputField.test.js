import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from './inputField';

describe('Inputfield component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < InputField /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('label renders the field name', () => {
    const wrapper = shallow(<InputField
      label={'To'}
      name={'to'}
      onChangeHandler={()=>{}}
      value={'john.appleseed@apple.com'}
      placeholder={''} />);
    const text = wrapper.find('label').text();
    expect(text).toEqual('To');
  });

it('sets the input field name', () => {
    const wrapper = shallow(<InputField
      label={'To'}
      name={'to'}
      onChangeHandler={()=>{}}
      value={'john.appleseed@apple.com'}
      placeholder={''} />);
    const name = wrapper.find('input').prop('name');
    expect(name).toEqual('to');
  });

it('sets the input field value', () => {
    const wrapper = shallow(<InputField
      label={'To'}
      name={'to'}
      onChangeHandler={()=>{}}
      value={'john.appleseed@apple.com'}
      placeholder={''} />);
    const value = wrapper.find('input').prop('value');
    expect(value).toEqual('john.appleseed@apple.com');
  });

it('sets the placeholder value', () => {
    const wrapper = shallow(<InputField
      label={'To'}
      name={'to'}
      onChangeHandler={()=>{}}
      value={'john.appleseed@apple.com'}
      placeholder={'Enter recepients separated by comma'} />);
    const placeholder = wrapper.find('input').prop('placeholder');
    expect(placeholder).toEqual('Enter recepients separated by comma');
  });

  it('updates the value', () => {
    const changeHandleFn = jest.fn();
    const wrapper = shallow(<InputField
      label={'To'}
      name={'to'}
      onChangeHandler={changeHandleFn}
      value={''}
      placeholder={'Enter recepients separated by comma'} />);
    // Set the value
    wrapper.setProps({value: 'john.appleseed@apple.com'});
    wrapper.update();
    const value = wrapper.find('input').prop('value');
    // check if new value is set
    expect(value).toEqual('john.appleseed@apple.com');
  });

});
