// import Header from './Component/header/header';
// import Content from './Component/content/content';
// import Footer from './Component/footer/footer';
// import Propess from './propesComponent/propess';
//////////////
// import './App.css';

// import React, { Component } from 'react';

////////////////////////////

// import Numberone from './prop/product';
// import React, { Component } from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <div className="container">
//       <div className="row">
//         <Numberone tieude="Sản phẩm 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBaPqzOHjvgt2ngPWRb6iw6ey7Bm0cH9Gtw&usqp=CAU"></Numberone>
//         <Numberone tieude="Sản phẩm 2" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBaPqzOHjvgt2ngPWRb6iw6ey7Bm0cH9Gtw&usqp=CAU"></Numberone>
//         <Numberone tieude="Sản phẩm 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBaPqzOHjvgt2ngPWRb6iw6ey7Bm0cH9Gtw&usqp=CAU"></Numberone>
//         <Numberone tieude="Sản phẩm 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBaPqzOHjvgt2ngPWRb6iw6ey7Bm0cH9Gtw&usqp=CAU"></Numberone>
//         <Numberone tieude="Sản phẩm 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBaPqzOHjvgt2ngPWRb6iw6ey7Bm0cH9Gtw&usqp=CAU"></Numberone>
      
//       </div>
//     </div>
//   </div>
//   );
// }
// export default App;



////////////////////////////////
// class App extends Component {
//     render() {
//         return (
         
//           <><Header></Header>
//            <Content></Content>
//           <Footer></Footer>
//           </>
//         );
//     }
// }
////////////////////////////

// import React from "react";
// import "./App.css";
// import Content from "./componets/Content";
// function App(){
//   return(
//     <div id="container">
//       <Content/>
//     </div>
//   )
// }
// export default App;

///////////////////
// import React, {Component} from "react";

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       fields: {
//         name : 'Nguyen Tuan Hai',
//         email: 'tuanhai1234@gmail.com'
//       }
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.state.fields.name}</h1>
//         <h1>{this.state.fields.email}</h1>
//       </div>
//     );
//   }
// }
// export default App;
/////////////////
//Ví dụ 1:
// import ReactDOM from 'react-dom';
// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year :1964
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}
//         </p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Car/>, document.getElementById('root'));

//Nâng cao - Tạo nhiều data
// import React, {Component} from "react";
// import data from "./Content/data";
// import Item from "./Content/Item/Item";

// class App extends Component {
    // constructor (props){
    //     var arr = data();
    //     super(props);
    //     this.state = {arr};
    // }
    
//     render() {  
//         return (
//             <div>
//                 <h1>{this.state.products.name}</h1>
//                 <h1>{this.state.categories.title}</h1>
//                 <>
//                 <Item></Item></>
//             </div>
//         );
//     }
// }
// export default App;

///////////////////////
// Ví dụ 4
// import React, {Component} from "react";

// class App extends Component {
//     constructor (props){
//         super(props);
//         this.state = {
//             brand : "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1993
        
//         };
//     }
//     changeColor = () =>{
//         this.setState({Color: "Pink"});
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color} {this.state.model} from {this.state.year}.
//                 </p>
//                 <button type= "button" onClick={this.changeColor}>Change Color</button>
//             </div>
//         );
//     }
// }
// export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
///////////////////////



import React, {Component} from "react";
import State from "./VD3State/State";


function App() {
    return (
        <div>
           {/* <State></State> */}
           
        </div>     
    )};

export default App;

