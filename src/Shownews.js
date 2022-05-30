import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
export default class Shownews extends Component {
    constructor(props) {
        super(props);
        this.state = {
          news: [],
          id: '',
          title: '',
          image: '',
          content: '',
          author: '',
          datecreate: ''
     
        }
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showEditNews = this.showEditNews.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      componentDidMount() {
        var { match } = this.props;
        if (match) {
          var id = match.params.id;
          axios({
            method: 'GET',
            url: `https://6290b07827f4ba1c65bf4562.mockapi.io/news/${id}`,
            data: null
          }).then(res => {
            var data = res.data;
            this.setState({
              id: data.id,
              title: data.title,
              image: data.image,
              content: data.content,
              author: data.author,
              datecreate: data.datecreate
            });
          }).catch(err => {
          });
        }
        axios.get('https://6290b07827f4ba1c65bf4562.mockapi.io/news/').then(res => {
          this.setState({ news: res.data });
        })
        if (this.state.id === '') {
          document.getElementById('image-edit').style.display = 'none';
        } else {
          document.getElementById('image-edit').style.display = 'block';
        }
      }
      getNews = (id) => {
        for (var i = 0; i < this.state.news.length; i++) {
          if (this.state.news[i].id === id) {
            return this.state.news[i];
          }
        }
        return null;
      }
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
      onChangeImage = (event) => {
        this.setState({
          [event.target.name]: "images/" + event.target.files[0].name,
        });
        console.log(event.target.files[0].name);
      }
      showEditNews = (id) => {
        var newss = this.getNews(id);
        this.setState({
          id: newss.id,
          title: newss.title,
          author: newss.author,
          content: newss.content,
          image: newss.image,
          datecreate: newss.datecreate,
        });
        document.getElementById('image-edit').style.display = 'block';
        alert(id);
      }
      getIndexnews = (id) => {
        for (var i = 0; i < this.state.news.length; i++) {
          if (this.state.news[i].id === id) {
            return i;
          }
        }
        return -1;
      }
      onSave = (event) => {
        event.preventDefault();
        if (this.state.id === '') {
          if (this.state.title !== '' && this.state.content !== '' && this.state.author !== '' && this.state.image !== '' && this.state.datecreate !== '') {
            axios({
              method: 'POST',
              url: `https://6290b07827f4ba1c65bf4562.mockapi.io/news/`,
              data: {
                title: this.state.title,
                author: this.state.author,
                content: this.state.content,
                image: this.state.image,
                datecreate: this.state.datecreate,
              }
     
            }).then(res => {
              this.componentDidMount();
              alert("Successfully");
            })
          } else {
            alert("Empty something");
            return
          }
        } else {
          axios({
            method: 'PUT',
            url: `https://6290b07827f4ba1c65bf4562.mockapi.io/news/${this.state.id}`,
            data: {
              title: this.state.title,
              author: this.state.author,
              content: this.state.content,
              image: this.state.image,
              datecreate: this.state.datecreate,
            }
     
          }).then(res => {
            this.componentDidMount();
            alert("Successfully");
          })
        }
        this.setState({
          id: '',
          title: '',
          image: '',
          content: '',
          author: '',
          datecreate: ''
        });
      }
      onDelete = (id) => {
        console.log(id);
        axios({
          method: 'DELETE',
          url: `https://6290b07827f4ba1c65bf4562.mockapi.io/news/${id}`,
          data: null
        }).then(res => {
          if (res.status === 200) {
            var index = this.getIndexnews(id);
            if (index !== -1) {
              var news = this.state.news;
              news.splice(index, 1);
            }
            this.setState({
              news: news
            });
            alert(id);
            toast.success("Xóa sản phẩm thành công", {
            })
     
          }
        });
      }
     
      render() {
           
            
            return (
              <div className="container">
                <div className="row">
                  
                  <div className="col-8">
                    <h1>List news</h1>
                    <br></br>
                    <br></br>
                    <table className='table-news'>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>TITLE</th>
                          <th>IMAGE</th>
                          <th>CONTENT</th>
                          <th className='date-news'>AUTHOR</th>
                          <th className='date-news'>DATE</th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.news.map((newss) => (
                            <tr >
                              <td>{newss.id}</td>
                              <td> <h5 className="card-title">{newss.title}</h5></td>
                              <td><img className="image-news" src={"./" + newss.image} alt="Card image cap" /></td>
                              <td><h8 className="card-title">{newss.content}</h8></td>
                              <td>{
                                newss.author
                              }</td>
                              <td>{
       
                                newss.datecreate
                              }</td>
                              <td><button className="btn btn-primary" role="button" href="#" onClick={() => this.showEditNews(newss.id)}>
                                Edit
                              </button>
                                <button className="btn btn-danger" onClick={() => this.onDelete(newss.id)}>
                                  delete
                                </button>
                              </td>
                            </tr>
                          )
                          )}
       
                      </tbody>
                    </table>
       
                  </div>
                </div>
       
              </div>
            );
          }
    }
 
 