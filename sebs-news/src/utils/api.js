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

export const fetchArticleByID = (article_id) => {
  return axios
    .get(`https://sebs-news-api.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchCommentsByArticleID = (article_id) => {
  console.log(article_id);
  return axios.get(`/api/articles/${article_id}/comments`).then((response) => {
    console.log(response);
  });
};

export const fetchTopics = () => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};
