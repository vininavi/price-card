import React from "react";

import Pricecard from "./components/Demo";
import "./App.css";

  const cards = [
    {
     title:"$0/Month",
     tag : "True",
     features:[
      {isIncluded:true, text:"Single User"},
      {isIncluded:true, text:"50GB Storage"},
      {isIncluded:true, text:"Unlimited Public Projects"},
      {isIncluded:true, text:"Community Access"},
      {isIncluded:false, text:"Unlimited Private Projects"},
      {isIncluded:false, text:"Dedicated Phone Support"},
      {isIncluded:false, text:"Free Subdomain"},
      {isIncluded:false, text:"Monthly Status Reports"},
     ],
     button:"BUTTON"  
     },
    
     {
      title:"$9/Month",
      tag : "True",
      features:[
       {isIncluded:true, text:"5 Users"},
       {isIncluded:true, text:"50GB Storage"},
       {isIncluded:true, text:"Unlimited Public Projects"},
       {isIncluded:true, text:"Community Access"},
       {isIncluded:true, text:"Unlimited Private Projects"},
       {isIncluded:true, text:"Dedicated Phone Support"},
       {isIncluded:true, text:"Free Subdomain"},
       {isIncluded:false, text:"Monthly Status Reports"},
      ],
      button:"BUTTON"
     },
    
    
     {
      title:"$49/Month",
      tag : "True",
      features:[
       {isIncluded:true, text:"Unlimited Users"},
       {isIncluded:true, text:"50GB Storage"},
       {isIncluded:true, text:"Unlimited Public Projects"},
       {isIncluded:true, text:"Community Access"},
       {isIncluded:true, text:"Unlimited Private Projects"},
       {isIncluded:true, text:"Dedicated Phone Support"},
       {isIncluded:true, text:"Unlimited Free Subdomains"},
       {isIncluded:true, text:"Monthly Status Reports"},
      ],
      button:"BUTTON"
     },
  ];

  return (
   
      <div className="App">
        
          {cards.map((cards, index) => (
            <Demo cards={cards} key={index} />
          ))};
          </div>
  )
      export default App;


