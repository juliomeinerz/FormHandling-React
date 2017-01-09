import React,{Component} from 'react';

const SuccessScreen = {
    render() {
        return(
            <div className="row">
                <h1> Register done! </h1>
                <p> {this.props.name} </p>
            </div>
        )    
    }
}

export default SuccessScreen;