import React, {Component} from 'react';

class RegistrationForm extends Component{   
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            mail: '',
            phone: '',
            sex: 'male',
            country: 'brazil'          
        }
        this.handleInputChange = this.handleInputChange.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);    
    }     
    handleSubmit() {
        console.log(this.state.name)
        console.log(this.state.mail)
        console.log(this.state.phone)
        console.log(this.state.sex)
        console.log(this.state.country)
    }
    handleInputChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    render() {          
        return (
            <div className="registration-form">
                <div className="row">                
                    <h1 className="display-4" > Fill the form </h1>
                </div>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group row">
                        <label htmlFor="name"> Name* </label>
                        <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" className="form-control" required />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mail"> Mail* </label>
                        <input value={this.state.mail} onChange={this.handleInputChange} type="text" name="mail" className="form-control" required />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone"> Phone </label>
                        <input type="mail" name="phone" className="form-control" />
                    </div>
                    <div className="form-group row">                       
                        <label htmlFor="sex"> Sex </label>
                        <select value={this.state.sex} onChange={this.handleInputChange} name="sex" className="form-control"> {this.props.sexes.map((sex) => <option value={sex.toLowerCase()} key={sex}> {sex} </option>)}  </select> 
                    </div>
                    <div className="form-group row">
                        <label htmlFor="country"> Country </label>
                            <select value={this.state.country} onChange={this.handleInputChange} name="country" className="form-control"> {this.props.countries.map((country) => <option value={country.toLowerCase()} key={country}> {country} </option>)}  </select>
                    </div>
                    <div className="form-group row">
                        <input className="btn btn-primary btn-xs submit-button" type="submit" value="Submit" />
                    </div>                
                </form>
                <div className="row">
                    <p> Fields marked with a * are required </p>
                </div>
            </div>                
        )        
    }
    
    
}


export default RegistrationForm;