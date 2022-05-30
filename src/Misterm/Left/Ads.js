import React, { useState, useEffect } from "react";
import axios from "axios";

const Ads = ({ news }) => {
  return (
    <div className="col">
      <img src={news.image} alt="quangCao" width={200} height={700} />
    </div>
  );
};

const CategoryNews2 = ({ categoryTitle, list }) => {
  return (
    <div className="col-sm-10">
      <Ads news={list.find((news) => news.type === "vua")} />
    </div>
  );
};

const News = () => {
  const [data, setData] = useState({
    ad: [],
    isLoaded: false,
  });

  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios("http://localhost:3000/ad");
      var ad = await res.data;

      setData({ ad, isLoaded: true });
    }
  };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);
  console.log(data);

  if (data.isLoaded) {
    return (
      <>
        <CategoryNews2 list={data.ad} />;
      </>
    );
  }
  return <div>Loading...</div>;
};

export default News;
