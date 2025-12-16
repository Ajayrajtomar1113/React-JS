import { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState("");
  const [message,setMessage] = useState("");

  let calBMI = (e)=>{
    e.preventDefault();
    if(weight === 0 && height === 0){
      alert("Please Enter valid Height and Height");
    }else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));
    }

      if(bmi < 25) setMessage("You are underweight");
      else if(bmi > 25 && bmi < 30) setMessage("You are Healthy");
      else setMessage("You are overweight");

  }

  let reLoad = ()=>{
    window.location.reload();
  }
  return (
    <div className="App">
        <div className="container">
          <h2>BMI Calculator</h2>
          <form onSubmit={calBMI}>
            <div>
              <label htmlFor="">Weight (lbs)</label>
              <input type="text" placeholder='Enter weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            
            </div>
            <div>
              <label htmlFor="">Height (in)</label>
              <input type="text" placeholder='Enter weight' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' type='submit' onClick={reLoad}>Reload</button>
          
            </div>
            <div className="center">
              <h2>Your BMI is : {bmi}</h2>
              <p>{message}</p>
            </div>
            
          </form>
        </div>
    </div>
  );
}

export default App;
