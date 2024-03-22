import './App.css'
import axios from 'axios';
import React, { useState } from 'react';
import { languages } from './Languages';

const App = () => {
  const [data, setData] = useState("Enter some text...");
  const [result , setResult] = useState("");
  const [sourceLang , setSourceLang] = useState('en');
  const [targetLang , setTargetLang] = useState('hi');
 
  async function translator (){
    console.log("src", sourceLang, "tar", targetLang);
    try{
      const encodedParams = new URLSearchParams();
      encodedParams.append("source_language", sourceLang);
      encodedParams.append("target_language", targetLang);
      encodedParams.append("text", data);

      const options = {
        method: "POST",
        url: "https://text-translator2.p.rapidapi.com/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
        data: encodedParams,
      };
      const res = await axios.request(options);
      setResult(res.data.data.translatedText)
      console.log(res);
    }catch (error) {
      console.log(error);
    }
  }
  // 1fc473a157mshd3c96db4a129ab4p14befdjsn9436757fdf1d
  return (
    <div className="App"  style={{
      display:'flex',
      alignItems:'center',
      gap:'20px',
      padding:'20px',
      flexDirection:'column'
    }} >
      <h1 style={{margin:'0', padding:'0'}}>Text-Translator</h1>
      <div className='container' style={{
      display:'flex',
      justifyContent:'center',
      gap:'50px',
      padding:'40px',
      width:'100%'
    }} >
            <div className='box1' >
              <select style={{width:'100%', height:'30px', padding:' 0 10px', borderRadius:'10px'}} onChange={(e) => {
                  setSourceLang(e.target.value);
              }} value={sourceLang} >
                <option value=''>Select a language</option>
                {/* <option value='en'>English</option>
                <option value='hi'>Hindi</option>
                <option value='te'>Telugu</option>
                <option value='ta'>Tamil</option>
                <option value='ml'>Malayalam</option>
                <option value='kn'>Kannada</option> */}
                {
                  languages.map((langs) => {
                    return(
                      <option key={langs.id} value={langs.value}>{langs.lang}</option>
                    )
                  })
                }
              </select>
              <textarea value={data} onChange={(e) => {
                setData(e.target.value);
              }} />
            </div>
            <div className='box2'>
            <select style={{width:'100%', height:'30px', padding:' 0 10px', borderRadius:'10px'}} onChange={(e) => {
                  setTargetLang(e.target.value);
              }} value={targetLang} >
                <option value=''>Select a language</option>
                {
                  languages.map((langs) => {
                    return(
                      <option key={langs.id} value={langs.value}>{langs.lang}</option>
                    )
                  })
                }
              </select>
              <textarea value={result} />
            </div>
        </div>
        <button onClick={() => {
          translator()
        }} style={{width:'120px', height:'40px', border:'none', borderRadius:'12px', cursor:'pointer', color:'white' }} >Translate</button>
    </div>

    // <div>
    //   <input onChange={(e) => {
    //       setData(e.target.value);
    //   }} />
    //   <button onClick={translator}>click</button>
    //   <div>{result}</div>
    // </div>
  )
}

export default App