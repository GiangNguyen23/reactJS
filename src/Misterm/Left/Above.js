import React, { useState, useEffect } from "react";
import axios from "axios";

const BigItem = ({ news }) => {
  return (
    <div className="col">
      <img src={news.image} alt="hinhto" width={570} height={300} />
      <p>{news.title}</p>
    </div>
  );
};
const SmallItems = ({ news }) => {
  return (
    <div className="col1">
      <img src={news.image} alt="" width={200}/>
      <p>{news.title}</p>
    </div>
  );
};
const CategoryNews = ({ categoryTitle, list }) => {
  return (
    <div>
      <h1>{categoryTitle}</h1>
      <div className="row">
        <div className="col-sm-10">
          <BigItem news={list.find((news) => news.type === "Lớn")}/>
        </div>
        <div className="col-sm-2">
          {list
            .filter((news) => news.type === "Nhỏ")
            .map((news) => (
              <SmallItems news={news} />
            ))}
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const [data, setData] = useState({
    thegioi: [],
    isLoaded: false,
  });

  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios("http://localhost:3000/thegioi");
      var thegioi = await res.data;

      setData({ thegioi, isLoaded: true });
    }
  };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);
  console.log(data);

  if (data.isLoaded) {
    return (
        <>
          <CategoryNews list={data.thegioi} />;
        </>
      
    );
  }
  return <div>Loading...</div>;
};

export default News;
