import React, {Component} from "react";
class Vidu2 extends Component {
    constructor(props){
        super(props);
        this.state={username: ''};
    }
    render() {
        return (
           <form>
            <label>
                Name:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
            </label>
            <div className="row">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Engineer</label>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Teacher</label>
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Student</label>
            </div>
            
            <input type='submit'/>
               
           </form>
        );
    }
}
export default Vidu2;