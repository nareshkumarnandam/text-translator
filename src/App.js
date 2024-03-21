import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [data, setData] = useState("");
  const [result , setResult] = useState("");
  async function translator (){
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', 'en');
    encodedParams.set('target_language', 'id');
    encodedParams.set('text', 'What is your name?');

    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '1fc473a157mshd3c96db4a129ab4p14befdjsn9436757fdf1d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App"  style={{
      display:'flex',
      alignItems:'center',
      gap:'50px',
      padding:'40px',
      flexDirection:'column'
    }} >
      <div style={{
      display:'flex',
      justifyContent:'center',
      gap:'50px',
      padding:'40px',
      width:'100%'
    }} >
            <div style={{display:'flex', flexDirection:'column', gap:'30px', width:'40%' }}>
              <select style={{width:'100%', height:'30px'}}></select>
              <textarea style={{width:'100%', height:'300px'}} />
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'30px', width:'40%'  }}>
              <select style={{width:'100%', height:'30px'}}>

              </select>
              <textarea style={{width:'100%', height:'300px'}} />
            </div>
        </div>
        <button onClick={() => {
          translator()
        }} style={{width:'120px'}} >Translate</button>
    </div>
  )
}

export default App