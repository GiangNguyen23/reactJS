//State .Ví dụ 3

import React, {Component} from "react";
import getData from "./data";
import One from "./One";

class State extends Component {
    constructor(){
        super()
        this.state = getData()
    }
    render() {
        return (
            <div>
                {this.state.map(value =>{
                    return (<One image ={value.image} name = {value.name}></One>)

                        }
                    )
                }
            </div>
        );
    }
}
export default State;
