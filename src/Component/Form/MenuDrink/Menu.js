import React, {Component} from "react";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            nameDrink: " ",
            quantity: 0,
            price: 0,
            money_KT: 0,
            total: 0,
            ex_money: 0
        }
        this.handleChange= this.handleChange.bind(this); //tránh binding trong render là bind trong hàm tạo constructor
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange =  (event) =>{
        let key = event.target.name;
        let val = event.target.value;

        this.setState({[key]:val});
        this.setState = ((state) => ({
            total: (state.price * state.quantity)
        }));
        this.setState =((state) => ({
            ex_money: (state.total - state.money_KT)
        }));    
       
    }
 
    render() {
        return (
            <div className="container">  
                <form className="mainMenu" name="forml">
                    <table>
                        <tr>
                            <td colspan="2" align="center" id="title">MENU</td>   
                        </tr>
                        <tr><td colspan="2" align="center">Cafe sữa     ............................. 12.000đ</td></tr>
                        <tr><td colspan="2" align="center">Cafe đá      ............................. 10.000đ</td></tr>
                        <tr><td colspan="2" align="center">String dâu   ............................. 8.000đ</td></tr>
                        <tr><td colspan="2" align="center">Trà đá       ............................. 2.000đ</td></tr>
                        <tr>
                            <td>Tên thức uống:</td>
                            <td>
                                <select name="name_Drink" className="typeWater" >
                                    <option value="" disabled selected>Chọn nước bạn thích!</option>
                                    <option value="12000">Cà phê sữa </option>
                                    <option value="10000">Cà phê đá </option>
                                    <option value="8000">String dâu</option>
                                    <option value="2000">Trà đá </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Số lượng:</td>
                            <td><input 
                                type="number" 
                                id="quantity"
                                name="quantity" 
                                className="form-control"
                                defaultValue={0}
                                required
                                onChange={this.handleChange}  
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền khách trả:</td>
                            <td><input 
                                type="number" 
                                id="tien_KT"
                                name="tien_KT" 
                                className="form-control"
                                defaultValue={0}
                                required
                                onChange={this.handleChange}  
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tổng tiền:</td>
                            <td><input 
                                type="number" 
                                id="total"
                                name="total" 
                                className="form-control"
                                defaultValue={0}
                                readOnly
                                value={this.state.total}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiền dư:</td>
                            <td><input 
                                type="number" 
                                id="tien_du"
                                name="ex_money" 
                                className="form-control"
                                defaultValue={0}
                                readOnly
                                value={this.state.ex_money}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><input type="submit" id="tinh_tien" name="Submit" value="Tính tiền" /></td>
                        </tr>
                    
                    </table>
                </form>              
            </div>
        );
    }
}
export default Menu;
