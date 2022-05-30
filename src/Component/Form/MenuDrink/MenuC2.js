import React, {Component} from "react";

class MenuC2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            price: 0,
            money: ''
        }   
    }
    checkMoney = (money) => {
        if (money === this.state.price) {
            alert("Đồ uống của bạn là"+ this.state.type +"Số tiền dư là:"+(money-this.state.price)+"đ")
        } else {
            alert("Số tiền không đủ! Vui lòng nhập thêm tiền")
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.price === "") {
            alert("Vui lòng chọn đồ uống")
        }
        else if (this.state.money === "") {
            alert("Vui lòng nhập tiền")
        } else {
            this.checkMoney(this.state.money)
        }
    }
    handleChange = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        if (key === 'money') {
            if (!Number(value)) {
                alert("Vui lòng nhập lại tiền")
            }
        }
        if (key === 'type') {    
            if (value === "Cafe sữa") {
                this.setState({ price: 12000 })
            }
            else if (value === "Cafe đá") {
                this.setState({ price: 10000 })
            }
            else if (value === "Cafe đen") {
                this.setState({ price: 20000 })
            }
            else {
                this.setState({ price: 30000 })
            }
        }
        this.setState({ [key]: value })
    
    }
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <table>
                      <tbody>
                          <tr>
                            <td>Mời chọn thức uống</td>
                            <td>
                                <select name="type" onChange={this.handleChange}>
                                    <option selected hidden>Mời chọn</option>
                                    <option value="Cà phê sữa">Cà phê sữa</option>
                                    <option value="Cà phê đá">Cà phê đá</option>
                                    <option value="String dâu">String dâu</option>
                                    <option value="Trà đá">Trà đá</option>
                                </select>
                            </td>
                            <td><label>Price ..............{this.state.price}</label></td>
                            <tr>
                                <label>Mời nhập số tiền:</label>
                                <td><input name="money" type="number" onChange={this.state.handleChange} ></input></td>
                            </tr>

                          </tr>
                      </tbody>
                  </table>
                  <input type="submit" value="Thanh toán"></input>
              </form>
            </div>
        );
    }
}
export default MenuC2;
