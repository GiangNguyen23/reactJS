import React, { Component } from 'react';

class item extends Component {
    render() {
        return (
            <div className='product'>
                <div className='text'>
                    <div className='p-name'>
                        <a href='item.html'>{this.props.TenSP}</a>
                    </div>
                </div>
                <div className='p-img'>
                        <img src={this.props.anh} with={200} height={200}/>
                </div>
                <div className='text'>
                    <div className='p-cart'>{this.props.chitiet}</div>
                    <div className='p-price'>Please Call</div>
                    <input type="button" className='button' name='add' defaultValue="Add to cart"/>
                </div>
                <div className='clear' />
            </div>
        );
    }
}

export default item;
