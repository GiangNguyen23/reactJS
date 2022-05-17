import React, {Component} from "react";
var Output=(props)=>{
    return(
        <div className="card" style={{color:props.color1}}>
            <div className="demo1">
                <img src={props.image} alt="">
                </img>
                <span>{props.name}</span><br/>
                <span>{props.title}</span><br/>
                <span><sub>đ</sub>{props.price-(props.price/100*props.discount)}</span>
                {props.discount>0 &&
                <span><sub style={{color:"red"}}><strike><sub>đ</sub>{props.price}</strike></sub></span>
                }
                </div>
<div className="hide">
    <button onClick={buy}>Đặt mua</button>
    <div className="discount">{props.discount}% Giảm</div>
</div>
        </div>
    )
}
function buy(){
    alert('Đặt mua thành công')
}
export default Output;