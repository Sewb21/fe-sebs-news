import axios from "axios";

const baseURL = "https://sebs-news-api.herokuapp.com/api";

export const fetchArticles = (slug) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticleByID = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchCommentsByArticleID = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data: comments }) => {
      return comments;
    });
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const patchArticleVotesByID = (article_id) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { votes: 1 });
};
