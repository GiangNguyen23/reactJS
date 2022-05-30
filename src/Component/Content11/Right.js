import React, {Component} from "react";
import Item from "./Item/Item";
import data from "./data";

class Right extends Component {
    render() {
        var dis_products = data("products");// Các sản phẩm
        var dis_categories = data("categories");// Các danh mục
        var items =[];// Các component
        for (var i = 0; i < dis_products.length;i++){
            items[i]= <Item chitiet = {dis_products[i].detail} tenSP = {dis_products[i].name}></Item>
        }
        return (
            <div id="right-content">
               <h2>Product:</h2>
               <div id="products">
                   {items}
                   <div style={{clear: "both"}} />
               </div> 
               <div style={{clear: "both"}} />
            </div>  
        );
    }
}
export default Right;