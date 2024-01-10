import React from 'react';

const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div key={id} className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;




















// import React from 'react'
// import {PRODUCT} from "./Pages/Product"
// import { Chiled } from './Chiled'
// {/* <button><Link to="about">about</Link></button>
// <button><Link to ="contact">contact</Link></button>
// <Link to="Cart" className='ShoppingCart'><ShoppingCart/></Link> 
// import { Link } from 'react-router-dom'
// import {ShoppingCart} from "phosphor-react";
// import "./App.css"
//  Home
// */}
// export const Home = () => {

//   return (
//     <div className='shope'>
//        <div className='shopeTitle'>
//         <h1>product to shope</h1>
//        </div>

//        <div className='productName'>
//     {PRODUCT.map((product)=>
//       <Chiled data={product}/>
//     )}

//        </div>
//     </div>
//   )
// }
