import Comp from "./com";
import React from "react";

export default function Home() {
  const [is,setIs] = React.useState(true);
  
  function click(){
    setIs(false);
  }
  React.useEffect(()=>{
   
  });
  return (
    <html>
      <head>
        <title>Poker</title>
        
      </head>
      <body>
        <a href="/api/hello">ok</a>
        <button onClick={click}>Ok</button>
        { is ? <Comp name="Poker" /> : <Comp name="Boy" /> }
    
      
      </body>
    </html>
  )
}
