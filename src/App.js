
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Allproduct from './Components/Menubar/AllProducts/Allproduct';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const[count,setCount]=useState(0);
  const setCartCount = ()=>setCount(count+1)
  return (
    <div className="App">
       <Menubar count={count}></Menubar>
      <Allproduct setCount={setCartCount} ></Allproduct>
     
    
    </div>
  );
}

export default App;
