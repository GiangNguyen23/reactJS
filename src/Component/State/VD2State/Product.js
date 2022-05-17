// import React, { Component,useState } from 'react';
// import './style.css';
// import Products_data from './data';
// import ShowProCate from './showPro-Cate';

// class Product extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             home: <div>Trang chủ</div>
//         };
//     }

//     Pots = () => {
//         let data = Products_data("products");
//         data = data.filter((product) => product.IdCategories === 1).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Clothes = () => {
//         let data = Products_data("products");
//         data = data.filter((product) => product.IdCategories === 2).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Furniture = () => {
//         let data = Products_data("products");
//         data = data.filter((product=>product.IdCategories === 3)).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Home = () => {
//         this.setState({home:<div>Trang chủ</div>})
//     }

//     render() {
//         return (
//             <div className="container">
//                 {this.state.home}
//                 <div>
//                     <button onClick={this.Home}>Home</button>
//                     <button onClick={this.Pots}>Bình</button>
//                     <button onClick={this.Clothes}>Quần áo</button>
//                     <button onClick={this.Furniture}>Đồ nội thất</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Product;

import React, {Component} from "react";
import data from './data';

class Vd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: <div>Trang chủ</div>
        };
    }
    Nam=()=>{
        let data= data();
        data = data['Thời trang nam'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} title={element.title} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
    Nu=()=>{
        let data= data();
        data = data['Thời trang nữ'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} title={element.title} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
    Home=()=>{
        this.setState({home:<div>Trang chủ</div>})
    }
    Treem=()=>{
        let data= data();
        data = data['Thời trang em bé'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} title={element.title} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
}
export default Vd;