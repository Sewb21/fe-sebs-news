import React from "react";
import * as api from "../utils/api";

class ArticleVoteUpdater extends React.Component {
  state = {
    articleVotes: 0,
  };
  render() {
    const { votes } = this.props;
    const { articleVotes } = this.state;
    return (
      <>
        <p>Votes: {votes + articleVotes}</p>
        <p>
          <button
            onClick={this.handleArticleUpVoteUpdate}
            className="votes_thumbs-up"
            disabled={articleVotes === 1}
          >
            <span role="img" aria-label="thumbs-up-vote">
              👍
            </span>
          </button>
          <button
            onClick={this.handleArticleDownVoteUpdate}
            className="votes_thumbs-down"
            disabled={articleVotes === -1}
          >
            <span role="img" aria-label="thumbs-down-vote">
              👎
            </span>
          </button>
        </p>
      </>
    );
  }

  handleArticleUpVoteUpdate = () => {
    const vote = 1;
    this.setState((currentState) => {
      return {
        articleVotes: currentState.articleVotes + vote,
      };
    });
    const { article_id } = this.props;
    api.patchArticleVotesByID(article_id, vote);
  };

  handleArticleDownVoteUpdate = () => {
    const vote = -1;
    this.setState((currentState) => {
      return {
        articleVotes: currentState.articleVotes + vote,
      };
    });
    const { article_id } = this.props;
    api.patchArticleVotesByID(article_id, vote);
  };
}

class CommentVoteUpdater extends React.Component {
  state = {
    commentVotes: 0,
  };
  render() {
    const { votes } = this.props;
    const { commentVotes } = this.state;
    return (
      <>
        <p>Votes: {votes + commentVotes}</p>
        <button
          onClick={this.handleCommentUpVoteUpdate}
          className="votes_thumbs-up"
          disabled={commentVotes !== 0}
        >
          <span role="img" aria-label="thumbs-up-vote">
            👍
          </span>
        </button>
        <button
          onClick={this.handleCommentDownVoteUpdate}
          className="votes_thumbs-down"
          disabled={commentVotes !== 0}
        >
          <span role="img" aria-label="thumbs-down-vote">
            👎
          </span>
        </button>
      </>
    );
  }

  handleCommentUpVoteUpdate = () => {
    const vote = 1;
    this.setState((currentState) => {
      return {
        commentVotes: currentState.commentVotes + vote,
      };
    });
    const { comment_id } = this.props;
    api.patchCommentVotesByID(comment_id, vote);
  };

  handleCommentDownVoteUpdate = () => {
    const vote = -1;
    this.setState((currentState) => {
      return {
        commentVotes: currentState.commentVotes + vote,
      };
    });
    const { comment_id } = this.props;
    api.patchCommentVotesByID(comment_id, vote);
  };
}

export { ArticleVoteUpdater, CommentVoteUpdater };
