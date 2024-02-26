import "./HOMEpage.css"
import React from 'react';
import img1 from './Shoe/1.jpg';
import img2 from './Shoe/2.jpg'
import img3 from './Shoe/3.jpg'
import img4 from './Shoe/4.JPG'
import img5 from './Shoe/5.jpg'
import img6 from './Shoe/6.JPG'
import img7 from './Shoe/7.jpg'
import img8 from './Shoe/8.jpg'



const HOMEpage = ({ addToCart }) => {
 
  const items = [{
    title: "Abaca",
    image:img1,
    id:1,
    Price:Number(65)
  },
  {
    title: "Biblical",
    image:img2,
    id:2,
    Price:Number(42)
  },
  {
  title:"Cantabrian",
  image:img3,
  id:3,
  Price:Number(83)

  },
  {
  title:"Chopine",
  image:img4,
  id:4,
  Price:Number(99) 
  },
  {
  title:'Climbing',
  image:img5,
  id:5,
  Price:Number(35)
  },
 {
  title:'Rigger_Boot',
  image:img7,
  id:7,
  Price:Number(49)

 },
 {
  title:'Mongol',
  image:img6,
  id:6,
  Price:Number(125)
 },
 {
  title:'Slipper',
  image:img8,
  id:8,
  Price:Number(122)
}
 
  
]

  return (
   <div className="all">
    <h1 className="opening">Welcome to </h1>
    <h1 className="opening">the world</h1>
    <h1 className="opening">shoe collection </h1>
   <div>
      {items.map((item) => (
          <div className="allItems">
        <div key={item.id} className="images">
          <img src={item.image} alt={item.title} />
          
          <div>
            <h4 className="items">{item.title}</h4>
            <h5>${item.Price}</h5>
            <button onClick={() => addToCart(item)} className="AddButton" >Add to Cart</button>
            </div>
          </div>
        </div>
        
      ))}
   </div>
   </div>
  );
 
}


export default HOMEpage;







// import React from 'react'
// import img1 from './Shoe/1.jpg'
// import img2 from './Shoe/2.jpg'
// import img3 from './Shoe/3.jpg'

// const About = () => {
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

// export default About

[/**

 
 */]
























// import React from 'react'
// import { useState } from 'react'

// export const About = ({inputArray,handleInputArray}) => {
//   const[input,setInput]=useState('')
//   const[search,setSearch]=useState('')
 
//   const stories = [
//             {
//               title: "Introduction to Ethical Hacking",
//               author: "John Doe",
//               points: 120,
//               comments: 25
//             },
//             {
//               title: "Security Vulnerabilities in IoT Devices",
//               author: "Jane Smith",
//               points: 90,
//               comments: 15
//             }]

//   // const FilterSearch=stories.filter((e)=>{
//   //   e.title.toLowerCase().includes(search.toLowerCase())
//   // })

//   const filteredStories = stories.filter((ev) =>
//     ev.title.toLowerCase().includes(search.toLowerCase())
//   );
// const inputChange= (e)=>{
//   setInput(e.target.value)
  
// }
// const click =(event)=>{
// event.preventDefault();
// handleInputArray(input)

// setInput('')
  
// }
// return (<div>

// <div>
//    <input type="text" 
//    placeholder='search...'
//    value={search} 
//    onChange={(e)=>{setSearch(e.target.value)}}/>
//  {filteredStories.map((term,index)=>(
// <div key={index}>{term.title}</div>
//  ))

//  }
//    </div>

// <input type="text"
// placeholder='Comment ...'
// value={input}
// onChange={inputChange}

//   />
//    <button onClick={click}> Submit</button>
   
//    </div>
    
//     )
// }
// export default About;
