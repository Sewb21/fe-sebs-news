import React from "react";
import * as api from "../utils/api";

class VoteUpdater extends React.Component {
  state = {
    articleVotes: 0,
  };

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

  render() {
    const { votes } = this.props;
    const { articleVotes } = this.state;
    return (
      <>
        <p>Votes: {votes + articleVotes}</p>
        <button
          onClick={this.handleArticleUpVoteUpdate}
          className="votes_thumbs-up"
        >
          <span role="img" aria-label="thumbs-up-vote">
            👍
          </span>
        </button>
        <button
          onClick={this.handleArticleDownVoteUpdate}
          className="votes_thumbs-down"
        >
          <span role="img" aria-label="thumbs-down-vote">
            👎
          </span>
        </button>
      </>
    );
  }
}

export default VoteUpdater;
