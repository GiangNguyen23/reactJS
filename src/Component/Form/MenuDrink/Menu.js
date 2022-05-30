import React, {Component} from "react";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            nameDrink: " ",
            price: 0,
            total: 0,

        }
        this.handleChange= this.handleChange.bind(this); //tránh binding trong render là bind trong hàm tạo constructor
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange =  (event) =>{
        let key = event.target.name;
        let val = event.target.value;

        if(key==="nameDrink"){
            if(val==="Cà phê sữa"){
              this.setState({price: 12000})
            }
            else if (val === "Cà phê đá"){
              this.setState({price: 10000})
            }
            else if (val ==="Sting dâu"){
              this.setState({price: 8000})
            }
            else if (val ==="Trà đá"){
              this.setState({price: 2000})
            }
          }  
          this.setState({[key]:val});
    }

    CheckOrder = () =>{
        if(this.state.total === 0 || this.state.total < this.state.price){
          alert("Vui lòng thanh toán. Cảm ơn bạn!");
        }
        else if(this.state.nameDrink === ""){
          alert("Vui lòng chọn thức uống bạn thích! Chúc bạn ngon miệng!");
        }
        else alert("Lựa chọn của bạn "+ this.state.nameDrink + ". Mời nhận tiền thừa là "+ ((this.state.total)-(this.state.price)) )
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.checkMoney();

    }
    render() {
        return (
            <div className="container">  
                <form className="mainMenu" name="forml" onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td colSpan={2} align ="center">MENU</td>   
                        </tr>
                        <tr><td colSpan={2} align ="center">Cà phê sữa     ............................. 12.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">Cà phê đá      ............................. 10.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">String dâu   ............................. 8.000đ</td></tr>
                        <tr><td colSpan={2} align ="center">Trà đá       ............................. 2.000đ</td></tr>
                        <tr>
                            <td>Tên thức uống:</td>
                            <td>
                                <select name="drink" onChange={this.handleChange} value = "">
                                    <option selected hidden>Mời chọn</option>
                                    <option value="Cà phê sữa">Cà phê sữa</option>
                                    <option value="Cà phê đá">Cà phê đá</option>
                                    <option value="String dâu">String dâu</option>
                                    <option value="Trà đá">Trà đá</option>
                                </select>
                            </td>
                        </tr>
                        <br></br> 
                        <tr>
                            <td>Tổng tiền:</td>
                            <td><input 
                                type="number" 
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
                                name="ex_money" 
                                className="form-control"
                                defaultValue={0}
                                readOnly
                                value = {((this.state.total)-(this.state.price))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input type="submit" name="Submit" value="Tính tiền" /></td>
                        </tr>
                    
                    </table>
                </form>              
            </div>
        );
    }
}
export default Menu;
