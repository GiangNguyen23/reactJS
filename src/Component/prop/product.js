import React, { Component } from 'react';
//import './App.css';

function Numberone(props) {
  return (
    <div>
    <div className="col-xs-7 col-sm-7 col-md-8 col-lg-8">
        <img src={props.linkanh} height="200px" width="200px" class="img-responsive" alt="Image"/>
        <p>{props.tieude}</p>
        <p>Giá sản phẩm: 400k</p>
      </div>
    </div>
  )
}
export default Numberone;