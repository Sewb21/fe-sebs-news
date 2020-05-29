import React, { Component } from "react";
import CommentCard from "../Card-Components/CommentCard";
import CommentPoster from "../CommentPoster";
import * as api from "../../utils/api";

class CommentList extends Component {
  state = {
    showComments: false,
    comments: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      this.showComments();
    }
  }
  render() {
    return (
      <>
        <CommentPoster
          username={this.props.username}
          article_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
        />
        <button onClick={this.showComments}>Show Comments</button>
        <button onClick={this.hideComments}>Hide Comments</button>
        <ul>
          {this.state.comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      </>
    );
  }

  showComments = () => {
    const article_id = this.props.article_id;
    api.fetchCommentsByArticleID(article_id).then(({ comments }) => {
      this.setState((currentState) => {
        return {
          showComments: !currentState.showComments,
          comments: comments,
          isLoading: false,
        };
      });
    });
  };

  hideComments = () => {
    this.setState({
      showComments: false,
      comments: [],
      isLoading: false,
    });
  };

  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        showComments: true,
        comments: [newComment, ...currentState.comments],
      };
    });
  };
}

export default CommentList;
