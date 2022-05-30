import React, { useState, useEffect } from "react";
import axios from "axios";

const BigItem1 = ({ news }) => {
  return (
    <div className="col">
      <img src={news.image} alt="hinhto" width={570} height={400} />
      <p>{news.title}</p>
    </div>
  );
};
const SmallItems1 = ({ news }) => {
  return (
    <div className="col1">
      <img src={news.image} alt="" width={200}/>
      <p>{news.title}</p>
    </div>
  );
};
const CategoryNews1 = ({ list }) => {
  return (
    <div>
      <h2>Tài Chính - Kinh doanh</h2>
      <div className="row">
        <div className="col-sm-10">
          <BigItem1 news={list.find((news) => news.type === "Lớn")} />
        </div>
        <div className="col-sm-2">
          {list
            .filter((news) => news.type === "Nhỏ")
            .map((news) => (
              <SmallItems1 news={news} />
            ))}
        </div>
      </div>
    </div>
  );
};
const News1 = () => {
  const [data, setData] = useState({
    taichinh_kinhdoanh: [],
    isLoaded: false,
  });

  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios("http://localhost:3000/taichinh_kinhdoanh");
      var taichinh_kinhdoanh = await res.data;

      setData({ taichinh_kinhdoanh, isLoaded: true });
    }
  };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);
  console.log(data);

  if (data.isLoaded) {
    return (
      <>
        <CategoryNews1 list={data.taichinh_kinhdoanh} />;
      </>

    );
  }
  return <div>Loading...</div>;
};

export default News1;
