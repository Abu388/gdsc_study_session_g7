import React, { useState } from 'react';
import './App.css';

import Product from './Product';
import Cart from './Cart';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="shopping-cart">
      <h1>Welcome to the Shopping Cart</h1>
      <div className="products">
        {initialProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
































// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from './component/Navbar';

// const App = () => {
//   return (<>
    
//     <BrowserRouter>
//     <Navbar/>
//    <Routes>
//       <Route path='/'/>
   


//    </Routes>
   

//   </BrowserRouter>
//   </>
//   )
// }

// export default App

























// import { useState } from "react"
// import React from 'react'

//  const App = () => {
  
//   const [newItem,setNewItem]= useState("")
// const lol = () =>{
//   console.log(newItem)
//   setNewItem(" ");
// }
//   return (
//     <div>App
//       <h1>To DO List</h1>
//       <input type='text'
//       placeholder='add text'
//       onChange={e=>setNewItem(e.target.value)}
//       />
//       {/* look the arrow function it updates setNewItem and also the value of e is updated to e.target.value */ }

//       <button onClick={lol}>Add</button>
//     </div>
//   )
// }
// export default App 


































 

