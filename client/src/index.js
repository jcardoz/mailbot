import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MailForm from './components/MailForm/mailForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MailForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
