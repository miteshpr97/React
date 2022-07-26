import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {

  const [time, setTime] = useState(1);
  const [counter, setCounter] = useState(0);
  const purple = "#8e44ad";
  const[bg, setBg] = useState(purple)






  // useEffect(() => {
  //   setInterval(() => {
  //     // setTime(prevCount => prevCount + 1);
  //     setTime(time => time + 1);
  //     console.log(time)
  //   }, 1000);
  // }, []);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    setCounter(counter - 1);
  }


  const bgChange =()=>{
    console.log("clicked")
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{time}</h1>
        <h3>{counter}</h3>
        <button onClick={increase}> incease</button>
        <button onClick={decrease}> decease</button>
       <div style={ {backgroundColor: bg, width:"400px"} }>
       <button onClick={bgChange}>click me</button>
       </div>
       
       
      </header>
    </div>
  );
}

export default App;
