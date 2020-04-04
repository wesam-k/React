import React, { useState } from "react";

function Counter(){

  const [count, setCount]= useState(0);
  const feedback = count > 10 ? "It's higher than 10!" :"Keep counting...";
      
      return(
          <div>
             <p>{feedback}</p>
             <button onClick={() => setCount(count +1)}>Add 1!</button>
             <p>{count}</p>
          </div>
      )
  }


  export default Counter;