import * as React from 'react';
import './App.css';
import { useState ,useEffect} from 'react';

function App() {
let [show,setstate]=useState(false);
  
 useEffect(() => {
    // Update the document title using the browser API
   
  
  });  
  
  
  
  
  return (
   <>
     
  <button className="btn" onClick={()=>setstate(true)} onMouseOver={()=>setstate(!show)} onMouseLeave={()=>setstate(false)}>My Account</button>
     {show &&
     <div className="account">Your account is active</div>
     }
     
   </>
   
    
  );
}

export default App;