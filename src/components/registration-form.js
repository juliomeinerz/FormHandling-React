import React, {Component} from 'react';

import CountryOptions from './country-options';

class RegistrationForm extends Component{    
    render() {
        
        return (
            <div className="registration-form">
                <div className="row">                
                    <h1 className="display-4" > Fill the form </h1>
                </div>
                <form>
                <div className="form-group row">
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group row">
                    <label htmlFor="mail"> Mail </label>
                    <input type="text" name="mail" className="form-control" required />
                </div>
                <div className="form-group row">
                    <label htmlFor="phone"> Phone </label>
                    <input type="mail" name="phone" className="form-control" required />
                </div>
                <div className="form-group row">
                    <label htmlFor="country"> Country </label>
                    <CountryOptions />                    
                </div>
                <div className="form-group row">
                    <input className="btn btn-primary btn-xs submit-button" type="submit" value="Submit" />
                </div>
                </form>
            </div>                
        )        
    }
}
export default RegistrationForm;