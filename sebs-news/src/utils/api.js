import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};
