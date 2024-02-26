import "./Bought_items.css"
import React from 'react';

const Bought_items = ({ Confirmation }) => {
  return (
    <div className="collection">
      {Confirmation.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4 className='bought'>you bought {item.title}</h4>
          <h1 className='discount'> You are a lucky person today! We offer a 5% discount for new buyers.</h1>
        </div>
      ))}
    </div>
  );
}

export default Bought_items;
