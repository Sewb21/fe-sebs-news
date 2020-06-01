import React from "react";

const SortByButtons = (props) => {
  return (
    <div className="sort_by-order-buttons">
      <p className="ArticleList_sort-by">
        Sort By
        <button
          onClick={props.updateSortBy}
          name="created_at"
          className="created_at-button"
        >
          Created at
        </button>
        <button
          onClick={props.updateSortBy}
          name="comment_count"
          className="comment_count-button"
        >
          Comment Count
        </button>
        <button
          onClick={props.updateSortBy}
          name="votes"
          className="votes-button"
        >
          Votes
        </button>
      </p>

      <p className="ArticleList_order">
        Order
        <button onClick={props.updateOrder} name="asc">
          Ascending
        </button>
        <button onClick={props.updateOrder} name="desc">
          Descending
        </button>
      </p>
    </div>
  );
};

export default SortByButtons;
