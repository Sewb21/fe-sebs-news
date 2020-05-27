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
  return axios
    .get(
      `https://sebs-news-api.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: comments }) => {
      return comments;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://sebs-news-api.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};
