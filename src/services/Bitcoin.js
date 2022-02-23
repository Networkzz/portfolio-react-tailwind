import React from 'react';
const Notes = ({ data }) => {
  return (
    <span>
        {data && data.map((item, index) => <span key={index}>{item.current_price}$</span>)}
    </span>
  );
};
export default Notes;