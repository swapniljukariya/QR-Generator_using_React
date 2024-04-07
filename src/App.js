import React,{useState, useEffect} from 'react'
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor]=useState("fffff");
  const [qrCode,setqrCode] = useState("");
  const [temp, setTemp]= useState("");
  const [size, setSize]=useState("");
  const [word, setWord]=useState("");
  
  
  
  useEffect(() => { 
    setqrCode 
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${backgroundColor}`); 
  }, [word, size, backgroundColor]); 


  function clickHandler (){
    setWord(temp);
  }
  


  return (
    <div className="App">
     <div className="header">
      <h1>QRmaker</h1>
      <ul className="list">
        <li>Home</li>
        <li>Contact us</li>
        <li>About us </li>
      </ul>
      <button className="top-btn">Login</button>
      <button className="top-btn">signin</button>
      </div>
      <div className="main">
        <div className="input-qr">
          <input
          type='text'
          placeholder='Enter the input....'
          className="box"
          onClick={(e)=>{
            setTemp(e.target.value)
          }}
          />
          <button className="bot-btn" onClick={clickHandler}>Generate</button>
          </div>
          <div className="add">
            <h5>background color</h5>
            <input 
            type="color"
            onClick={(e)=>{
              setBackgroundColor(e.target.value.substring(1))
            }}/>
            <h5>dimension</h5>
            <input
            type="range" min= "200 "max="600"
            value={size}
            onChange={(e)=>{
              setSize(e.target.value)
            }}
            />

          </div>
          <div className="container1">
            <div className="con con1"><p> Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Asperiores quisquam necessitatibus distinctio ab 
               nam vitae ipsa maxime? Itaque, praesentium amet deleniti explicabo
                culpa est nostrum aperiam non accusamus doloribus? Illo?</p></div>
            <div className="con con2"><p>Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Voluptate
               suscipit quos corporis, at sit provident 
               doloremque vel totam inventore dignissimos?</p></div>
          </div>
          <div className="output-box"> 
        <img src={qrCode} alt="" /> 
        <a href={qrCode} download="QRCode"> 
          <button className="btn-last"type="button">Download</button> 
        </a> 
      </div>
      <div className="container1">
            <div className="con con3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam nesciunt ut vel odit quibusdam dolor 
        placeat, amet blanditiis quos alias, architecto
               reprehenderit quam perferendis fugiat nam
                quis enim sit!/pre</p></div>
            <div className="con con4"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, laboriosam.</p></div>
          </div>

</div>

    </div>
  );
}

export default App;
