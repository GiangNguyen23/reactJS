//State .Ví dụ 3
import React, {Component} from "react";
//import rightContent from "./style.css";
 class One extends Component {
     render() {
         return (
             <div style={{display:'flex'}}>
                <div style={{textAlign:'center'}}>
                    <img src={this.props.image} alt="mmm"/>
                    <p>{this.props.name}</p>
                </div>           
             </div>
         );
     }
 }
 export default One;
 