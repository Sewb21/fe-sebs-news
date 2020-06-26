import React, {useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const SortBy = ({updateOrder, updateSortBy}) => {
const [sortBy, setSortBy] = useState('Sort By');
const [order, setOrder] = useState('Order');


const handleSortByChange = ({value}) => {
  return (updateSortBy(value), setSortBy(value))
}

const handleOrderChange = ({value}) => {
  return (updateOrder(value), setOrder(value))
}

const sortbyOptions = [
  {value: 'created_at', label: 'Created At'}
  ,{value: 'comment_count', label: 'Comment Count'},
  {value: 'votes', label: 'Votes'}
];

const orderOptions = [
  {value: 'asc', label: 'Ascending'}
  ,{value: 'desc', label: 'Descending'},
];

  return (
    <div className="sort_by-order">
      <Dropdown classname='sortByDropdown' options={sortbyOptions} onChange={handleSortByChange} value={sortBy} />
      <Dropdown classname='orderDropdown' options={orderOptions} onChange={handleOrderChange} value={order} />
    </div>
  );
};

export default SortBy;
