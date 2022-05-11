import React, {Component} from "react";

class Car extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            brand : "Ford",
            model: "Mustang",
            color: "red",
            year: 1993 
        };
    }
    changeColor = () =>{
        this.setState({Color: "Pink"});
    }
    
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button type= 'button' onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}
export default Car;