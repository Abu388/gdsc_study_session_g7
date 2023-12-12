// import React from "react"
//  function Greeting (){
//      return <h3>Hello, jsx component</h3>
//  }
//  export default Greeting

import React from "react"
let GroupMembers =[
    "Donald-Trump",
    "Abenezer",
    'Karpov',
    'jackie-chan',
    'Arteta',
    'Cameron-dias'
];  





function Greeting(){
    return (<>
    <ul >
        {GroupMembers.map(item =><li className="list">{item}</li>)}
    </ul>
    </>)
   }

    
    export default Greeting;+