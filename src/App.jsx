import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import Cart from './Cart';
import Bought_items from './Bought_items'; 
import HOMEpage from './HOMEpage';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);

  const addToCart = (itemToAdd) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === itemToAdd.id);
    
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1 }]);
    }
  };
  
  const buyItems = () => {
    setBoughtItems([...boughtItems, ...cartItems]);
    setCartItems([]); 
  };

  return (
    <BrowserRouter>
 
      <header >
        <nav>
          <div className="NavBar">
          <p ><NavLink to='/' className="HOMEpage"><h3>HOMEpage</h3></NavLink></p>
          <p><NavLink to='/Cart' ><h3><ShoppingCart size={58}/></h3></NavLink></p>
          <p><NavLink to='/Bought'><h3>Bought Items </h3></NavLink> </p>
          <h5 className="info">Add what you wish in your cart and you can manage there {"👉"} <ShoppingCart size={58}/> {" 👆"}</h5>
          </div>
        </nav>
      </header>
  
      <main>
        <Routes>
          <Route path='/' element={<HOMEpage addToCart={addToCart} />} />
          <Route path='/Cart' element={<Cart cartItems={cartItems} buyItems={buyItems} />} />
          <Route path='/Bought' element={<Bought_items Confirmation={boughtItems} />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;






















// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from './component/Navbar';
// import { Shop } from './pages/shop/shop';
// import { Cart } from './pages/cart/Cart';
// import { ShopContextProvider } from './context/shop-Context';
// const App = () => {
//   return (<>
//     <ShopContextProvider>
//     <BrowserRouter>
//     <Navbar/>
//    <Routes>
//       <Route path='/' element={<Shop/>}/>
//       <Route path='/Cart' element={<Cart/>}/>
   


//    </Routes>
   

//   </BrowserRouter>
  
//   </ShopContextProvider>
//   </>
//   )
// }

// export default App











// import React from 'react'
// import img1 from './Shoe/1.jpg'
// import img2 from './Shoe/2.jpg'
// import img3 from './Shoe/3.jpg'

// const App = () => {
//   const stories = [
//     {
//       title: "Introduction to Ethical Hacking",
//       image:img1,
//       id:1
//     },
//     {
//       title: "Security Vulnerabilities in IoT Devices",
//       image:img2,
//       id:2
//     },
//     {title:"be happy with God",
//     image:img3,
//     id:3

//     }
//   ]
//   return (
//     <div>
//      <div>{stories.map((story)=> 
//      <div key={story.id}> 
//      <h1>{story.title} </h1>
//      <img src={story.image} />
//      <button>add to Cart</button>
    
//          </div>
//       )}

// </div> 
//     </div>
//   )
// }

// export default App

























// import React from 'react'
// import { useState } from 'react';
// import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
// import { About } from './About';
// import {Contact} from './Contact'
// import img1 from './Shoe/1.jpg'
// const App = () => {
//   const [inputArray,setInputArray]=useState([])


//   const handleInputArray =(input)=>{
//     setInputArray([...inputArray,{text:input}])
//   }

//   return (
//  <BrowserRouter>
// <div>
//   <img src={img1} />
// </div>
//     <header>
//     <nav>
//     <NavLink to='/'>About </NavLink>
//     <NavLink to='Contact'> Contact </NavLink>

//     </nav>

//     </header>

//     <main>
//     <Routes>
//       <Route path='/' element={<About inputArray={inputArray} handleInputArray={handleInputArray}/>}/>
//       <Route path='Contact' element={<Contact inputArray={inputArray}/>}/>

//     </Routes>
//     </main>
    
//     </BrowserRouter>
//   )
// }

// export default App





































// import React from 'react'
// import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
// import { Contact } from './Contact'
// import Dis from './Dis'
// import { About } from './About'

// export const App = () => {
//   return (
//     <BrowserRouter>
//     <header>

//     <nav> {/* we can use this becaus of we are trying to do add navigation so this
//     HTML tail that we use a navigation*/}
  
//       <h1>navigation bar </h1>
//     <NavLink to="/" > Contact</NavLink>
//     <NavLink to="Dis" > Dis</NavLink>
//     <NavLink to="About"> About </NavLink>

//     </nav>
 

//     </header>
//     <main>{/**endekelal ateyat yehechi link ke rout lemeleyayet yemetetekm nech keld adelm  */}
//     <Routes>

//     <Route path='/' element={<Contact/>}/>
//     <Route path='Dis' element={<Dis/>}/>
//     <Route path='About' element={<About/>}/>

//     </Routes>
//     </main>
//     </BrowserRouter>
//   )
// }

// export default App

















































// import React from 'react'
// import { useState } from 'react'
// const App = () => {
// const[todo,setTodo]=useState("")
// const[todoArray,setTodoArray]= useState([ ])
// const Submit= (event)=> {
// setTodo(event.target.value)
// }
// const SubButton = (event)=>{
//   event.preventDefault();
//   setTodoArray([...todoArray,{text:todo}]);
//   setTodo("")
//   console.log(todoArray);
// }
// const handleDelete = (event) => {
//   // let newArray= todoArray.filter((_,i)=>
//   // i!==index);
//   // setTodoArray(newArray)



//   const updatedTodoArray = [...todoArray];
//   updatedTodoArray.splice(event,1);
//   setTodoArray(updatedTodoArray);
// }
//   return (<>
  
//   <input type="text"
//   placeholder='task...' 
//   value={todo}
//   onChange={Submit}/>
  
//   <button onClick={SubButton}>Submit</button>
//   <h1>
//         {todoArray.map((item, index) => (
          
//           <div key={index}><span>{item.text}</span>  
// <button onClick={() => handleDelete(index)}>Delete</button>
//           </div>
//         ))}
//   </h1>
  
//   </>

//   )
// }

// export default App
































// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   const [searchTerm,setSearchTerm]=useState('')

//   const stories = [
//         {
//           title: "Introduction to Ethical Hacking",
//           author: "John Doe",
//           points: 120,
//           comments: 25
//         },
//         {
//           title: "Security Vulnerabilities in IoT Devices",
//           author: "Jane Smith",
//           points: 90,
//           comments: 15
//         }
//         // Add more stories here as needed
//       ];
  
//       const inputHandler=(event)=>{
//         setSearchTerm(event.target.value)

//       }
//     const FilterArray= stories.filter((e)=>{
//       return e.title.toLowerCase()
//       .includes(searchTerm.toLowerCase())
//     })

//   return (<>
//   <input type="text" 
//   placeholder='Search...'
//   value={searchTerm}
//   onChange={inputHandler}/>
  


// {FilterArray.map((search, index) => (
//   <div key={index} > {search.title}</div>
 
// ))}
  
  
//   </>
    
//   )
// }

// export default App



















// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // List of stories
//   const stories = [
//     {
//       title: "Introduction to Ethical Hacking",
//       author: "John Doe",
//       points: 120,
//       comments: 25
//     },
//     {
//       title: "Security Vulnerabilities in IoT Devices",
//       author: "Jane Smith",
//       points: 90,
//       comments: 15
//     }
//     // Add more stories here as needed
//   ];

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredStories = stories.filter((story) => {
//     return story.title.toUpperCase()
//     .includes(searchTerm.toUpperCase());
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search stories..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <ul>
//         {filteredStories.map((story, index) => (
//           <li key={index}>{story.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;




































// import React from 'react'
// import { useState } from 'react'



// const App = () => {
//   const [counter,setCounter]=useState(0)
// function add(){
//   setCounter(counter +1)
// }
// const normal = ()=>{
//   setCounter(0)
// }
  
//   return (
//   <>
//  <h1>{counter} </h1> 
//   <button onClick={add}>add</button>
//   <button onClick={normal}>zero</button>

//   </>
//   )
// }

// export default App;



// import React from 'react'
// import { useState } from 'react'



// const App = () => {
//   const [counter,setCounter]=useState("how are you")
//   const Change = (event)=>{
//     setCounter(event.target.value)
   
//   }
//   const click =()=>{
//     console.log(counter)
//     return counter;
//   }
 

//   return (  <>
  
//   <input type="text"  
//   onChange={Change}
//   value={counter}/>
  
//   <button onClick={click}> click me 
// </button>
// <p>Current value: {counter}</p>

//     </>

//   )
// }

// export default App
































// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from './component/Navbar';
// import { Shop } from './pages/shop/shop';
// import { Cart } from './pages/cart/Cart';
// import { ShopContextProvider } from './context/shop-Context';
// const App = () => {
//   return (<>
//     <ShopContextProvider>
//     <BrowserRouter>
//     <Navbar/>
//    <Routes>
//       <Route path='/' element={<Shop/>}/>
//       <Route path='/Cart' element={<Cart/>}/>
   


//    </Routes>
   

//   </BrowserRouter>
  
//   </ShopContextProvider>
//   </>
//   )
// }

// export default App


































// import React, { useState } from 'react';
// import './App.css';

// import Product from './Product';
// import Cart from './Cart';

// const initialProducts = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 15 },
//   { id: 3, name: 'Product 3', price: 20 },
// ];

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div className="shopping-cart">
//       <h1>Welcome to the Shopping Cart</h1>
//       <div className="products">
//         {initialProducts.map((product) => (
//           <Product key={product.id} product={product} addToCart={addToCart} />
//         ))}
//       </div>
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;

























































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


































 

