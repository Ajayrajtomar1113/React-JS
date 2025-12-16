import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  document.body.style.backgroundColor='#000';
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passwordRef = useRef(null)

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklminopqrstuvwxyz";
    if(numberAllowed) str +="1234567890"
    if(characterAllowed) str +="@#$%*"
    
    for(let i = 1; i <= length; i++)
    {
        let char = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(char);
       
    }
    setPassword(pass);

  },[length,numberAllowed,characterAllowed])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="row one">
          <h2 className='text-light text-center'>Password Generator</h2>
          <div className="input-group my-4">
            <input 
              type="text" 
              value={password} 
              placeholder="Password" 
              className="form-control range text-danger fs-4" 
              readOnly
              ref={passwordRef}
            />
            <button className="btn btn-primary fs-4" type="button" onClick={copyToClipBoard}>Copy</button>
          </div>

       
            <div className="row d-flex justify-content-space-evenly my-2">
              <div>
                <input type="range" min={3} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
                <label className='text-danger mx-2 fs-3'>Length:{length}</label>

                <input type="checkbox" className='mx-4 check' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev);}}/>
                <label htmlFor="numberInput" className='text-danger fs-3'>Numbers</label>

                <input type="checkbox" className='mx-3 check' defaultChecked={characterAllowed} id='numberInput' onChange={()=>{setCharacterAllowed((prev)=>!prev);}}/>
                <label htmlFor="numberInput" className='text-danger fs-3'>Character</label>
              </div>
             
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
