import React, {Component} from "react";
import data from './data';

class Reduce extends Component {
    total = data.reduce(
        (id, name, img, id_cate)=> id + name + img, 0);
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
export default Reduce;
