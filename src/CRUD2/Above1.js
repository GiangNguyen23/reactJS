import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class Above extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      thegioi: [],
      id: "",
      tieude: "",
      image: "",
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showEditThegioi = this.showEditThegioi.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.isLoading
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: "GET",
        url: ` http://localhost:3000/thegioi/${id}`,
        data_VOV: null,
      })
        .then((res) => {
          var data_VOV = res.data_VOV;
          this.setState({
            id: data_VOV.id,
            image: data_VOV.image,
            tieude: data_VOV.tieude,
          });
        })
        .catch((err) => {});
    }
    console.log("mouted");
    axios.get(" http://localhost:3000/thegioi").then((res) => {
      this.setState({ thegioi: res.data, isLoaded: true });
    });
   
  }
  getThegioi = (id) => {
    return  this.state.thegioi.filter((data) => data.id === id)
    // for (var i = 0; i < this.state.thegioi.length; i++) {
    //   if (this.state.thegioi[i].id === id) {
    //     return this.state.thegioi[i];
    //   }
    // }
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onChangeImage = (event) => {
    this.setState({
      [event.target.name]: "./images/" + event.target.files[0].name,
    });
    console.log(event.target.files[0].name);
  };
  showEditThegioi = (id) => {
    var data = this.getThegioi(id);
    this.setState({
      id: data.id,
      tieude: data.tieude,
      image: data,
    });

    alert(id);
  };

  onSave = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      if (this.state.tieude !== "" && this.state.image !== "") {
        axios({
          method: "POST",
          url: ` http://localhost:3000/thegioi`,
          data: {
            tieude: this.state.tieude,
            image: this.state.image,
          },
        }).then((res) => {
          this.componentDidMount();
          alert("Successfully");
        });
      } else {
        alert("Empty something");
      }
    } else {
      axios({
        method: "PUT",
        url: ` http://localhost:3000/thegioi/${this.state.id}`,
        data: {
          tieude: this.state.tieude,
          image: this.state.image,
        },
      }).then((res) => {
        this.componentDidMount();
        alert("Successfully");
      });
    }
    this.setState({
      id: "",
      tieude: "",
      image: "",
    });
  };
  onDelete = (id) => {
    axios.delete(`http://localhost:3000/thegioi/${id}`)
    this.setState({})
  };
  render() {
    console.log(this.state);
    if (!this.state.isLoaded)
      return (
        <div>
          <form onSubmit={this.onSave}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Tiêu đề</th>
                </tr>
              </thead>
              <tbody>
                {this.state.thegioi.map((data) => (
                  <>
                    <td>
                      <img
                        className="card-img-top"
                        src={"./" + data.image}
                        alt="Cardimage"
                      />
                    </td>
                    <td>{data.tieude}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.showEditThegioi(data.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.onDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      );
    else return <div>Loading...</div>;
  }
}
export default Above;
