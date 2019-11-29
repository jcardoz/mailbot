import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TextArea from './textArea'

describe('textArea component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < TextArea /> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('label renders the field name', () => {
    const wrapper = shallow(<TextArea 
      label={"Message"} 
      name={"message"} 
      value={'Sample message'} 
      onChangeHandler={()=>{}}
      placeholder={''}
      />);
    const text = wrapper.find('label').text();
    expect(text).toEqual('Message');
  });

it('sets the textarea name', () => {
    const wrapper = shallow(<TextArea 
      label={"Message"} 
      name={"message"}
      value={'Sample message'} 
      onChangeHandler={()=>{}}
      placeholder={''}
      />);
    const name = wrapper.find('textarea').prop('name');
    expect(name).toEqual('message');
  });

it('sets the textarea value', () => {
    const wrapper = shallow(<TextArea 
      label={"Message"} 
      name={"message"} 
      value={'Sample message'} 
      onChangeHandler={()=>{}}
      placeholder={''}
      />);
    const value = wrapper.find('textarea').prop('value');
    expect(value).toEqual('Sample message');
  });

it('sets the placeholder value', () => {
    const wrapper = shallow(<TextArea 
      label={"Message"} 
      name={"message"} 
      value={'Sample message'} 
      onChangeHandler={()=>{}}
      placeholder={'Enter message content here'}
      />);
    const placeholder = wrapper.find('textarea').prop('placeholder');
    expect(placeholder).toEqual('Enter message content here');
  });

  it('updates the value', () => {
    const changeHandleFn = jest.fn();
    const wrapper = shallow(<TextArea 
      label={"Message"} 
      name={"message"} 
      value={''} 
      onChangeHandler={changeHandleFn}
      placeholder={'Enter message content here'}
      />);
    // Set the value
    wrapper.setProps({value: 'sample message'});
    wrapper.update();
    const value = wrapper.find('textarea').prop('value');
    // check if new value is set
    expect(value).toEqual('sample message');
  });
});
