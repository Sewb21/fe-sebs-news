import React, { Component } from "react";
import * as api from "../utils/api";

class CommentPoster extends Component {
  state = {
    username: this.props.username,
    body: "",
    newComment: "",
  };

  render() {
    return (
      <div>
        <form type="submit" method="post" onSubmit={this.handleCommentSubmit}>
          <p>Post a comment</p>
          <input
            type="text"
            name="body"
            placeholder="Post a Comment"
            required="required"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = this.state.body;
    const article_id = this.props.article_id;
    const username = this.state.username;

    api
      .postCommentByArticleID(username, newComment, article_id)
      .then(({ data }) => {
        const postedComment = data.comment.body;

        this.props.addCommentToState(postedComment);
      });
  };
}

export default CommentPoster;
