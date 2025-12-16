import { useState } from 'react'
import './App.css'
import { API_KEY, URL } from './constants'

function App() {
  const [question,setQuestion] = useState('')
  const [result,setResult] = useState(undefined);
  
  const askQuestion = async ()=>{
    const payload = {
    "contents": [{
      "parts":[{"text":question}]
    }]
  }

    let response = await fetch(
      `${URL}?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify(payload)
      }
    )
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    const greetings =  dataString.split("**").filter((_, i) => i % 2 === 1);

    setResult(response.candidates[0].content.parts[0].text);
    console.log(response.candidates[0].content.parts[0].text)
    console.log(greetings);
  
  }

  return (
   <div className='grid grid-cols-5 h-screen text-center'>
    <div className='col-span-1 bg-zinc-800'>
      
    </div>
    <div className='col-span-4'>
      <div className='container h-110 overflow-scroll p-7'>
        <div className='text-white'>
          {result}
        </div>
      </div>  
      <div className='bg-zinc-800 w-1/2 text-white m-auto p-2 pr-5 rounded-4xl border border-zinc-700 flex h-14'> 
        <input type="text" placeholder='ask me anything' onChange={(event)=>setQuestion(event.target.value)} className='w-full h-full p-1 outline-none'/>
        <button className='cursor-pointer' onClick={askQuestion}>Ask</button>
      </div>
      
     </div>
   </div>
  )
}

export default App
