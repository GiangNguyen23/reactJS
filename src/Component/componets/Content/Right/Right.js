import React,{Component} from "react";
import Item from './Item/Item';
import products_data from "../../../../data";
class RightContent extends Component {
    render() {
        var rows=[];
        for ( var i =0; i< products_data().length;i++){
            rows.push(
                <Item
                tenSP={products_data()[i].name}
                anh={products_data()[i].image}
                chitiet={products_data()[i].detail}>
                </Item>
            );
        }
        return (
                <div>
                    <div id="right-content">
                        <h2>Product: </h2>
                        <div id="products">
                            {rows}
                             <div style={{clear:'both'}} />
                             </div>
                             <div style={{clear:'both'}} />
                             </div>
                             <div style={{clear:'both'}} />
                            </div>
           
        );
    }
}
export default RightContent;