import React, { Component } from "react";
import CommentCard from "../Card-Components/CommentCard";
import CommentPoster from "../CommentPoster";
import '../../css/CommentList.css'
import * as api from "../../utils/api";

class CommentList extends Component {
  state = {
    showComments: false,
    comments: [],
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <>
        <CommentPoster
          username={this.props.username}
          article_id={this.props.article_id}
          addCommentToState={this.addCommentToState}
        />
        <div className='Comment-Button_container'>
        <button onClick={this.showComments} className='ShowComments-button'>Show Comments</button>
        <button onClick={this.hideComments} className='HideComments-button'>Hide Comments</button>
        </div>
        {this.state.showComments && (
          <ul className='CommentList-ul'>
            {this.state.comments.map((comment) => {
              return (
                <CommentCard
                  key={comment.comment_id}
                  {...comment}
                  username={this.props.username}
                  handleCommentDelete={this.handleCommentDelete}
                />
              );
            })}
          </ul>
        )}
      </>
    );
  }

  getComments = () => {
    const article_id = this.props.article_id;
    api.fetchCommentsByArticleID(article_id).then(({ comments }) => {
      this.setState(() => {
        return {
          showComments: true,
          comments: comments,
          isLoading: false,
        };
      });
    });
  };

  showComments = () => {
    this.setState({
      showComments: true,
    });
  };

  hideComments = () => {
    this.setState({
      showComments: false,
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

  handleCommentDelete = (comment_id) => {
    api.deleteCommentByID(comment_id).then(({ data }) => {
      this.removeCommentFromState(comment_id);
    });
  };

  removeCommentFromState = (comment_id) => {
    this.setState(({ comments }) => {
      const updatedComments = comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { showComments: true, comments: updatedComments };
    });
  };
}

export default CommentList;
