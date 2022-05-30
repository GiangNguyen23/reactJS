import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";


const deleteNews = (id) => {
  console.log(id);
  if (window.confirm("Do you want to delete!")) {
    axios
      .delete(`http://localhost:3000/thegioi/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("Delete sucessfull!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const AddNews = () => {
  const [newsItem, setNewsItem] = useState([]);

  const handleChange = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    if(event.target.name === "image"){
      val = "./images/" + event.target.files[0].name;
    }
    setNewsItem({ ...newsItem,[nam]: val});
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const postData = () => {
    axios.post(`http://localhost:3000/thegioi`,newsItem).then(() => {
      alert("Một sản phẩm được thêm vào");
    })
  }
  
  return(
    <form onSubmit={onSubmit}>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Ảnh</th>
          </tr>
        </thead>
        <tbody>
          <>
            <td><label><input name="title" type="text" onChange={handleChange}/></label></td>
            <td><label><input name="image" type="file" onChange={handleChange}/></label></td>
          </>
          <button type="submit" className= "btn btn-success" onClick={ postData}>Add</button>
        </tbody>
      </table>
    </form>
  )
  
};


const Table = ({ list }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tiêu đề</th>
          <th>Ảnh</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {list.map((news) => (
          <tr key={news}>
            <td>{news.id}</td>
            <td>{news.title}</td>
            <td>
              <img src={"./" + news.image} alt="anhAdmin" width={150} />
            </td>
            <td>
              <button
                className="btn btn-danger me-3"
                onClick={() => deleteNews(news.id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
              <button className="btn btn-success" onClick>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Admin = () => {
  const [data, setData] = useState({
    news: [],
    isLoaded: false,
  });
  const [display, setDisplay] = useState(false);


  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios("http://localhost:3000/thegioi");
      var thegioi = await res.data;

      var res = await axios("http://localhost:3000/taichinh_kinhdoanh");
      var taichinh_kinhdoanh = await res.data;

      var res = await axios("http://localhost:3000/ad");
      var ad = await res.data;

      setData({ news: thegioi.concat(taichinh_kinhdoanh, ad), isLoaded: true });
    }
  };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);
  console.log(data);

  if (data.isLoaded) {
    return (
      <div>
        <h2 className="text-center">Admin</h2>
        <div className="text-end">
          <button className="btn btn-success" onClick = {() => setDisplay(!display) }>
            {" + "}
            Add news
          </button>
          {display && <AddNews/>}
        </div>
        <br></br>
        <div className="row">
          <Table list={data.news} />
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default Admin;
