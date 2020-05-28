import axios from "axios";

const baseURL = "https://sebs-news-api.herokuapp.com/api";

export const fetchArticles = (slug, sortBy, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: slug, sort_by: sortBy, order: order },
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

export const patchArticleVotesByID = (article_id, vote) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: vote });
};

export const patchCommentVotesByID = (comment_id, vote) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, { inc_votes: vote });
};
