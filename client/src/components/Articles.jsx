import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import getNews from "../service/api.js";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getRenderData();
  }, []);
  const getRenderData = async () => {
    const response = await getNews();
    console.log(response.data);
    setNews(response.data);
  };

  return (
    <Box>
      {news.map((data) => (
        <Article data={data} />
      ))}
    </Box>
  );
};

export default Articles;
