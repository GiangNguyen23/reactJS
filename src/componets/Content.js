import React, { Component } from 'react';
import RightContent from './Content/Right/Right';
class Content extends Component {
    render() {
        return (
            <div id='content'>
                <RightContent/>
                <div style={{clear:'both'}} />
                           
            </div>
        );
    }
}
 
export default Content;
