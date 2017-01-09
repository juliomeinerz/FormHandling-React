import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from '../src/components/registration-form';

class Main extends Component {
  render() {
    return (
      <RegistrationForm />
    )   
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('.container')
);
