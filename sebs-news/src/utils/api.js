import axios from "axios";

export const fetchArticles = (slug) => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/articles", {
      params: { topic: slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};
